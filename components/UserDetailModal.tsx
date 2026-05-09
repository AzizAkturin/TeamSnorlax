'use client';

import { useEffect } from "react";
import type { User } from "./UserTable";

export default function UserDetailModal({ user, onClose }: { user: User; onClose: () => void }) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const statusStyles: Record<User["status"], string> = {
    Active: "bg-green-100 text-green-700",
    Churned: "bg-red-100 text-red-600",
    Trial: "bg-amber-100 text-amber-700",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
      data-ph-id="user-detail-modal-backdrop"
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6"
        onClick={(e) => e.stopPropagation()}
        data-ph-id="user-detail-modal"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">
              {user.name[0]}
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{user.name}</h2>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-gray-500 transition-colors text-xl leading-none"
            data-ph-id="user-detail-modal-close"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Plan", value: user.plan },
            { label: "Status", value: user.status, badge: true },
            { label: "Joined", value: user.joined },
            { label: "Storage usage", value: user.usage },
            { label: "Location", value: user.location },
          ].map((row) => (
            <div key={row.label} className="bg-gray-50 rounded-lg px-4 py-3">
              <p className="text-xs text-gray-400 mb-1">{row.label}</p>
              {row.badge ? (
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusStyles[user.status]}`}>
                  {row.value}
                </span>
              ) : (
                <p className="text-sm font-medium text-gray-900">{row.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            className="flex-1 py-2 text-sm font-medium border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            data-ph-id="user-detail-send-email"
          >
            Send email
          </button>
          <button
            className="flex-1 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
            data-ph-id="user-detail-view-activity"
          >
            View activity
          </button>
        </div>
      </div>
    </div>
  );
}
