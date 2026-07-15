create table if not exists public.believers (
  believer_id uuid primary key,
  first_seen timestamptz not null default now(),
  last_seen timestamptz not null default now(),
  visit_count bigint not null default 1 check (visit_count > 0)
);

create table if not exists public.believer_events (
  id bigint generated always as identity primary key,
  believer_id uuid not null references public.believers(believer_id) on delete cascade,
  seen_at timestamptz not null default now()
);

create index if not exists believer_events_seen_at_idx on public.believer_events(seen_at desc);
create index if not exists believer_events_believer_id_idx on public.believer_events(believer_id);

alter table public.believers enable row level security;
alter table public.believer_events enable row level security;
revoke all on public.believers from anon, authenticated;
revoke all on public.believer_events from anon, authenticated;

create or replace function public.register_believer(p_believer_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  believer_total bigint;
begin
  insert into public.believers (believer_id)
  values (p_believer_id)
  on conflict (believer_id) do update
    set last_seen = now(),
        visit_count = public.believers.visit_count + 1;

  insert into public.believer_events (believer_id) values (p_believer_id);
  select count(*) into believer_total from public.believers;

  return jsonb_build_object('total', believer_total, 'registered_at', now());
end;
$$;

revoke all on function public.register_believer(uuid) from public;
grant execute on function public.register_believer(uuid) to anon, authenticated;

comment on table public.believers is 'Anonymous all-time RHTG69I believer registry.';
comment on table public.believer_events is 'Historic RHTG69I site visit record.';
comment on function public.register_believer(uuid) is 'Registers one anonymous browser and returns the all-time unique believer count.';
