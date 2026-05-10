import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const { posthogHost, posthogProjectId, posthogPersonalApiKey } = await req.json();
  if (!posthogProjectId || !posthogPersonalApiKey) {
    return NextResponse.json(
      { error: "PostHog project id and personal API key are required." },
      { status: 400 },
    );
  }
  const host = (posthogHost || "https://app.posthog.com").replace(/\/+$/, "");

  const probe = await fetch(`${host}/api/projects/${posthogProjectId}/query/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${posthogPersonalApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {
        kind: "HogQLQuery",
        query: "SELECT count() FROM events WHERE timestamp >= now() - INTERVAL 7 DAY",
      },
    }),
  });

  if (!probe.ok) {
    const detail = await probe.text();
    return NextResponse.json(
      {
        error: `PostHog rejected the query (${probe.status}). Confirm the personal API key has the query:read scope and the project id is correct.`,
        detail,
      },
      { status: 400 },
    );
  }

  const payload = await probe.json();
  const eventCount = Number(payload?.results?.[0]?.[0] ?? 0);
  const projectRes = await fetch(`${host}/api/projects/${posthogProjectId}/`, {
    headers: { Authorization: `Bearer ${posthogPersonalApiKey}` },
  });
  let project: { name?: string; api_token?: string; id?: number } = {};
  if (projectRes.ok) project = await projectRes.json();

  return NextResponse.json({
    eventCount,
    name: project.name ?? null,
    posthogProjectToken: project.api_token ?? null,
    host,
  });
}
