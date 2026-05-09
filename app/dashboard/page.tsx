import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardTopBar from "@/components/DashboardTopBar";
import StatCards from "@/components/StatCards";
import UserTable from "@/components/UserTable";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardTopBar title="Overview" />
        <main className="flex-1 p-8 space-y-8">
          <StatCards />
          <UserTable />
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              Recent activity
            </h2>
            <div className="space-y-4">
              {[
                'Dashboard "Q2 Revenue" was updated',
                "New data source connected: Snowflake",
                "Anomaly detected in checkout funnel",
                'Report "Weekly Actives" exported',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
