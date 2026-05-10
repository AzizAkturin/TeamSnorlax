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
  working: "Working",
  waiting_for_user: "Waiting",
  finished: "Finished",
  logged: "Logged",
  unknown: "Unknown",
};

const STATUS_DOT: Record<string, string> = {
  running: "bg-success pulse-dot",
  working: "bg-success pulse-dot",
  blocked: "bg-warning",
  paused: "bg-muted-foreground",
  waiting_for_user: "bg-warning",
  stopped: "bg-danger",
  completed: "bg-accent",
  finished: "bg-accent",
  logged: "bg-muted-foreground/60",
  unknown: "bg-muted-foreground/60",
};

const EXP_STATUS_LABEL: Record<string, string> = {
  active: "Live",
  shipped: "Shipped",
  killed: "Killed",
};

const EXP_STATUS_TONE: Record<string, string> = {
  active: "text-foreground/85 border-border",
  shipped: "text-success border-success/30",
  killed: "text-danger border-danger/30",
};

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function GitHubMark({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function StatusBadge({ status }: { status: string }) {
  const label = STATUS_LABEL[status] ?? status;
  const dot = STATUS_DOT[status] ?? "bg-muted-foreground";
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
      <span className={`size-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}

function ExperimentBadge({ status }: { status: string }) {
  const label = EXP_STATUS_LABEL[status];
  if (!label) return null;
  const tone = EXP_STATUS_TONE[status] ?? "text-foreground/85 border-border";
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-[0.14em] border ${tone}`}
    >
      {label}
    </span>
  );
}

function elapsed(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

function formatPercent(value: number | null | undefined, digits = 1) {
  if (value == null || Number.isNaN(value)) return "—";
  return `${(value * 100).toFixed(digits)}%`;
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

function MetaPair({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <span className="inline-flex items-baseline gap-1.5 text-xs text-muted-foreground">
      <span className="text-[10px] uppercase tracking-[0.18em]">{label}</span>
      <span className={`text-foreground/85 ${mono ? "font-mono" : ""}`}>{value}</span>
    </span>
  );
}

function SessionRow({ session }: { session: Session }) {
  const exp = session.experiment;
  const element = session.top_rage_click ?? session.drop_off_path;
  const triggerParts: string[] = [];
  if (session.sessions_analyzed != null) triggerParts.push(`${session.sessions_analyzed} sessions`);
  if (session.avg_time_on_page_seconds != null) triggerParts.push(`${session.avg_time_on_page_seconds}s avg`);

  const titleText = exp?.hypothesis ?? session.title ?? "Awaiting hypothesis…";

  return (
    <li className="enter">
      <a
        href={session.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block hover-overlay-row rounded-lg px-3 sm:px-5 py-4 transition-colors focus-ring"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 space-y-1.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <StatusBadge status={session.status} />
              {exp && <ExperimentBadge status={exp.status} />}
              <span className="text-[11px] text-muted-foreground/70">·</span>
              <span className="text-[11px] text-muted-foreground/70 tabular-nums">{elapsed(session.created_at)} ago</span>
              <span className="text-[11px] text-muted-foreground/70">·</span>
              <span className="text-[11px] font-mono text-muted-foreground/70 truncate max-w-[160px]">
                {session.session_id}
              </span>
            </div>
            <p className="text-sm sm:text-[15px] leading-snug text-foreground">
              <span className="hover-underline">{titleText}</span>
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-0.5">
              {element && <MetaPair label="Element" value={element} mono />}
              {exp?.flag_key && <MetaPair label="Flag" value={exp.flag_key} mono />}
              {exp?.confidence != null && (
                <MetaPair label="Conf" value={formatPercent(exp.confidence)} mono />
              )}
              {exp?.relative_lift != null && (
                <MetaPair label="Lift" value={formatPercent(exp.relative_lift)} mono />
              )}
              {triggerParts.length > 0 && <MetaPair label="Signal" value={triggerParts.join(" · ")} />}
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 pt-0.5">
            {session.pr_url && (
              <a
                href={session.pr_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs text-foreground/85 hover:text-foreground"
              >
                <GitHubMark className="text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="hover-underline">
                  {session.pr_number ? `PR #${session.pr_number}` : "Open PR"}
                </span>
              </a>
            )}
            <ArrowUpRight className="size-3.5 text-muted-foreground hover-slide-in" />
          </div>
        </div>
      </a>
    </li>
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
    if (tab === "active")
      return sessions.filter((s) =>
        ["running", "blocked", "paused", "working", "waiting_for_user"].includes(s.status),
      );
    if (tab === "experiments") return sessions.filter((s) => s.experiment);
    return sessions;
  }, [tab, sessions]);

  const tabs: Array<{ id: typeof tab; label: string; count: number }> = [
    { id: "active", label: "Active", count: counts.active },
    { id: "experiments", label: "Experiments", count: counts.experiments },
    { id: "all", label: "All", count: counts.total },
  ];

  return (
    <div className="min-h-dvh bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
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
          <div className="hidden sm:flex items-center gap-7">
            <HeaderStat label="Active" value={counts.active} />
            <HeaderStat label="Experiments" value={counts.experiments} />
            <HeaderStat label="Shipped" value={counts.shipped} accent="success" />
            <HeaderStat label="Killed" value={counts.killed} accent="danger" />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16 page-stagger">
        <section className="mb-12 lg:mb-14 enter-group max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 enter">live</p>
          <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.1] enter">
            Every Devin run, every running experiment, every verdict.
          </h1>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed enter">
            The monitor cron lands hypotheses on <code className="font-mono text-foreground/80">main</code>{" "}
            behind a flag. The judge cron rolls winners forward and cuts losers. Every row below is sourced
            live from Insforge and the Devin API.
          </p>
        </section>

        <section className="enter-group">
          <div className="flex items-center justify-between gap-4 mb-3 enter">
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">runs</h2>
            <div className="flex items-center gap-3">
              <div role="tablist" className="inline-flex items-center bg-elevated/60 border border-border rounded-md p-0.5">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={tab === t.id}
                    onClick={() => setTab(t.id)}
                    className={`relative inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium rounded-[5px] transition-colors focus-ring ${
                      tab === t.id
                        ? "bg-background text-foreground border border-border"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t.label}
                    <span className="text-[10px] font-mono text-muted-foreground tabular-nums">{t.count}</span>
                  </button>
                ))}
              </div>
              <span className="text-[10px] text-muted-foreground tabular-nums">
                {error ? (
                  <span className="text-danger">{error}</span>
                ) : loading ? (
                  "loading…"
                ) : lastFetch ? (
                  <>updated <span className="font-mono">{elapsed(lastFetch.toISOString())}</span> ago</>
                ) : null}
              </span>
            </div>
          </div>

          <hr className="border-border origin-left enter-grow-x" />

          {visible.length === 0 ? (
            <div className="mt-6 rounded-lg border border-dashed border-border bg-elevated/40 p-12 text-center enter">
              <p className="text-sm font-medium">No sessions in this view yet.</p>
              <p className="text-xs text-muted-foreground mt-1.5">
                {loading
                  ? "Pulling from Devin and Insforge…"
                  : "Once the next monitor cron fires, Devin sessions and experiment rows will appear here."}
              </p>
            </div>
          ) : (
            <ul className="mt-2 -mx-3 sm:-mx-5 divide-y divide-border/60 enter-list">
              {visible.map((s) => (
                <SessionRow key={s.session_id} session={s} />
              ))}
            </ul>
          )}
        </section>

        <footer className="mt-16 enter-group">
          <hr className="border-border origin-left enter-grow-x" />
          <div className="flex items-center justify-between pt-8 enter">
            <span className="text-xs text-muted-foreground">
              tensorlake · posthog · insforge · nia · devin
            </span>
            <span className="text-xs font-mono text-muted-foreground tabular-nums">
              {counts.total} runs tracked
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
