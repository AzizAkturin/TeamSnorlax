"use client";

import { useState } from "react";

type Repo = { fullName: string; name: string; private: boolean };
type Step = 1 | 2 | 3 | 4;

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://team-snorlax.vercel.app";

function snippet(siteId: string) {
  return `<script>
(function(){
  var S="${siteId}", U="${APP_URL}/api/analytics";
  var sid=Math.random().toString(36).slice(2);
  var t0=Date.now(), lc=null, lcc=0;
  function send(e,el,extra){
    fetch(U,{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify(Object.assign({type:e,sessionId:sid,path:location.pathname,
      timestamp:Date.now(),siteId:S,viewport:{width:innerWidth,height:innerHeight}},
      el?{element:el}:{},extra||{}))});
  }
  send("pageview");
  document.addEventListener("click",function(e){
    var t=e.target, id=t.id||t.className||t.tagName.toLowerCase();
    if(id===lc){lcc++;if(lcc>=3)send("ragclick",id);}else{lc=id;lcc=1;}
    send("click",id);
  });
  var maxScroll=0;
  window.addEventListener("scroll",function(){
    var d=document.documentElement, pct=Math.round(d.scrollTop/(d.scrollHeight-d.clientHeight||1)*100);
    if(pct>maxScroll){maxScroll=pct;}
  });
  window.addEventListener("beforeunload",function(){
    send("exit",null,{scrollDepth:maxScroll,timeOnPage:Math.round((Date.now()-t0)/1000)});
  });
})();
</script>`.trim();
}

const STEP_LABEL: Record<Step, string> = {
  1: "GitHub",
  2: "Repository",
  3: "Snippet",
  4: "Live",
};

export default function OnboardPage() {
  const [step, setStep] = useState<Step>(1);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ghUser, setGhUser] = useState<{ login: string; avatar: string } | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState("");
  const [prodUrl, setProdUrl] = useState("");
  const [siteId, setSiteId] = useState("");
  const [copied, setCopied] = useState(false);

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

  async function handleSave() {
    setError("");
    setLoading(true);
    try {
      const [owner, repo] = selectedRepo.split("/");
      const res = await fetch("/api/onboard/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          githubToken: token,
          githubOwner: owner,
          githubRepo: repo,
          prodUrl,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save");
        return;
      }
      setSiteId(data.siteId);
      setStep(3);
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function copySnippet() {
    navigator.clipboard.writeText(snippet(siteId));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              onboarding
            </p>
          </div>
        </div>
        <a
          href="/"
          className="text-xs text-muted-foreground hover:text-foreground hover-underline"
        >
          Sign in →
        </a>
      </header>

      <section className="relative max-w-2xl mx-auto px-6 lg:px-8 pt-10 pb-16 page-stagger">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 enter">
          step {step} of 4 · {STEP_LABEL[step]}
        </p>
        <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight max-w-lg leading-[1.1] enter">
          {step === 1 && "Connect a GitHub account so Devin can ship code on your behalf."}
          {step === 2 && "Tell us which repository powers your product."}
          {step === 3 && "Drop one line of analytics into your site so we can find experiments to run."}
          {step === 4 && "You're live. The agent takes it from here."}
        </h1>
        <p className="mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed enter">
          {step === 1 &&
            "We never read your code or push commits without a flag-gated experiment. Tokens are stored encrypted in Insforge."}
          {step === 2 &&
            "The agent will commit variants directly to your default branch. You can change the repo later."}
          {step === 3 &&
            "It takes a few seconds and uses no third-party scripts. You can also use your existing PostHog stream."}
          {step === 4 &&
            "Once the next monitor cron has enough sessions, you'll see Devin runs and verdicts on the console."}
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
              loading={loading}
              error={error}
              onSubmit={handleSave}
            />
          )}
          {step === 3 && (
            <Step3
              siteId={siteId}
              snippetText={snippet(siteId)}
              copied={copied}
              onCopy={copySnippet}
              onContinue={() => setStep(4)}
            />
          )}
          {step === 4 && (
            <Step4
              siteId={siteId}
              selectedRepo={selectedRepo}
              prodUrl={prodUrl}
            />
          )}
        </div>
      </section>
    </main>
  );
}

function ProgressRail({ step }: { step: Step }) {
  return (
    <div className="mt-10 grid grid-cols-4 gap-2 enter">
      {([1, 2, 3, 4] as const).map((n) => {
        const done = step > n;
        const active = step === n;
        return (
          <div key={n} className="space-y-1.5">
            <div
              className={`h-px w-full transition-colors ${
                done
                  ? "bg-foreground"
                  : active
                  ? "bg-foreground/65"
                  : "bg-border"
              }`}
            />
            <div className="flex items-center gap-1.5">
              <span
                className={`size-1.5 rounded-full ${
                  done
                    ? "bg-foreground"
                    : active
                    ? "bg-success pulse-dot"
                    : "bg-muted-foreground/40"
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
      <div className="space-y-1.5">
        <label
          htmlFor="gh-token"
          className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          GitHub personal access token
        </label>
        <input
          id="gh-token"
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && token && onSubmit()}
          placeholder="github_pat_…"
          className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm font-mono text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-ring focus-ring transition-colors"
        />
        <p className="text-xs text-muted-foreground">
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
        </p>
      </div>
      {error && (
        <p className="text-xs text-danger" role="alert">
          {error}
        </p>
      )}
      <button
        onClick={onSubmit}
        disabled={!token || loading}
        className="w-full bg-foreground text-background py-2.5 rounded-md text-sm font-medium hover:bg-accent disabled:opacity-50 transition-colors focus-ring"
      >
        {loading ? "Validating…" : "Connect GitHub"}
      </button>
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
  loading,
  error,
  onSubmit,
}: {
  ghUser: { login: string; avatar: string };
  repos: Repo[];
  selectedRepo: string;
  setSelectedRepo: (v: string) => void;
  prodUrl: string;
  setProdUrl: (v: string) => void;
  loading: boolean;
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
          <p className="text-[10px] uppercase tracking-[0.18em] text-success">
            Connected
          </p>
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

      <div className="space-y-1.5">
        <label
          htmlFor="prod-url"
          className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          Production URL
        </label>
        <input
          id="prod-url"
          type="url"
          value={prodUrl}
          onChange={(e) => setProdUrl(e.target.value)}
          placeholder="https://your-site.com"
          className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-ring focus-ring transition-colors"
        />
      </div>

      {error && (
        <p className="text-xs text-danger" role="alert">
          {error}
        </p>
      )}

      <button
        onClick={onSubmit}
        disabled={!selectedRepo || !prodUrl || loading}
        className="w-full bg-foreground text-background py-2.5 rounded-md text-sm font-medium hover:bg-accent disabled:opacity-50 transition-colors focus-ring"
      >
        {loading ? "Saving…" : "Continue"}
      </button>
    </div>
  );
}

function Step3({
  siteId,
  snippetText,
  copied,
  onCopy,
  onContinue,
}: {
  siteId: string;
  snippetText: string;
  copied: boolean;
  onCopy: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="p-6 sm:p-8 space-y-5">
      <div className="flex items-center justify-between gap-4 text-xs">
        <span className="text-muted-foreground">
          Paste before <code className="font-mono text-foreground/85">&lt;/body&gt;</code> on every tracked page.
        </span>
        <button
          onClick={onCopy}
          className="text-foreground/85 hover:text-foreground hover-underline"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="text-[11px] leading-relaxed font-mono whitespace-pre-wrap break-all bg-background border border-border rounded-md p-4 overflow-x-auto">
        {snippetText}
      </pre>
      <div className="flex items-center justify-between gap-4 px-3.5 py-2.5 rounded-md bg-background border border-border">
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Site ID
        </span>
        <code className="text-xs font-mono text-foreground/85 truncate">{siteId}</code>
      </div>
      <button
        onClick={onContinue}
        className="w-full bg-foreground text-background py-2.5 rounded-md text-sm font-medium hover:bg-accent transition-colors focus-ring"
      >
        I've added the snippet
      </button>
    </div>
  );
}

function Step4({
  siteId,
  selectedRepo,
  prodUrl,
}: {
  siteId: string;
  selectedRepo: string;
  prodUrl: string;
}) {
  return (
    <div className="p-6 sm:p-8 space-y-6">
      <ul className="divide-y divide-border border border-border rounded-md overflow-hidden">
        {[
          ["Site ID", siteId],
          ["Repository", selectedRepo],
          ["Production URL", prodUrl],
          ["Min sessions to trigger agent", "10"],
        ].map(([label, value]) => (
          <li
            key={label}
            className="flex items-center justify-between gap-4 px-3.5 py-3 bg-background"
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </span>
            <span className="text-xs font-mono text-foreground/90 truncate max-w-[220px]">
              {value}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="/dashboard"
        className="block w-full bg-foreground text-background text-center py-2.5 rounded-md text-sm font-medium hover:bg-accent transition-colors focus-ring"
      >
        Open the console →
      </a>
    </div>
  );
}
