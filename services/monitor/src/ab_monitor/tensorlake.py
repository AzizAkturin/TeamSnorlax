from __future__ import annotations

from collections.abc import Callable
from typing import Any, TypeVar

F = TypeVar("F", bound=Callable[..., Any])

try:
    from tensorlake.applications import Image, application, function
except ImportError:

    class Image:
        def run(self, *_args: Any, **_kwargs: Any) -> "Image":
            return self

    def function(*_args: Any, **_kwargs: Any) -> Callable[[F], F]:
        def decorator(func: F) -> F:
            return func

        return decorator

    def application(*_args: Any, **_kwargs: Any) -> Callable[[F], F]:
        def decorator(func: F) -> F:
            return func

        return decorator
