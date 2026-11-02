-- ALFA | History of Islam: schema.sql v0.5.0
-- Jalankan di Supabase: SQL Editor > New query > Run. Aman dijalankan berulang kali.
create table if not exists public.characters(id uuid primary key default gen_random_uuid(),name text not null,role text,bio text,img text,t bigint not null default (extract(epoch from now())*1000)::bigint);
alter table public.characters add column if not exists meta text,add column if not exists body text,add column if not exists facts text,add column if not exists slides jsonb not null default '[]',add column if not exists gallery jsonb not null default '[]',add column if not exists show_label boolean not null default false;
alter table public.characters enable row level security;
drop policy if exists "characters public read" on public.characters;
create policy "characters public read" on public.characters for select using (true);
drop policy if exists "characters admin write" on public.characters;
create policy "characters admin write" on public.characters for all to authenticated using (true) with check (true);
create table if not exists public.shorts(id uuid primary key default gen_random_uuid(),ep int not null,title text not null,summary text,url text,img text,t bigint not null default (extract(epoch from now())*1000)::bigint);
alter table public.shorts enable row level security;
drop policy if exists "shorts public read" on public.shorts;
create policy "shorts public read" on public.shorts for select using (true);
drop policy if exists "shorts admin write" on public.shorts;
create policy "shorts admin write" on public.shorts for all to authenticated using (true) with check (true);
create table if not exists public.videos(id uuid primary key default gen_random_uuid(),title text not null,description text,url text not null,img text,t bigint not null default (extract(epoch from now())*1000)::bigint);
alter table public.videos enable row level security;
drop policy if exists "videos public read" on public.videos;
create policy "videos public read" on public.videos for select using (true);
drop policy if exists "videos admin write" on public.videos;
create policy "videos admin write" on public.videos for all to authenticated using (true) with check (true);
create table if not exists public.places(id uuid primary key default gen_random_uuid(),slug text,name text not null,subtitle text,description text,x numeric not null default 50,y numeric not null default 50,t bigint not null default (extract(epoch from now())*1000)::bigint);
alter table public.places add column if not exists meta text,add column if not exists body text,add column if not exists facts text,add column if not exists slides jsonb not null default '[]',add column if not exists gallery jsonb not null default '[]';
alter table public.places enable row level security;
drop policy if exists "places public read" on public.places;
create policy "places public read" on public.places for select using (true);
drop policy if exists "places admin write" on public.places;
create policy "places admin write" on public.places for all to authenticated using (true) with check (true);
insert into storage.buckets(id,name,public) values('media','media',true) on conflict do nothing;
drop policy if exists "media public read" on storage.objects;
create policy "media public read" on storage.objects for select using (bucket_id='media');
drop policy if exists "media admin insert" on storage.objects;
create policy "media admin insert" on storage.objects for insert to authenticated with check (bucket_id='media');
drop policy if exists "media admin delete" on storage.objects;
create policy "media admin delete" on storage.objects for delete to authenticated using (bucket_id='media');

-- Muat ulang cache skema API supaya kolom baru langsung dikenali
alter table public.places add column if not exists map text not null default 'arab';
-- ===== Statistik kunjungan (v0.5.0) =====
create table if not exists public.visits(id bigint generated always as identity primary key,t timestamptz not null default now(),page text not null,pid text,title text,country text,ref text,device text,vid text);
alter table public.visits enable row level security;
drop policy if exists "visits insert" on public.visits;
create policy "visits insert" on public.visits for insert to anon, authenticated with check (char_length(page)<=20 and char_length(coalesce(pid,''))<=60 and char_length(coalesce(title,''))<=120 and char_length(coalesce(country,''))<=3 and char_length(coalesce(ref,''))<=100 and char_length(coalesce(device,''))<=10 and char_length(coalesce(vid,''))<=40);
drop policy if exists "visits read" on public.visits;
create policy "visits read" on public.visits for select to authenticated using (true);
create index if not exists visits_t_idx on public.visits(t);
create or replace function public.alfa_stats(p_days int default 30) returns jsonb
language sql stable security definer set search_path=public as $$
 with v as (select * from public.visits where t >= now() - make_interval(days => greatest(p_days,1)))
 select jsonb_build_object(
  'total',(select count(*) from v),
  'visitors',(select count(distinct vid) from v),
  'today',(select count(*) from public.visits where t >= (date_trunc('day', now() at time zone 'Asia/Jakarta') at time zone 'Asia/Jakarta')),
  'daily',(select coalesce(jsonb_agg(jsonb_build_object('d',d,'n',n) order by d),'[]'::jsonb) from (select (t at time zone 'Asia/Jakarta')::date as d, count(*) as n from v group by 1) x),
  'countries',(select coalesce(jsonb_agg(jsonb_build_object('c',c,'n',n,'u',u) order by n desc),'[]'::jsonb) from (select coalesce(country,'??') as c, count(*) as n, count(distinct vid) as u from v group by 1) x),
  'pages',(select coalesce(jsonb_agg(jsonb_build_object('page',page,'pid',pid,'title',title,'n',n) order by n desc),'[]'::jsonb) from (select page, pid, max(title) as title, count(*) as n from v group by page, pid order by n desc limit 20) x),
  'refs',(select coalesce(jsonb_agg(jsonb_build_object('r',r,'n',n) order by n desc),'[]'::jsonb) from (select coalesce(nullif(ref,''),'(langsung)') as r, count(*) as n from v group by 1 order by n desc limit 10) x),
  'devices',(select coalesce(jsonb_agg(jsonb_build_object('d',d,'n',n) order by n desc),'[]'::jsonb) from (select coalesce(device,'?') as d, count(*) as n from v group by 1) x)
 );
$$;
revoke all on function public.alfa_stats(int) from public, anon;
grant execute on function public.alfa_stats(int) to authenticated;
notify pgrst, 'reload schema';
