-- ALFA | History of Islam: schema.sql v0.3.0
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
notify pgrst, 'reload schema';
