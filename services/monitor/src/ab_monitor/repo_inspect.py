"""Lightweight GitHub repo introspection so the seeder can fabricate events
that point at code paths and elements that actually exist in the customer's
repo. We keep this in pure stdlib + httpx because the monitor service has no
business pulling Octokit just for read-only queries.

Two strategies for "elements":
1. ``data-attr="..."`` / ``data-testid="..."`` — preferred, these are the
   selectors the customer's analytics tracker is already emitting.
2. ``id="..."`` on JSX nodes — fallback when no explicit data attrs.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from typing import Iterable

import httpx

GITHUB_API = "https://api.github.com"
DATA_ATTR_RE = re.compile(r"""data-attr\s*=\s*["']([^"'{}]+)["']""")
DATA_TESTID_RE = re.compile(r"""data-testid\s*=\s*["']([^"'{}]+)["']""")
ID_RE = re.compile(r"""\sid\s*=\s*["']([a-zA-Z][\w-]+)["']""")


@dataclass
class RepoMap:
    paths: list[str] = field(default_factory=list)
    elements_by_path: dict[str, list[str]] = field(default_factory=dict)
    all_elements: list[str] = field(default_factory=list)
    code_surface_by_path: dict[str, str] = field(default_factory=dict)

    @property
    def primary_path(self) -> str:
        return self.paths[0] if self.paths else "/"

    def elements_for(self, path: str) -> list[str]:
        return self.elements_by_path.get(path) or self.all_elements or ["primary-cta"]


def fetch_repo_map(token: str, owner: str, repo: str, ref: str = "HEAD") -> RepoMap:
    """Inspect a GitHub repo and return its routes + clickable elements."""

    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github+json",
        "User-Agent": "ab-monitor-repo-inspect",
    }
    tree_res = httpx.get(
        f"{GITHUB_API}/repos/{owner}/{repo}/git/trees/{ref}",
        params={"recursive": "1"},
        headers=headers,
        timeout=30,
    )
    tree_res.raise_for_status()
    tree = tree_res.json().get("tree", []) or []

    page_files: list[str] = []
    component_files: list[str] = []
    for entry in tree:
        if entry.get("type") != "blob":
            continue
        path = entry.get("path", "")
        if not (path.endswith(".tsx") or path.endswith(".jsx")):
            continue
        if _is_next_page_file(path):
            page_files.append(path)
        elif _is_component_file(path):
            component_files.append(path)

    paths = sorted({_route_for_page_file(p) for p in page_files}) or ["/"]
    code_surface_by_path = {p: _surface_for_route(p, page_files) for p in paths}

    candidate_files = page_files + component_files
    file_blobs = _fetch_files(token, owner, repo, candidate_files, headers=headers)

    all_elements = _dedupe(_extract_elements(file_blobs.values()))
    elements_by_path: dict[str, list[str]] = {p: [] for p in paths}
    for path in paths:
        scoped_text = _texts_for_path(path, file_blobs)
        scoped_elements = _dedupe(_extract_elements(scoped_text))
        elements_by_path[path] = scoped_elements or all_elements

    return RepoMap(
        paths=paths,
        elements_by_path=elements_by_path,
        all_elements=all_elements,
        code_surface_by_path=code_surface_by_path,
    )


def _is_next_page_file(path: str) -> bool:
    p = path.lower()
    return (
        (p.startswith("app/") or p.startswith("src/app/"))
        and p.split("/")[-1] in {"page.tsx", "page.jsx"}
    ) or (
        (p.startswith("pages/") or p.startswith("src/pages/"))
        and not p.split("/")[-1].startswith("_")
    )


def _is_component_file(path: str) -> bool:
    p = path.lower()
    if "/node_modules/" in p or "/dist/" in p or "/.next/" in p:
        return False
    if p.endswith(".test.tsx") or p.endswith(".spec.tsx"):
        return False
    return (
        p.startswith("components/")
        or p.startswith("src/components/")
        or "_components/" in p
        or "/ui/" in p
    )


def _route_for_page_file(path: str) -> str:
    """Map `app/foo/bar/page.tsx` → `/foo/bar`, root → `/`."""
    parts = path.split("/")
    if parts[0] in {"src"}:
        parts = parts[1:]
    if parts and parts[0] in {"app", "pages"}:
        parts = parts[1:]
    if parts and parts[-1] in {"page.tsx", "page.jsx"}:
        parts = parts[:-1]
    cleaned = [seg for seg in parts if seg and not seg.startswith("(") and not seg.startswith("_")]
    if not cleaned:
        return "/"
    return "/" + "/".join(cleaned)


def _surface_for_route(route: str, page_files: list[str]) -> str:
    """Pick the source file that backs a given route, for nia hints."""
    for page in page_files:
        if _route_for_page_file(page) == route:
            return page
    return "app/page.tsx"


def _fetch_files(
    token: str,
    owner: str,
    repo: str,
    paths: list[str],
    *,
    headers: dict[str, str],
    max_files: int = 60,
) -> dict[str, str]:
    """Fetch raw file contents for the given paths, capped to keep it bounded."""

    raw_headers = dict(headers)
    raw_headers["Accept"] = "application/vnd.github.raw"
    out: dict[str, str] = {}
    for path in paths[:max_files]:
        try:
            res = httpx.get(
                f"{GITHUB_API}/repos/{owner}/{repo}/contents/{path}",
                headers=raw_headers,
                timeout=20,
            )
        except httpx.HTTPError:
            continue
        if res.status_code != 200:
            continue
        out[path] = res.text
    return out


def _extract_elements(blobs: Iterable[str]) -> list[str]:
    found: list[str] = []
    for text in blobs:
        for regex in (DATA_ATTR_RE, DATA_TESTID_RE, ID_RE):
            for match in regex.findall(text):
                cleaned = match.strip()
                if cleaned and not cleaned.startswith("$"):
                    found.append(cleaned)
    return found


def _texts_for_path(route: str, blobs: dict[str, str]) -> list[str]:
    """Heuristic: pull file text for components likely rendered on `route`.

    For Next.js app router: scope to the page file plus anything under the
    same route folder, plus any sibling _components/ directory. For root
    routes we include all components since it's typically a landing page
    that imports widely.
    """
    texts: list[str] = []
    if route == "/":
        for path, text in blobs.items():
            if path.split("/")[-1] in {"page.tsx", "page.jsx"} or "_components/" in path:
                texts.append(text)
            elif path.startswith("components/") or path.startswith("src/components/"):
                texts.append(text)
        return texts

    folder = route.strip("/").replace("/", "/")
    for path, text in blobs.items():
        if folder and folder in path:
            texts.append(text)
    return texts


def _dedupe(values: Iterable[str]) -> list[str]:
    seen: set[str] = set()
    out: list[str] = []
    for v in values:
        if v not in seen:
            seen.add(v)
            out.append(v)
    return out
