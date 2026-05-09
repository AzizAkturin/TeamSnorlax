from __future__ import annotations

from typing import Any

from ab_monitor.monitor import analyze_events
from ab_monitor.posthog import fetch_events
from ab_monitor.settings import Settings
from ab_monitor.tensorlake import Image, application, function

runtime_image = Image().run(
    "pip install 'httpx>=0.28.1' 'posthog>=7.14.0' 'pydantic-settings>=2.14.1' 'statsmodels>=0.14.6'"
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
