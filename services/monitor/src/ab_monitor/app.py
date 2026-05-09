from typing import Any

from ab_monitor.judge import judge_experiments
from ab_monitor.monitor import analyze_events
from ab_monitor.posthog import fetch_events
from ab_monitor.schema import MonitorRequest
from ab_monitor.settings import Settings
from ab_monitor.tensorlake import Image, application, function

runtime_image = (
    Image()
    .copy("pyproject.toml", "/app/pyproject.toml")
    .copy("README.md", "/app/README.md")
    .copy("src", "/app/src")
    .run("pip install /app")
)

_SECRETS = [
    "POSTHOG_PERSONAL_API_KEY",
    "POSTHOG_PROJECT_ID",
    "OPENROUTER_API_KEY",
    "OPENROUTER_MODEL",
    "NIA_API_KEY",
    "DEVIA_API_KEY",
    "DEVIA_BASE_URL",
    "GITHUB_OWNER",
    "GITHUB_REPO",
    "GITHUB_BASE_BRANCH",
    "INSFORGE_URL",
    "INSFORGE_API_KEY",
]


@application()
@function(
    timeout=1200,
    max_containers=1,
    image=runtime_image,
    secrets=_SECRETS,
)
def monitor_posthog(request: MonitorRequest = MonitorRequest()) -> "dict[str, Any]":
    project_id = request.project_id
    lookback_hours = request.lookback_hours
    seen = set(request.seen_fingerprints) if request.seen_fingerprints else None

    try:
        config = Settings.from_env()
        events = fetch_events(config, project_id, lookback_hours)
    except Exception as error:
        return {
            "status": "fetch_failed",
            "project_id": project_id,
            "lookback_hours": lookback_hours,
            "error_type": type(error).__name__,
            "error": str(error),
        }
    try:
        return analyze_events(
            events=events,
            config=config,
            project_id=project_id,
            lookback_hours=lookback_hours,
            seen_fingerprints=seen,
        )
    except Exception as error:
        return {
            "status": "analysis_failed",
            "project_id": project_id,
            "lookback_hours": lookback_hours,
            "event_count": len(events),
            "error_type": type(error).__name__,
            "error": str(error),
        }


@application()
@function(
    timeout=600,
    max_containers=1,
    image=runtime_image,
    secrets=_SECRETS,
)
def judge_posthog(lookback_hours: int = 72) -> "dict[str, Any]":
    try:
        config = Settings.from_env()
        return judge_experiments(config, lookback_hours=lookback_hours)
    except Exception as error:
        return {
            "status": "judge_failed",
            "error_type": type(error).__name__,
            "error": str(error),
        }
