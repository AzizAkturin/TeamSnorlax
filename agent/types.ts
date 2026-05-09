export interface AnalyticsEvent {
  type: "click" | "scroll" | "exit" | "hover" | "rage_click";
  element?: string;
  path: string;
  timestamp: number;
  sessionId: string;
  scrollDepth?: number;
  timeOnPage?: number;
  viewport?: { width: number; height: number };
}

export interface AnalyticsSummary {
  topClickedElements: { element: string; count: number }[];
  dropOffPoints: { path: string; avgScrollDepth: number; count: number }[];
  avgTimeOnPage: number;
  rageclickElements: { element: string; count: number }[];
  exitPaths: { path: string; count: number }[];
  totalSessions: number;
}

export interface FileChange {
  path: string;
  content: string;
  reasoning: string;
}

export interface AgentProposal {
  changes: FileChange[];
  summary: string;
  analyticsInsights: string[];
}
