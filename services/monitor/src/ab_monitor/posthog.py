from __future__ import annotations

from typing import Any

import httpx
import posthog

from ab_monitor.settings import Settings
from ab_monitor.schema import Event


def fetch_events(config: Settings, project_id: str | None = None, lookback_hours: int = 24) -> list[Event]:
    if not config.posthog_personal_api_key:
        raise ValueError("POSTHOG_PERSONAL_API_KEY is required to query PostHog events.")

    resolved_project_id = project_id or config.posthog_project_id
    if not resolved_project_id:
        raise ValueError("PostHog project id is required.")

    safe_lookback_hours = max(1, int(lookback_hours))
    query = f"""
        SELECT
            event AS type,
            properties['element'] AS element,
            coalesce(properties['path'], properties['$current_url']) AS path,
            coalesce(properties['sessionId'], properties['$session_id'], distinct_id) AS session_id,
            timestamp,
            properties['scrollDepth'] AS scrollDepth,
            properties['timeOnPage'] AS timeOnPage,
            properties['viewport'] AS viewport,
            properties['device'] AS device,
            properties['browser'] AS browser,
            properties['country'] AS country,
            properties['funnel_step'] AS funnel_step,
            properties['plan'] AS plan,
            properties['experiment_key'] AS experiment_key,
            properties['experiment_variant'] AS experiment_variant,
            properties['code_surface'] AS code_surface
        FROM events
        WHERE timestamp >= now() - INTERVAL {safe_lookback_hours} HOUR
          AND event IN ('click', 'scroll', 'exit', 'hover', 'rage_click')
        LIMIT 10000
    """

    response = httpx.post(
        f"{config.posthog_host}/api/projects/{resolved_project_id}/query/",
        headers={"Authorization": f"Bearer {config.posthog_personal_api_key}"},
        json={
            "query": {
                "kind": "HogQLQuery",
                "query": query,
            }
        },
        timeout=60,
    )
    response.raise_for_status()
    payload = response.json()

    rows = payload.get("results", [])
    columns = payload.get("columns") or [
        "type",
        "element",
        "path",
        "session_id",
        "timestamp",
        "scrollDepth",
        "timeOnPage",
        "viewport",
        "device",
        "browser",
        "country",
        "funnel_step",
        "plan",
        "experiment_key",
        "experiment_variant",
        "code_surface",
    ]
    events: list[Event] = []
    for row in rows:
        if isinstance(row, dict):
            raw: dict[str, Any] = row
        else:
            raw = dict(zip(columns, row, strict=False))
        events.append(Event.model_validate(raw))
    return events


def capture(config: Settings, events: list[dict[str, Any]]) -> int:
    if not config.posthog_project_api_key:
        raise ValueError("POSTHOG_PROJECT_API_KEY is required to ingest PostHog events.")

    posthog.api_key = config.posthog_project_api_key
    posthog.host = config.posthog_capture_host or config.posthog_host

    for event in events:
        posthog.capture(
            event=str(event["event"]),
            distinct_id=str(event["distinct_id"]),
            properties=dict(event.get("properties") or {}),
            timestamp=event.get("timestamp"),
        )
    posthog.flush()
    return len(events)
