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

const STATUS_LABEL: Record<string, string> = {
  running: "Running",
  blocked: "Blocked",
  paused: "Paused",
  stopped: "Stopped",
  completed: "Completed",
  logged: "Logged",
  unknown: "Unknown",
};

const STATUS_DOT: Record<string, string> = {
  running: "bg-success pulse-dot",
  blocked: "bg-warning",
  paused: "bg-muted-foreground",
  stopped: "bg-danger",
  completed: "bg-accent",
  logged: "bg-muted-foreground/60",
  unknown: "bg-muted-foreground/60",
};

const EXP_STATUS_LABEL: Record<string, string> = {
  active: "Live experiment",
  shipped: "Shipped",
  killed: "Killed",
};

const EXP_STATUS_TONE: Record<string, string> = {
  active: "text-foreground border-border",
  shipped: "text-success border-success/30",
  killed: "text-danger border-danger/30",
};

function StatusBadge({ status }: { status: string }) {
  const label = STATUS_LABEL[status] ?? status;
  const dot = STATUS_DOT[status] ?? "bg-muted-foreground";
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <span className={`size-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}

function ExperimentBadge({ status }: { status: string }) {
  const label = EXP_STATUS_LABEL[status];
  if (!label) return null;
  const tone = EXP_STATUS_TONE[status] ?? "text-foreground border-border";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-[0.12em] border ${tone}`}>
      {label}
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

function StatRow({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-1.5 text-sm">
      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground shrink-0">{label}</span>
      <span className={`text-foreground/90 truncate text-right ${mono ? "font-mono text-xs" : ""}`}>{value}</span>
    </div>
  );
}

function HeaderStat({ label, value, accent }: { label: string; value: number; accent?: "success" | "danger" | "default" }) {
  const tone =
    accent === "success" ? "text-success" : accent === "danger" ? "text-danger" : "text-foreground";
  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <span className={`text-base font-semibold tabular-nums ${tone}`}>{value}</span>
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
    <article className="group relative bg-elevated/60 border border-border rounded-xl p-5 transition-colors hover:border-ring hover:bg-elevated">
      <header className="flex items-start justify-between gap-3 pb-4 border-b border-border">
        <div className="space-y-2 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <StatusBadge status={session.status} />
            {exp && <ExperimentBadge status={exp.status} />}
            <span className="text-xs text-muted-foreground/70">·</span>
            <span className="text-xs text-muted-foreground/70">{elapsed(session.created_at)}</span>
          </div>
          <p className="text-[11px] font-mono text-muted-foreground/80 truncate">{session.session_id}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {session.pr_url && (
            <a
              href={session.pr_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground/85 hover:text-foreground hover-underline"
            >
              {session.pr_number ? `PR #${session.pr_number}` : "PR"}
            </a>
          )}
          <a
            href={session.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border hover:border-ring rounded-md px-2.5 py-1 transition-colors focus-ring"
          >
            Open in Devin
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-4">
        <StatRow label="Element" value={element ?? "—"} mono />
        <StatRow label="Trigger" value={triggerParts.length > 0 ? triggerParts.join(" · ") : "—"} />
        {exp && (
          <>
            <StatRow label="Flag" value={exp.flag_key ?? "—"} mono />
            <StatRow label="Metric" value={exp.primary_metric ?? "—"} />
            <StatRow label="Confidence" value={formatPercent(exp.confidence)} mono />
            <StatRow label="Lift" value={formatPercent(exp.relative_lift)} mono />
          </>
        )}
      </div>

      {(exp?.hypothesis || session.title) && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Hypothesis</p>
          <p className="text-sm text-foreground/90 leading-relaxed">
            {exp?.hypothesis ?? session.title}
          </p>
        </div>
      )}
    </article>
  );
}

export default function SessionsDashboard() {
  const [tab, setTab] = useState<"active" | "experiments" | "all">("active");
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastFetch, setLastFetch] = useState<Date | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const r = await fetch("/api/sessions", { cache: "no-store" });
        if (!r.ok) throw new Error(`API ${r.status}`);
        const json = (await r.json()) as ApiResponse;
        if (!cancelled) {
          setData(json);
          setLastFetch(new Date());
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
    if (tab === "active") return sessions.filter((s) => ["running", "blocked", "paused"].includes(s.status));
    if (tab === "experiments") return sessions.filter((s) => s.experiment);
    return sessions;
  }, [tab, sessions]);

  const tabs: Array<{ id: typeof tab; label: string; count: number }> = [
    { id: "active", label: "Active", count: counts.active },
    { id: "experiments", label: "Experiments", count: counts.experiments },
    { id: "all", label: "All sessions", count: counts.total },
  ];

  return (
    <div className="min-h-dvh bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative size-7 rounded-md border border-border flex items-center justify-center overflow-hidden">
              <span className="absolute inset-[1px] rounded-[5px] bg-gradient-to-br from-foreground/[0.08] to-transparent" />
              <span className="relative size-1.5 rounded-full bg-success pulse-dot" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-medium tracking-tight">autoresearch</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">devin · console</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-8">
            <HeaderStat label="Active" value={counts.active} />
            <HeaderStat label="Experiments" value={counts.experiments} />
            <HeaderStat label="Shipped" value={counts.shipped} accent="success" />
            <HeaderStat label="Killed" value={counts.killed} accent="danger" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-10 lg:py-14 page-stagger">
        <section className="mb-10 lg:mb-12 enter">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">live</p>
          <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight max-w-2xl">
            Every Devin run, every running experiment, every verdict.
          </h1>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">
            The monitor cron lands hypotheses on <code className="font-mono text-foreground/80">main</code> behind a flag. The
            judge cron rolls winners forward and cuts losers. This page reflects both,
            sourced live from Insforge and the Devin API.
          </p>
        </section>

        <div className="flex items-center justify-between gap-4 mb-6 enter">
          <div role="tablist" className="inline-flex items-center bg-elevated/60 border border-border rounded-md p-0.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`relative inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-[5px] transition-colors focus-ring ${
                  tab === t.id
                    ? "bg-background text-foreground shadow-[0_1px_0_rgba(255,255,255,0.04)] border border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
                <span className="text-[10px] font-mono text-muted-foreground tabular-nums">{t.count}</span>
              </button>
            ))}
          </div>
          <div className="text-[11px] text-muted-foreground tabular-nums">
            {error ? (
              <span className="text-danger">{error}</span>
            ) : loading ? (
              "Loading…"
            ) : lastFetch ? (
              <span>
                Updated <span className="font-mono">{elapsed(lastFetch.toISOString())}</span> · refresh 30s
              </span>
            ) : null}
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-elevated/40 p-12 text-center enter">
            <p className="text-sm font-medium">No sessions in this view yet.</p>
            <p className="text-xs text-muted-foreground mt-1.5">
              {loading
                ? "Pulling from Devin and Insforge…"
                : "Once the next monitor cron fires, Devin sessions and experiment rows will appear here."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 enter-list">
            {visible.map((s) => (
              <div key={s.session_id} className="enter">
                <SessionCard session={s} />
              </div>
            ))}
          </div>
        )}

        <footer className="mt-16 pt-8 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Tensorlake · PostHog · Insforge · Nia · Devin</span>
          <span className="font-mono">{counts.total} runs tracked</span>
        </footer>
      </main>
    </div>
  );
}
