const testimonials = [
  {
    quote:
      "We replaced three separate BI tools with Meridian in a single afternoon. The anomaly alerts alone have saved us from two major incidents this quarter.",
    name: "Priya Nair",
    title: "Head of Data, NovaLabs",
    initials: "PN",
  },
  {
    quote:
      "Meridian is the first analytics product my non-technical teammates actually enjoy using. Dashboards that used to take a week now take an hour.",
    name: "Marcus Webb",
    title: "VP Engineering, BridgeCo",
    initials: "MW",
  },
  {
    quote:
      "The Snowflake connector was live in four minutes. Four minutes. The onboarding experience set the bar for every SaaS tool we evaluate going forward.",
    name: "Lena Kovač",
    title: "CTO, DataVolt",
    initials: "LK",
  },
];

export default function Testimonials() {
  return (
    <section className="px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Trusted by data-driven teams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm flex flex-col"
              data-ph-id={`testimonial-card-${i}`}
            >
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
