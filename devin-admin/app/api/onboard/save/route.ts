import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@insforge/sdk";

export const dynamic = "force-dynamic";

const insforge = createClient({
  baseUrl: process.env.INSFORGE_URL!,
  anonKey: process.env.INSFORGE_API_KEY!,
});

export async function POST(req: NextRequest) {
  const { githubToken, githubOwner, githubRepo, prodUrl } = await req.json();
  if (!githubToken || !githubOwner || !githubRepo || !prodUrl) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { data, error } = await insforge.database
    .from("customers")
    .insert([
      {
        github_token: githubToken,
        github_owner: githubOwner,
        github_repo: githubRepo,
        prod_url: prodUrl,
      },
    ])
    .select("id,site_id")
    .single();

  if (error) return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });

  const { id, site_id } = data as { id: string; site_id: string };
  return NextResponse.json({ customerId: id, siteId: site_id });
}
