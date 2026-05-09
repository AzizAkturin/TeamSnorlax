import type { AnalyticsSummary } from "./types";

const DEVIN_API_KEY = process.env.DEVIA_API_KEY!;
const DEVIN_BASE_URL = process.env.DEVIA_BASE_URL ?? "https://api.devin.ai/v1";
const GITHUB_OWNER = process.env.GITHUB_OWNER!;
const GITHUB_REPO = process.env.GITHUB_REPO!;
const BASE_BRANCH = process.env.GITHUB_BASE_BRANCH ?? "staging";

function buildSessionPrompt(summary: AnalyticsSummary, codebaseContext: string): string {
  return `You are a UX optimization agent. Analyze the following user behavior analytics and make targeted code changes to improve engagement.

## Analytics Data

- Total sessions: ${summary.totalSessions}
- Average time on page: ${summary.avgTimeOnPage}s
- Top clicked elements: ${JSON.stringify(summary.topClickedElements, null, 2)}
- Rage click elements (user frustration): ${JSON.stringify(summary.rageclickElements, null, 2)}
- Exit paths (where users leave): ${JSON.stringify(summary.exitPaths, null, 2)}
- Drop-off points (low scroll depth): ${JSON.stringify(summary.dropOffPoints, null, 2)}

## Codebase Context

${codebaseContext}

## Task

Based on the analytics above:
1. Identify the 2-3 highest-impact UX changes (colors, spacing, fonts, copy, layout, CTAs)
2. Implement those changes directly in the codebase (repo: ${GITHUB_OWNER}/${GITHUB_REPO})
3. Create a pull request targeting the \`${BASE_BRANCH}\` branch
4. Title the PR: "[UX Agent] Proposal ${new Date().toISOString().slice(0, 10)}"
5. In the PR description, explain each change and cite the specific analytics data that motivated it

Every change must be directly motivated by the analytics. Do not add features unrelated to the data.`;
}

export interface DevinSession {
  sessionId: string;
  sessionUrl: string;
}

export async function createDevinSession(
  summary: AnalyticsSummary,
  codebaseContext: string
): Promise<DevinSession> {
  const prompt = buildSessionPrompt(summary, codebaseContext);

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
