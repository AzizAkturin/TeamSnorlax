import { readFileSync } from "fs";
import { join } from "path";
import type { AnalyticsEvent, AnalyticsSummary } from "./types";

const EVENTS_FILE = join(process.cwd(), "data", "events.json");

function loadEvents(): AnalyticsEvent[] {
  try {
    const raw = readFileSync(EVENTS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function summarizeAnalytics(): AnalyticsSummary {
  const events = loadEvents();

  const clicks = events.filter((e) => e.type === "click" && e.element);
  const rageClicks = events.filter((e) => e.type === "rage_click" && e.element);
  const exits = events.filter((e) => e.type === "exit");
  const scrolls = events.filter((e) => e.type === "scroll" && e.scrollDepth !== undefined);
  const sessionIds = new Set(events.map((e) => e.sessionId));

  const clickCounts: Record<string, number> = {};
  for (const e of clicks) {
    clickCounts[e.element!] = (clickCounts[e.element!] ?? 0) + 1;
  }

  const rageCounts: Record<string, number> = {};
  for (const e of rageClicks) {
    rageCounts[e.element!] = (rageCounts[e.element!] ?? 0) + 1;
  }

  const exitCounts: Record<string, number> = {};
  for (const e of exits) {
    exitCounts[e.path] = (exitCounts[e.path] ?? 0) + 1;
  }

  const scrollByPath: Record<string, number[]> = {};
  for (const e of scrolls) {
    if (!scrollByPath[e.path]) scrollByPath[e.path] = [];
    scrollByPath[e.path].push(e.scrollDepth!);
  }

  const timings = events.filter((e) => e.timeOnPage !== undefined).map((e) => e.timeOnPage!);
  const avgTimeOnPage = timings.length ? timings.reduce((a, b) => a + b, 0) / timings.length : 0;

  return {
    totalSessions: sessionIds.size,
    avgTimeOnPage: Math.round(avgTimeOnPage),
    topClickedElements: Object.entries(clickCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([element, count]) => ({ element, count })),
    rageclickElements: Object.entries(rageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([element, count]) => ({ element, count })),
    exitPaths: Object.entries(exitCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([path, count]) => ({ path, count })),
    dropOffPoints: Object.entries(scrollByPath)
      .map(([path, depths]) => ({
        path,
        count: depths.length,
        avgScrollDepth: Math.round(depths.reduce((a, b) => a + b, 0) / depths.length),
      }))
      .sort((a, b) => a.avgScrollDepth - b.avgScrollDepth)
      .slice(0, 5),
  };
}
