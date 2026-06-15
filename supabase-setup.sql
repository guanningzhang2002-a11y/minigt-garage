create table if not exists public.minigt_collections (
  owner_key text primary key,
  data jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  revision bigint not null default 1
);

alter table public.minigt_collections
add column if not exists revision bigint not null default 1;

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

create or replace function public.save_minigt_collection(
  p_owner_key text,
  p_expected_revision bigint,
  p_data jsonb
)
returns table(data jsonb, updated_at timestamptz, revision bigint)
language plpgsql
security invoker
set search_path = public
as $$
begin
  if p_owner_key is distinct from (current_setting('request.headers', true)::json ->> 'x-owner-key') then
    raise exception 'owner_key_mismatch' using errcode = '42501';
  end if;

  return query
  update public.minigt_collections as collection
  set data = p_data,
      revision = collection.revision + 1
  where collection.owner_key = p_owner_key
    and collection.revision = p_expected_revision
  returning collection.data, collection.updated_at, collection.revision;

  if found then
    return;
  end if;

  if p_expected_revision = 0 then
    return query
    insert into public.minigt_collections(owner_key, data, revision)
    values (p_owner_key, p_data, 1)
    on conflict (owner_key) do nothing
    returning minigt_collections.data, minigt_collections.updated_at, minigt_collections.revision;

    if found then
      return;
    end if;
  end if;

  raise exception 'sync_conflict' using errcode = '40001';
end;
$$;

grant execute on function public.save_minigt_collection(text, bigint, jsonb) to anon;
