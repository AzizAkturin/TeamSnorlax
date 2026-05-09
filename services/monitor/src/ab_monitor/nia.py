from __future__ import annotations

import os
import re
import subprocess
from typing import Any

from ab_monitor.settings import Settings
from ab_monitor.schema import Opportunity


def enrich_with_nia(config: Settings, opportunity: Opportunity) -> dict[str, Any]:
    if not config.nia_api_key:
        return {
            "status": "skipped",
            "reason": "NIA_API_KEY not configured",
            "code_paths": [],
            "product_context": [],
        }

    queries = _queries(opportunity)
    sections: list[dict[str, str]] = []

    for query in queries:
        result = _search(config, query)
        if result:
            sections.append({"query": query, "result": result})

    context = "\n\n".join(f"### {section['query']}\n{section['result']}" for section in sections)
    return {
        "status": "ok" if sections else "empty",
        "queries": queries,
        "code_paths": sorted(set(_paths(context))),
        "product_context": sections,
    }


def _queries(opportunity: Opportunity) -> list[str]:
    segment = opportunity.affected_segment
    path = segment.get("path", "")
    element = segment.get("element", "")
    return [
        f"{path} {element} {opportunity.detector}".strip(),
        f"{path} form component validation error checkout".strip(),
        "PostHog feature flag experiment variant analytics",
    ]


def _search(config: Settings, query: str) -> str:
    env = {**os.environ, "NIA_API_KEY": config.nia_api_key or ""}
    try:
        completed = subprocess.run(
            [config.nia_command, "search", query],
            check=False,
            capture_output=True,
            cwd=config.repo_root,
            env=env,
            text=True,
            timeout=20,
        )
    except (FileNotFoundError, subprocess.TimeoutExpired):
        return ""
    return completed.stdout.strip() if completed.returncode == 0 else ""


def _paths(text: str) -> list[str]:
    return re.findall(r"(?:(?:app|components|lib|src|packages)/[A-Za-z0-9_./-]+\\.(?:tsx|ts|jsx|js|py))", text)
