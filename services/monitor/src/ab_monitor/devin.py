from __future__ import annotations

from typing import Any

from ab_monitor.schema import Spec, Opportunity


def devin_handoff(
    opportunity: Opportunity,
    nia_context: dict[str, Any],
    experiment_spec: Spec | None,
) -> dict[str, Any]:
    if experiment_spec is None:
        return {"status": "skipped", "reason": "Spec was not generated"}

    return {
        "status": "ready_for_devin_agent",
        "integration": "agent/devia.ts#createDevinSession",
        "call": {
            "summary": _analytics_summary(opportunity),
            "codebaseContext": _codebase_context(nia_context, experiment_spec),
        },
    }


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
