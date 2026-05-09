from __future__ import annotations

from enum import StrEnum
from typing import Any

from pydantic import BaseModel, ConfigDict, Field, model_validator


class RiskLevel(StrEnum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"


class MonitorRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")

    project_id: str | None = None
    lookback_hours: int = 24
    seen_fingerprints: list[str] = Field(default_factory=list)


MonitorRequest.model_rebuild()


class Event(BaseModel):
    model_config = ConfigDict(extra="allow")

    type: str = "unknown"
    element: str | None = None
    path: str | None = None
    session_id: str | None = None
    timestamp: int | str | None = None
    scroll_depth: float | None = None
    time_on_page: float | None = None
    properties: dict[str, Any] = Field(default_factory=dict)

    @model_validator(mode="before")
    @classmethod
    def normalize_event_keys(cls, raw: Any) -> Any:
        if not isinstance(raw, dict):
            return raw
        return {
            **raw,
            "type": raw.get("type") or raw.get("event") or "unknown",
            "path": raw.get("path") or raw.get("$current_url"),
            "session_id": raw.get("sessionId") or raw.get("session_id") or raw.get("$session_id"),
            "scroll_depth": raw.get("scrollDepth") or raw.get("scroll_depth"),
            "time_on_page": raw.get("timeOnPage") or raw.get("time_on_page"),
            "properties": {
                key: value
                for key, value in raw.items()
                if key
                not in {
                    "type",
                    "event",
                    "element",
                    "path",
                    "$current_url",
                    "sessionId",
                    "session_id",
                    "$session_id",
                    "timestamp",
                    "scrollDepth",
                    "scroll_depth",
                    "timeOnPage",
                    "time_on_page",
                }
            },
        }


class EvidenceRef(BaseModel):
    kind: str
    description: str
    value: float | int | str
    sample_size: int
    metadata: dict[str, Any] = Field(default_factory=dict)


class Opportunity(BaseModel):
    id: str
    detector: str
    affected_metric: str
    affected_segment: dict[str, str]
    baseline: float
    observed: float
    delta: float
    relative_delta: float
    sample_size: int
    confidence: float
    priority_score: float
    evidence: list[EvidenceRef]
    affected_surface: list[str] = Field(default_factory=list)
    fingerprint: str = ""

    def to_dict(self) -> dict[str, Any]:
        return self.model_dump(mode="json")


class Spec(BaseModel):
    id: str
    opportunity_id: str
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

    def to_dict(self) -> dict[str, Any]:
        return self.model_dump(mode="json")
