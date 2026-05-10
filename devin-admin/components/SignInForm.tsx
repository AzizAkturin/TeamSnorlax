"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { insforge } from "@/lib/insforge";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<"github" | "google" | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("insforge_code") && !params.has("code")) return;

    setOauthLoading("github");
    insforge.auth.getCurrentUser().then(({ data, error: authError }) => {
      if (authError || !data?.user) {
        setError("OAuth sign in failed. Please try again.");
        setOauthLoading(null);
        return;
      }
      router.replace("/onboard");
    });
  }, [router]);

  async function handleOAuth(provider: "github" | "google") {
    setOauthLoading(provider);
    setError("");
    await insforge.auth.signInWithOAuth({
      provider,
      redirectTo: `${window.location.origin}/`,
    });
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data, error: authError } = await insforge.auth.signInWithPassword({ email, password });
      if (authError) throw authError;
      if (data?.accessToken) router.push("/onboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.6] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative grid lg:grid-cols-[1.1fr_1fr] min-h-dvh">
        <section className="hidden lg:flex flex-col justify-between p-10 xl:p-14 border-r border-border page-stagger">
          <div className="flex items-center gap-3 enter">
            <div className="relative size-7 rounded-md border border-border flex items-center justify-center overflow-hidden">
              <span className="absolute inset-[1px] rounded-[5px] bg-gradient-to-br from-foreground/[0.08] to-transparent" />
              <span className="relative size-1.5 rounded-full bg-success pulse-dot" />
            </div>
            <span className="text-sm font-medium tracking-tight">autoresearch</span>
          </div>

          <div className="max-w-lg space-y-8">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground enter">
              continuous A/B
            </p>
            <h1 className="text-3xl xl:text-4xl font-semibold tracking-tight leading-[1.05] enter">
              Agents that design, ship, and judge experiments while you sleep.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed enter">
              PostHog feeds the detector. The detector feeds Devin. Devin merges a
              flag-gated variant straight to <code className="font-mono text-foreground/85">main</code>.
              The judge polls every fifteen minutes, calls statsmodels, and rolls
              the winner forward — or cuts the loser cold.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground enter-list">
              {[
                ["Detector", "rage clicks, drop-offs, exit hotspots"],
                ["Spec", "OpenRouter, schema-strict"],
                ["Variant", "Devin commits, gated on PostHog flag"],
                ["Judge", "statsmodels z-test, every 15 min"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline gap-3 enter">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/65 w-16 shrink-0">
                    {k}
                  </span>
                  <span className="leading-snug">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground enter">
            <span>Tensorlake · PostHog · Insforge · Nia · Devin</span>
            <span className="font-mono">v0.1</span>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-16 sm:px-10">
          <div className="w-full max-w-sm page-stagger">
            <div className="lg:hidden mb-10 enter">
              <div className="flex items-center gap-3">
                <div className="relative size-7 rounded-md border border-border flex items-center justify-center overflow-hidden">
                  <span className="absolute inset-[1px] rounded-[5px] bg-gradient-to-br from-foreground/[0.08] to-transparent" />
                  <span className="relative size-1.5 rounded-full bg-success pulse-dot" />
                </div>
                <span className="text-sm font-medium tracking-tight">autoresearch</span>
              </div>
            </div>

            <div className="space-y-1.5 mb-8 enter">
              <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
              <p className="text-sm text-muted-foreground">
                Continue to the autoresearch console.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 enter">
              <OAuthButton
                provider="github"
                loading={oauthLoading === "github"}
                disabled={oauthLoading !== null || loading}
                onClick={() => handleOAuth("github")}
              />
              <OAuthButton
                provider="google"
                loading={oauthLoading === "google"}
                disabled={oauthLoading !== null || loading}
                onClick={() => handleOAuth("google")}
              />
            </div>

            <div className="my-6 flex items-center gap-3 enter">
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                or with email
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <form onSubmit={handleSignIn} noValidate className="space-y-4 enter">
              <Field
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={setEmail}
                placeholder="you@team.com"
              />
              <Field
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={setPassword}
                placeholder="••••••••"
              />
              {error && (
                <p className="text-xs text-danger" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-foreground text-background py-2.5 rounded-md text-sm font-medium hover:bg-accent disabled:opacity-50 transition-colors focus-ring"
              >
                {loading ? "Signing in…" : "Continue"}
              </button>
            </form>

            <p className="mt-8 text-xs text-muted-foreground enter">
              By continuing you agree the autoresearch loop may merge variants
              directly to <code className="font-mono">main</code> behind a feature flag.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function OAuthButton({
  provider,
  loading,
  disabled,
  onClick,
}: {
  provider: "github" | "google";
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="group flex items-center gap-3 w-full border border-border rounded-md px-3.5 py-2.5 text-sm font-medium hover:bg-elevated disabled:opacity-50 transition-colors focus-ring"
    >
      {loading ? (
        <span className="size-4 border-2 border-border border-t-foreground rounded-full animate-spin" />
      ) : provider === "github" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-foreground/85">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#9aa3b1" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#7d8696" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#5b6478" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#414756" />
        </svg>
      )}
      <span>Continue with {provider === "github" ? "GitHub" : "Google"}</span>
      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
        →
      </span>
    </button>
  );
}

function Field({
  id,
  label,
  type,
  required,
  autoComplete,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-elevated border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-ring focus-ring transition-colors"
      />
    </div>
  );
}
