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
  created_at?: string;
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

interface DevinDetail {
  status?: string;
  status_enum?: string;
  title?: string | null;
  url?: string | null;
  created_at?: string | number;
  updated_at?: string | number | null;
  pull_request?: { url?: string } | null;
}

async function fetchDevinDetail(sessionId: string): Promise<DevinDetail | null> {
  if (!DEVIN_API_KEY) return null;
  try {
    const res = await fetch(`${DEVIN_BASE_URL}/sessions/${sessionId}`, {
      headers: { Authorization: `Bearer ${DEVIN_API_KEY}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as DevinDetail;
  } catch {
    return null;
  }
}

function isoFromDevin(value: string | number | null | undefined): string | null {
  if (value == null) return null;
  if (typeof value === "number") return new Date(value * (value < 1e12 ? 1000 : 1)).toISOString();
  return value;
}

export async function GET(_req: NextRequest) {
  const [agentRunsRes, experimentsRes] = await Promise.all([
    insforge.database.from("agent_runs").select("*").order("created_at", { ascending: false }).limit(100),
    insforge.database.from("experiments").select("*").order("created_at", { ascending: false }).limit(100),
  ]);

  const dbRuns: AgentRun[] = (agentRunsRes.data as AgentRun[] | null) ?? [];
  const experiments: Experiment[] = (experimentsRes.data as Experiment[] | null) ?? [];

  const sessionIds = new Set<string>();
  dbRuns.forEach((r) => r.devin_session_id && sessionIds.add(r.devin_session_id));
  experiments.forEach((e) => e.devin_session_id && sessionIds.add(e.devin_session_id));

  const detailEntries = await Promise.all(
    Array.from(sessionIds).map(async (id) => [id, await fetchDevinDetail(id)] as const),
  );
  const detail = new Map<string, DevinDetail | null>(detailEntries);

  const runsBySessionId = new Map(
    dbRuns.filter((r) => r.devin_session_id).map((r) => [r.devin_session_id!, r]),
  );
  const expBySessionId = new Map(
    experiments.filter((e) => e.devin_session_id).map((e) => [e.devin_session_id!, e]),
  );

  const merged = Array.from(sessionIds).map((sessionId) => {
    const live = detail.get(sessionId) ?? null;
    const run = runsBySessionId.get(sessionId);
    const exp = expBySessionId.get(sessionId);
    const spec = (exp?.spec ?? null) as SpecPayload | null;
    const verdict = (exp?.verdict ?? null) as VerdictPayload | null;

    return {
      session_id: sessionId,
      status: live?.status ?? (exp?.status ? "logged" : "unknown"),
      url: live?.url ?? exp?.devin_session_url ?? `https://app.devin.ai/sessions/${sessionId}`,
      title: live?.title ?? spec?.hypothesis ?? null,
      created_at:
        isoFromDevin(live?.created_at) ??
        run?.created_at ??
        exp?.created_at ??
        new Date().toISOString(),
      updated_at: isoFromDevin(live?.updated_at ?? null) ?? null,
      pr_number: run?.pr_number ?? null,
      pr_url: run?.pr_url ?? exp?.pr_url ?? live?.pull_request?.url ?? null,
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

  const active = merged.filter((s) =>
    ["running", "blocked", "paused", "working", "waiting_for_user"].includes(s.status),
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
