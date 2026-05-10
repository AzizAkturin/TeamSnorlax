import { createClient } from "@insforge/sdk";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardTopBar from "@/components/DashboardTopBar";
import StatCards from "@/components/StatCards";
import AgentRunsTable from "@/components/AgentRunsTable";

const insforge = createClient({
  baseUrl: process.env.INSFORGE_URL!,
  anonKey: process.env.INSFORGE_API_KEY!,
});

async function getDashboardData() {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

  const [eventsRes, runsRes] = await Promise.all([
    insforge.database
      .from("analytics_events")
      .select("session_id, time_on_page, type, element, path, timestamp")
      .gte("timestamp", thirtyDaysAgo)
      .order("timestamp", { ascending: false }),
    insforge.database
      .from("agent_runs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20),
  ]);

  const events = (eventsRes.data ?? []) as AnalyticsRow[];
  const agentRuns = (runsRes.data ?? []) as AgentRunRow[];

  const uniqueSessions = new Set(events.map((e) => e.session_id)).size;

  const timings = events.filter((e) => e.time_on_page != null).map((e) => e.time_on_page!);
  const avgSeconds =
    timings.length > 0 ? Math.round(timings.reduce((a, b) => a + b, 0) / timings.length) : 0;

  const rageClicks = events.filter((e) => e.type === "rage_click").length;

  const recentEvents = events.slice(0, 6).map((e) => {
    if (e.type === "rage_click") return `Rage click on "${e.element ?? e.path}"`;
    if (e.type === "exit") return `User exited from ${e.path}`;
    if (e.type === "click" && e.element) return `Click on "${e.element}" at ${e.path}`;
    return `${e.type} event on ${e.path}`;
  });

  return { uniqueSessions, avgSeconds, rageClicks, agentRuns, recentEvents, totalEvents: events.length };
}

interface AnalyticsRow {
  session_id: string;
  time_on_page: number | null;
  type: string;
  element: string | null;
  path: string;
  timestamp: string;
}

interface AgentRunRow {
  id: string;
  sessions_analyzed: number | null;
  avg_time_on_page_seconds: number | null;
  top_rage_click: string | null;
  drop_off_path: string | null;
  devin_session_id: string | null;
  devin_session_url: string | null;
  pr_number: number | null;
  pr_url: string | null;
  status: string | null;
  created_at: string | null;
}

function fmtDuration(s: number) {
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

export default async function DashboardPage() {
  const { uniqueSessions, avgSeconds, rageClicks, agentRuns, recentEvents, totalEvents } =
    await getDashboardData();

  const stats = [
    {
      label: "Sessions (30d)",
      value: uniqueSessions > 0 ? uniqueSessions.toLocaleString() : "—",
      sub: `${totalEvents.toLocaleString()} events tracked`,
    },
    {
      label: "Avg time on page",
      value: avgSeconds > 0 ? fmtDuration(avgSeconds) : "—",
      sub: "across all sessions",
    },
    {
      label: "Rage clicks (30d)",
      value: rageClicks > 0 ? rageClicks.toLocaleString() : "—",
      sub: "user frustration signals",
    },
    {
      label: "Agent runs",
      value: agentRuns.length > 0 ? agentRuns.length.toLocaleString() : "—",
      sub: "UX experiments run",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardTopBar title="Overview" />
        <main className="flex-1 p-8 space-y-8">
          <StatCards stats={stats} />
          <AgentRunsTable runs={agentRuns} />
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              Recent activity
            </h2>
            {recentEvents.length === 0 ? (
              <p className="text-sm text-gray-400 italic">No events recorded yet.</p>
            ) : (
              <div className="space-y-4">
                {recentEvents.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
