from __future__ import annotations

import json
from typing import Any

import httpx
from openai import OpenAI
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
) -> Spec | None:
    prompt = {
        "task": "Convert a deterministic analytics opportunity into an A/B experiment spec. Do not invent metrics, cohorts, or code paths not supported by the input.",
        "opportunity": opportunity.to_dict(),
        "nia_context": nia_context,
    }

    if config.openrouter_api_key:
        draft = _openrouter_spec(config, prompt)
    elif config.openai_api_key:
        draft = _openai_spec(config, prompt)
    else:
        return None

    return Spec(
        id=f"exp_{opportunity.fingerprint[:12]}",
        opportunity_id=opportunity.id,
        **draft.model_dump(),
    )


def fallback_spec(opportunity: Opportunity, nia_context: dict[str, Any]) -> Spec:
    segment = opportunity.affected_segment
    path = segment.get("path", "unknown")
    element = segment.get("element", "unknown")
    code_paths = nia_context.get("code_paths") or [_code_path(path)]

    if opportunity.detector == "rage_click_cluster":
        hypothesis = f"Users are struggling with {element} on {path}, causing elevated rage clicks."
        user_change = f"Reduce friction around {element} on {path} with clearer affordance, inline feedback, and easier recovery."
        variant_name = f"reduce_{_slug(element)}_friction"
    elif opportunity.detector == "exit_hotspot":
        hypothesis = f"Users are exiting at {path} because the next action is unclear or too costly."
        user_change = f"Clarify the primary next step on {path} and reduce competing actions."
        variant_name = f"reduce_{_slug(path)}_exits"
    else:
        hypothesis = f"Users show weaker engagement on {path} than the product baseline."
        user_change = f"Improve the first-screen value and primary action clarity on {path}."
        variant_name = f"improve_{_slug(path)}_engagement"

    return Spec(
        id=f"exp_{opportunity.fingerprint[:12]}",
        opportunity_id=opportunity.id,
        hypothesis=hypothesis,
        variant_name=variant_name,
        user_change=user_change,
        primary_metric=opportunity.affected_metric,
        guardrail_metrics=["exit_sessions / path_sessions", "avg_time_on_page"],
        target_cohort=segment,
        code_paths=code_paths,
        risk_level=RiskLevel.LOW,
        implementation_notes=[
            "Keep the change behind a PostHog feature flag.",
            "Do not change unrelated routes or shared flows.",
            "Preserve existing analytics events and add one variant exposure event.",
        ],
        success_criteria={
            "minimum_relative_improvement": 0.10,
            "baseline": opportunity.baseline,
            "observed": opportunity.observed,
            "sample_size": opportunity.sample_size,
            "confidence": opportunity.confidence,
        },
        constraints=[
            "Every implementation change must cite the selected PostHog opportunity.",
            "Disable the feature flag to roll back.",
        ],
    )


def _openai_spec(config: Settings, prompt: dict[str, Any]) -> SpecDraft:
    response = OpenAI(api_key=config.openai_api_key).responses.parse(
        model=config.openai_model,
        instructions="You design bounded A/B tests from validated analytics evidence.",
        input=json.dumps(prompt, sort_keys=True),
        text_format=SpecDraft,
        timeout=90,
    )
    draft = response.output_parsed
    if draft is None:
        raise RuntimeError("OpenAI returned no parsed spec.")
    return draft


def _openrouter_spec(config: Settings, prompt: dict[str, Any]) -> SpecDraft:
    schema = SpecDraft.model_json_schema()
    response = httpx.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {config.openrouter_api_key}",
            "Content-Type": "application/json",
        },
        json={
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
        },
        timeout=30,
    )
    response.raise_for_status()
    content = response.json()["choices"][0]["message"]["content"]
    if not content:
        raise RuntimeError("OpenRouter returned no message content.")
    return SpecDraft.model_validate_json(content)


def _code_path(path: str) -> str:
    return {
        "/": "components/HeroSection.tsx",
        "/pricing": "components/PricingSection.tsx",
        "/signup": "components/SignUpForm.tsx",
        "/dashboard": "app/dashboard/page.tsx",
        "/checkout/address": "app/checkout/address-form.tsx",
        "/checkout/payment": "app/checkout/payment-form.tsx",
    }.get(path, "app/page.tsx")


def _slug(value: str) -> str:
    return value.strip("/").replace("/", "_").replace("-", "_") or "surface"
