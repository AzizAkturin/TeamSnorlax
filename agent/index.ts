import { summarizeAnalytics } from "./analytics";
import { buildCodebaseContext } from "./nia";
import { createDevinSession } from "./devia";
import { enrichPR } from "./pr-enricher";

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

  console.log("\n🔍 Fetching codebase context via Nia...");
  const codebaseContext = buildCodebaseContext(UX_FOCUS_AREAS);

  console.log("\n🤖 Creating Devin session...");
  const sessionCreatedAt = Date.now();
  const session = await createDevinSession(summary, codebaseContext);

  console.log(`\n✅ Devin session started`);
  console.log(`   Watch Devin work: ${session.sessionUrl}`);

  const prUrl = await enrichPR(sessionCreatedAt, summary);

  console.log(`\n✅ PR ready: ${prUrl}`);
  console.log(`   Before/after screenshots and Nia context added.`);
}

run().catch((err) => {
  console.error("Agent failed:", err);
  process.exit(1);
});
