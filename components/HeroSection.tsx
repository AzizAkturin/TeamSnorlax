import Link from "next/link";
import CtaPendingHint from "./CtaPendingHint";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center px-6 pt-2 pb-8 sm:pt-3 sm:pb-10">
      <span className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3">
        Now in public beta
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl leading-tight">
        The analytics platform your team will actually use
      </h1>
      <p className="mt-4 text-lg text-gray-500 max-w-xl">
        Meridian connects your data sources, surfaces insights automatically, and gets out of your way so you can make faster decisions.
      </p>
      <div
        className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-500"
        aria-label="Customer trust signals"
      >
        <span className="flex items-center gap-1.5">
          <span className="text-amber-500" aria-hidden>★★★★★</span>
          <span>4.9 on G2 · 240+ reviews</span>
        </span>
        <span className="hidden sm:inline text-gray-300" aria-hidden>·</span>
        <span>Trusted by 1,200+ data teams at Linear, Ramp, Vercel</span>
        <span className="hidden sm:inline text-gray-300" aria-hidden>·</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
          SOC 2 Type II
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-4 items-center">
        <Link
          href="/signup"
          className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-7 py-3.5 rounded-lg text-base font-semibold shadow-sm hover:bg-amber-600 hover:shadow-md active:bg-amber-700 active:translate-y-px active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all"
          data-ph-id="hero-start-free-trial"
        >
          Start free trial
          <CtaPendingHint />
        </Link>
        <Link
          href="#features"
          className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-800 px-7 py-3.5 rounded-lg text-base font-semibold shadow-sm hover:border-gray-400 hover:bg-gray-50 hover:shadow-md active:bg-gray-100 active:translate-y-px active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-all"
          data-ph-id="hero-see-features"
        >
          See how it works <span aria-hidden>↓</span>
        </Link>
      </div>
      <p className="mt-3 text-xs text-gray-400">
        14-day free trial · No credit card required
      </p>
      <Link
        href="#features"
        aria-label="Scroll to features"
        data-ph-id="hero-scroll-cue"
        className="group mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:text-amber-600 hover:border-amber-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-all"
      >
        <span aria-hidden className="animate-bounce text-lg leading-none group-hover:text-amber-600">↓</span>
      </Link>
    </section>
  );
}
