"use client";

import { useCallback, useSyncExternalStore } from "react";

type PostHogClient = {
  isFeatureEnabled?: (key: string) => boolean | undefined;
  onFeatureFlags?: (cb: (flags: string[]) => void) => void;
};

declare global {
  interface Window {
    posthog?: PostHogClient;
  }
}

function readFlag(key: string): boolean {
  if (typeof window === "undefined") return false;
  const overrideKey = `ff_${key}`;
  try {
    const urlOverride = new URLSearchParams(window.location.search).get(overrideKey);
    if (urlOverride === "1" || urlOverride === "true") return true;
    if (urlOverride === "0" || urlOverride === "false") return false;
    if (localStorage.getItem(overrideKey) === "1") return true;
  } catch {
    // URL / localStorage unavailable — fall through to PostHog.
  }
  return Boolean(window.posthog?.isFeatureEnabled?.(key));
}

function persistUrlOverride(key: string): void {
  if (typeof window === "undefined") return;
  const overrideKey = `ff_${key}`;
  try {
    const urlOverride = new URLSearchParams(window.location.search).get(overrideKey);
    if (urlOverride === "1" || urlOverride === "true") {
      localStorage.setItem(overrideKey, "1");
    } else if (urlOverride === "0" || urlOverride === "false") {
      localStorage.removeItem(overrideKey);
    }
  } catch {
    // No-op when storage / URL parsing is unavailable.
  }
}

/**
 * Reads a PostHog feature flag client-side. Returns false during SSR and
 * before the SDK has loaded, so callers always render the control branch
 * by default and only flip to the variant once the flag resolves truthy.
 *
 * Supports a `?ff_<key>=1|0` URL override (persisted to localStorage) so the
 * variant is reachable in QA / preview environments without forcing a
 * PostHog rollout.
 */
export function useFeatureFlag(key: string): boolean {
  const subscribe = useCallback(
    (notify: () => void) => {
      if (typeof window === "undefined") return () => {};
      persistUrlOverride(key);
      window.posthog?.onFeatureFlags?.(notify);
      return () => {
        // posthog-js does not expose an unsubscribe; readFlag is idempotent.
      };
    },
    [key],
  );

  return useSyncExternalStore(
    subscribe,
    () => readFlag(key),
    () => false,
  );
}

export const FLAGS = {
  signupPasswordInputV2: "exp_d35934b2debc",
} as const;
