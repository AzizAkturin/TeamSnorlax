from __future__ import annotations

import argparse
import json
from typing import Any

from ab_monitor.settings import Settings
from ab_monitor.monitor import run_monitor
from ab_monitor.seed import build_seed_events, seed


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the A/B monitor.")
    subparsers = parser.add_subparsers(dest="command")

    monitor_cmd = subparsers.add_parser("monitor", help="Query PostHog and run opportunity detection.")
    _add_monitor_args(monitor_cmd)

    seed_cmd = subparsers.add_parser("seed", help="Ingest rich synthetic product analytics into PostHog.")
    seed_cmd.add_argument("--sessions", type=int, default=750)
    seed_cmd.add_argument("--seed", type=int, default=42)
    seed_cmd.add_argument("--dry-run", action="store_true", help="Generate and print a preview without ingesting.")

    _add_monitor_args(parser)
    args = parser.parse_args()

    if args.command == "seed":
        events = build_seed_events(args.sessions, seed=args.seed)
        if args.dry_run:
            print(json.dumps({"event_count": len(events), "preview": events[:5]}, default=str, indent=2, sort_keys=True))
            return

        count = seed(Settings.from_env(), args.sessions, args.seed)
        print(json.dumps({"status": "seeded", "event_count": count}, indent=2, sort_keys=True))
        return

    result = run_monitor(
        config=Settings.from_env(),
        project_id=args.project_id,
        lookback_hours=args.lookback_hours,
        seen_fingerprints=set(args.seen_fingerprint),
    )
    print(json.dumps(_jsonable(result), indent=2, sort_keys=True))


def _add_monitor_args(parser: argparse.ArgumentParser) -> None:
    parser.add_argument("--project-id", default=None)
    parser.add_argument("--lookback-hours", type=int, default=24)
    parser.add_argument(
        "--seen-fingerprint",
        action="append",
        default=[],
        help="Opportunity fingerprint to suppress. Can be passed multiple times.",
    )


def _jsonable(value: Any) -> Any:
    if isinstance(value, dict):
        return {key: _jsonable(item) for key, item in value.items()}
    if isinstance(value, list):
        return [_jsonable(item) for item in value]
    return value


if __name__ == "__main__":
    main()
