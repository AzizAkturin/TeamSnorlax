# A/B Monitor

Tensorlake-ready monitor for finding A/B testing opportunities from PostHog analytics.

The monitor deliberately separates deterministic opportunity detection from LLM planning:

```txt
Tensorlake cron -> PostHog -> detectors -> Nia -> LLM spec -> Devin handoff
```

## Layout

```txt
services/monitor/
  src/ab_monitor/
    app.py          Tensorlake entrypoint
    cli.py          local runner
    detect.py       opportunity detectors
    devin.py        handoff payload for aziz-workbranch agent
    llm.py          OpenRouter/OpenAI spec generation
    monitor.py      orchestration
    nia.py          Nia context lookup
    posthog.py      PostHog query/capture
    schema.py       Pydantic models
    seed.py         synthetic PostHog data
    settings.py     env config
    stats.py        tiny stats helpers
  tests/
```

## Dependency Choices

This service intentionally uses maintained libraries instead of local plumbing:

- `pydantic-settings` validates environment variables and `.env` files.
- `pydantic` owns runtime schemas.
- `httpx` owns HTTP requests.
- `openai` owns the OpenAI structured-output path.
- `tensorlake` is optional for local runs; install the `tensorlake` extra for deployment.

Keeping this as Python is deliberate: Tensorlake Applications are deployed as Python functions. TypeScript is still a good fit for the web app, API routes, and dashboards, but it would add an extra bridge for the Tensorlake runtime.

## Local Run

Use `uv` from this folder:

```bash
uv run ab-monitor monitor
```

That queries PostHog, runs detectors, and prints the chosen opportunity or `no_finding`.

Run tests:

```bash
uv run python -m unittest discover -s tests
```

For production, raise the gates with env vars:

```bash
MONITOR_MIN_SAMPLE_SIZE=500
MONITOR_MIN_CONFIDENCE=0.90
MONITOR_MIN_RELATIVE_DELTA=0.10
MONITOR_MIN_PRIORITY_SCORE=0.75
```

## Tensorlake Cron

Deploy `ab_monitor.app:monitor_posthog` as the Tensorlake application endpoint, then create a schedule:

```python
import base64
import json
import os
import requests

application = "ab-monitor"
payload = {
    "cron_expression": "0 * * * *",
    "input_base64": base64.b64encode(json.dumps({
        "project_id": "posthog-project-id",
        "lookback_hours": 24
    }).encode()).decode(),
}

requests.post(
    f"https://api.tensorlake.ai/applications/{application}/cron-schedules",
    json=payload,
    headers={"Authorization": f"Bearer {os.environ['TENSORLAKE_API_KEY']}"},
).raise_for_status()
```

## Environment

Required for production:

- `POSTHOG_PERSONAL_API_KEY` or legacy `POSTHOG_API_KEY`, used for HogQL reads
- `POSTHOG_PROJECT_API_KEY`, used for event ingestion
- `POSTHOG_PROJECT_ID`
- `POSTHOG_HOST`, default `https://app.posthog.com`
- `POSTHOG_CAPTURE_HOST`, optional; defaults to `POSTHOG_HOST`

Optional integrations:

- `NIA_API_KEY`
- `NIA_COMMAND`, default `nia`
- `REPO_ROOT`, default resolves to this repo root
- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL`, default `qwen/qwen3-next-80b-a3b-instruct:free`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`, default `gpt-5.4`

If optional integrations are absent, the monitor still returns the chosen deterministic opportunity and marks downstream steps as skipped.

Spec generation prefers OpenRouter when `OPENROUTER_API_KEY` is set. OpenAI is used only when OpenRouter is not configured. For OpenRouter, choose a model that supports `response_format: json_schema`; free models can work, but schema reliability varies by provider/model.

## Synthetic PostHog Data

Seed rich fake product analytics into PostHog:

```bash
uv run ab-monitor seed --sessions 750
```

Preview without sending:

```bash
uv run ab-monitor seed --sessions 25 --dry-run
```

The generator intentionally creates segment-specific checkout friction, especially `mobile + Safari + /checkout/address`, with properties for funnel step, viewport, plan, country, experiment variant, validation errors, rage clicks, exits, and likely code surfaces.

## Devin Handoff

The direct Devin API client lives on `origin/aziz-workbranch` in `agent/devia.ts` as:

```ts
createDevinSession(summary: AnalyticsSummary, codebaseContext: string)
```

This monitor does not duplicate that client. When a `Spec` exists, it returns a `ready_for_devin_agent` payload shaped for that function:

```json
{
  "summary": {},
  "codebaseContext": "..."
}
```

Install deployment extras:

```bash
uv sync --extra tensorlake
```
