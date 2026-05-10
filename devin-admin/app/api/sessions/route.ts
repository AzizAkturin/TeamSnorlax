import { createClient } from "@insforge/sdk";
import type { NextRequest } from "next/server";

const DEVIN_API_KEY = process.env.DEVIA_API_KEY!;
const DEVIN_BASE_URL = process.env.DEVIA_BASE_URL ?? "https://api.devin.ai/v1";

const insforge = createClient({
  baseUrl: process.env.INSFORGE_URL!,
  anonKey: process.env.INSFORGE_API_KEY!,
});

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(_req: NextRequest) {
  const [devinRes, agentRunsRes, experimentsRes] = await Promise.all([
    fetch(`${DEVIN_BASE_URL}/sessions`, {
      headers: { Authorization: `Bearer ${DEVIN_API_KEY}` },
      cache: "no-store",
    }),
    insforge.database
      .from("agent_runs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
    insforge.database
      .from("experiments")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
  ]);

  const devinData = devinRes.ok ? await devinRes.json() : { sessions: [] };
  const rawSessions: DevinSession[] = devinData.sessions ?? devinData ?? [];

  const dbRuns: AgentRun[] = (agentRunsRes.data as AgentRun[] | null) ?? [];
  const runsBySessionId = new Map(
    dbRuns.filter((r) => r.devin_session_id).map((r) => [r.devin_session_id!, r])
  );

  const experiments: Experiment[] = (experimentsRes.data as Experiment[] | null) ?? [];
  const expBySessionId = new Map(
    experiments.filter((e) => e.devin_session_id).map((e) => [e.devin_session_id!, e])
  );

  // Synthesize one Session row per known source. Devin sessions stay primary;
  // experiments without a Devin session id (e.g. dispatch failed) still surface.
  const sessionIds = new Set<string>();
  rawSessions.forEach((s) => sessionIds.add(s.session_id));
  experiments.forEach((e) => {
    if (e.devin_session_id) sessionIds.add(e.devin_session_id);
  });

  const merged: MergedSession[] = Array.from(sessionIds).map((sessionId) => {
    const live = rawSessions.find((s) => s.session_id === sessionId);
    const run = runsBySessionId.get(sessionId);
    const exp = expBySessionId.get(sessionId);
    const spec = (exp?.spec ?? null) as SpecPayload | null;
    const verdict = (exp?.verdict ?? null) as VerdictPayload | null;

    return {
      session_id: sessionId,
      status: live?.status ?? (exp?.status ? "logged" : "unknown"),
      url: live?.url ?? exp?.devin_session_url ?? `https://app.devin.ai/sessions/${sessionId}`,
      title: live?.title ?? spec?.hypothesis ?? null,
      created_at: live?.created_at ?? exp?.created_at ?? new Date().toISOString(),
      updated_at: live?.updated_at ?? null,
      pr_number: run?.pr_number ?? null,
      pr_url: run?.pr_url ?? exp?.pr_url ?? null,
      top_rage_click: run?.top_rage_click ?? null,
      drop_off_path: run?.drop_off_path ?? null,
      sessions_analyzed: run?.sessions_analyzed ?? null,
      avg_time_on_page_seconds: run?.avg_time_on_page_seconds ?? null,
      experiment: exp
        ? {
            spec_id: exp.spec_id,
            status: exp.status,
            flag_key: exp.posthog_flag_key,
            hypothesis: spec?.hypothesis ?? null,
            variant_name: spec?.variant_name ?? null,
            primary_metric: spec?.primary_metric ?? null,
            confidence: verdict?.confidence ?? null,
            relative_lift: verdict?.relative_lift ?? null,
            decided_at: exp.decided_at ?? null,
          }
        : null,
    };
  });

  merged.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  const active = merged.filter(
    (s) => s.status === "running" || s.status === "blocked" || s.status === "paused"
  );

  return Response.json({
    sessions: active,
    all: merged,
    counts: {
      total: merged.length,
      active: active.length,
      experiments: experiments.length,
      shipped: experiments.filter((e) => e.status === "shipped").length,
      killed: experiments.filter((e) => e.status === "killed").length,
    },
  });
}

interface DevinSession {
  session_id: string;
  status: string;
  url?: string;
  title?: string;
  created_at: string;
  updated_at?: string;
}

interface AgentRun {
  id: string;
  devin_session_id?: string;
  pr_number?: number;
  pr_url?: string;
  top_rage_click?: string;
  drop_off_path?: string;
  sessions_analyzed?: number;
  avg_time_on_page_seconds?: number;
  status?: string;
}

interface Experiment {
  id: string;
  spec_id: string;
  status: string;
  spec: SpecPayload | null;
  verdict: VerdictPayload | null;
  posthog_flag_key: string | null;
  devin_session_id: string | null;
  devin_session_url: string | null;
  pr_url: string | null;
  decided_at: string | null;
  created_at: string;
}

interface SpecPayload {
  hypothesis?: string;
  variant_name?: string;
  user_change?: string;
  primary_metric?: string;
}

interface VerdictPayload {
  confidence?: number;
  relative_lift?: number;
  baseline_rate?: number;
  treatment_rate?: number;
  verdict?: string;
}

interface MergedSession {
  session_id: string;
  status: string;
  url: string;
  title: string | null;
  created_at: string;
  updated_at: string | null;
  pr_number: number | null;
  pr_url: string | null;
  top_rage_click: string | null;
  drop_off_path: string | null;
  sessions_analyzed: number | null;
  avg_time_on_page_seconds: number | null;
  experiment: {
    spec_id: string;
    status: string;
    flag_key: string | null;
    hypothesis: string | null;
    variant_name: string | null;
    primary_metric: string | null;
    confidence: number | null;
    relative_lift: number | null;
    decided_at: string | null;
  } | null;
}
