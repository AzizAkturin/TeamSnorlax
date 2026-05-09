import { createClient } from "@insforge/sdk";
import type { NextRequest } from "next/server";

const DEVIN_API_KEY = process.env.DEVIA_API_KEY!;
const DEVIN_BASE_URL = process.env.DEVIA_BASE_URL ?? "https://api.devin.ai/v1";

const insforge = createClient({
  baseUrl: process.env.INSFORGE_URL!,
  anonKey: process.env.INSFORGE_API_KEY!,
});

export async function GET(_req: NextRequest) {
  const [devinRes, dbRes] = await Promise.all([
    fetch(`${DEVIN_BASE_URL}/sessions`, {
      headers: { Authorization: `Bearer ${DEVIN_API_KEY}` },
      cache: "no-store",
    }),
    insforge.database
      .from("agent_runs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50),
  ]);

  const devinData = devinRes.ok ? await devinRes.json() : { sessions: [] };
  const rawSessions: DevinSession[] = devinData.sessions ?? devinData ?? [];

  const dbRuns: AgentRun[] = (dbRes.data as AgentRun[] | null) ?? [];
  const runsBySessionId = new Map(
    dbRuns
      .filter((r) => r.devin_session_id)
      .map((r) => [r.devin_session_id!, r])
  );

  const merged = rawSessions.map((s) => {
    const run = runsBySessionId.get(s.session_id);
    return {
      session_id: s.session_id,
      status: s.status,
      url: s.url ?? `https://app.devin.ai/sessions/${s.session_id}`,
      title: s.title ?? null,
      created_at: s.created_at,
      updated_at: s.updated_at ?? null,
      pr_number: run?.pr_number ?? null,
      pr_url: run?.pr_url ?? null,
      top_rage_click: run?.top_rage_click ?? null,
      drop_off_path: run?.drop_off_path ?? null,
      sessions_analyzed: run?.sessions_analyzed ?? null,
      avg_time_on_page_seconds: run?.avg_time_on_page_seconds ?? null,
    };
  });

  const active = merged.filter(
    (s) => s.status === "running" || s.status === "blocked" || s.status === "paused"
  );

  return Response.json({ sessions: active, all: merged });
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
