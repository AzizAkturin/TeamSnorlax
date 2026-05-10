from __future__ import annotations

from typing import Any

import httpx

from ab_monitor.settings import Settings

EXPERIMENTS_TABLE = "experiments"


def _records_url(config: Settings, table: str) -> str:
    if not config.insforge_url:
        raise RuntimeError("INSFORGE_URL is required for Insforge access.")
    return f"{config.insforge_url.rstrip('/')}/api/database/records/{table}"


def _headers(config: Settings, *, prefer: str | None = None) -> dict[str, str]:
    if not config.insforge_api_key:
        raise RuntimeError("INSFORGE_API_KEY is required for Insforge access.")
    headers = {
        "x-api-key": config.insforge_api_key,
        "Content-Type": "application/json",
    }
    if prefer:
        headers["Prefer"] = prefer
    return headers


def list_active_experiments(config: Settings) -> list[dict[str, Any]]:
    response = httpx.get(
        _records_url(config, EXPERIMENTS_TABLE),
        params={"status": "eq.active"},
        headers=_headers(config),
        timeout=30,
    )
    response.raise_for_status()
    return list(response.json() or [])


def list_seen_fingerprints(config: Settings) -> set[str]:
    response = httpx.get(
        _records_url(config, EXPERIMENTS_TABLE),
        params={"select": "opportunity_fingerprint"},
        headers=_headers(config),
        timeout=30,
    )
    response.raise_for_status()
    rows = response.json() or []
    return {row["opportunity_fingerprint"] for row in rows if row.get("opportunity_fingerprint")}


def insert_experiment(config: Settings, row: dict[str, Any]) -> dict[str, Any]:
    response = httpx.post(
        _records_url(config, EXPERIMENTS_TABLE),
        headers=_headers(config, prefer="return=representation"),
        json=[row],
        timeout=30,
    )
    response.raise_for_status()
    payload = response.json()
    if isinstance(payload, list) and payload:
        return payload[0]
    return payload


def update_experiment(config: Settings, spec_id: str, fields: dict[str, Any]) -> dict[str, Any]:
    response = httpx.patch(
        _records_url(config, EXPERIMENTS_TABLE),
        params={"spec_id": f"eq.{spec_id}"},
        headers=_headers(config, prefer="return=representation"),
        json=fields,
        timeout=30,
    )
    response.raise_for_status()
    payload = response.json()
    if isinstance(payload, list) and payload:
        return payload[0]
    return payload
