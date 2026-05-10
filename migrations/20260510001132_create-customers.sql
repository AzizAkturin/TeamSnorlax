create table customers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  github_owner text not null,
  github_repo text not null,
  github_token text not null,
  prod_url text not null,
  site_id text unique not null default substring(gen_random_uuid()::text, 1, 8),
  status text default 'active'
);