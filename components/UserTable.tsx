'use client';

import { useState } from "react";
import UserDetailModal from "./UserDetailModal";

export type User = {
  id: number;
  name: string;
  email: string;
  plan: "Starter" | "Growth" | "Enterprise";
  status: "Active" | "Churned" | "Trial";
  joined: string;
  usage: string;
  location: string;
};

const users: User[] = [
  { id: 1, name: "Priya Nair", email: "priya@novalabs.io", plan: "Growth", status: "Active", joined: "Jan 12, 2026", usage: "84%", location: "San Francisco, CA" },
  { id: 2, name: "Marcus Webb", email: "marcus@bridgeco.com", plan: "Enterprise", status: "Active", joined: "Oct 3, 2025", usage: "61%", location: "New York, NY" },
  { id: 3, name: "Sofia Delgado", email: "sofia@stackmint.dev", plan: "Starter", status: "Trial", joined: "Apr 28, 2026", usage: "22%", location: "Austin, TX" },
  { id: 4, name: "Jin Park", email: "jin@orbitsaas.com", plan: "Growth", status: "Active", joined: "Feb 7, 2026", usage: "91%", location: "Seattle, WA" },
  { id: 5, name: "Amara Osei", email: "amara@fieldbase.co", plan: "Starter", status: "Churned", joined: "Nov 19, 2025", usage: "0%", location: "Chicago, IL" },
  { id: 6, name: "Lena Kovač", email: "lena@datavolt.eu", plan: "Enterprise", status: "Active", joined: "Sep 1, 2025", usage: "73%", location: "Berlin, DE" },
  { id: 7, name: "Ryan Tomita", email: "ryan@helixhq.io", plan: "Growth", status: "Trial", joined: "May 2, 2026", usage: "38%", location: "Los Angeles, CA" },
];

type SortKey = "name" | "plan" | "status";

const planOrder = { Starter: 0, Growth: 1, Enterprise: 2 };
const statusOrder = { Trial: 0, Active: 1, Churned: 2 };

const statusStyles: Record<User["status"], string> = {
  Active: "bg-green-100 text-green-700",
  Churned: "bg-red-100 text-red-600",
  Trial: "bg-amber-100 text-amber-700",
};

const planStyles: Record<User["plan"], string> = {
  Starter: "bg-gray-100 text-gray-600",
  Growth: "bg-blue-100 text-blue-700",
  Enterprise: "bg-violet-100 text-violet-700",
};

export default function UserTable() {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [selected, setSelected] = useState<User | null>(null);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const sorted = [...users].sort((a, b) => {
    let cmp = 0;
    if (sortKey === "name") cmp = a.name.localeCompare(b.name);
    if (sortKey === "plan") cmp = planOrder[a.plan] - planOrder[b.plan];
    if (sortKey === "status") cmp = statusOrder[a.status] - statusOrder[b.status];
    return sortDir === "asc" ? cmp : -cmp;
  });

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col) return <span className="ml-1 text-gray-300">↕</span>;
    return <span className="ml-1 text-gray-600">{sortDir === "asc" ? "↑" : "↓"}</span>;
  }

  return (
    <>
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900">Users</h2>
          <span className="text-xs text-gray-400">{users.length} total</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th
                  className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer select-none hover:text-gray-700"
                  onClick={() => handleSort("name")}
                  data-ph-id="table-sort-name"
                >
                  Name <SortIcon col="name" />
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th
                  className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer select-none hover:text-gray-700"
                  onClick={() => handleSort("plan")}
                  data-ph-id="table-sort-plan"
                >
                  Plan <SortIcon col="plan" />
                </th>
                <th
                  className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer select-none hover:text-gray-700"
                  onClick={() => handleSort("status")}
                  data-ph-id="table-sort-status"
                >
                  Status <SortIcon col="status" />
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => setSelected(user)}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors"
                  data-ph-id={`table-row-user-${user.id}`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${planStyles[user.plan]}`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusStyles[user.status]}`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <UserDetailModal user={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
