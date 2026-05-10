from __future__ import annotations

from datetime import datetime, timezone
from typing import Any

import httpx

from ab_monitor.schema import Opportunity, Spec
from ab_monitor.settings import Settings


def devin_handoff(
    opportunity: Opportunity,
    nia_context: dict[str, Any],
    experiment_spec: Spec | None,
    config: Settings | None = None,
    *,
    flag_key: str | None = None,
) -> dict[str, Any]:
    if experiment_spec is None:
        return {"status": "skipped", "reason": "Spec was not generated"}

    summary = _analytics_summary(opportunity)
    codebase_context = _codebase_context(nia_context, experiment_spec)
    payload: dict[str, Any] = {
        "status": "ready_for_devin_agent",
        "integration": "agent/devia.ts#createDevinSession",
        "call": {
            "summary": summary,
            "codebaseContext": codebase_context,
            "flagKey": flag_key,
        },
    }

    if config is None or not config.devin_api_key:
        return payload

    try:
        session = _create_devin_session(config, summary, codebase_context, flag_key=flag_key)
    except Exception as error:
        payload["status"] = "devin_dispatch_failed"
        payload["error_type"] = type(error).__name__
        payload["error"] = str(error)
        return payload

    payload["status"] = "devin_session_created"
    payload["session"] = session
    return payload


def _create_devin_session(
    config: Settings,
    summary: dict[str, Any],
    codebase_context: str,
    *,
    flag_key: str | None = None,
) -> dict[str, Any]:
    prompt = _build_session_prompt(config, summary, codebase_context, flag_key=flag_key)
    return create_devin_session_with_prompt(config, prompt)


def create_devin_session_with_prompt(config: Settings, prompt: str) -> dict[str, Any]:
    if not config.devin_api_key:
        raise RuntimeError("DEVIA_API_KEY is required to create a Devin session.")
    response = httpx.post(
        f"{config.devin_base_url.rstrip('/')}/sessions",
        headers={
            "Authorization": f"Bearer {config.devin_api_key}",
            "Content-Type": "application/json",
        },
        json={"prompt": prompt},
        timeout=60,
    )
    response.raise_for_status()
    data = response.json()
    session_id = data.get("session_id") or data.get("id")
    return {
        "id": session_id,
        "url": data.get("url") or (
            f"https://app.devin.ai/sessions/{session_id}" if session_id else None
        ),
    }


def _build_session_prompt(
    config: Settings,
    summary: dict[str, Any],
    codebase_context: str,
    *,
    flag_key: str | None = None,
) -> str:
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    owner = config.github_owner or "(unset)"
    repo = config.github_repo or "(unset)"
    base_branch = config.github_base_branch
    flag_block = (
        "## Feature flag (REQUIRED)\n\n"
        f"Gate every change in this experiment behind the PostHog feature flag `{flag_key}`.\n"
        "- Read the flag client-side using the existing PostHog SDK already wired into the app.\n"
        "- Render the variant only when the flag returns truthy; otherwise render the existing control behaviour unchanged.\n"
        f"- Tag the variant payload so events emit a `$feature/{flag_key}` property automatically.\n"
        "- The control branch must keep its current code path untouched so we have a real A/B comparison.\n\n"
        if flag_key
        else ""
    )
    return (
        "You are an autonomous UX experimentation agent. Land one tightly-scoped, fully implemented, "
        f"flag-gated variant on the `{base_branch}` branch of {owner}/{repo} so PostHog can start "
        "splitting traffic between control and treatment.\n\n"
        "## Analytics Data\n\n"
        f"- Total sessions: {summary.get('totalSessions')}\n"
        f"- Average time on page: {summary.get('avgTimeOnPage')}s\n"
        f"- Top clicked elements: {summary.get('topClickedElements')}\n"
        f"- Rage click elements (user frustration): {summary.get('rageclickElements')}\n"
        f"- Exit paths (where users leave): {summary.get('exitPaths')}\n"
        f"- Drop-off points (low scroll depth): {summary.get('dropOffPoints')}\n\n"
        "## Codebase Context\n\n"
        f"{codebase_context}\n\n"
        f"{flag_block}"
        "## Design direction\n\n"
        "Match the calm, utilitarian polish of Cursor, Linear, and Vercel. Every variant should look at "
        "home next to those products in a screenshot review.\n"
        "- Type: tight vertical rhythm, restrained scale, no display-size headlines outside true heroes. "
        "Prefer 14-16px body, 13px secondary, 24-32px section headers; line-height 1.4-1.5; letter-spacing 0.\n"
        "- Spacing: snap to a 4px grid; use 8/12/16/24/32 for component padding and stacks. No ad-hoc gaps.\n"
        "- Hierarchy: communicate weight with size and color (neutral 600/900) before adding borders or "
        "background fills. One primary action per surface.\n"
        "- Color: stay on the existing neutral palette; one accent for the primary CTA, no gradients, no orbs.\n"
        "- Radius: 6-8px on inputs/cards/buttons; reuse existing tokens when present.\n"
        "- Motion: ease-out, 120-200ms; reserve motion for state change, never decoration.\n"
        "- Density: dashboards and forms should read like Linear — quiet, scannable, comparable.\n\n"
        "## Task\n\n"
        "1. Pick at most 2 small, surgical changes that target the metric above directly. No new pages, "
        "no new features, no refactors, no dependency additions.\n"
        f"2. Implement them end-to-end in {owner}/{repo}, gated on the PostHog flag. Wire the flag check, "
        "render the variant, ensure the control path is untouched, and verify the variant compiles and "
        "type-checks.\n"
        f"3. Push a single commit titled `[UX Agent] {today} — flag {flag_key or 'unknown'}` directly "
        f"onto `{base_branch}`. Do NOT open a pull request — the experiment must reach production as soon "
        "as CI passes so PostHog can start splitting traffic.\n"
        "4. Commit message body must use this exact format:\n\n"
        "**What changed:**\n"
        "- [file] — [one sentence, what and why, cite the exact metric e.g. \"rage click rate 40%\"]\n\n"
        "Rules:\n"
        "- Diff must stay under ~80 lines added across at most 3 files. If you can't fit, narrow the scope.\n"
        "- One bullet per file changed. No paragraphs in the commit message.\n"
        "- Every bullet must reference a specific number from the analytics.\n"
        "- The variant must be reachable only when the flag is true; the control branch must keep its existing behaviour.\n"
        "- No TODOs, no commented-out code, no placeholder copy, no console.logs, no dead code paths.\n"
        "- Do not change unrelated files, configs, or formatting.\n"
        "- No filler text, no greetings, no summaries in the commit body.\n"
        "\n"
        "## Substitution policy\n"
        "If the exact path or element from the analytics does not exist in the repo, do not pause for input. "
        "Pick the closest real surface that the data could plausibly describe (e.g. the highest-friction CTA on the landing page, "
        "or the closest semantically-related component) and continue. Note the substitution as the first bullet in the commit "
        "body, e.g. `- substituted address-field → footer-cta-start-free (closest real CTA)`. "
        "If `posthog-js` is not yet a dependency in the repo, add it and wire `<PostHogProvider>` in the root layout — that "
        "counts as one of your changes."
    )


def build_ship_session_prompt(
    config: Settings,
    *,
    spec: dict[str, Any],
    flag_key: str,
    verdict: dict[str, Any],
) -> str:
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    owner = config.github_owner or "(unset)"
    repo = config.github_repo or "(unset)"
    base_branch = config.github_base_branch
    return (
        "You are an autonomous UX experimentation agent. The variant guarded by the PostHog feature flag "
        f"`{flag_key}` won its A/B test on PostHog and is now serving 100% of traffic.\n\n"
        "## Verdict\n\n"
        f"- Hypothesis: {spec.get('hypothesis')}\n"
        f"- Variant: {spec.get('variant_name')} ({spec.get('user_change')})\n"
        f"- Primary metric: {spec.get('primary_metric')}\n"
        f"- Confidence: {verdict.get('confidence')}\n"
        f"- Relative lift: {verdict.get('relative_lift')}\n"
        f"- Baseline rate: {verdict.get('baseline_rate')}\n"
        f"- Treatment rate: {verdict.get('treatment_rate')}\n\n"
        "## Task\n\n"
        f"1. Find every callsite that branches on the PostHog flag `{flag_key}` in {owner}/{repo}.\n"
        "2. Remove only the gate; keep the variant code path verbatim. Do not retitle, restyle, or rewrite "
        "the variant — it has already been validated by PostHog and the design must stay identical.\n"
        f"3. Open a pull request targeting `{base_branch}` titled `[UX Agent] Ship {flag_key} {today}`.\n"
        "4. The PR description must use this exact format:\n\n"
        "**Why ship:**\n"
        "- Confidence: <number>\n"
        "- Lift: <number>\n"
        "- Primary metric: <name>\n\n"
        "**What removed:**\n"
        "- [file] — [one sentence describing the gate that was removed]\n\n"
        "Rules:\n"
        "- The diff must be a strict subset of the original variant commit — only deletions of the flag "
        "branch and the `if (flag)` wrapper. No restyle, no copy edits, no formatting churn.\n"
        "- One bullet per file. No paragraphs.\n"
        "- Do not add unrelated changes, dependencies, or new files.\n"
        f"- Do NOT delete the PostHog flag itself — leave `{flag_key}` in PostHog so we keep historic exposure data.\n"
        "- Leave the PR for a human reviewer; do not auto-merge."
    )


def _analytics_summary(opportunity: Opportunity) -> dict[str, Any]:
    segment = opportunity.affected_segment
    element = segment.get("element", "unknown")
    path = segment.get("path", "unknown")

    return {
        "topClickedElements": [],
        "dropOffPoints": [{"path": path, "avgScrollDepth": 0, "count": opportunity.sample_size}],
        "avgTimeOnPage": 0,
        "rageclickElements": [{"element": element, "count": opportunity.sample_size}]
        if opportunity.detector == "rage_click_cluster"
        else [],
        "exitPaths": [{"path": path, "count": opportunity.sample_size}]
        if opportunity.detector == "exit_hotspot"
        else [],
        "totalSessions": opportunity.sample_size,
    }


def _codebase_context(nia_context: dict[str, Any], spec: Spec) -> str:
    return "\n\n".join(
        part
        for part in [
            f"## Hypothesis\n{spec.hypothesis}",
            f"## Variant\n{spec.user_change}",
            f"## Primary metric\n{spec.primary_metric}",
            f"## Guardrails\n{', '.join(spec.guardrail_metrics)}",
            f"## Candidate code paths\n{', '.join(spec.code_paths)}",
            f"## Nia context\n{nia_context}",
        ]
        if part
    )
