from __future__ import annotations

from typing import Any

from ab_monitor.monitor import analyze_events
from ab_monitor.posthog import fetch_events
from ab_monitor.settings import Settings
from ab_monitor.tensorlake import Image, application, function

runtime_image = (
    Image()
    .copy("pyproject.toml", "/app/pyproject.toml")
    .copy("README.md", "/app/README.md")
    .copy("src", "/app/src")
    .run("pip install /app")
)


@application()
@function(
    timeout=1200,
    max_containers=1,
    image=runtime_image,
    secrets=[
        "POSTHOG_PERSONAL_API_KEY",
        "POSTHOG_PROJECT_ID",
        "OPENROUTER_API_KEY",
        "OPENROUTER_MODEL",
        "NIA_API_KEY",
    ],
)
def monitor_posthog(
    project_id: str | None = None,
    lookback_hours: int = 24,
    seen_fingerprints: list[str] | None = None,
) -> dict[str, Any]:
    config = Settings.from_env()
    events = fetch_events(config, project_id, lookback_hours)
    return analyze_events(
        events=events,
        config=config,
        project_id=project_id,
        lookback_hours=lookback_hours,
        seen_fingerprints=set(seen_fingerprints or []),
    )
