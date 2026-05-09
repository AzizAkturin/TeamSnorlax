const features = [
  {
    icon: "◈",
    title: "Unified data sources",
    description:
      "Connect Postgres, Snowflake, BigQuery, and 40+ other sources in minutes. No ETL pipelines, no data copies.",
  },
  {
    icon: "⟐",
    title: "Automatic anomaly detection",
    description:
      "Meridian watches your metrics and alerts you the moment something looks off — before your customers notice.",
  },
  {
    icon: "◎",
    title: "Collaborative dashboards",
    description:
      "Build once, share everywhere. Dashboards stay in sync and permissions follow your existing team structure.",
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="px-8 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything you need, nothing you don&apos;t
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm"
            >
              <div className="text-2xl mb-4 text-amber-500">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
