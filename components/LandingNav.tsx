'use client';

import Link from "next/link";

export default function LandingNav() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
      <Link
        href="/"
        className="text-xl font-bold tracking-tight text-gray-900 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
      >
        Meridian
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="#features"
          className="text-sm text-gray-600 hover:text-gray-900 hover:underline underline-offset-4 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors"
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="text-sm text-gray-600 hover:text-gray-900 hover:underline underline-offset-4 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/signin"
          className="text-sm text-gray-600 hover:text-gray-900 hover:underline underline-offset-4 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors"
          data-ph-id="nav-signin"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="text-sm bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold shadow-sm hover:bg-amber-600 hover:shadow-md active:bg-amber-700 active:translate-y-px active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all"
          data-ph-id="nav-get-started"
          aria-label="Start free trial — no credit card required"
        >
          Start free trial
        </Link>
      </div>
    </nav>
  );
}
