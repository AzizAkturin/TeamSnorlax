# Autoresource A/B

Automating the entire the entire UI optimization loop in one pipeline: an agent watches real user behavior, runs experiments, hypothesizes fixes, and ships PRs. Your UI evolves on its own, turning potential customers into real users.

## Tech Stack

- **InsForge** for database, auth, and storage
- **Devin AI API** for autonomous code generation and PR authorship
- **Nia** as the agent's long-term memory, indexing the codebase and stores cross-session context so the agent learns user preferences over time
- **Playwright** for visual regression proof — before/after screenshots committed directly to the PR branch
- **Next.js + Vercel** for the platform and per-customer preview deployments
- **GitHub API** to close the loop — the agent reads PRs, commits screenshots, and writes the description itself
