from __future__ import annotations

from typing import Any

import httpx

from ab_monitor.settings import Settings


def _flags_base(config: Settings) -> str:
    if not config.posthog_personal_api_key:
        raise RuntimeError("POSTHOG_PERSONAL_API_KEY is required for feature flag management.")
    if not config.posthog_project_id:
        raise RuntimeError("POSTHOG_PROJECT_ID is required for feature flag management.")
    return (
        f"{config.posthog_host.rstrip('/')}/api/projects/"
        f"{config.posthog_project_id}/feature_flags"
    )


def _headers(config: Settings) -> dict[str, str]:
    return {
        "Authorization": f"Bearer {config.posthog_personal_api_key}",
        "Content-Type": "application/json",
    }


def find_flag_by_key(config: Settings, key: str) -> dict[str, Any] | None:
    response = httpx.get(
        _flags_base(config) + "/",
        headers=_headers(config),
        params={"search": key},
        timeout=30,
    )
    response.raise_for_status()
    payload = response.json() or {}
    for flag in payload.get("results", []) or []:
        if flag.get("key") == key:
            return flag
    return None


def ensure_split_flag(
    config: Settings,
    *,
    key: str,
    name: str,
    rollout_percentage: int = 50,
) -> dict[str, Any]:
    existing = find_flag_by_key(config, key)
    if existing:
        return existing

    response = httpx.post(
        _flags_base(config) + "/",
        headers=_headers(config),
        json={
            "key": key,
            "name": name,
            "active": True,
            "filters": {
                "groups": [{"properties": [], "rollout_percentage": rollout_percentage}],
            },
        },
        timeout=30,
    )
    response.raise_for_status()
    return response.json()


def set_flag_rollout(config: Settings, flag_id: int, rollout_percentage: int) -> dict[str, Any]:
    response = httpx.patch(
        f"{_flags_base(config)}/{flag_id}/",
        headers=_headers(config),
        json={
            "active": rollout_percentage > 0,
            "filters": {
                "groups": [{"properties": [], "rollout_percentage": max(0, min(100, rollout_percentage))}],
            },
        },
        timeout=30,
    )
    response.raise_for_status()
    return response.json()
