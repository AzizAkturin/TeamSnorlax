"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { useFeatureFlagEnabled } from "posthog-js/react";

interface Stat {
  label: string;
  value: string;
  sub: string;
}

const FLAG_KEY = "exp_05ff6ad8f66e";

export default function StatCards({ stats }: { stats: Stat[] }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (key && !posthog.__loaded) {
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      });
    }
  }, []);

  const variant = useFeatureFlagEnabled(FLAG_KEY) === true;

  if (variant) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <button
            key={stat.label}
            type="button"
            className="text-left bg-white border border-gray-100 rounded-xl p-6 shadow-sm cursor-pointer transition-[border-color,box-shadow,transform] duration-150 hover:border-gray-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 active:scale-[0.99]"
            data-ph-id={`stat-card-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              {stat.label}
            </p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <p className="mt-1 text-xs text-gray-400">{stat.sub}</p>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
          data-ph-id={`stat-card-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
            {stat.label}
          </p>
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          <p className="mt-1 text-xs text-gray-400">{stat.sub}</p>
        </div>
      ))}
    </div>
  );
}
