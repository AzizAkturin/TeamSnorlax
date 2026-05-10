"use client";
import { useState } from "react";

type Repo = { fullName: string; name: string; private: boolean };
type Step = 1 | 2 | 3 | 4;

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://team-snorlax.vercel.app";

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
      if (!res.ok) { setError(data.error || "Invalid token"); return; }
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
        body: JSON.stringify({ githubToken: token, githubOwner: owner, githubRepo: repo, prodUrl }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Failed to save"); return; }
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

  const steps = ["Connect GitHub", "Your repository", "Install snippet", "You're live"];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center">
          <span className="text-white text-xs font-bold">UX</span>
        </div>
        <span className="font-semibold text-gray-900">UX Agent</span>
        <span className="text-gray-300 mx-1">·</span>
        <span className="text-sm text-gray-500">Customer onboarding</span>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          {/* Progress */}
          <div className="flex items-center mb-10">
            {steps.map((label, i) => {
              const n = (i + 1) as Step;
              const active = step === n;
              const done = step > n;
              return (
                <div key={n} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                      ${done ? "bg-gray-900 text-white" : active ? "bg-gray-900 text-white ring-4 ring-gray-200" : "bg-gray-200 text-gray-400"}`}>
                      {done ? "✓" : n}
                    </div>
                    <span className={`text-xs mt-1.5 whitespace-nowrap ${active ? "text-gray-900 font-medium" : "text-gray-400"}`}>
                      {label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`h-px flex-1 mx-3 mb-5 transition-all ${done ? "bg-gray-900" : "bg-gray-200"}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

            {/* Step 1: GitHub token */}
            {step === 1 && (
              <div>
                <h1 className="text-xl font-semibold text-gray-900 mb-1">Connect your GitHub account</h1>
                <p className="text-sm text-gray-500 mb-6">
                  We need a personal access token to read your repo and open improvement PRs on your behalf.
                </p>
                <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">
                  GitHub Personal Access Token
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-gray-50"
                  placeholder="github_pat_..."
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && token && handleValidateToken()}
                />
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                <p className="mt-3 text-xs text-gray-400">
                  Needs <strong>Contents</strong> and <strong>Pull requests</strong> read &amp; write.{" "}
                  <a href="https://github.com/settings/tokens?type=beta" target="_blank" className="underline">Create one →</a>
                </p>
                <button
                  onClick={handleValidateToken}
                  disabled={!token || loading}
                  className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? "Validating…" : "Connect GitHub"}
                </button>
              </div>
            )}

            {/* Step 2: Repo + URL */}
            {step === 2 && ghUser && (
              <div>
                <div className="flex items-center gap-3 mb-6 p-3 bg-green-50 rounded-xl border border-green-100">
                  <img src={ghUser.avatar} alt="" className="w-9 h-9 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">@{ghUser.login}</p>
                    <p className="text-xs text-green-600">Connected successfully</p>
                  </div>
                </div>
                <h1 className="text-xl font-semibold text-gray-900 mb-1">Select your repository</h1>
                <p className="text-sm text-gray-500 mb-6">
                  Choose the repo that powers your website. The agent will open PRs here.
                </p>
                <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide">Repository</label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  value={selectedRepo}
                  onChange={(e) => setSelectedRepo(e.target.value)}
                >
                  <option value="">— select a repository —</option>
                  {repos.map((r) => (
                    <option key={r.fullName} value={r.fullName}>
                      {r.fullName} {r.private ? "🔒" : ""}
                    </option>
                  ))}
                </select>
                <label className="block text-xs font-medium text-gray-600 mb-1.5 uppercase tracking-wide mt-5">
                  Production URL
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="https://your-site.com"
                  value={prodUrl}
                  onChange={(e) => setProdUrl(e.target.value)}
                />
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                <button
                  onClick={handleSave}
                  disabled={!selectedRepo || !prodUrl || loading}
                  className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? "Saving…" : "Continue"}
                </button>
              </div>
            )}

            {/* Step 3: Snippet */}
            {step === 3 && (
              <div>
                <h1 className="text-xl font-semibold text-gray-900 mb-1">Install the tracking snippet</h1>
                <p className="text-sm text-gray-500 mb-6">
                  Paste this before the closing <code className="bg-gray-100 px-1 rounded">&lt;/body&gt;</code> tag on every page you want to track.
                </p>
                <div className="relative bg-gray-950 rounded-xl overflow-hidden">
                  <pre className="text-xs text-green-400 p-4 overflow-x-auto leading-relaxed whitespace-pre-wrap break-all">
                    {snippet(siteId)}
                  </pre>
                  <button
                    onClick={copySnippet}
                    className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-lg transition"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                  <p className="text-xs text-amber-700">
                    <strong>Your site ID:</strong> <code className="font-mono">{siteId}</code> — keep this safe, it links all your analytics data.
                  </p>
                </div>
                <button
                  onClick={() => setStep(4)}
                  className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 transition"
                >
                  I've added the snippet →
                </button>
              </div>
            )}

            {/* Step 4: Done */}
            {step === 4 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-xl font-semibold text-gray-900 mb-2">You're all set!</h1>
                <p className="text-sm text-gray-500 mb-8">
                  Once we collect enough sessions from <strong>{prodUrl}</strong>, the UX Agent will automatically analyze user behavior and open improvement PRs on <strong>{selectedRepo}</strong>.
                </p>
                <div className="bg-gray-50 rounded-xl p-5 text-left space-y-3 mb-8">
                  {[
                    ["Tracking active", `Site ID: ${siteId}`],
                    ["Repository connected", selectedRepo],
                    ["Production URL", prodUrl],
                    ["Minimum sessions to trigger agent", "10"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-gray-500">{label}</span>
                      <span className="font-medium text-gray-900 font-mono text-xs truncate max-w-[200px]">{value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/dashboard"
                  className="block w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 transition text-center"
                >
                  Go to dashboard
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
