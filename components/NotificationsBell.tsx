'use client';

import { useState, useRef, useEffect } from "react";

const notifications = [
  {
    id: 1,
    title: "Anomaly detected",
    body: "Checkout funnel drop-off spiked 34% in the last hour.",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "New data source connected",
    body: "Snowflake warehouse \"prod-dw\" is now syncing.",
    time: "1 hr ago",
  },
  {
    id: 3,
    title: "Report ready",
    body: "\"Weekly Actives — May 2026\" has finished exporting.",
    time: "3 hr ago",
  },
];

export default function NotificationsBell() {
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState<Set<number>>(new Set());
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

  const unread = notifications.length - read.size;

  function markAllRead() {
    setRead(new Set(notifications.map((n) => n.id)));
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors"
        data-ph-id="topbar-notifications-bell"
        aria-label="Notifications"
      >
        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {unread > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-400 rounded-full" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-100 rounded-xl shadow-lg z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-900">
              Notifications {unread > 0 && <span className="ml-1 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">{unread} new</span>}
            </span>
            <button
              onClick={markAllRead}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
              data-ph-id="notifications-mark-all-read"
            >
              Mark all read
            </button>
          </div>
          <ul>
            {notifications.map((n) => {
              const isRead = read.has(n.id);
              return (
                <li
                  key={n.id}
                  onClick={() => setRead((prev) => new Set([...prev, n.id]))}
                  className={`px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 ${isRead ? "opacity-60" : ""}`}
                  data-ph-id={`notification-item-${n.id}`}
                >
                  <div className="flex items-start gap-2.5">
                    {!isRead && <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
                    {isRead && <span className="mt-1.5 w-1.5 h-1.5 shrink-0" />}
                    <div>
                      <p className="text-sm font-medium text-gray-900">{n.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{n.body}</p>
                      <p className="text-xs text-gray-300 mt-1">{n.time}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
