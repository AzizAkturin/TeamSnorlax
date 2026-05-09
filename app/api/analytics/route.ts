import { NextRequest, NextResponse } from "next/server";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import type { AnalyticsEvent } from "@/agent/types";

const EVENTS_FILE = join(process.cwd(), "data", "events.json");

function appendEvent(event: AnalyticsEvent) {
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

    const validTypes = ["click", "scroll", "exit", "hover", "rage_click"];
    if (!validTypes.includes(event.type) || !event.path || !event.sessionId) {
      return NextResponse.json({ error: "Invalid event" }, { status: 400 });
    }

    appendEvent(event);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
