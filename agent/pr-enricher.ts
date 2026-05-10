import { Octokit } from "@octokit/rest";
import { takeScreenshot } from "./screenshot";
import { searchCodebase, readFile, saveChangesMade } from "./nia";
import type { AnalyticsSummary } from "./types";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const owner = process.env.GITHUB_OWNER!;
const repo = process.env.GITHUB_REPO!;
const PROD_URL = process.env.PROD_URL ?? "https://team-snorlax.vercel.app";

async function pollForPR(createdAfter: number, timeoutMs = 900000): Promise<number> {
  const start = Date.now();
  console.log("   Polling every 20s...");
  while (Date.now() - start < timeoutMs) {
    const { data: prs } = await octokit.pulls.list({
      owner, repo, state: "open", sort: "created", direction: "desc", per_page: 10,
    });
    const pr = prs.find(
      (p) =>
        (p.head.ref.startsWith("ux-agent/") || p.head.ref.startsWith("devin/")) &&
        new Date(p.created_at).getTime() > createdAfter
    );
    if (pr) {
      console.log(`   Found PR #${pr.number}: ${pr.title}`);
      return pr.number;
    }
    process.stdout.write(".");
    await new Promise((r) => setTimeout(r, 20000));
  }
  throw new Error("Timed out waiting for Devin to open a PR");
}

async function pollForPreviewUrl(prNumber: number, branch: string, timeoutMs = 300000): Promise<string | null> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    // Try GitHub Deployments API first
    const { data: deployments } = await octokit.repos.listDeployments({
      owner, repo, ref: branch, per_page: 5,
    });
    for (const dep of deployments) {
      const { data: statuses } = await octokit.repos.listDeploymentStatuses({
        owner, repo, deployment_id: dep.id, per_page: 5,
      });
      const ok = statuses.find((s) => s.state === "success" && s.environment_url);
      if (ok?.environment_url) return ok.environment_url;
    }
    // Fall back: scan PR comments for Vercel bot preview URL
    const { data: comments } = await octokit.issues.listComments({
      owner, repo, issue_number: prNumber, per_page: 20,
    });
    for (const c of comments) {
      if (c.user?.login?.includes("vercel") && c.body) {
        const match = c.body.match(/https:\/\/[a-z0-9-]+-[a-z0-9]+-[a-z0-9]+\.vercel\.app/);
        if (match) return match[0];
      }
    }
    process.stdout.write(".");
    await new Promise((r) => setTimeout(r, 10000));
  }
  return null;
}

async function uploadScreenshot(path: string, branch: string, img: Buffer): Promise<string> {
  const content = img.toString("base64");
  // Get existing file SHA if it exists (needed for updates)
  let sha: string | undefined;
  try {
    const { data } = await octokit.repos.getContent({ owner, repo, path, ref: branch });
    if (!Array.isArray(data) && data.sha) sha = data.sha;
  } catch { /* file doesn't exist yet — sha stays undefined */ }

  await octokit.repos.createOrUpdateFileContents({
    owner, repo, path, branch,
    message: "chore: add UX agent screenshots",
    content,
    ...(sha ? { sha } : {}),
  });

  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
}

function buildDescription(params: {
  summary: AnalyticsSummary;
  devinBody: string;
  beforeUrl: string;
  afterUrl: string | null;
  niaLines: string[];
  niaHistoricalContext: string;
  files: { filename: string; status: string; additions: number; deletions: number }[];
}): string {
  const { summary, devinBody, beforeUrl, afterUrl, niaLines, niaHistoricalContext, files } = params;

  const analyticsTable = [
    "## 📊 Analytics That Triggered This",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Sessions analyzed | ${summary.totalSessions} |`,
    `| Avg. time on page | ${summary.avgTimeOnPage}s |`,
    summary.rageclickElements[0]
      ? `| Top rage-clicked element | \`${summary.rageclickElements[0].element}\` (${summary.rageclickElements[0].count}×) |`
      : null,
    summary.dropOffPoints[0]
      ? `| Avg. scroll depth at drop-off | ${summary.dropOffPoints[0].avgScrollDepth}% on \`${summary.dropOffPoints[0].path}\` |`
      : null,
    summary.exitPaths[0]
      ? `| Top exit path | \`${summary.exitPaths[0].path}\` (${summary.exitPaths[0].count} exits) |`
      : null,
  ]
    .filter(Boolean)
    .join("\n");

  const screenshotSection = [
    "## 🖼️ Visual Changes",
    "",
    "| Before | After |",
    "|--------|-------|",
    `| ![Before — ${PROD_URL}](${beforeUrl}) | ${afterUrl ? `![After — preview](${afterUrl})` : "_Vercel preview still building — check back shortly_"} |`,
  ].join("\n");

  const changeType = (status: string) => {
    if (status === "added") return "➕ Added";
    if (status === "removed") return "🗑️ Removed";
    return "✏️ Modified";
  };

  const filesTable = [
    "## 📂 Files Changed",
    "",
    "| File | Change | +/- |",
    "|------|--------|-----|",
    ...files.map(
      (f) =>
        `| \`${f.filename}\` | ${changeType(f.status)} | +${f.additions} / -${f.deletions} |`
    ),
  ].join("\n");

  const walkthrough = [
    "## 📝 Walkthrough",
    "",
    devinBody.trim(),
  ].join("\n");

  const niaSection = [
    niaHistoricalContext
      ? ["## 🧠 Nia Memory: What the Agent Already Knows", "", niaHistoricalContext].join("\n")
      : "",
    niaLines.length
      ? ["## 🔍 Nia: Changed File Context", "", ...niaLines].join("\n")
      : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  return [
    analyticsTable,
    "",
    screenshotSection,
    "",
    walkthrough,
    "",
    filesTable,
    "",
    niaSection,
    "",
    "---",
    "_Generated by the UX Agent based on real user behavior data._",
  ]
    .filter((s) => s !== undefined)
    .join("\n");
}

function extractOriginalBody(prBody: string): string {
  // If we already enriched this PR, extract only Devin's original content from the Walkthrough section
  const match = prBody.match(/## 📝 Walkthrough\n\n([\s\S]*?)(?=\n## |\n---\n|$)/);
  if (match) return match[1].trim();
  // Not yet enriched — if it contains our analytics header, strip everything (safety net)
  if (prBody.includes("_Generated by the UX Agent")) return "";
  return prBody;
}

export async function enrichPR(
  sessionCreatedAt: number,
  summary: AnalyticsSummary,
  niaHistoricalContext = ""
): Promise<string> {
  console.log("\n⏳ Waiting for Devin to open a PR");
  const prNumber = await pollForPR(sessionCreatedAt);

  const { data: pr } = await octokit.pulls.get({ owner, repo, pull_number: prNumber });
  const branch = pr.head.ref;

  console.log("\n📸 Taking before screenshot...");
  const beforeImg = await takeScreenshot(PROD_URL);

  console.log("\n⏳ Waiting for Vercel preview");
  const previewUrl = await pollForPreviewUrl(prNumber, branch);

  let afterImg: Buffer | null = null;
  if (previewUrl) {
    console.log(`\n📸 Taking after screenshot from ${previewUrl}...`);
    afterImg = await takeScreenshot(previewUrl);
  } else {
    console.log("\n⚠️  Preview URL not ready — skipping after screenshot");
  }

  const screenshotPath = `public/screenshots/run-${sessionCreatedAt}`;
  const beforeUrl = await uploadScreenshot(`${screenshotPath}--before.png`, branch, beforeImg);
  const afterUrl = afterImg ? await uploadScreenshot(`${screenshotPath}--after.png`, branch, afterImg) : null;

  const { data: changedFiles } = await octokit.pulls.listFiles({
    owner, repo, pull_number: prNumber,
  });

  console.log("\n🔍 Fetching Nia context for changed files...");
  const niaLines: string[] = [];
  for (const file of changedFiles.slice(0, 5)) {
    const content = readFile(file.filename);
    const ctx = content || searchCodebase(file.filename);
    if (ctx) {
      niaLines.push(`- **\`${file.filename}\`** — ${ctx.slice(0, 220).replace(/\n/g, " ").trim()}`);
    }
  }

  const newBody = buildDescription({
    summary,
    devinBody: extractOriginalBody(pr.body ?? ""),
    beforeUrl,
    afterUrl,
    niaLines,
    niaHistoricalContext,
    files: changedFiles.map((f) => ({
      filename: f.filename,
      status: f.status,
      additions: f.additions,
      deletions: f.deletions,
    })),
  });

  await octokit.pulls.update({ owner, repo, pull_number: prNumber, body: newBody });

  console.log(`✅ PR #${prNumber} description updated`);
  const prUrl = `https://github.com/${owner}/${repo}/pull/${prNumber}`;

  console.log("\n🧠 Saving changes to Nia memory...");
  saveChangesMade(
    prUrl,
    changedFiles.map((f) => ({ filename: f.filename, additions: f.additions, deletions: f.deletions })),
    pr.body ?? ""
  );

  return prUrl;
}

export async function enrichSpecificPR(
  prNumber: number,
  summary: AnalyticsSummary,
  niaHistoricalContext = ""
): Promise<string> {
  const { data: pr } = await octokit.pulls.get({ owner, repo, pull_number: prNumber });
  const branch = pr.head.ref;

  console.log("\n📸 Taking before screenshot...");
  const beforeImg = await takeScreenshot(PROD_URL);

  console.log("\n⏳ Waiting for Vercel preview (up to 2 min)...");
  const previewUrl = await pollForPreviewUrl(prNumber, branch, 120000);

  let afterImg: Buffer | null = null;
  if (previewUrl) {
    console.log(`\n📸 Taking after screenshot from ${previewUrl}...`);
    afterImg = await takeScreenshot(previewUrl);
  } else {
    console.log("\n⚠️  Preview URL not ready — skipping after screenshot");
  }

  const screenshotPath = `public/screenshots/run-pr${prNumber}`;
  const beforeUrl = await uploadScreenshot(`${screenshotPath}--before.png`, branch, beforeImg);
  const afterUrl = afterImg ? await uploadScreenshot(`${screenshotPath}--after.png`, branch, afterImg) : null;

  const { data: changedFiles } = await octokit.pulls.listFiles({ owner, repo, pull_number: prNumber });

  console.log("\n🔍 Fetching Nia context for changed files...");
  const niaLines: string[] = [];
  for (const file of changedFiles.slice(0, 5)) {
    const content = readFile(file.filename);
    const ctx = content || searchCodebase(file.filename);
    if (ctx) {
      niaLines.push(`- **\`${file.filename}\`** — ${ctx.slice(0, 220).replace(/\n/g, " ").trim()}`);
    }
  }

  const newBody = buildDescription({
    summary,
    devinBody: extractOriginalBody(pr.body ?? ""),
    beforeUrl,
    afterUrl,
    niaLines,
    niaHistoricalContext,
    files: changedFiles.map((f) => ({
      filename: f.filename,
      status: f.status,
      additions: f.additions,
      deletions: f.deletions,
    })),
  });

  await octokit.pulls.update({ owner, repo, pull_number: prNumber, body: newBody });

  console.log(`✅ PR #${prNumber} description updated`);
  const prUrl = `https://github.com/${owner}/${repo}/pull/${prNumber}`;

  console.log("\n🧠 Saving changes to Nia memory...");
  saveChangesMade(
    prUrl,
    changedFiles.map((f) => ({ filename: f.filename, additions: f.additions, deletions: f.deletions })),
    pr.body ?? ""
  );

  return prUrl;
}
