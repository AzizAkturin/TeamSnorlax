import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@insforge/sdk";

export const dynamic = "force-dynamic";

const insforge = createClient({
  baseUrl: process.env.INSFORGE_URL!,
  anonKey: process.env.INSFORGE_API_KEY!,
});

interface SavePayload {
  githubToken: string;
  githubOwner: string;
  githubRepo: string;
  prodUrl: string;
  posthogPersonalApiKey: string;
  posthogProjectId: string;
  posthogHost?: string;
  posthogProjectToken?: string;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Partial<SavePayload>;
  const required: (keyof SavePayload)[] = [
    "githubToken",
    "githubOwner",
    "githubRepo",
    "prodUrl",
    "posthogPersonalApiKey",
    "posthogProjectId",
  ];
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
  }

  const { data, error } = await insforge.database
    .from("customers")
    .insert([
      {
        github_token: body.githubToken,
        github_owner: body.githubOwner,
        github_repo: body.githubRepo,
        prod_url: body.prodUrl,
        posthog_personal_api_key: body.posthogPersonalApiKey,
        posthog_project_id: body.posthogProjectId,
        posthog_host: body.posthogHost || "https://app.posthog.com",
        posthog_project_token: body.posthogProjectToken ?? null,
      },
    ])
    .select("id,site_id")
    .single();

  if (error) return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });

  const { id, site_id } = data as { id: string; site_id: string };
  return NextResponse.json({ customerId: id, siteId: site_id });
}
