"use client";

import { useState } from "react";

interface AgentRunRow {
  id: string;
  sessions_analyzed: number | null;
  avg_time_on_page_seconds: number | null;
  top_rage_click: string | null;
  drop_off_path: string | null;
  devin_session_id: string | null;
  devin_session_url: string | null;
  pr_number: number | null;
  pr_url: string | null;
  status: string | null;
  created_at: string | null;
}

const STATUS_STYLES: Record<string, string> = {
  running: "bg-emerald-100 text-emerald-700",
  pr_open: "bg-blue-100 text-blue-700",
  merged: "bg-violet-100 text-violet-700",
  failed: "bg-red-100 text-red-600",
};

function elapsed(iso: string | null) {
  if (!iso) return "—";
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

export default function AgentRunsTable({ runs }: { runs: AgentRunRow[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-900">Agent runs</h2>
        <span className="text-xs text-gray-400">{runs.length} total</span>
      </div>

      {runs.length === 0 ? (
        <div className="px-6 py-12 text-center text-sm text-gray-400 italic">
          No agent runs yet. Trigger the UX agent to see results here.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Target</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Sessions</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">PR</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Run</th>
              </tr>
            </thead>
            <tbody>
              {runs.map((run) => (
                <>
                  <tr
                    key={run.id}
                    onClick={() => setExpanded(expanded === run.id ? null : run.id)}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 max-w-[200px] truncate">
                      {run.top_rage_click ?? run.drop_off_path ?? <span className="text-gray-400 font-normal italic">Unknown</span>}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {run.sessions_analyzed ?? "—"}
                    </td>
                    <td className="px-6 py-4">
                      {run.status ? (
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[run.status] ?? "bg-gray-100 text-gray-500"}`}>
                          {run.status.replace("_", " ")}
                        </span>
                      ) : "—"}
                    </td>
                    <td className="px-6 py-4">
                      {run.pr_url ? (
                        <a
                          href={run.pr_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 hover:underline font-medium"
                        >
                          #{run.pr_number}
                        </a>
                      ) : "—"}
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-xs">{elapsed(run.created_at)}</td>
                  </tr>
                  {expanded === run.id && (
                    <tr key={`${run.id}-expanded`} className="bg-gray-50 border-b border-gray-100">
                      <td colSpan={5} className="px-6 py-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                          <div>
                            <p className="text-gray-400 uppercase tracking-wider font-semibold mb-1">Avg time on page</p>
                            <p className="text-gray-900">{run.avg_time_on_page_seconds != null ? `${run.avg_time_on_page_seconds}s` : "—"}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 uppercase tracking-wider font-semibold mb-1">Drop-off path</p>
                            <p className="text-gray-900 truncate">{run.drop_off_path ?? "—"}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 uppercase tracking-wider font-semibold mb-1">Devin session</p>
                            {run.devin_session_url ? (
                              <a href={run.devin_session_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate block">
                                {run.devin_session_id?.slice(0, 12)}…
                              </a>
                            ) : <p className="text-gray-900">—</p>}
                          </div>
                          <div>
                            <p className="text-gray-400 uppercase tracking-wider font-semibold mb-1">Run ID</p>
                            <p className="text-gray-400 font-mono truncate">{run.id.slice(0, 12)}…</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
