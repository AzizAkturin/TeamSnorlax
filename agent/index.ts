import { summarizeAnalytics } from "./analytics";
import { buildCodebaseContext, saveAnalyticsContext, saveHistoricalRuns, searchContext } from "./nia";
import { createDevinSession } from "./devia";
import { enrichPR } from "./pr-enricher";
import { createAgentRun, updateAgentRun, getPastAgentRuns } from "./db";

const UX_FOCUS_AREAS = [
  "button styles and call to action",
  "typography font size spacing",
  "color palette background",
  "navigation layout",
  "hero section headline",
];

async function run() {
  console.log("📊 Reading analytics...");
  const summary = summarizeAnalytics();

  if (summary.totalSessions < 10) {
    console.log(`Not enough data yet (${summary.totalSessions} sessions). Need at least 10.`);
    process.exit(0);
  }

  console.log(`✅ ${summary.totalSessions} sessions analyzed`);
  console.log(`   Avg time on page: ${summary.avgTimeOnPage}s`);
  console.log(`   Drop-off paths: ${summary.dropOffPoints.map((d) => d.path).join(", ") || "none"}`);
  console.log(`   Rage clicks on: ${summary.rageclickElements.map((r) => r.element).join(", ") || "none"}`);

  const runId = await createAgentRun({
    sessions_analyzed: summary.totalSessions,
    avg_time_on_page_seconds: summary.avgTimeOnPage,
    top_rage_click: summary.rageclickElements[0]?.element,
    drop_off_path: summary.dropOffPoints[0]?.path,
    drop_off_scroll_depth: summary.dropOffPoints[0]?.avgScrollDepth,
  });
  console.log(`\n💾 Agent run saved to InsForge (id: ${runId})`);

  console.log("\n📚 Fetching InsForge history + saving to Nia...");
  const pastRuns = await getPastAgentRuns(5);
  saveHistoricalRuns(pastRuns as unknown as Array<Record<string, unknown>>);

  console.log("\n🔍 Fetching codebase context via Nia...");
  const codebaseContext = buildCodebaseContext(UX_FOCUS_AREAS);

  saveAnalyticsContext(
    `Analytics snapshot ${new Date().toISOString().slice(0, 10)}`,
    `${summary.totalSessions} sessions, avg ${summary.avgTimeOnPage}s, top rage-click: ${summary.rageclickElements[0]?.element ?? "none"}`,
    JSON.stringify(summary, null, 2)
  );

  const pastChanges = searchContext("UX changes files modified completed");
  const pastAnalytics = searchContext("past agent runs analytics sessions rage clicks drop-off");
  const historicalContext = [pastChanges, pastAnalytics].filter(Boolean).join("\n\n---\n\n");
  if (historicalContext) {
    console.log("   ✅ Retrieved historical context from Nia");
  }

  console.log("\n🤖 Creating Devin session...");
  const sessionCreatedAt = Date.now();
  const session = await createDevinSession(summary, codebaseContext, historicalContext);

  await updateAgentRun(runId, {
    devin_session_id: session.sessionId,
    devin_session_url: session.sessionUrl,
    status: "running",
  });

  console.log(`\n✅ Devin session started`);
  console.log(`   Watch Devin work: ${session.sessionUrl}`);

  const prUrl = await enrichPR(sessionCreatedAt, summary, historicalContext);

  const prNumberMatch = prUrl.match(/\/pull\/(\d+)$/);
  await updateAgentRun(runId, {
    pr_number: prNumberMatch ? parseInt(prNumberMatch[1]) : undefined,
    pr_url: prUrl,
    status: "pr_open",
  });

  console.log(`\n✅ PR ready: ${prUrl}`);
  console.log(`   Before/after screenshots and Nia context added.`);
}

run().catch(async (err) => {
  console.error("Agent failed:", err);
  process.exit(1);
});
