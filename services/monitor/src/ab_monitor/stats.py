from __future__ import annotations

from statsmodels.stats.proportion import proportions_ztest


def two_proportion_confidence(success_a: int, total_a: int, success_b: int, total_b: int) -> float:
    if total_a <= 0 or total_b <= 0:
        return 0.0
    if success_a < 0 or success_b < 0:
        return 0.0
    if success_a > total_a or success_b > total_b:
        return 0.0

    try:
        _statistic, p_value = proportions_ztest(
            count=[success_a, success_b],
            nobs=[total_a, total_b],
            alternative="two-sided",
        )
    except Exception:
        return 0.0

    return clamp_score(1.0 - float(p_value))


def clamp_score(value: float) -> float:
    return max(0.0, min(1.0, value))
