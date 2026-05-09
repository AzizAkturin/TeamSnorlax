import type { AnalyticsSummary } from "./types";

const DEVIN_API_KEY = process.env.DEVIA_API_KEY!;
const DEVIN_BASE_URL = process.env.DEVIA_BASE_URL ?? "https://api.devin.ai/v1";
const GITHUB_OWNER = process.env.GITHUB_OWNER!;
const GITHUB_REPO = process.env.GITHUB_REPO!;
const BASE_BRANCH = process.env.GITHUB_BASE_BRANCH ?? "staging";

function buildSessionPrompt(
  summary: AnalyticsSummary,
  codebaseContext: string,
  historicalContext: string
): string {
  return `You are a UX optimization agent. Analyze the following user behavior analytics and make targeted code changes to improve engagement.

## Analytics Data

- Total sessions: ${summary.totalSessions}
- Average time on page: ${summary.avgTimeOnPage}s
- Top clicked elements: ${JSON.stringify(summary.topClickedElements, null, 2)}
- Rage click elements (user frustration): ${JSON.stringify(summary.rageclickElements, null, 2)}
- Exit paths (where users leave): ${JSON.stringify(summary.exitPaths, null, 2)}
- Drop-off points (low scroll depth): ${JSON.stringify(summary.dropOffPoints, null, 2)}
${historicalContext ? `\n## Historical Context (previous agent runs)\n\n${historicalContext}\n\nDo NOT repeat changes already made in a previous run unless the metric is still actively hurting.` : ""}
## Codebase Context

${codebaseContext}

## Task

1. Pick the 2-3 highest-impact UX changes only (colors, spacing, fonts, copy, layout, CTAs).
2. Implement them in the codebase (repo: ${GITHUB_OWNER}/${GITHUB_REPO}).
3. Open a PR targeting \`${BASE_BRANCH}\` titled: "[UX Agent] Proposal ${new Date().toISOString().slice(0, 10)}"
4. PR description must follow this format exactly — short and specific:

**What changed:**
- [file] — [one sentence, what and why, cite the exact metric e.g. "rage click rate 40%"]

Rules:
- One bullet per file changed. No paragraphs.
- Every bullet must reference a specific number from the analytics.
- Do not add features unrelated to the data.
- No filler text, no greetings, no summaries.`;
}

export interface DevinSession {
  sessionId: string;
  sessionUrl: string;
}

export async function createDevinSession(
  summary: AnalyticsSummary,
  codebaseContext: string,
  historicalContext = ""
): Promise<DevinSession> {
  const prompt = buildSessionPrompt(summary, codebaseContext, historicalContext);

  const response = await fetch(`${DEVIN_BASE_URL}/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DEVIN_API_KEY}`,
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Devin API error ${response.status}: ${text}`);
  }

  const data = await response.json();

  return {
    sessionId: data.session_id ?? data.id,
    sessionUrl: data.url ?? `https://app.devin.ai/sessions/${data.session_id ?? data.id}`,
  };
}
