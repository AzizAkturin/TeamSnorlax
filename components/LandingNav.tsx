'use client';

import Link from "next/link";

export default function LandingNav() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
      <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
        Meridian
      </Link>
      <div className="flex items-center gap-6">
        <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
          Features
        </Link>
        <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
          Pricing
        </Link>
        <Link href="/signin" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" data-ph-id="nav-signin">
          Sign in
        </Link>
        <Link
          href="/signup"
          className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          data-ph-id="nav-get-started"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
}
