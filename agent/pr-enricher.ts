import { Octokit } from "@octokit/rest";
import { takeScreenshot } from "./screenshot";
import { searchCodebase } from "./nia";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const owner = process.env.GITHUB_OWNER!;
const repo = process.env.GITHUB_REPO!;
const PROD_URL = process.env.PROD_URL ?? "https://team-snorlax.vercel.app";

async function pollForPR(createdAfter: number, timeoutMs = 900000): Promise<number> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const { data: prs } = await octokit.pulls.list({
      owner, repo, state: "open", sort: "created", direction: "desc", per_page: 10,
    });
    const pr = prs.find(
      (p) =>
        p.head.ref.startsWith("ux-agent/") &&
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

async function pollForPreviewUrl(branch: string, timeoutMs = 300000): Promise<string | null> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
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
    process.stdout.write(".");
    await new Promise((r) => setTimeout(r, 10000));
  }
  return null;
}

async function uploadScreenshot(branch: string, filename: string, img: Buffer): Promise<string> {
  const path = `screenshots/${filename}`;
  let sha: string | undefined;
  try {
    const { data } = await octokit.repos.getContent({ owner, repo, path, ref: branch });
    if (!Array.isArray(data) && data.type === "file") sha = data.sha;
  } catch {}

  await octokit.repos.createOrUpdateFileContents({
    owner, repo, path,
    message: `screenshots: add ${filename}`,
    content: img.toString("base64"),
    branch,
    ...(sha ? { sha } : {}),
  });

  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
}

export async function enrichPR(sessionCreatedAt: number): Promise<string> {
  console.log("\n⏳ Waiting for Devin to open a PR");
  const prNumber = await pollForPR(sessionCreatedAt);

  const { data: pr } = await octokit.pulls.get({ owner, repo, pull_number: prNumber });
  const branch = pr.head.ref;

  console.log("\n📸 Taking before screenshot...");
  const beforeImg = await takeScreenshot(PROD_URL);

  console.log("⏳ Waiting for Vercel preview");
  const previewUrl = await pollForPreviewUrl(branch);

  let afterImg: Buffer | null = null;
  if (previewUrl) {
    console.log(`\n📸 Taking after screenshot from ${previewUrl}...`);
    afterImg = await takeScreenshot(previewUrl);
  }

  const beforeUrl = await uploadScreenshot(branch, "before.png", beforeImg);
  const afterUrl = afterImg ? await uploadScreenshot(branch, "after.png", afterImg) : null;

  // Nia context for each changed file
  const { data: files } = await octokit.pulls.listFiles({ owner, repo, pull_number: prNumber });
  const niaLines: string[] = [];
  for (const file of files.slice(0, 4)) {
    const ctx = searchCodebase(file.filename);
    if (ctx) niaLines.push(`- **\`${file.filename}\`** — ${ctx.slice(0, 180).replace(/\n/g, " ")}`);
  }

  const screenshotTable = [
    "## Before / After",
    "",
    "| Before | After |",
    "|--------|-------|",
    `| ![Before](${beforeUrl}) | ${afterUrl ? `![After](${afterUrl})` : "_Preview building…_"} |`,
    "",
  ].join("\n");

  const niaSection = niaLines.length
    ? `## Codebase Context\n\n${niaLines.join("\n")}\n\n`
    : "";

  const updatedBody = `${screenshotTable}\n${niaSection}---\n\n${pr.body ?? ""}`;

  await octokit.pulls.update({ owner, repo, pull_number: prNumber, body: updatedBody });

  return `https://github.com/${owner}/${repo}/pull/${prNumber}`;
}
