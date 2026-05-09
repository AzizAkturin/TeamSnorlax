import { createClient } from "@insforge/sdk";
import type { AnalyticsEvent } from "./types";

const insforge = createClient({
  baseUrl: process.env.INSFORGE_URL!,
  anonKey: process.env.INSFORGE_API_KEY!,
});

interface AgentRunInput {
  sessions_analyzed: number;
  avg_time_on_page_seconds: number;
  top_rage_click?: string;
  drop_off_path?: string;
  drop_off_scroll_depth?: number;
}

interface AgentRunUpdate {
  devin_session_id?: string;
  devin_session_url?: string;
  pr_number?: number;
  pr_url?: string;
  status?: "running" | "pr_open" | "merged" | "failed";
}

export async function createAgentRun(input: AgentRunInput): Promise<string> {
  const { data, error } = await insforge.database
    .from("agent_runs")
    .insert([input])
    .select("id")
    .single();

  if (error) throw new Error(`InsForge insert agent_run failed: ${JSON.stringify(error)}`);
  return (data as { id: string }).id;
}

export async function updateAgentRun(id: string, update: AgentRunUpdate): Promise<void> {
  const { error } = await insforge.database
    .from("agent_runs")
    .update(update)
    .eq("id", id);

  if (error) throw new Error(`InsForge update agent_run failed: ${JSON.stringify(error)}`);
}

export interface PastAgentRun {
  id: string;
  created_at: string;
  sessions_analyzed: number;
  avg_time_on_page_seconds: number;
  top_rage_click: string | null;
  drop_off_path: string | null;
  drop_off_scroll_depth: number | null;
  pr_url: string | null;
  pr_number: number | null;
  status: string | null;
}

export async function getPastAgentRuns(limit = 5): Promise<PastAgentRun[]> {
  const { data, error } = await insforge.database
    .from("agent_runs")
    .select("id,created_at,sessions_analyzed,avg_time_on_page_seconds,top_rage_click,drop_off_path,drop_off_scroll_depth,pr_url,pr_number,status")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.warn("Could not fetch past agent runs:", error);
    return [];
  }
  return (data as PastAgentRun[]) ?? [];
}

export async function insertAnalyticsEvent(event: AnalyticsEvent): Promise<void> {
  const { error } = await insforge.database.from("analytics_events").insert([
    {
      type: event.type,
      element: event.element ?? null,
      path: event.path,
      timestamp: event.timestamp,
      session_id: event.sessionId,
      scroll_depth: event.scrollDepth ?? null,
      time_on_page: event.timeOnPage ?? null,
      viewport_width: event.viewport?.width ?? null,
      viewport_height: event.viewport?.height ?? null,
    },
  ]);

  if (error) throw new Error(`InsForge insert analytics_event failed: ${JSON.stringify(error)}`);
}
