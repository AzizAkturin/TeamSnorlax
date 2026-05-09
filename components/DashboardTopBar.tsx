'use client';

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import NotificationsBell from "./NotificationsBell";

export default function DashboardTopBar({ title }: { title: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white">
      <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      <div className="flex items-center gap-2">
        <NotificationsBell />
        <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-full hover:bg-gray-100 p-1 transition-colors"
          data-ph-id="topbar-avatar"
          aria-label="User menu"
        >
          <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-sm font-bold text-amber-900">
            A
          </div>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50">
            <div className="px-4 py-2.5 border-b border-gray-100">
              <p className="text-xs font-medium text-gray-900">Alex Johnson</p>
              <p className="text-xs text-gray-400 truncate">alex@company.com</p>
            </div>
            <button
              onClick={() => router.push("/signin")}
              className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              data-ph-id="topbar-signout"
            >
              Sign out
            </button>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}
