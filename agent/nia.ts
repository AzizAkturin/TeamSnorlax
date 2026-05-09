import { execSync } from "child_process";

const REPO = `${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}`;

function nia(args: string, input?: string): string {
  try {
    const result = execSync(`nia ${args}`, {
      cwd: process.cwd(),
      encoding: "utf-8",
      timeout: 20000,
      env: { ...process.env, NIA_API_KEY: process.env.NIA_API_KEY },
      input,
    });
    return result.trim();
  } catch {
    return "";
  }
}

export function searchCodebase(query: string): string {
  return nia(`github search ${REPO} "${query}" --per-page 5`);
}

export function getRepoTree(): string {
  return nia(`github tree ${REPO}`);
}

export function readFile(filePath: string): string {
  return nia(`github read ${REPO} ${filePath}`);
}

export function buildCodebaseContext(focusAreas: string[]): string {
  const tree = getRepoTree();
  const searches = focusAreas.map((area) => {
    const result = searchCodebase(area);
    return result ? `### "${area}"\n${result}` : "";
  }).filter(Boolean);

  return [
    tree ? `## Repo Structure\n${tree}` : "",
    searches.length ? `## Code Search Results\n\n${searches.join("\n\n")}` : "",
  ].filter(Boolean).join("\n\n");
}

export function saveAnalyticsContext(title: string, summary: string, content: string): void {
  nia(
    `contexts save "${title}" --summary "${summary}" --content - --agent ux-agent --tags analytics,ux --memory-type episodic`,
    content
  );
}

export function saveHistoricalRuns(runs: Array<Record<string, unknown>>): void {
  if (!runs.length) return;
  const content = runs
    .map((r) =>
      [
        `Date: ${r.created_at}`,
        `Sessions: ${r.sessions_analyzed}`,
        `Avg time on page: ${r.avg_time_on_page_seconds}s`,
        r.top_rage_click ? `Top rage-click: ${r.top_rage_click}` : null,
        r.drop_off_path ? `Drop-off path: ${r.drop_off_path} (${r.drop_off_scroll_depth}% scroll)` : null,
        r.pr_url ? `PR: ${r.pr_url} (${r.status})` : null,
      ]
        .filter(Boolean)
        .join(" | ")
    )
    .join("\n");

  nia(
    `contexts save "Past agent runs" --summary "${runs.length} previous UX agent runs" --content - --agent ux-agent --tags history,agent-runs --memory-type episodic`,
    content
  );
}

export function saveChangesMade(
  prUrl: string,
  files: Array<{ filename: string; additions: number; deletions: number }>,
  prBody: string
): void {
  const date = new Date().toISOString().slice(0, 10);
  const fileList = files.map((f) => `  - ${f.filename} (+${f.additions}/-${f.deletions})`).join("\n");
  const content = [
    `Date: ${date}`,
    `PR: ${prUrl}`,
    "",
    "Files changed:",
    fileList,
    "",
    "What was done (Devin's description):",
    prBody.slice(0, 1000),
  ].join("\n");

  nia(
    `contexts save "UX changes ${date}" --summary "Files changed by UX agent on ${date}" --content - --agent ux-agent --tags changes,completed --memory-type episodic`,
    content
  );
}

export function searchContext(query: string): string {
  return nia(`contexts semantic "${query}" --workspace ux-agent`);
}
