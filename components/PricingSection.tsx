import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "For small teams getting started with data.",
    features: ["5 data sources", "10 dashboards", "7-day data retention", "Email support"],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "/mo",
    description: "For growing teams with more complex needs.",
    features: ["Unlimited data sources", "Unlimited dashboards", "90-day retention", "Anomaly alerts", "Priority support"],
    cta: "Get started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom requirements.",
    features: ["Everything in Growth", "SSO & SAML", "Custom retention", "Dedicated success manager", "SLA guarantee"],
    cta: "Contact sales",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Simple, transparent pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-7 border ${
                tier.popular
                  ? "border-amber-400 shadow-md ring-2 ring-amber-300"
                  : "border-gray-200"
              } relative`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <div className="mb-5">
                <h3 className="font-semibold text-gray-900 text-lg">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-400 text-sm">{tier.period}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
              </div>
              <ul className="space-y-2 mb-7">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-amber-500 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  tier.popular
                    ? "bg-gray-900 text-white hover:bg-gray-700"
                    : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
                data-ph-id={`pricing-cta-${tier.name.toLowerCase()}`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
