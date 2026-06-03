create table if not exists public.minigt_collections (
  owner_key text primary key,
  data jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.minigt_collections enable row level security;

drop policy if exists "minigt anon read" on public.minigt_collections;
drop policy if exists "minigt anon insert" on public.minigt_collections;
drop policy if exists "minigt anon update" on public.minigt_collections;

create policy "minigt anon read"
on public.minigt_collections for select
to anon
using (owner_key = (current_setting('request.headers', true)::json ->> 'x-owner-key'));

create policy "minigt anon insert"
on public.minigt_collections for insert
to anon
with check (owner_key = (current_setting('request.headers', true)::json ->> 'x-owner-key'));

create policy "minigt anon update"
on public.minigt_collections for update
to anon
using (owner_key = (current_setting('request.headers', true)::json ->> 'x-owner-key'))
with check (owner_key = (current_setting('request.headers', true)::json ->> 'x-owner-key'));

create or replace function public.set_minigt_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists minigt_collections_updated_at on public.minigt_collections;
create trigger minigt_collections_updated_at
before update on public.minigt_collections
for each row execute function public.set_minigt_updated_at();
