from __future__ import annotations

import json
import time
from typing import Any

import httpx
from pydantic import BaseModel, ConfigDict

from ab_monitor.settings import Settings
from ab_monitor.schema import Spec, Opportunity, RiskLevel


class SpecDraft(BaseModel):
    model_config = ConfigDict(extra="forbid")

    hypothesis: str
    variant_name: str
    user_change: str
    primary_metric: str
    guardrail_metrics: list[str]
    target_cohort: dict[str, str]
    code_paths: list[str]
    risk_level: RiskLevel
    implementation_notes: list[str]
    success_criteria: dict[str, Any]
    constraints: list[str]


def make_spec(
    config: Settings,
    opportunity: Opportunity,
    nia_context: dict[str, Any],
) -> Spec:
    if not config.openrouter_api_key:
        raise RuntimeError("OPENROUTER_API_KEY or OPENROUTER is required for spec generation.")
    if not config.openrouter_model:
        raise RuntimeError("OPENROUTER_MODEL is required for spec generation.")

    prompt = {
        "task": "Convert a deterministic analytics opportunity into an A/B experiment spec. Do not invent metrics, cohorts, or code paths not supported by the input.",
        "opportunity": opportunity.to_dict(),
        "nia_context": nia_context,
    }

    draft = _openrouter_spec(config, prompt)

    return Spec(
        id=f"exp_{opportunity.fingerprint[:12]}",
        opportunity_id=opportunity.id,
        **draft.model_dump(),
    )


def _openrouter_spec(config: Settings, prompt: dict[str, Any]) -> SpecDraft:
    schema = SpecDraft.model_json_schema()
    payload = {
        "model": config.openrouter_model,
        "messages": [
            {
                "role": "system",
                "content": "You design bounded A/B tests from validated analytics evidence. Return only schema-valid JSON.",
            },
            {"role": "user", "content": json.dumps(prompt, sort_keys=True)},
        ],
        "response_format": {
            "type": "json_schema",
            "json_schema": {
                "name": "experiment_spec",
                "strict": True,
                "schema": schema,
            },
        },
        "provider": {"require_parameters": True},
        "temperature": 0.2,
        "max_tokens": 1200,
    }
    headers = {
        "Authorization": f"Bearer {config.openrouter_api_key}",
        "Content-Type": "application/json",
    }

    response: httpx.Response | None = None
    for attempt in range(3):
        response = httpx.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers=headers,
            json=payload,
            timeout=30,
        )
        if response.status_code != 429:
            break
        backoff = float(response.headers.get("retry-after") or 0) or (2.0 * (attempt + 1))
        time.sleep(min(backoff, 8.0))

    assert response is not None
    response.raise_for_status()
    content = response.json()["choices"][0]["message"]["content"]
    if not content:
        raise RuntimeError("OpenRouter returned no message content.")
    return SpecDraft.model_validate_json(content)
