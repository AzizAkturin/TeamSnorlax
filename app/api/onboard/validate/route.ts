import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  if (!token) return NextResponse.json({ error: "Token required" }, { status: 400 });

  // Validate token and get user
  const userRes = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${token}`, "User-Agent": "ux-agent-onboard" },
  });
  if (!userRes.ok) return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  const user = await userRes.json();

  // Fetch repos (up to 100)
  const reposRes = await fetch("https://api.github.com/user/repos?per_page=100&sort=updated&type=owner", {
    headers: { Authorization: `Bearer ${token}`, "User-Agent": "ux-agent-onboard" },
  });
  const repos = await reposRes.json();

  return NextResponse.json({
    login: user.login,
    avatar: user.avatar_url,
    repos: repos.map((r: { full_name: string; name: string; private: boolean; updated_at: string }) => ({
      fullName: r.full_name,
      name: r.name,
      private: r.private,
      updatedAt: r.updated_at,
    })),
  });
}
