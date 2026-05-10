"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import {
  PostHogProvider as PHProvider,
  useFeatureFlagEnabled,
} from "posthog-js/react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
const FLAG = "exp_27b8c4ec00be";

let didInit = false;

function DashboardCtaVariant() {
  const enabled = useFeatureFlagEnabled(FLAG);
  const pathname = usePathname();
  if (!enabled || pathname !== "/dashboard") return null;

  return (
    <div
      data-ph-id="dashboard-variant-banner"
      className="border-b border-gray-200 bg-white"
    >
      <div className="flex items-center justify-between gap-4 px-8 py-3">
        <p className="text-sm text-gray-600">
          Connect your site to start tracking sessions in real time.
        </p>
        <a
          href="/signup"
          data-ph-id="dashboard-variant-cta"
          className="inline-flex items-center rounded-md bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Get started
        </a>
      </div>
    </div>
  );
}

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (didInit || typeof window === "undefined" || !POSTHOG_KEY) return;
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: false,
      capture_pageleave: false,
    });
    didInit = true;
  }, []);

  return (
    <PHProvider client={posthog}>
      <DashboardCtaVariant />
      {children}
    </PHProvider>
  );
}
