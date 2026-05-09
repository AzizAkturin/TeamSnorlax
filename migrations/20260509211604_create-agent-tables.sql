create table agent_runs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  sessions_analyzed int,
  avg_time_on_page_seconds int,
  top_rage_click text,
  drop_off_path text,
  drop_off_scroll_depth int,
  devin_session_id text,
  devin_session_url text,
  pr_number int,
  pr_url text,
  status text default 'running'
);

create table analytics_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  type text not null,
  element text,
  path text not null,
  timestamp bigint,
  session_id text not null,
  scroll_depth int,
  time_on_page int,
  viewport_width int,
  viewport_height int
);
