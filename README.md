# UX Agent

> **🏆 Top 1 — TensorLake Track · 🥈 Top 2 — InsForge Track · Top 8 of 70 teams overall**

UX Agent is a fully autonomous pipeline that watches real user behavior on your website and ships code improvements — without a human writing a single line of product code.

---

## The Problem

Every website is bleeding users. Rage clicks, confusing CTAs, early drop-offs — companies spend months figuring out *why* users leave and then more months *fixing* it. Traditional analytics tools give you charts. We give you merged pull requests.

---

## How It Works

```
Real user sessions
       ↓
  Analytics engine (clicks, rage clicks, scroll depth, exit paths)
       ↓
  Agent analyzes behavioral data
       ↓
  Nia builds codebase context + retrieves long-term memory
       ↓
  Devin AI writes the code fix autonomously
       ↓
  PR opened on GitHub with before/after screenshots + analytics proof
       ↓
  Human reviews and merges
```

The agent runs on a schedule. No developer involvement until review time.

---

## Features

- **Behavioral tracking** — lightweight script captures clicks, rage clicks, scroll depth, time on page, and exit paths across every session
- **Autonomous code generation** — Devin AI reads the analytics, understands the codebase, and writes targeted UI/UX fixes
- **Long-term memory via Nia** — the agent remembers every change it has ever made; it won't repeat fixes or regress previous improvements
- **Visual proof in every PR** — before/after screenshots taken automatically from prod and Vercel preview, committed directly to the branch
- **CodeRabbit-style PR descriptions** — analytics table, visual diff, file change breakdown, and Nia codebase context in every PR body
- **5-minute customer onboarding** — GitHub token → repo picker → snippet install → done

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend & Platform** | Next.js 16, React 19, Tailwind CSS 4 |
| **Database, Auth & Storage** | [InsForge](https://insforge.app) — `agent_runs`, `analytics_events`, `customers` tables |
| **Autonomous coding** | [Devin AI API](https://api.devin.ai) — writes code, opens PRs, responds to CI |
| **Codebase context & memory** | [Nia](https://trynia.ai) — `github tree/search/read` + `contexts save/semantic` |
| **Screenshots** | Playwright / Chromium — before (prod) and after (Vercel preview) |
| **GitHub integration** | Octokit — PR polling, file commits, description updates |
| **Hosting & previews** | Vercel — prod on `main`, per-PR preview deployments |

---

## Agent Pipeline

```
bun run agent
```

1. Read `data/events.json` + InsForge `analytics_events` table
2. Summarize: rage clicks, drop-off paths, avg time on page, exit paths
3. Fetch past agent runs from InsForge → save to Nia episodic memory
4. Build codebase context via `nia github tree` + `nia github search`
5. Retrieve historical context: `nia contexts semantic "UX changes files modified"`
6. Create Devin session with analytics + codebase + memory context
7. Poll GitHub for Devin's `devin/*` PR
8. Take before screenshot (prod URL via Playwright)
9. Wait for Vercel preview → take after screenshot
10. Commit screenshots to PR branch → permanent `raw.githubusercontent.com` URLs
11. Update PR description with analytics table, screenshots, file changes, Nia context
12. Save this run's changes to Nia memory for future sessions

---

## Why Nia Is Central

Most AI coding agents are stateless — they see the codebase fresh every run. Nia gives our agent **persistent memory**:

- After every PR, we save what files changed and what approach Devin took to a Nia episodic context
- Before the next run, we do two semantic searches: past changes and past analytics
- Devin's prompt explicitly says: *don't repeat what was already fixed — apply the same pattern to untouched pages*

This is what makes the agent compound over time instead of thrashing.

---

## Customer Onboarding

Any customer can connect in under 5 minutes at `/onboard`:

1. Paste a GitHub personal access token
2. Select their repository from the auto-loaded list
3. Enter their production URL
4. Copy a self-contained `<script>` snippet and paste it before `</body>`

The snippet tracks clicks, rage clicks, scroll depth, and session time — posting to our analytics API with a unique `siteId`. The agent picks up their data on the next scheduled run.

---

## Local Setup

```bash
# Install dependencies
bun install

# Set environment variables
cp .env.example .env.local
# Fill in: INSFORGE_URL, INSFORGE_API_KEY, DEVIA_API_KEY, NIA_API_KEY,
#           GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, PROD_URL

# Run the dev server
bun run dev

# Run the agent manually
bun run agent

# Enrich a specific PR (screenshots + Nia context)
bun run agent/enrich-pr-now.ts <pr-number>
```

---

## Environment Variables

| Variable | Description |
|---|---|
| `INSFORGE_URL` | InsForge project URL |
| `INSFORGE_API_KEY` | InsForge admin API key |
| `NEXT_PUBLIC_INSFORGE_URL` | InsForge URL (client-side) |
| `NEXT_PUBLIC_INSFORGE_ANON_KEY` | InsForge anon key (client-side) |
| `DEVIA_API_KEY` | Devin AI API key |
| `NIA_API_KEY` | Nia API key |
| `GITHUB_TOKEN` | PAT with Contents + Pull requests read/write |
| `GITHUB_OWNER` | Repository owner |
| `GITHUB_REPO` | Repository name |
| `GITHUB_BASE_BRANCH` | Branch Devin targets for PRs (e.g. `main`) |
| `PROD_URL` | Production URL for before-screenshot |

---

## Project Structure

```
agent/
  index.ts          # Main orchestrator
  analytics.ts      # Session summarization
  devia.ts          # Devin AI session creation
  nia.ts            # Nia CLI wrapper (codebase context + memory)
  pr-enricher.ts    # PR screenshot + description pipeline
  db.ts             # InsForge SDK (agent_runs, customers)
  enrich-pr-now.ts  # One-shot PR enricher for any PR number

app/
  page.tsx          # Landing page (Meridian)
  dashboard/        # Agent runs dashboard
  onboard/          # Customer onboarding flow
  api/
    analytics/      # Event ingestion (CORS-enabled for external sites)
    onboard/        # Token validation + customer save

components/         # UI components
migrations/         # InsForge SQL migrations
```

---

Built at Nozo.mio Hackathon 2026 — shipped in one night.
