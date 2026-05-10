"use client";

import { useState } from "react";

type Repo = { fullName: string; name: string; private: boolean };
type Step = 1 | 2 | 3 | 4 | 5;

const STEP_LABEL: Record<Step, string> = {
  1: "GitHub",
  2: "Repository",
  3: "PostHog",
  4: "Confirm",
  5: "Live",
};

interface PostHogCheck {
  eventCount: number;
  name: string | null;
  posthogProjectToken: string | null;
  host: string;
}

export default function OnboardPage() {
  const [step, setStep] = useState<Step>(1);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [ghUser, setGhUser] = useState<{ login: string; avatar: string } | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState("");
  const [prodUrl, setProdUrl] = useState("");

  const [phHost, setPhHost] = useState("https://app.posthog.com");
  const [phProjectId, setPhProjectId] = useState("");
  const [phPersonalKey, setPhPersonalKey] = useState("");
  const [phCheck, setPhCheck] = useState<PostHogCheck | null>(null);

  const [siteId, setSiteId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [requestId, setRequestId] = useState("");

  async function handleValidateToken() {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/onboard/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Invalid token");
        return;
      }
      setGhUser({ login: data.login, avatar: data.avatar });
      setRepos(data.repos);
      setStep(2);
    } catch {
      setError("Something went wrong. Check your token.");
    } finally {
      setLoading(false);
    }
  }

  async function handleConnectRepo() {
    setError("");
    if (!selectedRepo || !prodUrl) {
      setError("Pick a repository and enter a production URL.");
      return;
    }
    setStep(3);
  }

  async function handleConnectPosthog() {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/onboard/posthog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          posthogHost: phHost,
          posthogProjectId: phProjectId,
          posthogPersonalApiKey: phPersonalKey,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "PostHog rejected the credentials.");
        return;
      }
      setPhCheck(data);
      setStep(4);
    } catch {
      setError("Couldn't reach PostHog. Check the host URL.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSaveAndTrigger() {
    setError("");
    setLoading(true);
    try {
      const [owner, repo] = selectedRepo.split("/");
      const saveRes = await fetch("/api/onboard/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          githubToken: token,
          githubOwner: owner,
          githubRepo: repo,
          prodUrl,
          posthogPersonalApiKey: phPersonalKey,
          posthogProjectId: phProjectId,
          posthogHost: phCheck?.host ?? phHost,
          posthogProjectToken: phCheck?.posthogProjectToken ?? null,
        }),
      });
      const saveData = await saveRes.json();
      if (!saveRes.ok) {
        setError(saveData.error || "Failed to save customer.");
        return;
      }
      setSiteId(saveData.siteId);
      setCustomerId(saveData.customerId);

      const triggerRes = await fetch("/api/onboard/trigger", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId: saveData.customerId }),
      });
      const triggerData = await triggerRes.json();
      if (!triggerRes.ok) {
        setError(triggerData.error || "Saved, but couldn't trigger the agent.");
        setStep(5);
        return;
      }
      setRequestId(triggerData.requestId);
      setStep(5);
    } catch {
      setError("Something went wrong while saving.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.6] [mask-image:radial-gradient(ellipse_at_top,black,transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <header className="relative max-w-3xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative size-7 rounded-md border border-border flex items-center justify-center overflow-hidden">
            <span className="absolute inset-[1px] rounded-[5px] bg-gradient-to-br from-foreground/[0.08] to-transparent" />
            <span className="relative size-1.5 rounded-full bg-success pulse-dot" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium tracking-tight">autoresearch</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">onboarding</p>
          </div>
        </div>
        <a href="/" className="text-xs text-muted-foreground hover:text-foreground hover-underline">
          Sign in →
        </a>
      </header>

      <section className="relative max-w-2xl mx-auto px-6 lg:px-8 pt-10 pb-16 page-stagger">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 enter">
          step {Math.min(step, 5)} of 5 · {STEP_LABEL[step]}
        </p>
        <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight max-w-lg leading-[1.1] enter">
          {step === 1 && "Connect a GitHub account so Devin can ship code on your behalf."}
          {step === 2 && "Tell us which repository powers your product."}
          {step === 3 && "Point the agent at your PostHog so it can find experiments to run."}
          {step === 4 && "Review the connection. We'll trigger the first run when you confirm."}
          {step === 5 && "You're live. Devin is on it."}
        </h1>
        <p className="mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed enter">
          {step === 1 &&
            "Tokens are stored encrypted in Insforge. The agent commits flag-gated variants directly to your default branch."}
          {step === 2 &&
            "The monitor cron polls every hour. Variants land on the branch you pick here."}
          {step === 3 &&
            "We use a personal API key with the query:read scope. No client SDK, no tracking snippet — we read straight from your existing PostHog stream."}
          {step === 4 &&
            "Triggering runs the monitor once immediately so judges see something on the console without waiting for the next cron tick."}
          {step === 5 &&
            "The cron will keep running every hour. Watch the dashboard for new Devin sessions and verdicts."}
        </p>

        <ProgressRail step={step} />

        <div className="mt-8 rounded-xl border border-border bg-elevated/60 enter">
          {step === 1 && (
            <Step1
              token={token}
              setToken={setToken}
              loading={loading}
              error={error}
              onSubmit={handleValidateToken}
            />
          )}
          {step === 2 && ghUser && (
            <Step2
              ghUser={ghUser}
              repos={repos}
              selectedRepo={selectedRepo}
              setSelectedRepo={setSelectedRepo}
              prodUrl={prodUrl}
              setProdUrl={setProdUrl}
              error={error}
              onSubmit={handleConnectRepo}
            />
          )}
          {step === 3 && (
            <Step3
              phHost={phHost}
              setPhHost={setPhHost}
              phProjectId={phProjectId}
              setPhProjectId={setPhProjectId}
              phPersonalKey={phPersonalKey}
              setPhPersonalKey={setPhPersonalKey}
              loading={loading}
              error={error}
              onSubmit={handleConnectPosthog}
            />
          )}
          {step === 4 && phCheck && (
            <Step4
              ghUser={ghUser}
              selectedRepo={selectedRepo}
              prodUrl={prodUrl}
              phCheck={phCheck}
              loading={loading}
              error={error}
              onConfirm={handleSaveAndTrigger}
            />
          )}
          {step === 5 && (
            <Step5
              siteId={siteId}
              customerId={customerId}
              requestId={requestId}
              selectedRepo={selectedRepo}
              prodUrl={prodUrl}
              error={error}
            />
          )}
        </div>
      </section>
    </main>
  );
}

function ProgressRail({ step }: { step: Step }) {
  return (
    <div className="mt-10 grid grid-cols-5 gap-2 enter">
      {([1, 2, 3, 4, 5] as const).map((n) => {
        const done = step > n;
        const active = step === n;
        return (
          <div key={n} className="space-y-1.5">
            <div
              className={`h-px w-full transition-colors ${
                done ? "bg-foreground" : active ? "bg-foreground/65" : "bg-border"
              }`}
            />
            <div className="flex items-center gap-1.5">
              <span
                className={`size-1.5 rounded-full ${
                  done ? "bg-foreground" : active ? "bg-success pulse-dot" : "bg-muted-foreground/40"
                }`}
              />
              <span
                className={`text-[10px] uppercase tracking-[0.18em] ${
                  active || done ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {STEP_LABEL[n]}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PrimaryButton({
  loading,
  disabled,
  onClick,
  children,
  type = "button",
}: {
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full bg-foreground text-background py-2.5 rounded-md text-sm font-medium hover:bg-accent disabled:opacity-50 transition-colors focus-ring"
    >
      {loading ? (
        <span className="inline-flex items-center justify-center gap-2">
          <span className="size-3.5 border-2 border-background/40 border-t-background rounded-full animate-spin" />
          Working…
        </span>
      ) : (
        children
      )}
    </button>
  );
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  mono,
  hint,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  mono?: boolean;
  hint?: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-ring focus-ring transition-colors ${
          mono ? "font-mono" : ""
        }`}
      />
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function Step1({
  token,
  setToken,
  loading,
  error,
  onSubmit,
}: {
  token: string;
  setToken: (v: string) => void;
  loading: boolean;
  error: string;
  onSubmit: () => void;
}) {
  return (
    <div className="p-6 sm:p-8 space-y-5">
      <Field
        id="gh-token"
        label="GitHub personal access token"
        type="password"
        value={token}
        onChange={setToken}
        placeholder="github_pat_…"
        mono
        hint={
          <>
            Needs <span className="text-foreground/85">Contents</span> and{" "}
            <span className="text-foreground/85">Pull requests</span> read &amp; write.{" "}
            <a
              href="https://github.com/settings/tokens?type=beta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover-underline"
            >
              Create one →
            </a>
          </>
        }
      />
      {error && <p className="text-xs text-danger">{error}</p>}
      <PrimaryButton onClick={onSubmit} disabled={!token} loading={loading}>
        Connect GitHub
      </PrimaryButton>
    </div>
  );
}

function Step2({
  ghUser,
  repos,
  selectedRepo,
  setSelectedRepo,
  prodUrl,
  setProdUrl,
  error,
  onSubmit,
}: {
  ghUser: { login: string; avatar: string };
  repos: Repo[];
  selectedRepo: string;
  setSelectedRepo: (v: string) => void;
  prodUrl: string;
  setProdUrl: (v: string) => void;
  error: string;
  onSubmit: () => void;
}) {
  return (
    <div className="p-6 sm:p-8 space-y-5">
      <div className="flex items-center gap-3 px-3.5 py-3 rounded-md bg-background border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ghUser.avatar} alt="" className="size-8 rounded-full" />
        <div className="leading-tight">
          <p className="text-sm font-medium">@{ghUser.login}</p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-success">Connected</p>
        </div>
      </div>
      <div className="space-y-1.5">
        <label
          htmlFor="repo"
          className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          Repository
        </label>
        <select
          id="repo"
          value={selectedRepo}
          onChange={(e) => setSelectedRepo(e.target.value)}
          className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm text-foreground outline-none focus:border-ring focus-ring transition-colors"
        >
          <option value="">— select a repository —</option>
          {repos.map((r) => (
            <option key={r.fullName} value={r.fullName}>
              {r.fullName}
              {r.private ? " · private" : ""}
            </option>
          ))}
        </select>
      </div>
      <Field
        id="prod-url"
        label="Production URL"
        type="url"
        value={prodUrl}
        onChange={setProdUrl}
        placeholder="https://your-site.com"
      />
      {error && <p className="text-xs text-danger">{error}</p>}
      <PrimaryButton onClick={onSubmit} disabled={!selectedRepo || !prodUrl}>
        Continue
      </PrimaryButton>
    </div>
  );
}

function Step3({
  phHost,
  setPhHost,
  phProjectId,
  setPhProjectId,
  phPersonalKey,
  setPhPersonalKey,
  loading,
  error,
  onSubmit,
}: {
  phHost: string;
  setPhHost: (v: string) => void;
  phProjectId: string;
  setPhProjectId: (v: string) => void;
  phPersonalKey: string;
  setPhPersonalKey: (v: string) => void;
  loading: boolean;
  error: string;
  onSubmit: () => void;
}) {
  return (
    <div className="p-6 sm:p-8 space-y-5">
      <Field
        id="ph-host"
        label="PostHog host"
        type="url"
        value={phHost}
        onChange={setPhHost}
        placeholder="https://app.posthog.com"
        hint={
          <>
            US Cloud is <code className="font-mono">https://us.posthog.com</code>, EU Cloud is{" "}
            <code className="font-mono">https://eu.posthog.com</code>. Self-hosted? Drop in your URL.
          </>
        }
      />
      <Field
        id="ph-project-id"
        label="Project ID"
        type="text"
        value={phProjectId}
        onChange={setPhProjectId}
        placeholder="42"
        mono
        hint={
          <>
            Find it in <span className="text-foreground/85">Project settings → Project Variables</span> in PostHog.
          </>
        }
      />
      <Field
        id="ph-key"
        label="Personal API key"
        type="password"
        value={phPersonalKey}
        onChange={setPhPersonalKey}
        placeholder="phx_…"
        mono
        hint={
          <>
            Create one at{" "}
            <a
              href="https://app.posthog.com/settings/user-api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover-underline"
            >
              app.posthog.com/settings/user-api-keys
            </a>{" "}
            with the <code className="font-mono">query:read</code> scope. Stored encrypted in Insforge.
          </>
        }
      />
      {error && <p className="text-xs text-danger">{error}</p>}
      <PrimaryButton
        onClick={onSubmit}
        disabled={!phProjectId || !phPersonalKey}
        loading={loading}
      >
        Test connection &amp; continue
      </PrimaryButton>
    </div>
  );
}

function Step4({
  ghUser,
  selectedRepo,
  prodUrl,
  phCheck,
  loading,
  error,
  onConfirm,
}: {
  ghUser: { login: string; avatar: string } | null;
  selectedRepo: string;
  prodUrl: string;
  phCheck: PostHogCheck;
  loading: boolean;
  error: string;
  onConfirm: () => void;
}) {
  const rows: [string, string][] = [
    ["GitHub user", ghUser ? `@${ghUser.login}` : "—"],
    ["Repository", selectedRepo],
    ["Production URL", prodUrl],
    ["PostHog project", phCheck.name ?? "—"],
    ["PostHog host", phCheck.host],
    ["Events seen (7d)", phCheck.eventCount.toLocaleString()],
  ];
  return (
    <div className="p-6 sm:p-8 space-y-5">
      <ul className="divide-y divide-border border border-border rounded-md overflow-hidden">
        {rows.map(([label, value]) => (
          <li
            key={label}
            className="flex items-center justify-between gap-4 px-3.5 py-3 bg-background"
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </span>
            <span className="text-xs font-mono text-foreground/90 truncate max-w-[260px]">
              {value}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Confirming will save these to <code className="font-mono">customers</code> in Insforge and call
        the Tensorlake monitor once with this customer's PostHog credentials. Subsequent runs are on the
        hourly cron.
      </p>
      {error && <p className="text-xs text-danger">{error}</p>}
      <PrimaryButton onClick={onConfirm} loading={loading}>
        Confirm &amp; trigger first run
      </PrimaryButton>
    </div>
  );
}

function Step5({
  siteId,
  customerId,
  requestId,
  selectedRepo,
  prodUrl,
  error,
}: {
  siteId: string;
  customerId: string;
  requestId: string;
  selectedRepo: string;
  prodUrl: string;
  error: string;
}) {
  const rows: [string, string][] = [
    ["Customer ID", customerId],
    ["Site ID", siteId],
    ["Repository", selectedRepo],
    ["Production URL", prodUrl],
    ["Monitor request", requestId || "queued · check the console"],
  ];
  return (
    <div className="p-6 sm:p-8 space-y-6">
      <ul className="divide-y divide-border border border-border rounded-md overflow-hidden">
        {rows.map(([label, value]) => (
          <li
            key={label}
            className="flex items-center justify-between gap-4 px-3.5 py-3 bg-background"
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </span>
            <span className="text-xs font-mono text-foreground/90 truncate max-w-[260px]">
              {value}
            </span>
          </li>
        ))}
      </ul>
      {error && <p className="text-xs text-danger">{error}</p>}
      <a
        href="/dashboard"
        className="block w-full bg-foreground text-background text-center py-2.5 rounded-md text-sm font-medium hover:bg-accent transition-colors focus-ring"
      >
        Open the console →
      </a>
    </div>
  );
}
