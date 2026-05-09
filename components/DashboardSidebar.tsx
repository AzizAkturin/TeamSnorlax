'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/dashboard", id: "sidebar-overview" },
  { label: "Analytics", href: "/dashboard/analytics", id: "sidebar-analytics" },
  { label: "Reports", href: "/dashboard/reports", id: "sidebar-reports" },
  { label: "Settings", href: "/dashboard/settings", id: "sidebar-settings" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 bg-gray-900 text-white flex flex-col min-h-screen">
      <div className="px-6 py-5 border-b border-gray-700">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          Meridian
        </Link>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              data-ph-id={item.id}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
