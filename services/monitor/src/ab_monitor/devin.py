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
        },
    }

    if config is None or not config.devin_api_key:
        return payload

    try:
        session = _create_devin_session(config, summary, codebase_context)
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
) -> dict[str, Any]:
    prompt = _build_session_prompt(config, summary, codebase_context)
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
) -> str:
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    owner = config.github_owner or "(unset)"
    repo = config.github_repo or "(unset)"
    base_branch = config.github_base_branch
    return (
        "You are a UX optimization agent. Analyze the following user behavior analytics "
        "and make targeted code changes to improve engagement.\n\n"
        "## Analytics Data\n\n"
        f"- Total sessions: {summary.get('totalSessions')}\n"
        f"- Average time on page: {summary.get('avgTimeOnPage')}s\n"
        f"- Top clicked elements: {summary.get('topClickedElements')}\n"
        f"- Rage click elements (user frustration): {summary.get('rageclickElements')}\n"
        f"- Exit paths (where users leave): {summary.get('exitPaths')}\n"
        f"- Drop-off points (low scroll depth): {summary.get('dropOffPoints')}\n\n"
        "## Codebase Context\n\n"
        f"{codebase_context}\n\n"
        "## Task\n\n"
        "1. Pick the 2-3 highest-impact UX changes only (colors, spacing, fonts, copy, layout, CTAs).\n"
        f"2. Implement them in the codebase (repo: {owner}/{repo}).\n"
        f"3. Open a PR targeting `{base_branch}` titled: \"[UX Agent] Proposal {today}\"\n"
        "4. PR description must follow this format exactly — short and specific:\n\n"
        "**What changed:**\n"
        "- [file] — [one sentence, what and why, cite the exact metric e.g. \"rage click rate 40%\"]\n\n"
        "Rules:\n"
        "- One bullet per file changed. No paragraphs.\n"
        "- Every bullet must reference a specific number from the analytics.\n"
        "- Do not add features unrelated to the data.\n"
        "- No filler text, no greetings, no summaries."
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
