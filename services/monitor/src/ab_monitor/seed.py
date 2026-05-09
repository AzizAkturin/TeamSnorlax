from __future__ import annotations

import random
from datetime import UTC, datetime, timedelta
from typing import Any

from ab_monitor.posthog import capture
from ab_monitor.settings import Settings

PATHS = ["/", "/pricing", "/signup", "/dashboard", "/checkout/address", "/checkout/payment"]
COUNTRIES = ["US", "CA", "GB", "DE", "IN", "BR"]
ELEMENTS = {
    "/": ["hero-cta", "learn-link", "nav-pricing", "demo-button"],
    "/pricing": ["starter-plan", "team-plan", "enterprise-contact", "faq-toggle"],
    "/signup": ["email-input", "password-input", "signup-submit", "oauth-google"],
    "/dashboard": ["create-experiment", "connect-posthog", "insight-card", "settings-link"],
    "/checkout/address": ["address-field", "city-field", "postal-code-field", "continue-to-payment"],
    "/checkout/payment": ["card-number", "card-expiry", "pay-button", "back-to-address"],
}


def build_seed_events(session_count: int = 750, *, seed: int = 42) -> list[dict[str, Any]]:
    rng = random.Random(seed)
    now = datetime.now(UTC)
    events: list[dict[str, Any]] = []

    for index in range(session_count):
        started_at = now - timedelta(minutes=rng.randint(1, 60 * 24 * 14))
        session_id = f"seed-session-{seed}-{index}"
        user_id = f"seed-user-{rng.randint(1, max(25, session_count // 3))}"
        device = _weighted(rng, {"desktop": 0.52, "mobile": 0.40, "tablet": 0.08})
        browser = _weighted(rng, {"Chrome": 0.55, "Safari": 0.28, "Firefox": 0.10, "Edge": 0.07})
        high_friction = device == "mobile" and browser == "Safari"
        variant = _weighted(rng, {"control": 0.50, "address_assist": 0.50})
        common_user = {
            "device": device,
            "browser": browser,
            "country": rng.choice(COUNTRIES),
            "plan": _weighted(rng, {"free": 0.45, "starter": 0.28, "team": 0.20, "enterprise": 0.07}),
            "experiment_key": "checkout_address_assist_v1",
            "experiment_variant": variant,
            "utm_source": _weighted(rng, {"organic": 0.44, "paid-search": 0.22, "social": 0.18, "referral": 0.16}),
            "account_age_days": rng.randint(0, 180),
            "company_size": _weighted(rng, {"1-10": 0.35, "11-50": 0.28, "51-250": 0.24, "251+": 0.13}),
        }

        path_sequence = _path_sequence(rng, high_friction)
        for step_index, path in enumerate(path_sequence):
            event_time = started_at + timedelta(seconds=step_index * rng.randint(12, 55))
            common = {
                **common_user,
                "path": path,
                "sessionId": session_id,
                "$session_id": session_id,
                "viewport": _viewport(rng, device),
                "funnel_step": _funnel_step(path),
                "code_surface": _code_surface(path),
            }
            scroll_depth = _scroll_depth(rng, path, high_friction)
            time_on_page = _time_on_page(rng, path, high_friction)

            events.append(_event("scroll", user_id, event_time, {**common, "scrollDepth": scroll_depth}))

            for element in rng.sample(ELEMENTS[path], k=rng.randint(1, min(3, len(ELEMENTS[path])))):
                events.append(_event("click", user_id, event_time + timedelta(seconds=rng.randint(1, 9)), {
                    **common,
                    "element": element,
                    "intent_score": round(rng.uniform(0.2, 0.95), 2),
                    "copy_variant": variant,
                }))

            if _rage_click(rng, path, high_friction, variant):
                rage_element = "address-field" if path == "/checkout/address" else rng.choice(ELEMENTS[path])
                events.append(_event("rage_click", user_id, event_time + timedelta(seconds=rng.randint(8, 20)), {
                    **common,
                    "element": rage_element,
                    "click_burst_count": rng.randint(3, 7),
                    "validation_error": path == "/checkout/address",
                    "error_code": "address_validation_failed" if path == "/checkout/address" else "unresponsive_click_target",
                    "code_surface": "app/checkout/address-form.tsx" if path == "/checkout/address" else _code_surface(path),
                }))

            should_exit = step_index == len(path_sequence) - 1 or rng.random() < _exit_probability(path, high_friction, variant)
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


def seed(config: Settings, session_count: int, seed: int) -> int:
    return capture(config, build_seed_events(session_count, seed=seed))


def _event(name: str, distinct_id: str, timestamp: datetime, properties: dict[str, Any]) -> dict[str, Any]:
    return {
        "event": name,
        "distinct_id": distinct_id,
        "timestamp": timestamp,
        "properties": properties,
    }


def _path_sequence(rng: random.Random, high_friction: bool) -> list[str]:
    if high_friction and rng.random() < 0.78:
        return ["/", "/pricing", "/signup", "/checkout/address"]
    if rng.random() < 0.42:
        return ["/", "/pricing"]
    if rng.random() < 0.70:
        return ["/", "/pricing", "/signup", "/dashboard"]
    return ["/", "/pricing", "/signup", "/checkout/address", "/checkout/payment"]


def _rage_click(rng: random.Random, path: str, high_friction: bool, variant: str) -> bool:
    if path == "/checkout/address" and high_friction:
        return rng.random() < (0.44 if variant == "control" else 0.22)
    return rng.random() < 0.04


def _exit_probability(path: str, high_friction: bool, variant: str) -> float:
    if path == "/checkout/address" and high_friction:
        return 0.62 if variant == "control" else 0.36
    return {
        "/": 0.10,
        "/pricing": 0.26,
        "/signup": 0.18,
        "/dashboard": 0.08,
        "/checkout/address": 0.22,
        "/checkout/payment": 0.12,
    }[path]


def _scroll_depth(rng: random.Random, path: str, high_friction: bool) -> int:
    if path == "/checkout/address" and high_friction:
        return rng.randint(25, 58)
    return rng.randint(45, 100)


def _time_on_page(rng: random.Random, path: str, high_friction: bool) -> int:
    if path == "/checkout/address" and high_friction:
        return rng.randint(85, 280)
    return rng.randint(*{
        "/": (18, 80),
        "/pricing": (22, 130),
        "/signup": (30, 150),
        "/dashboard": (45, 240),
        "/checkout/address": (35, 220),
        "/checkout/payment": (28, 160),
    }[path])


def _exit_reason(rng: random.Random, path: str, high_friction: bool) -> str:
    if path == "/checkout/address" and high_friction:
        return _weighted(rng, {"address_validation_error": 0.55, "manual_entry_friction": 0.30, "unknown": 0.15})
    return _weighted(rng, {"completed_intent": 0.35, "price_objection": 0.25, "low_intent": 0.25, "unknown": 0.15})


def _funnel_step(path: str) -> str:
    return {
        "/": "landing",
        "/pricing": "pricing",
        "/signup": "signup",
        "/dashboard": "activation",
        "/checkout/address": "checkout_address",
        "/checkout/payment": "checkout_payment",
    }[path]


def _code_surface(path: str) -> str:
    return {
        "/": "components/HeroSection.tsx",
        "/pricing": "components/PricingSection.tsx",
        "/signup": "components/SignUpForm.tsx",
        "/dashboard": "app/dashboard/page.tsx",
        "/checkout/address": "app/checkout/address-form.tsx",
        "/checkout/payment": "app/checkout/payment-form.tsx",
    }[path]


def _viewport(rng: random.Random, device: str) -> dict[str, int]:
    if device == "mobile":
        return {"width": rng.choice([360, 390, 414]), "height": rng.choice([740, 844, 896])}
    if device == "tablet":
        return {"width": rng.choice([768, 820, 1024]), "height": rng.choice([1024, 1180, 1366])}
    return {"width": rng.choice([1280, 1440, 1512, 1728]), "height": rng.choice([720, 900, 982, 1117])}


def _weighted(rng: random.Random, weights: dict[str, float]) -> str:
    return rng.choices(list(weights), weights=list(weights.values()), k=1)[0]
