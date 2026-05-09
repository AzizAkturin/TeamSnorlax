from __future__ import annotations

from typing import Any

from ab_monitor.devin import devin_handoff
from ab_monitor.nia import enrich_with_nia
from ab_monitor.llm import make_spec
from ab_monitor.posthog import fetch_events
from ab_monitor.settings import Settings
from ab_monitor.detect import detect
from ab_monitor.schema import Event, Opportunity


def run_monitor(
    *,
    config: Settings,
    project_id: str | None = None,
    lookback_hours: int = 24,
    seen_fingerprints: set[str] | None = None,
) -> dict[str, Any]:
    events = fetch_events(config, project_id, lookback_hours)
    return analyze_events(
        events=events,
        config=config,
        project_id=project_id,
        lookback_hours=lookback_hours,
        seen_fingerprints=seen_fingerprints or set(),
    )


def analyze_events(
    *,
    events: list[Event],
    config: Settings,
    project_id: str | None,
    lookback_hours: int,
    seen_fingerprints: set[str],
) -> dict[str, Any]:
    opportunities = sorted(
        detect(events),
        key=lambda opportunity: (_detector_weight(opportunity.detector), opportunity.priority_score),
        reverse=True,
    )
    actionable = [
        opportunity for opportunity in opportunities
        if is_actionable(opportunity, config)
        and opportunity.fingerprint not in seen_fingerprints
    ]

    if not actionable:
        return {
            "status": "no_finding",
            "project_id": project_id,
            "lookback_hours": lookback_hours,
            "event_count": len(events),
            "top_opportunities": [opportunity.to_dict() for opportunity in opportunities[:5]],
        }

    chosen = actionable[0]
    nia_context = enrich_with_nia(config, chosen)
    try:
        spec = make_spec(config, chosen, nia_context)
    except Exception as error:
        return {
            "status": "spec_failed",
            "project_id": project_id,
            "lookback_hours": lookback_hours,
            "event_count": len(events),
            "chosen": chosen.to_dict(),
            "nia_context": nia_context,
            "spec": None,
            "spec_error": str(error),
            "devin": None,
        }

    devin_run = devin_handoff(chosen, nia_context, spec)

    return {
        "status": "autoresearch_started",
        "project_id": project_id,
        "lookback_hours": lookback_hours,
        "event_count": len(events),
        "chosen": chosen.to_dict(),
        "nia_context": nia_context,
        "spec": spec.to_dict(),
        "spec_error": None,
        "devin": devin_run,
    }


def is_actionable(opportunity: Opportunity, config: Settings) -> bool:
    return (
        opportunity.sample_size >= config.min_sample_size
        and opportunity.confidence >= config.min_confidence
        and abs(opportunity.relative_delta) >= config.min_relative_delta
        and opportunity.priority_score >= config.min_priority_score
    )


def _detector_weight(detector: str) -> int:
    return {
        "rage_click_cluster": 30,
        "exit_hotspot": 20,
        "low_engagement_surface": 10,
    }.get(detector, 0)
