import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@insforge/sdk";

export const dynamic = "force-dynamic";

const insforge = createClient({
  baseUrl: process.env.INSFORGE_URL!,
  anonKey: process.env.INSFORGE_API_KEY!,
});

const TENSORLAKE_API = "https://api.tensorlake.ai";
const TENSORLAKE_KEY = process.env.TENSORLAKE_API_KEY!;

export async function POST(req: NextRequest) {
  if (!TENSORLAKE_KEY) {
    return NextResponse.json(
      { error: "TENSORLAKE_API_KEY is not configured on the server." },
      { status: 500 },
    );
  }
  const { customerId } = (await req.json()) as { customerId?: string };
  if (!customerId) {
    return NextResponse.json({ error: "customerId is required." }, { status: 400 });
  }

  const { data, error } = await insforge.database
    .from("customers")
    .select(
      "id,site_id,github_owner,github_repo,prod_url,posthog_host,posthog_project_id,posthog_personal_api_key",
    )
    .eq("id", customerId)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: "Customer not found.", detail: error ? JSON.stringify(error) : null },
      { status: 404 },
    );
  }

  const customer = data as {
    id: string;
    site_id: string;
    github_owner: string;
    github_repo: string;
    prod_url: string;
    posthog_host: string | null;
    posthog_project_id: string | null;
    posthog_personal_api_key: string | null;
  };

  if (!customer.posthog_project_id || !customer.posthog_personal_api_key) {
    return NextResponse.json(
      { error: "Customer is missing PostHog credentials." },
      { status: 400 },
    );
  }

  const monitorPayload = {
    customer_id: customer.id,
    project_id: customer.posthog_project_id,
    lookback_hours: 168,
    posthog_personal_api_key: customer.posthog_personal_api_key,
    posthog_host: customer.posthog_host ?? "https://app.posthog.com",
    github_owner: customer.github_owner,
    github_repo: customer.github_repo,
    github_base_branch: "main",
  };

  const tlRes = await fetch(`${TENSORLAKE_API}/applications/monitor_posthog`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TENSORLAKE_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(monitorPayload),
  });

  if (!tlRes.ok) {
    const detail = await tlRes.text();
    return NextResponse.json(
      { error: `Tensorlake rejected the request (${tlRes.status}).`, detail },
      { status: 502 },
    );
  }

  const { request_id } = (await tlRes.json()) as { request_id: string };

  await insforge.database
    .from("customers")
    .update({
      last_monitor_run_at: new Date().toISOString(),
      last_monitor_request_id: request_id,
    })
    .eq("id", customer.id);

  return NextResponse.json({
    customerId: customer.id,
    requestId: request_id,
    statusUrl: `${TENSORLAKE_API}/applications/monitor_posthog/requests/${request_id}`,
  });
}
