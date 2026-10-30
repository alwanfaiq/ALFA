-- Jalankan di Supabase: SQL Editor > New query > Run
create table if not exists public.characters(id uuid primary key default gen_random_uuid(),name text not null,role text,bio text,img text,t bigint not null default (extract(epoch from now())*1000)::bigint);
alter table public.characters enable row level security;
create policy "characters public read" on public.characters for select using (true);
create policy "characters admin write" on public.characters for all to authenticated using (true) with check (true);
create table if not exists public.shorts(id uuid primary key default gen_random_uuid(),ep int not null,title text not null,summary text,url text,img text,t bigint not null default (extract(epoch from now())*1000)::bigint);
alter table public.shorts enable row level security;
create policy "shorts public read" on public.shorts for select using (true);
create policy "shorts admin write" on public.shorts for all to authenticated using (true) with check (true);
create table if not exists public.videos(id uuid primary key default gen_random_uuid(),title text not null,description text,url text not null,img text,t bigint not null default (extract(epoch from now())*1000)::bigint);
alter table public.videos enable row level security;
create policy "videos public read" on public.videos for select using (true);
create policy "videos admin write" on public.videos for all to authenticated using (true) with check (true);
insert into storage.buckets(id,name,public) values('media','media',true) on conflict do nothing;
create policy "media public read" on storage.objects for select using (bucket_id='media');
create policy "media admin insert" on storage.objects for insert to authenticated with check (bucket_id='media');
create policy "media admin delete" on storage.objects for delete to authenticated using (bucket_id='media');
