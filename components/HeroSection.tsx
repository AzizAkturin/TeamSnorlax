import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-16 pb-12 sm:pt-20 sm:pb-14">
      <span className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4">
        Now in public beta
      </span>
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 max-w-3xl leading-tight">
        The analytics platform your team will actually use
      </h1>
      <p className="mt-6 text-lg text-gray-500 max-w-xl">
        Meridian connects your data sources, surfaces insights automatically, and gets out of your way so you can make faster decisions.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 items-center">
        <Link
          href="/signup"
          className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-7 py-3.5 rounded-lg text-base font-semibold shadow-sm hover:bg-amber-600 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all"
          data-ph-id="hero-start-free-trial"
        >
          Start free trial
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="#features"
          className="inline-flex items-center justify-center border border-gray-200 text-gray-700 px-6 py-3.5 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition-colors"
          data-ph-id="hero-see-features"
        >
          See how it works
        </Link>
      </div>
      <p className="mt-4 text-xs text-gray-400">
        14-day free trial · No credit card required
      </p>
    </section>
  );
}
