# ALFA | History of Islam: setup Supabase + deploy

Semua file di folder ini harus ada di **root repo GitHub** (sejajar dengan CNAME), bukan di dalam subfolder.

1. Buat project di supabase.com (gratis).
2. SQL Editor > New query > tempel isi `schema.sql` > Run. Aman dijalankan ulang kapan saja (dipakai juga untuk update tabel).
3. Authentication > Users > Add user: email + password kamu (login admin). Lalu matikan "Allow new users to sign up".
4. Project Settings > API Keys: salin Project URL dan Publishable key ke `config.js`. Jangan pakai secret key di sini.
5. Upload semua file (index.html, detail.html, admin.html, config.js, defaults.json, schema.sql, assets/) ke root repo. Jangan timpa `config.js` kalau sudah kamu isi, atau isi ulang setelahnya.
6. Buka `/admin.html`, login, lalu di tab Karakter, Place, dan Shorts klik "Muat konten bawaan" sekali (hanya muncul kalau tabelnya masih kosong).

Kalau `config.js` belum diisi atau database masih kosong, website otomatis menampilkan konten bawaan dari `defaults.json`.

## Halaman karakter dan place
- Klik karakter di slider atau klik kartu place di peta, lalu klik kartunya untuk membuka `detail.html`.
- Cover karakter (slider di halaman utama) diunggah di admin dengan alat crop: geser dan zoom sampai pas dengan bingkai.
- Isi halaman memakai format sederhana: `# Judul bagian`, `- Sub judul`, baris biasa jadi paragraf.
