const stats = [
  { label: "Monthly active users", value: "24,891", change: "+12.4%", up: true },
  { label: "Revenue (MTD)", value: "$183,240", change: "+8.1%", up: true },
  { label: "Avg. session duration", value: "4m 32s", change: "-2.3%", up: false },
  { label: "Data sources connected", value: "17", change: "+3 this month", up: true },
];

export default function StatCards() {
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
          <p className={`mt-1 text-xs font-medium ${stat.up ? "text-green-600" : "text-red-500"}`}>
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
