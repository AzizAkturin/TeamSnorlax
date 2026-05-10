from __future__ import annotations

from datetime import datetime, timezone
from typing import Any

import httpx

from ab_monitor.devin import build_ship_session_prompt, create_devin_session_with_prompt
from ab_monitor.feature_flags import set_flag_rollout
from ab_monitor.insforge import list_active_experiments, update_experiment
from ab_monitor.settings import Settings
from ab_monitor.stats import two_proportion_confidence


SHIP_MIN_CONFIDENCE = 0.95
SHIP_MIN_RELATIVE_LIFT = 0.05
KILL_MAX_RELATIVE_LIFT = -0.10
SUCCESS_EVENT = "click"


def judge_experiments(config: Settings, *, lookback_hours: int = 72) -> dict[str, Any]:
    active = list_active_experiments(config)
    if not active:
        return {"status": "no_active_experiments", "checked": 0, "decisions": []}

    decisions: list[dict[str, Any]] = []
    for row in active:
        try:
            decision = _judge_one(config, row, lookback_hours)
        except Exception as error:
            decision = {
                "spec_id": row.get("spec_id"),
                "verdict": "error",
                "error_type": type(error).__name__,
                "error": str(error),
            }
        decisions.append(decision)

    return {
        "status": "judged",
        "checked": len(active),
        "decisions": decisions,
    }


def _judge_one(
    config: Settings,
    row: dict[str, Any],
    lookback_hours: int,
) -> dict[str, Any]:
    spec_id = row["spec_id"]
    flag_key = row.get("posthog_flag_key")
    spec = row.get("spec") or {}
    target_segment = (spec.get("target_cohort") or {}) or {}
    primary_metric = spec.get("primary_metric") or "rage_click_sessions / exposed_sessions"

    if not flag_key:
        return {"spec_id": spec_id, "verdict": "skipped", "reason": "no_flag_key"}

    metrics = _flag_segmented_metrics(
        config,
        flag_key=flag_key,
        path=target_segment.get("path"),
        element=target_segment.get("element"),
        lookback_hours=lookback_hours,
        success_event=_success_event_for_metric(primary_metric),
    )

    control = metrics["control"]
    treatment = metrics["treatment"]
    if control["sessions"] == 0 or treatment["sessions"] == 0:
        return {
            "spec_id": spec_id,
            "verdict": "wait",
            "reason": "insufficient_exposure",
            "metrics": metrics,
        }

    confidence = two_proportion_confidence(
        control["successes"],
        control["sessions"],
        treatment["successes"],
        treatment["sessions"],
    )
    baseline_rate = control["successes"] / control["sessions"]
    treatment_rate = treatment["successes"] / treatment["sessions"]
    relative_lift = (
        (treatment_rate - baseline_rate) / baseline_rate if baseline_rate > 0 else 0.0
    )

    verdict = _verdict(confidence, relative_lift)
    decision: dict[str, Any] = {
        "spec_id": spec_id,
        "verdict": verdict,
        "confidence": confidence,
        "relative_lift": relative_lift,
        "baseline_rate": baseline_rate,
        "treatment_rate": treatment_rate,
        "metrics": metrics,
    }

    if verdict in {"ship", "kill"}:
        flag_id = _resolve_flag_id(config, flag_key, row.get("posthog_flag_id"))
        if flag_id is not None:
            try:
                set_flag_rollout(config, flag_id, 100 if verdict == "ship" else 0)
                decision["flag_rollout"] = 100 if verdict == "ship" else 0
            except Exception as error:
                decision["flag_error"] = f"{type(error).__name__}: {error}"

        ship_session: dict[str, Any] | None = None
        if verdict == "ship" and config.devin_api_key:
            try:
                ship_session = create_devin_session_with_prompt(
                    config,
                    build_ship_session_prompt(
                        config,
                        spec=spec,
                        flag_key=flag_key,
                        verdict=decision,
                    ),
                )
                decision["ship_session"] = ship_session
            except Exception as error:
                decision["ship_session_error"] = f"{type(error).__name__}: {error}"

        update_fields: dict[str, Any] = {
            "status": "shipped" if verdict == "ship" else "killed",
            "verdict": decision,
            "decided_at": datetime.now(timezone.utc).isoformat(),
        }
        if ship_session and ship_session.get("url"):
            update_fields["pr_url"] = ship_session["url"]
        update_experiment(config, spec_id, update_fields)
    else:
        update_experiment(config, spec_id, {"verdict": decision})

    return decision


def _verdict(confidence: float, relative_lift: float) -> str:
    if confidence >= SHIP_MIN_CONFIDENCE and relative_lift >= SHIP_MIN_RELATIVE_LIFT:
        return "ship"
    if confidence >= SHIP_MIN_CONFIDENCE and relative_lift <= KILL_MAX_RELATIVE_LIFT:
        return "kill"
    return "wait"


def _success_event_for_metric(primary_metric: str) -> str:
    metric = primary_metric.lower()
    if "rage" in metric:
        return "rage_click"
    if "exit" in metric:
        return "exit"
    if "scroll" in metric:
        return "scroll"
    return SUCCESS_EVENT


def _flag_segmented_metrics(
    config: Settings,
    *,
    flag_key: str,
    path: str | None,
    element: str | None,
    lookback_hours: int,
    success_event: str,
) -> dict[str, Any]:
    if not config.posthog_personal_api_key or not config.posthog_project_id:
        raise RuntimeError("PostHog credentials are required to judge experiments.")

    safe_lookback = max(1, int(lookback_hours))
    flag_property = f"$feature/{flag_key}"
    path_predicate = ""
    if path:
        path_predicate = (
            "AND coalesce(properties['path'], properties['$current_url']) = "
            f"{_hogql_string(path)}"
        )
    element_predicate = ""
    if element:
        element_predicate = f"AND properties['element'] = {_hogql_string(element)}"

    query = f"""
        SELECT
            properties['{flag_property}'] AS variant,
            count(distinct coalesce(properties['sessionId'], properties['$session_id'], distinct_id)) AS sessions,
            countIf(event = {_hogql_string(success_event)}) AS successes
        FROM events
        WHERE timestamp >= now() - INTERVAL {safe_lookback} HOUR
          AND properties['{flag_property}'] IS NOT NULL
          {path_predicate}
          {element_predicate}
        GROUP BY variant
    """

    response = httpx.post(
        f"{config.posthog_host.rstrip('/')}/api/projects/{config.posthog_project_id}/query/",
        headers={"Authorization": f"Bearer {config.posthog_personal_api_key}"},
        json={"query": {"kind": "HogQLQuery", "query": query}},
        timeout=60,
    )
    response.raise_for_status()
    payload = response.json()
    rows = payload.get("results") or []

    control = {"sessions": 0, "successes": 0}
    treatment = {"sessions": 0, "successes": 0}
    raw: dict[str, dict[str, int]] = {}
    for row in rows:
        variant_value = row[0]
        variant = "treatment" if str(variant_value).lower() in {"true", "1", "treatment"} else "control"
        bucket = {"sessions": int(row[1] or 0), "successes": int(row[2] or 0)}
        raw[str(variant_value)] = bucket
        if variant == "treatment":
            treatment["sessions"] += bucket["sessions"]
            treatment["successes"] += bucket["successes"]
        else:
            control["sessions"] += bucket["sessions"]
            control["successes"] += bucket["successes"]

    return {"control": control, "treatment": treatment, "raw": raw, "success_event": success_event}


def _resolve_flag_id(config: Settings, flag_key: str, cached_id: Any) -> int | None:
    if isinstance(cached_id, int):
        return cached_id
    if isinstance(cached_id, str) and cached_id.isdigit():
        return int(cached_id)
    from ab_monitor.feature_flags import find_flag_by_key

    flag = find_flag_by_key(config, flag_key)
    if flag and isinstance(flag.get("id"), int):
        return flag["id"]
    return None


def _hogql_string(value: str) -> str:
    return "'" + value.replace("\\", "\\\\").replace("'", "\\'") + "'"
