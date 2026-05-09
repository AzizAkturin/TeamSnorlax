from __future__ import annotations

from pathlib import Path

from pydantic import AliasChoices, Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_ignore_empty=True,
        extra="ignore",
        populate_by_name=True,
    )

    posthog_personal_api_key: str | None = Field(
        default=None,
        validation_alias=AliasChoices("POSTHOG_PERSONAL_API_KEY", "POSTHOG_API_KEY"),
    )
    posthog_project_api_key: str | None = Field(
        default=None,
        validation_alias=AliasChoices(
            "POSTHOG_PROJECT_API_KEY",
            "POSTHOG_PROJECT_TOKEN",
            "NEXT_PUBLIC_POSTHOG_KEY",
        ),
    )
    posthog_project_id: str | None = Field(default=None, validation_alias="POSTHOG_PROJECT_ID")
    posthog_host: str = Field(default="https://app.posthog.com", validation_alias="POSTHOG_HOST")
    posthog_capture_host: str | None = Field(default=None, validation_alias="POSTHOG_CAPTURE_HOST")
    nia_api_key: str | None = Field(default=None, validation_alias="NIA_API_KEY")
    nia_command: str = Field(default="nia", validation_alias="NIA_COMMAND")
    repo_root: str = Field(default_factory=lambda: str(Path(__file__).resolve().parents[3]), validation_alias="REPO_ROOT")
    openrouter_api_key: str | None = Field(
        default=None,
        validation_alias=AliasChoices("OPENROUTER_API_KEY", "OPENROUTER"),
    )
    openrouter_model: str | None = Field(default=None, validation_alias="OPENROUTER_MODEL")
    posthog_event_names: str = Field(default="click,scroll,exit,hover,rage_click", validation_alias="POSTHOG_EVENT_NAMES")
    posthog_query_limit: int = Field(default=10000, validation_alias="POSTHOG_QUERY_LIMIT")
    min_sample_size: int = Field(default=5, validation_alias="MONITOR_MIN_SAMPLE_SIZE")
    min_confidence: float = Field(default=0.30, validation_alias="MONITOR_MIN_CONFIDENCE")
    min_relative_delta: float = Field(default=0.10, validation_alias="MONITOR_MIN_RELATIVE_DELTA")
    min_priority_score: float = Field(default=0.20, validation_alias="MONITOR_MIN_PRIORITY_SCORE")

    @field_validator("posthog_host", "posthog_capture_host")
    @classmethod
    def strip_url(cls, value: str | None) -> str | None:
        return value.rstrip("/") if value else value

    @classmethod
    def from_env(cls) -> "Settings":
        return cls()
