interface Stat {
  label: string;
  value: string;
  sub: string;
}

export default function StatCards({ stats }: { stats: Stat[] }) {
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
