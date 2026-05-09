import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-24 pb-20">
      <span className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4">
        Now in public beta
      </span>
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 max-w-3xl leading-tight">
        The analytics platform your team will actually use
      </h1>
      <p className="mt-6 text-lg text-gray-500 max-w-xl">
        Meridian connects your data sources, surfaces insights automatically, and gets out of your way so you can make faster decisions.
      </p>
      <div className="flex gap-4 mt-10">
        <Link
          href="/signup"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          data-ph-id="hero-start-free-trial"
        >
          Start free trial
        </Link>
        <Link
          href="#features"
          className="border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          data-ph-id="hero-see-features"
        >
          See how it works
        </Link>
      </div>
    </section>
  );
}
