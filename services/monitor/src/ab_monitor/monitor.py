from __future__ import annotations

from typing import Any

from ab_monitor.detect import detect
from ab_monitor.devin import devin_handoff
from ab_monitor.feature_flags import ensure_split_flag
from ab_monitor.insforge import insert_experiment, list_seen_fingerprints, update_experiment
from ab_monitor.llm import make_spec
from ab_monitor.nia import enrich_with_nia
from ab_monitor.posthog import fetch_events
from ab_monitor.schema import Event, Opportunity
from ab_monitor.settings import Settings


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
        seen_fingerprints=seen_fingerprints,
    )


def analyze_events(
    *,
    events: list[Event],
    config: Settings,
    project_id: str | None,
    lookback_hours: int,
    seen_fingerprints: set[str] | None,
) -> dict[str, Any]:
    seen = set(seen_fingerprints) if seen_fingerprints is not None else _load_seen(config)

    opportunities = sorted(
        detect(events),
        key=lambda opportunity: (_detector_weight(opportunity.detector), opportunity.priority_score),
        reverse=True,
    )
    actionable = [
        opportunity for opportunity in opportunities
        if is_actionable(opportunity, config) and opportunity.fingerprint not in seen
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

    flag_info = _ensure_flag(config, spec.id, chosen)
    flag_key = flag_info.get("key") if flag_info else None
    flag_id = flag_info.get("id") if flag_info else None

    persistence: dict[str, Any] = {"status": "skipped"}
    if config.insforge_url and config.insforge_api_key:
        try:
            insert_experiment(
                config,
                {
                    "spec_id": spec.id,
                    "opportunity_fingerprint": chosen.fingerprint,
                    "status": "active",
                    "spec": spec.to_dict(),
                    "nia_context": nia_context,
                    "summary": chosen.to_dict(),
                    "posthog_flag_key": flag_key,
                },
            )
            persistence = {"status": "inserted", "flag_key": flag_key, "flag_id": flag_id}
        except Exception as error:
            persistence = {
                "status": "insert_failed",
                "error_type": type(error).__name__,
                "error": str(error),
            }

    devin_run = devin_handoff(
        chosen, nia_context, spec, config, flag_key=flag_key
    )

    if persistence.get("status") == "inserted":
        session = (devin_run or {}).get("session") or {}
        if session.get("id") or session.get("url"):
            try:
                update_experiment(
                    config,
                    spec.id,
                    {
                        "devin_session_id": session.get("id"),
                        "devin_session_url": session.get("url"),
                    },
                )
            except Exception as error:
                persistence["update_error"] = f"{type(error).__name__}: {error}"

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
        "flag": flag_info,
        "persistence": persistence,
    }


def is_actionable(opportunity: Opportunity, config: Settings) -> bool:
    return (
        opportunity.sample_size >= config.min_sample_size
        and opportunity.confidence >= config.min_confidence
        and abs(opportunity.relative_delta) >= config.min_relative_delta
        and opportunity.priority_score >= config.min_priority_score
    )


def _load_seen(config: Settings) -> set[str]:
    if not (config.insforge_url and config.insforge_api_key):
        return set()
    try:
        return list_seen_fingerprints(config)
    except Exception:
        return set()


def _ensure_flag(
    config: Settings, spec_id: str, chosen: Opportunity
) -> dict[str, Any] | None:
    if not (config.posthog_personal_api_key and config.posthog_project_id):
        return None
    try:
        flag = ensure_split_flag(
            config,
            key=spec_id,
            name=f"Auto-A/B {chosen.detector} {chosen.affected_segment.get('path', '')}".strip(),
        )
    except Exception as error:
        return {"key": spec_id, "error_type": type(error).__name__, "error": str(error)}
    return {"key": flag.get("key", spec_id), "id": flag.get("id"), "active": flag.get("active")}


def _detector_weight(detector: str) -> int:
    return {
        "rage_click_cluster": 30,
        "exit_hotspot": 20,
        "low_engagement_surface": 10,
    }.get(detector, 0)
