from __future__ import annotations

import argparse
import json
import os
from typing import Any

import httpx

from ab_monitor.monitor import run_monitor
from ab_monitor.repo_inspect import RepoMap, fetch_repo_map
from ab_monitor.seed import build_seed_events, seed
from ab_monitor.settings import Settings


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the A/B monitor.")
    subparsers = parser.add_subparsers(dest="command")

    monitor_cmd = subparsers.add_parser("monitor", help="Query PostHog and run opportunity detection.")
    _add_monitor_args(monitor_cmd)

    seed_cmd = subparsers.add_parser("seed", help="Ingest rich synthetic product analytics into PostHog.")
    seed_cmd.add_argument("--sessions", type=int, default=750)
    seed_cmd.add_argument("--seed", type=int, default=42)
    seed_cmd.add_argument(
        "--dry-run",
        action="store_true",
        help="Generate and print a preview without ingesting.",
    )
    seed_cmd.add_argument(
        "--customer-id",
        default=None,
        help="Insforge customer id. Loads repo + flag info and seeds against the customer's actual repo.",
    )
    seed_cmd.add_argument(
        "--owner",
        default=None,
        help="GitHub owner for ad-hoc seeding (use --token together).",
    )
    seed_cmd.add_argument(
        "--repo",
        default=None,
        help="GitHub repo name for ad-hoc seeding (use --token together).",
    )
    seed_cmd.add_argument(
        "--token",
        default=None,
        help="GitHub token (defaults to GITHUB_TOKEN env var).",
    )
    seed_cmd.add_argument(
        "--flag-key",
        action="append",
        default=[],
        help="PostHog feature flag key to mark on every event. Repeatable.",
    )

    _add_monitor_args(parser)
    args = parser.parse_args()

    if args.command == "seed":
        repo_map = _resolve_repo_map(args)
        flag_keys = list(args.flag_key) if args.flag_key else None

        events = build_seed_events(
            args.sessions,
            seed=args.seed,
            repo_map=repo_map,
            flag_keys=flag_keys,
        )
        if args.dry_run:
            preview = {
                "event_count": len(events),
                "paths": repo_map.paths if repo_map else None,
                "elements": repo_map.elements_by_path if repo_map else None,
                "preview": events[:5],
            }
            print(json.dumps(preview, default=str, indent=2, sort_keys=True))
            return

        count = seed(
            Settings.from_env(),
            args.sessions,
            args.seed,
            repo_map=repo_map,
            flag_keys=flag_keys,
        )
        print(
            json.dumps(
                {
                    "status": "seeded",
                    "event_count": count,
                    "paths": repo_map.paths if repo_map else None,
                    "flag_keys": flag_keys,
                },
                indent=2,
                sort_keys=True,
            )
        )
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


def _resolve_repo_map(args: argparse.Namespace) -> RepoMap | None:
    """Either look up the customer in Insforge and use their repo, or accept --owner/--repo/--token."""
    if args.customer_id:
        return _repo_map_from_customer(args.customer_id)
    if args.owner and args.repo:
        token = args.token or os.environ.get("GITHUB_TOKEN")
        if not token:
            raise SystemExit("--token (or GITHUB_TOKEN) is required when using --owner/--repo")
        return fetch_repo_map(token, args.owner, args.repo)
    return None


def _repo_map_from_customer(customer_id: str) -> RepoMap:
    insforge_url = os.environ.get("INSFORGE_URL")
    insforge_key = os.environ.get("INSFORGE_API_KEY")
    if not insforge_url or not insforge_key:
        raise SystemExit("INSFORGE_URL and INSFORGE_API_KEY env vars are required for --customer-id")
    res = httpx.get(
        f"{insforge_url.rstrip('/')}/api/database/records/customers",
        params={"id": f"eq.{customer_id}"},
        headers={"x-api-key": insforge_key},
        timeout=30,
    )
    res.raise_for_status()
    rows = res.json() or []
    if not rows:
        raise SystemExit(f"No customer with id {customer_id}")
    customer = rows[0]
    token = customer.get("github_token")
    owner = customer.get("github_owner")
    repo = customer.get("github_repo")
    if not (token and owner and repo):
        raise SystemExit("Customer is missing github_token / github_owner / github_repo")
    return fetch_repo_map(token, owner, repo)


if __name__ == "__main__":
    main()
