from __future__ import annotations

from math import erf, sqrt


def normal_cdf(z_score: float) -> float:
    return 0.5 * (1.0 + erf(z_score / sqrt(2.0)))


def two_proportion_confidence(success_a: int, total_a: int, success_b: int, total_b: int) -> float:
    if total_a <= 0 or total_b <= 0:
        return 0.0

    p_a = success_a / total_a
    p_b = success_b / total_b
    pooled = (success_a + success_b) / (total_a + total_b)
    standard_error = sqrt(max(pooled * (1.0 - pooled) * (1.0 / total_a + 1.0 / total_b), 0.0))
    if standard_error == 0:
        return 0.0

    z_score = abs(p_a - p_b) / standard_error
    p_value = 2.0 * (1.0 - normal_cdf(z_score))
    return max(0.0, min(1.0, 1.0 - p_value))


def clamp_score(value: float) -> float:
    return max(0.0, min(1.0, value))
