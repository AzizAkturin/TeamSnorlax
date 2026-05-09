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
    llm.py          OpenRouter spec generation
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

## Tensorlake Deploy and Cron

Deploy `ab_monitor.app:monitor_posthog`, set runtime secrets, and schedule from the monitor folder. The Tensorlake `tl` CLI ships with the `tensorlake` extra:

```bash
export TENSORLAKE_API_KEY=...

uv sync --extra tensorlake
uv run --extra tensorlake tl secrets set \
  POSTHOG_PERSONAL_API_KEY=... \
  POSTHOG_PROJECT_ID=... \
  OPENROUTER_API_KEY=... \
  OPENROUTER_MODEL=google/gemini-2.5-flash-lite \
  NIA_API_KEY=...

uv run --extra tensorlake tl deploy src/ab_monitor/app.py

uv run --extra tensorlake tl cron create \
  --schedule '0 * * * *' \
  --input-json '{"project_id":"...","lookback_hours":24,"seen_fingerprints":[]}' \
  monitor_posthog
```

Invoke directly:

```bash
curl https://api.tensorlake.ai/applications/monitor_posthog \
  -H "Authorization: Bearer $TENSORLAKE_API_KEY" \
  --json '{"project_id":"...","lookback_hours":24,"seen_fingerprints":[]}'
```

The function takes a single `MonitorRequest` argument, so both `--input-json` and the `--json` body share one shape.

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
- `OPENROUTER_API_KEY` or `OPENROUTER`
- `OPENROUTER_MODEL`, required; choose a model that supports `response_format: json_schema`. Free `:free` providers on OpenRouter rate-limit aggressively, so a cheap paid model like `google/gemini-2.5-flash-lite` is a more reliable default for the deployed monitor.
- `POSTHOG_EVENT_NAMES`, comma-separated event names to query, default `click,scroll,exit,hover,rage_click`
- `POSTHOG_QUERY_LIMIT`, default `10000`

If OpenRouter is absent or fails, the monitor returns `spec_failed` with the chosen deterministic opportunity and does not start the Devin handoff. The OpenRouter call retries up to 3 times with exponential backoff on `429` so transient upstream rate limits do not abort the run.

Spec generation uses OpenRouter only. Free models can work, but schema reliability and rate limits vary by provider.

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

When `DEVIA_API_KEY` is configured, the monitor posts directly to the Devin sessions API after a `Spec` is generated and includes the `session.id` and `session.url` in the response. The prompt format mirrors `agent/devia.ts#createDevinSession`.

Required for live dispatch:

- `DEVIA_API_KEY`
- `DEVIA_BASE_URL`, default `https://api.devin.ai/v1`
- `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_BASE_BRANCH`

If the key is absent the monitor returns the `ready_for_devin_agent` payload as before so a TypeScript caller can invoke `createDevinSession` itself. If the key is present but the call fails, the response carries `status: devin_dispatch_failed` with the error type.

Install deployment extras:

```bash
uv sync --extra tensorlake
```
