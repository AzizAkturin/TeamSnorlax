from __future__ import annotations

from collections import defaultdict
from hashlib import sha256

from ab_monitor.stats import clamp_score, two_proportion_confidence
from ab_monitor.schema import Event, EvidenceRef, Opportunity


def detect(events: list[Event]) -> list[Opportunity]:
    opportunities = [
        *_detect_rage_click_clusters(events),
        *_detect_exit_hotspots(events),
        *_detect_low_engagement_surfaces(events),
    ]
    return sorted(opportunities, key=lambda item: item.priority_score, reverse=True)


def _detect_rage_click_clusters(events: list[Event]) -> list[Opportunity]:
    total_sessions = _session_count(events)
    if total_sessions == 0:
        return []

    sessions_by_surface: dict[tuple[str, str], set[str]] = defaultdict(set)
    rage_sessions_by_surface: dict[tuple[str, str], set[str]] = defaultdict(set)

    for event in events:
        if not event.session_id:
            continue
        surface = (event.path or "unknown", event.element or "unknown")
        sessions_by_surface[surface].add(event.session_id)
        if event.type == "rage_click":
            rage_sessions_by_surface[surface].add(event.session_id)

    baseline_rage_sessions = len({event.session_id for event in events if event.type == "rage_click" and event.session_id})
    baseline_rate = baseline_rage_sessions / total_sessions

    opportunities: list[Opportunity] = []
    for surface, surface_sessions in sessions_by_surface.items():
        rage_sessions = rage_sessions_by_surface.get(surface, set())
        sample_size = len(surface_sessions)
        if sample_size < 5 or not rage_sessions:
            continue

        observed_rate = len(rage_sessions) / sample_size
        delta = observed_rate - baseline_rate
        relative_delta = delta / baseline_rate if baseline_rate > 0 else observed_rate
        confidence = two_proportion_confidence(
            len(rage_sessions),
            sample_size,
            baseline_rage_sessions,
            total_sessions,
        )
        priority = clamp_score((observed_rate * 0.55) + (confidence * 0.3) + (min(sample_size / 100.0, 1.0) * 0.15))

        if observed_rate <= baseline_rate:
            continue

        path, element = surface
        opportunities.append(_opportunity(
            detector="rage_click_cluster",
            metric="rage_click_sessions / exposed_sessions",
            segment={"path": path, "element": element},
            baseline=baseline_rate,
            observed=observed_rate,
            delta=delta,
            relative_delta=relative_delta,
            sample_size=sample_size,
            confidence=confidence,
            priority_score=priority,
            affected_surface=[path, element],
            evidence=[
                EvidenceRef(
                    kind="rage_click_rate",
                    description=f"{element} on {path} has elevated rage-click sessions.",
                    value=observed_rate,
                    sample_size=sample_size,
                    metadata={"rage_sessions": len(rage_sessions), "baseline_rate": baseline_rate},
                )
            ],
        ))

    return opportunities


def _detect_exit_hotspots(events: list[Event]) -> list[Opportunity]:
    total_sessions = _session_count(events)
    if total_sessions == 0:
        return []

    sessions_by_path: dict[str, set[str]] = defaultdict(set)
    exit_sessions_by_path: dict[str, set[str]] = defaultdict(set)

    for event in events:
        if not event.session_id:
            continue
        path = event.path or "unknown"
        sessions_by_path[path].add(event.session_id)
        if event.type == "exit":
            exit_sessions_by_path[path].add(event.session_id)

    baseline_exit_sessions = len({event.session_id for event in events if event.type == "exit" and event.session_id})
    baseline_rate = baseline_exit_sessions / total_sessions
    opportunities: list[Opportunity] = []

    for path, sessions in sessions_by_path.items():
        exits = exit_sessions_by_path.get(path, set())
        sample_size = len(sessions)
        if sample_size < 5 or not exits:
            continue

        observed_rate = len(exits) / sample_size
        delta = observed_rate - baseline_rate
        relative_delta = delta / baseline_rate if baseline_rate > 0 else observed_rate
        confidence = two_proportion_confidence(len(exits), sample_size, baseline_exit_sessions, total_sessions)
        priority = clamp_score((observed_rate * 0.45) + (confidence * 0.35) + (min(sample_size / 100.0, 1.0) * 0.2))

        if observed_rate <= baseline_rate:
            continue

        opportunities.append(_opportunity(
            detector="exit_hotspot",
            metric="exit_sessions / path_sessions",
            segment={"path": path},
            baseline=baseline_rate,
            observed=observed_rate,
            delta=delta,
            relative_delta=relative_delta,
            sample_size=sample_size,
            confidence=confidence,
            priority_score=priority,
            affected_surface=[path],
            evidence=[
                EvidenceRef(
                    kind="exit_rate",
                    description=f"{path} has elevated exit sessions.",
                    value=observed_rate,
                    sample_size=sample_size,
                    metadata={"exit_sessions": len(exits), "baseline_rate": baseline_rate},
                )
            ],
        ))

    return opportunities


def _detect_low_engagement_surfaces(events: list[Event]) -> list[Opportunity]:
    page_views: dict[str, list[Event]] = defaultdict(list)
    for event in events:
        if event.path and event.time_on_page is not None:
            page_views[event.path].append(event)

    if not page_views:
        return []

    all_times = [event.time_on_page for page_events in page_views.values() for event in page_events if event.time_on_page is not None]
    if not all_times:
        return []

    baseline = sum(all_times) / len(all_times)
    opportunities: list[Opportunity] = []

    for path, page_events in page_views.items():
        sample_size = len(page_events)
        if sample_size < 5:
            continue

        observed = sum(event.time_on_page or 0.0 for event in page_events) / sample_size
        if observed >= baseline:
            continue

        delta = observed - baseline
        relative_delta = delta / baseline if baseline > 0 else 0.0
        confidence = clamp_score(min(sample_size / 50.0, 1.0) * min(abs(relative_delta), 1.0))
        priority = clamp_score((abs(relative_delta) * 0.6) + (confidence * 0.25) + (min(sample_size / 100.0, 1.0) * 0.15))

        opportunities.append(_opportunity(
            detector="low_engagement_surface",
            metric="avg_time_on_page",
            segment={"path": path},
            baseline=baseline,
            observed=observed,
            delta=delta,
            relative_delta=relative_delta,
            sample_size=sample_size,
            confidence=confidence,
            priority_score=priority,
            affected_surface=[path],
            evidence=[
                EvidenceRef(
                    kind="time_on_page",
                    description=f"{path} has lower-than-baseline time on page.",
                    value=observed,
                    sample_size=sample_size,
                    metadata={"baseline": baseline},
                )
            ],
        ))

    return opportunities


def _session_count(events: list[Event]) -> int:
    return len({event.session_id for event in events if event.session_id})


def _opportunity(
    detector: str,
    metric: str,
    segment: dict[str, str],
    baseline: float,
    observed: float,
    delta: float,
    relative_delta: float,
    sample_size: int,
    confidence: float,
    priority_score: float,
    affected_surface: list[str],
    evidence: list[EvidenceRef],
) -> Opportunity:
    fingerprint = _fingerprint(detector, metric, segment, affected_surface)
    return Opportunity(
        id=f"opp_{fingerprint[:12]}",
        detector=detector,
        affected_metric=metric,
        affected_segment=segment,
        baseline=baseline,
        observed=observed,
        delta=delta,
        relative_delta=relative_delta,
        sample_size=sample_size,
        confidence=confidence,
        priority_score=priority_score,
        affected_surface=affected_surface,
        evidence=evidence,
        fingerprint=fingerprint,
    )


def _fingerprint(detector: str, metric: str, segment: dict[str, str], affected_surface: list[str]) -> str:
    normalized = "|".join([
        detector,
        metric,
        ",".join(f"{key}={segment[key]}" for key in sorted(segment)),
        ",".join(affected_surface),
    ])
    return sha256(normalized.encode()).hexdigest()
