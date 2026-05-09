"use client";

function getSessionId(): string {
  if (typeof sessionStorage === "undefined") return "ssr";
  let id = sessionStorage.getItem("_sid");
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem("_sid", id);
  }
  return id;
}

function send(payload: Record<string, unknown>) {
  const body = {
    ...payload,
    path: window.location.pathname,
    sessionId: getSessionId(),
    timestamp: Date.now(),
    viewport: { width: window.innerWidth, height: window.innerHeight },
  };
  navigator.sendBeacon("/api/analytics", JSON.stringify(body));
}

export function trackClick(element: string) {
  send({ type: "click", element });
}

export function trackRageClick(element: string) {
  send({ type: "rage_click", element });
}

export function trackExit(timeOnPage: number) {
  send({ type: "exit", timeOnPage });
}

export function trackScroll(scrollDepth: number) {
  send({ type: "scroll", scrollDepth });
}

export function initAnalytics() {
  if (typeof window === "undefined") return;

  const startTime = Date.now();

  // scroll depth tracking
  let maxScroll = 0;
  const onScroll = () => {
    const depth = Math.round(
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );
    if (depth > maxScroll + 10) {
      maxScroll = depth;
      trackScroll(depth);
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  // exit tracking
  const onExit = () => trackExit(Math.round((Date.now() - startTime) / 1000));
  window.addEventListener("beforeunload", onExit);

  // rage click detection (3+ clicks on same element within 500ms)
  const clickTimes: Record<string, number[]> = {};
  const onPointerDown = (e: PointerEvent) => {
    const target = e.target as HTMLElement;
    const key = target.tagName + (target.className ?? "");
    const now = Date.now();
    if (!clickTimes[key]) clickTimes[key] = [];
    clickTimes[key] = clickTimes[key].filter((t) => now - t < 500);
    clickTimes[key].push(now);
    if (clickTimes[key].length >= 3) {
      trackRageClick(target.getAttribute("data-track") ?? key);
      clickTimes[key] = [];
    }
  };
  window.addEventListener("pointerdown", onPointerDown);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("beforeunload", onExit);
    window.removeEventListener("pointerdown", onPointerDown);
  };
}
