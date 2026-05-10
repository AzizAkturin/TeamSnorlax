import { NextRequest, NextResponse } from "next/server";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { createClient } from "@insforge/sdk";
import type { AnalyticsEvent } from "@/agent/types";

const EVENTS_FILE = join(process.cwd(), "data", "events.json");

const insforge = createClient({
  baseUrl: process.env.INSFORGE_URL!,
  anonKey: process.env.INSFORGE_API_KEY!,
});

function appendLocal(event: AnalyticsEvent) {
  let events: AnalyticsEvent[] = [];
  if (existsSync(EVENTS_FILE)) {
    try {
      events = JSON.parse(readFileSync(EVENTS_FILE, "utf-8"));
    } catch {
      events = [];
    }
  }
  events.push(event);
  writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2));
}

async function persistToInsForge(event: AnalyticsEvent) {
  await insforge.database.from("analytics_events").insert([
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
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const event: AnalyticsEvent = {
      type: body.type,
      element: body.element,
      path: body.path,
      timestamp: body.timestamp ?? Date.now(),
      sessionId: body.sessionId,
      scrollDepth: body.scrollDepth,
      timeOnPage: body.timeOnPage,
      viewport: body.viewport,
    };

    const validTypes = ["click", "scroll", "exit", "hover", "rage_click", "pageview", "ragclick"];
    if (!validTypes.includes(event.type) || !event.path || !event.sessionId) {
      return NextResponse.json({ error: "Invalid event" }, { status: 400, headers: CORS });
    }

    // Only write to local file for internal (no siteId) events
    if (!body.siteId) appendLocal(event);
    persistToInsForge(event).catch(() => {});

    return NextResponse.json({ ok: true }, { headers: CORS });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400, headers: CORS });
  }
}
