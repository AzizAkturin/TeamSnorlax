from __future__ import annotations

import math
import random
from datetime import UTC, datetime, timedelta
from typing import Any

from ab_monitor.posthog import capture
from ab_monitor.repo_inspect import RepoMap
from ab_monitor.settings import Settings

DEFAULT_PATHS = ["/", "/pricing", "/signup", "/dashboard", "/checkout/address", "/checkout/payment"]
COUNTRIES = ["US", "CA", "GB", "DE", "IN", "BR", "FR", "JP", "AU", "MX", "NL", "SG"]
LIVE_FLAG_KEYS = ["exp_d35934b2debc", "exp_05a867f28195"]
LOOKBACK_DAYS = 14
DEFAULT_ELEMENTS = {
    "/": ["hero-cta", "learn-link", "nav-pricing", "demo-button"],
    "/pricing": ["starter-plan", "team-plan", "enterprise-contact", "faq-toggle"],
    "/signup": ["email-input", "password-input", "signup-submit", "oauth-google"],
    "/dashboard": ["create-experiment", "connect-posthog", "insight-card", "settings-link"],
    "/checkout/address": ["address-field", "city-field", "postal-code-field", "continue-to-payment"],
    "/checkout/payment": ["card-number", "card-expiry", "pay-button", "back-to-address"],
}
DEFAULT_CODE_SURFACE = {
    "/": "components/HeroSection.tsx",
    "/pricing": "components/PricingSection.tsx",
    "/signup": "components/SignUpForm.tsx",
    "/dashboard": "app/dashboard/page.tsx",
    "/checkout/address": "app/checkout/address-form.tsx",
    "/checkout/payment": "app/checkout/payment-form.tsx",
}


def build_seed_events(
    session_count: int = 8000,
    *,
    seed: int = 42,
    repo_map: RepoMap | None = None,
    flag_keys: list[str] | None = None,
) -> list[dict[str, Any]]:
    rng = random.Random(seed)
    now = datetime.now(UTC)
    events: list[dict[str, Any]] = []

    paths, elements, code_surface = _resolve_repo_shape(repo_map)
    active_flags = flag_keys or LIVE_FLAG_KEYS
    primary_flag = active_flags[0] if active_flags else "exp_demo"
    secondary_flag = active_flags[1] if len(active_flags) > 1 else primary_flag

    for index in range(session_count):
        started_at = _session_start_time(rng, now)
        session_id = f"seed-session-{seed}-{index}"
        user_id = f"seed-user-{rng.randint(1, max(25, session_count // 3))}"
        device = _weighted(rng, {"desktop": 0.52, "mobile": 0.40, "tablet": 0.08})
        browser = _weighted(rng, {"Chrome": 0.55, "Safari": 0.28, "Firefox": 0.10, "Edge": 0.07})
        high_friction = device == "mobile" and browser == "Safari"
        copy_variant = _weighted(rng, {"control": 0.50, "address_assist": 0.50})
        flag_assignments = {flag: rng.random() < 0.50 for flag in active_flags}
        flag_properties = {f"$feature/{flag}": value for flag, value in flag_assignments.items()}

        common_user = {
            "device": device,
            "browser": browser,
            "country": rng.choice(COUNTRIES),
            "plan": _weighted(rng, {"free": 0.45, "starter": 0.28, "team": 0.20, "enterprise": 0.07}),
            "experiment_key": "checkout_address_assist_v1",
            "experiment_variant": copy_variant,
            "utm_source": _weighted(rng, {"organic": 0.44, "paid-search": 0.22, "social": 0.18, "referral": 0.16}),
            "account_age_days": rng.randint(0, 180),
            "company_size": _weighted(rng, {"1-10": 0.35, "11-50": 0.28, "51-250": 0.24, "251+": 0.13}),
            **flag_properties,
        }

        path_sequence = _path_sequence(rng, high_friction, flag_assignments, paths)
        for step_index, path in enumerate(path_sequence):
            event_time = started_at + timedelta(seconds=step_index * rng.randint(14, 60))
            elements_for_path = elements.get(path) or ["primary-cta"]
            common = {
                **common_user,
                "path": path,
                "sessionId": session_id,
                "$session_id": session_id,
                "viewport": _viewport(rng, device),
                "funnel_step": _funnel_step(path),
                "code_surface": code_surface.get(path, "app/page.tsx"),
            }
            scroll_depth = _scroll_depth(rng, path, high_friction)
            time_on_page = _time_on_page(rng, path, high_friction)

            events.append(_event("page_view", user_id, event_time, {**common, "scrollDepth": 0}))
            events.append(_event("scroll", user_id, event_time + timedelta(seconds=2), {**common, "scrollDepth": scroll_depth}))

            for element in rng.sample(
                elements_for_path,
                k=rng.randint(1, min(3, len(elements_for_path))),
            ):
                events.append(_event("click", user_id, event_time + timedelta(seconds=rng.randint(1, 9)), {
                    **common,
                    "element": element,
                    "intent_score": round(rng.uniform(0.2, 0.95), 2),
                    "copy_variant": copy_variant,
                }))

            if _is_signup_path(path) and _signup_started(rng, flag_assignments, primary_flag):
                events.append(_event("signup_started", user_id, event_time + timedelta(seconds=rng.randint(4, 12)), {
                    **common,
                    "element": _pick_element(elements_for_path, ["email-input", "email", "signup-email", "nav-start-free"]),
                }))
                if _signup_submitted(rng, flag_assignments, primary_flag):
                    events.append(_event("signup_submitted", user_id, event_time + timedelta(seconds=rng.randint(15, 60)), {
                        **common,
                        "element": _pick_element(elements_for_path, ["signup-submit", "footer-cta-start-free", "nav-start-free"]),
                    }))

            if _is_checkout_path(path):
                events.append(_event("checkout_started", user_id, event_time + timedelta(seconds=rng.randint(2, 6)), {
                    **common,
                    "cart_value": round(rng.uniform(49, 799), 2),
                }))

            if _is_payment_path(path) and _purchase(rng, high_friction, flag_assignments, secondary_flag):
                events.append(_event("purchase", user_id, event_time + timedelta(seconds=rng.randint(20, 110)), {
                    **common,
                    "cart_value": round(rng.uniform(49, 799), 2),
                    "currency": "USD",
                }))

            if rng.random() < 0.55:
                events.append(_event("feature_used", user_id, event_time + timedelta(seconds=rng.randint(8, 40)), {
                    **common,
                    "feature": rng.choice(["search", "filter", "share", "export", "preview"]),
                }))

            if _rage_click(rng, path, high_friction, copy_variant, flag_assignments, primary_flag, secondary_flag):
                rage_element = rng.choice(elements_for_path)
                events.append(_event("rage_click", user_id, event_time + timedelta(seconds=rng.randint(8, 20)), {
                    **common,
                    "element": rage_element,
                    "click_burst_count": rng.randint(3, 7),
                    "validation_error": _is_checkout_path(path),
                    "error_code": "validation_failed" if _is_checkout_path(path) else "unresponsive_click_target",
                    "code_surface": code_surface.get(path, "app/page.tsx"),
                }))

            should_exit = step_index == len(path_sequence) - 1 or rng.random() < _exit_probability(path, high_friction, copy_variant)
            if should_exit:
                events.append(_event("exit", user_id, event_time + timedelta(seconds=time_on_page), {
                    **common,
                    "timeOnPage": time_on_page,
                    "scrollDepth": scroll_depth,
                    "exit_reason": _exit_reason(rng, path, high_friction),
                    "cart_value": round(rng.uniform(49, 799), 2) if path.startswith("/checkout") else 0,
                }))
                if rng.random() < 0.65:
                    break

    return sorted(events, key=lambda item: item["timestamp"])


def seed(
    config: Settings,
    session_count: int,
    seed: int,
    *,
    repo_map: RepoMap | None = None,
    flag_keys: list[str] | None = None,
) -> int:
    return capture(
        config,
        build_seed_events(
            session_count,
            seed=seed,
            repo_map=repo_map,
            flag_keys=flag_keys,
        ),
    )


def _resolve_repo_shape(
    repo_map: RepoMap | None,
) -> tuple[list[str], dict[str, list[str]], dict[str, str]]:
    if repo_map is None:
        return list(DEFAULT_PATHS), dict(DEFAULT_ELEMENTS), dict(DEFAULT_CODE_SURFACE)
    paths = repo_map.paths or ["/"]
    elements = {p: repo_map.elements_for(p) for p in paths}
    code_surface = {
        p: repo_map.code_surface_by_path.get(p, "app/page.tsx") for p in paths
    }
    return paths, elements, code_surface


def _is_signup_path(path: str) -> bool:
    p = path.lower()
    return "signup" in p or "sign-up" in p or "register" in p


def _is_checkout_path(path: str) -> bool:
    p = path.lower()
    return "checkout" in p and "payment" not in p


def _is_payment_path(path: str) -> bool:
    p = path.lower()
    return "payment" in p or p.endswith("/checkout/payment")


def _pick_element(available: list[str], preferred: list[str]) -> str:
    for cand in preferred:
        if cand in available:
            return cand
    return available[0] if available else "primary-cta"


def _event(name: str, distinct_id: str, timestamp: datetime, properties: dict[str, Any]) -> dict[str, Any]:
    return {
        "event": name,
        "distinct_id": distinct_id,
        "timestamp": timestamp,
        "properties": properties,
    }


def _session_start_time(rng: random.Random, now: datetime) -> datetime:
    while True:
        days_back = rng.uniform(0, LOOKBACK_DAYS)
        candidate = now - timedelta(days=days_back)
        weekday_weight = 0.55 if candidate.weekday() >= 5 else 1.0
        hour_weight = 0.35 + 0.65 * math.exp(-((candidate.hour - 14) ** 2) / (2 * 5.5 ** 2))
        if rng.random() < weekday_weight * hour_weight:
            return candidate


def _path_sequence(
    rng: random.Random,
    high_friction: bool,
    flag_assignments: dict[str, bool],
    paths: list[str],
) -> list[str]:
    if not paths:
        return ["/"]
    if len(paths) == 1:
        return [paths[0]]

    sample_size = rng.choices(
        [1, 2, 3, min(len(paths), 4)],
        weights=[0.18, 0.32, 0.30, 0.20],
        k=1,
    )[0]
    sample_size = max(1, min(sample_size, len(paths)))

    sequence = ["/"] if "/" in paths else [paths[0]]
    remaining = [p for p in paths if p not in sequence]
    rng.shuffle(remaining)
    for path in remaining[: sample_size - 1]:
        sequence.append(path)
    return sequence


def _rage_click(
    rng: random.Random,
    path: str,
    high_friction: bool,
    variant: str,
    flag_assignments: dict[str, bool],
    primary_flag: str,
    secondary_flag: str,
) -> bool:
    if _is_checkout_path(path) and high_friction:
        return rng.random() < (0.025 if variant == "control" else 0.012)
    if _is_signup_path(path):
        treatment = flag_assignments.get(primary_flag, False)
        return rng.random() < (0.004 if treatment else 0.018)
    if path == "/":
        treatment = flag_assignments.get(secondary_flag, False)
        return rng.random() < (0.003 if treatment else 0.011)
    return rng.random() < 0.0025


def _signup_started(
    rng: random.Random,
    flag_assignments: dict[str, bool],
    primary_flag: str,
) -> bool:
    treatment = flag_assignments.get(primary_flag, False)
    return rng.random() < (0.78 if treatment else 0.65)


def _signup_submitted(
    rng: random.Random,
    flag_assignments: dict[str, bool],
    primary_flag: str,
) -> bool:
    treatment = flag_assignments.get(primary_flag, False)
    return rng.random() < (0.62 if treatment else 0.41)


def _purchase(
    rng: random.Random,
    high_friction: bool,
    flag_assignments: dict[str, bool],
    secondary_flag: str,
) -> bool:
    treatment = flag_assignments.get(secondary_flag, False)
    base = 0.22 if treatment else 0.14
    if high_friction:
        base *= 0.7
    return rng.random() < base


def _exit_probability(path: str, high_friction: bool, variant: str) -> float:
    if _is_checkout_path(path) and high_friction:
        return 0.48 if variant == "control" else 0.30
    if path == "/":
        return 0.10
    if "pricing" in path:
        return 0.26
    if _is_signup_path(path):
        return 0.18
    if "dashboard" in path:
        return 0.08
    if _is_payment_path(path):
        return 0.12
    return 0.20


def _scroll_depth(rng: random.Random, path: str, high_friction: bool) -> int:
    if _is_checkout_path(path) and high_friction:
        return rng.randint(25, 58)
    return rng.randint(45, 100)


def _time_on_page(rng: random.Random, path: str, high_friction: bool) -> int:
    if _is_checkout_path(path) and high_friction:
        return rng.randint(85, 280)
    if path == "/":
        return rng.randint(18, 120)
    if "pricing" in path:
        return rng.randint(22, 130)
    if _is_signup_path(path):
        return rng.randint(30, 150)
    if "dashboard" in path:
        return rng.randint(45, 240)
    if _is_payment_path(path):
        return rng.randint(28, 160)
    return rng.randint(20, 140)


def _exit_reason(rng: random.Random, path: str, high_friction: bool) -> str:
    if _is_checkout_path(path) and high_friction:
        return _weighted(rng, {"address_validation_error": 0.55, "manual_entry_friction": 0.30, "unknown": 0.15})
    return _weighted(rng, {"completed_intent": 0.35, "price_objection": 0.25, "low_intent": 0.25, "unknown": 0.15})


def _funnel_step(path: str) -> str:
    if path == "/":
        return "landing"
    if "pricing" in path:
        return "pricing"
    if _is_signup_path(path):
        return "signup"
    if "dashboard" in path:
        return "activation"
    if _is_payment_path(path):
        return "checkout_payment"
    if _is_checkout_path(path):
        return "checkout_address"
    cleaned = path.strip("/").replace("/", "_") or "other"
    return cleaned


def _viewport(rng: random.Random, device: str) -> dict[str, int]:
    if device == "mobile":
        return {"width": rng.choice([360, 390, 414]), "height": rng.choice([740, 844, 896])}
    if device == "tablet":
        return {"width": rng.choice([768, 820, 1024]), "height": rng.choice([1024, 1180, 1366])}
    return {"width": rng.choice([1280, 1440, 1512, 1728]), "height": rng.choice([720, 900, 982, 1117])}


def _weighted(rng: random.Random, weights: dict[str, float]) -> str:
    return rng.choices(list(weights), weights=list(weights.values()), k=1)[0]
