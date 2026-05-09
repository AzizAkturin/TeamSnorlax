import { enrichSpecificPR } from "./pr-enricher";
import { searchContext } from "./nia";
import { summarizeAnalytics } from "./analytics";

const prNumber = parseInt(process.argv[2] ?? "0");
if (!prNumber) {
  console.error("Usage: bun run agent/enrich-pr-now.ts <pr-number>");
  process.exit(1);
}

const summary = summarizeAnalytics();
const pastChanges = searchContext("UX changes files modified completed");
const pastAnalytics = searchContext("past agent runs analytics sessions rage clicks drop-off");
const historicalContext = [pastChanges, pastAnalytics].filter(Boolean).join("\n\n---\n\n");

if (historicalContext) console.log("✅ Nia historical context retrieved");
else console.log("ℹ️  No Nia historical context yet (first run)");

enrichSpecificPR(prNumber, summary, historicalContext)
  .then((url) => console.log(`\n✅ Done: ${url}`))
  .catch((err) => { console.error(err); process.exit(1); });
