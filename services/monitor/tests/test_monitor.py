from __future__ import annotations

import unittest

from ab_monitor.settings import Settings
from ab_monitor.devin import devin_handoff
from ab_monitor.detect import detect
from ab_monitor.schema import Event, Spec, Opportunity, RiskLevel
from ab_monitor.monitor import analyze_events, is_actionable
from ab_monitor.seed import build_seed_events
from ab_monitor.stats import two_proportion_confidence


def event(
    kind: str,
    session: str,
    *,
    path: str = "/checkout",
    element: str = "address-field",
    time_on_page: float = 30,
) -> Event:
    return Event(
        type=kind,
        session_id=session,
        path=path,
        element=element,
        time_on_page=time_on_page,
    )


class DetectorTests(unittest.TestCase):
    def test_two_proportion_confidence_uses_statsmodels(self) -> None:
        confidence = two_proportion_confidence(20, 79, 90, 750)

        self.assertGreater(confidence, 0.99)

    def test_rage_click_cluster_emits_stable_opportunity(self) -> None:
        events: list[Event] = []
        for index in range(40):
            events.append(event("click", f"base-{index}", element="hero-cta"))
        for index in range(20):
            events.append(event("click", f"rage-{index}"))
            events.append(event("rage_click", f"rage-{index}"))

        opportunities = detect(events)

        rage = next(item for item in opportunities if item.detector == "rage_click_cluster")
        self.assertEqual(rage.affected_segment["element"], "address-field")
        self.assertEqual(rage.sample_size, 20)
        self.assertGreater(rage.observed, rage.baseline)
        self.assertTrue(rage.fingerprint)
        self.assertTrue(rage.id.startswith("opp_"))

    def test_threshold_gate_blocks_small_findings(self) -> None:
        config = Settings(
            posthog_personal_api_key=None,
            posthog_project_api_key=None,
            posthog_project_id=None,
            posthog_host="https://app.posthog.com",
            posthog_capture_host=None,
            nia_api_key=None,
            repo_root="../..",
            openrouter_api_key=None,
            openrouter_model="qwen/qwen3-next-80b-a3b-instruct:free",
            openai_api_key=None,
            openai_model="gpt-5.4",
            min_sample_size=100,
            min_confidence=0.0,
            min_relative_delta=0.0,
            min_priority_score=0.0,
        )
        events = [event("click", f"base-{index}", element="hero-cta") for index in range(20)]
        events.extend(event("rage_click", f"rage-{index}") for index in range(10))
        opportunity = detect(events)[0]

        self.assertFalse(is_actionable(opportunity, config))

    def test_pipeline_returns_no_finding_when_duplicate(self) -> None:
        config = Settings(
            posthog_personal_api_key=None,
            posthog_project_api_key=None,
            posthog_project_id=None,
            posthog_host="https://app.posthog.com",
            posthog_capture_host=None,
            nia_api_key=None,
            repo_root="../..",
            openrouter_api_key=None,
            openrouter_model="qwen/qwen3-next-80b-a3b-instruct:free",
            openai_api_key=None,
            openai_model="gpt-5.4",
            min_sample_size=1,
            min_confidence=0.0,
            min_relative_delta=0.0,
            min_priority_score=0.0,
        )
        events = [event("click", f"sess-{index}", element="hero-cta") for index in range(20)]
        events.extend(event("rage_click", f"rage-{index}") for index in range(10))
        fingerprint = detect(events)[0].fingerprint

        result = analyze_events(
            events=events,
            config=config,
            project_id="demo",
            lookback_hours=24,
            seen_fingerprints={fingerprint},
        )

        self.assertEqual(result["status"], "no_finding")

    def test_devin_handoff_matches_aziz_agent_contract(self) -> None:
        opportunity = Opportunity(
            id="opp_123",
            detector="rage_click_cluster",
            affected_metric="rage_click_sessions / exposed_sessions",
            affected_segment={"path": "/", "element": "hero-cta"},
            baseline=0.1,
            observed=0.3,
            delta=0.2,
            relative_delta=2.0,
            sample_size=42,
            confidence=0.95,
            priority_score=0.8,
            evidence=[],
            fingerprint="abc123",
        )
        spec = Spec(
            id="exp_123",
            opportunity_id="opp_123",
            hypothesis="Users miss the primary CTA.",
            variant_name="stronger_cta",
            user_change="Increase CTA affordance.",
            primary_metric="cta_click_rate",
            guardrail_metrics=["bounce_rate"],
            target_cohort={"path": "/"},
            code_paths=["components/HeroSection.tsx"],
            risk_level=RiskLevel.LOW,
            implementation_notes=[],
            success_criteria={},
            constraints=[],
        )

        result = devin_handoff(opportunity, {"code_paths": ["components/HeroSection.tsx"]}, spec)

        self.assertEqual(result["status"], "ready_for_devin_agent")
        self.assertEqual(
            result["integration"],
            "agent/devia.ts#createDevinSession",
        )
        self.assertIn("summary", result["call"])
        self.assertIn("codebaseContext", result["call"])

    def test_seed_generator_produces_rich_posthog_events(self) -> None:
        events = build_seed_events(25, seed=7)

        self.assertGreater(len(events), 25)
        self.assertTrue({"click", "scroll", "exit"}.issubset({event["event"] for event in events}))
        sample = events[0]
        self.assertIn("distinct_id", sample)
        self.assertIn("timestamp", sample)
        self.assertIn("properties", sample)
        self.assertIn("sessionId", sample["properties"])
        self.assertIn("funnel_step", sample["properties"])
        self.assertIn("code_surface", sample["properties"])


if __name__ == "__main__":
    unittest.main()
