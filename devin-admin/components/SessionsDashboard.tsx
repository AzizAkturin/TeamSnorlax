"use client";

import { useEffect, useMemo, useState } from "react";

interface ExperimentInfo {
  spec_id: string;
  status: string;
  flag_key: string | null;
  hypothesis: string | null;
  variant_name: string | null;
  primary_metric: string | null;
  confidence: number | null;
  relative_lift: number | null;
  decided_at: string | null;
}

interface Session {
  session_id: string;
  status: string;
  url: string;
  title: string | null;
  created_at: string;
  pr_number: number | null;
  pr_url: string | null;
  top_rage_click: string | null;
  drop_off_path: string | null;
  sessions_analyzed: number | null;
  avg_time_on_page_seconds: number | null;
  experiment: ExperimentInfo | null;
}

interface ApiResponse {
  sessions: Session[];
  all: Session[];
  counts: {
    total: number;
    active: number;
    experiments: number;
    shipped: number;
    killed: number;
  };
}

const STATUS_CONFIG: Record<string, { label: string; dot: string; badge: string }> = {
  running: { label: "Running", dot: "bg-emerald-500 animate-pulse", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  blocked: { label: "Blocked", dot: "bg-amber-400", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  paused: { label: "Paused", dot: "bg-gray-400", badge: "bg-gray-50 text-gray-600 border-gray-200" },
  stopped: { label: "Stopped", dot: "bg-red-400", badge: "bg-red-50 text-red-600 border-red-200" },
  completed: { label: "Completed", dot: "bg-blue-400", badge: "bg-blue-50 text-blue-700 border-blue-200" },
  logged: { label: "Logged", dot: "bg-gray-300", badge: "bg-gray-50 text-gray-500 border-gray-200" },
  unknown: { label: "Unknown", dot: "bg-gray-300", badge: "bg-gray-50 text-gray-500 border-gray-200" },
};

const EXP_STATUS_CONFIG: Record<string, { label: string; badge: string }> = {
  active: { label: "Experiment running", badge: "bg-blue-50 text-blue-700 border-blue-200" },
  shipped: { label: "Shipped", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  killed: { label: "Killed", badge: "bg-rose-50 text-rose-700 border-rose-200" },
};

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status] ?? { label: status, dot: "bg-gray-400", badge: "bg-gray-50 text-gray-500 border-gray-200" };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${cfg.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

function ExperimentBadge({ status }: { status: string }) {
  const cfg = EXP_STATUS_CONFIG[status];
  if (!cfg) return null;
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${cfg.badge}`}>
      {cfg.label}
    </span>
  );
}

function elapsed(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function formatPercent(value: number | null | undefined, digits = 1) {
  if (value == null || Number.isNaN(value)) return "—";
  return `${(value * 100).toFixed(digits)}%`;
}

function StatTile({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl bg-gray-50 p-3.5">
      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  );
}

function SessionCard({ session }: { session: Session }) {
  const exp = session.experiment;
  const element = session.top_rage_click ?? session.drop_off_path;
  const triggerParts: string[] = [];
  if (session.sessions_analyzed != null) triggerParts.push(`${session.sessions_analyzed} sessions`);
  if (session.avg_time_on_page_seconds != null) triggerParts.push(`avg ${session.avg_time_on_page_seconds}s on page`);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5 hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <StatusBadge status={session.status} />
            {exp && <ExperimentBadge status={exp.status} />}
            <span className="text-xs text-gray-400">{elapsed(session.created_at)}</span>
          </div>
          <p className="text-xs font-mono text-gray-400 truncate">{session.session_id}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {session.pr_url && (
            <a
              href={session.pr_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              {session.pr_number ? `PR #${session.pr_number}` : "PR"}
            </a>
          )}
          <a
            href={session.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors"
          >
            Open in Devin
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatTile label="UI Element" value={element ?? "—"} />
        <StatTile label="Trigger data" value={triggerParts.length > 0 ? triggerParts.join(" · ") : "—"} />
      </div>

      {exp && (
        <div className="grid grid-cols-3 gap-3">
          <StatTile label="Flag" value={exp.flag_key ?? "—"} />
          <StatTile label="Confidence" value={formatPercent(exp.confidence)} />
          <StatTile label="Lift" value={formatPercent(exp.relative_lift)} />
        </div>
      )}

      {(session.title || exp?.hypothesis) && (
        <div className="rounded-xl bg-gray-900 px-4 py-3">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Hypothesis</p>
          <p className="text-sm text-gray-100 leading-snug">{exp?.hypothesis ?? session.title}</p>
        </div>
      )}
    </div>
  );
}

function HeaderStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-right">
      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">{label}</p>
      <p className="text-sm font-semibold text-gray-900 tabular-nums">{value}</p>
    </div>
  );
}

export default function SessionsDashboard() {
  const [tab, setTab] = useState<"active" | "all" | "experiments">("active");
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const r = await fetch("/api/sessions", { cache: "no-store" });
        if (!r.ok) throw new Error(`API ${r.status}`);
        const json = (await r.json()) as ApiResponse;
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    const id = setInterval(load, 30000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const sessions = data?.all ?? [];
  const counts = data?.counts ?? { total: 0, active: 0, experiments: 0, shipped: 0, killed: 0 };

  const visible = useMemo(() => {
    if (tab === "active")
      return sessions.filter((s) => ["running", "blocked", "paused"].includes(s.status));
    if (tab === "experiments") return sessions.filter((s) => s.experiment);
    return sessions;
  }, [tab, sessions]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="2" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <h1 className="text-sm font-semibold text-gray-900">Autoresearch · Devin</h1>
        </div>
        <div className="flex items-center gap-6">
          <HeaderStat label="Active" value={counts.active} />
          <HeaderStat label="Experiments" value={counts.experiments} />
          <HeaderStat label="Shipped" value={counts.shipped} />
          <HeaderStat label="Killed" value={counts.killed} />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-8 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit">
            {(["active", "experiments", "all"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  tab === t ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {t === "active" ? "Active" : t === "experiments" ? "Experiments" : "All sessions"}
              </button>
            ))}
          </div>
          {loading && <span className="text-xs text-gray-400">Loading…</span>}
          {error && <span className="text-xs text-rose-600">{error}</span>}
        </div>

        {visible.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <p className="text-sm font-medium text-gray-900">No sessions to show</p>
            <p className="text-xs text-gray-500 mt-1">
              {loading
                ? "Fetching from Devin and Insforge…"
                : "Once the monitor cron fires, runs will appear here."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {visible.map((s) => (
              <SessionCard key={s.session_id} session={s} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
