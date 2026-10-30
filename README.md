# ALFA | History of Islam: setup Supabase + deploy

1. Buat project di supabase.com (gratis).
2. SQL Editor > New query > tempel isi `schema.sql` > Run. Ini bikin tabel characters, shorts, videos, bucket gambar `media`, dan aturan akses (publik hanya boleh baca, hanya user login yang boleh tulis).
3. Authentication > Users > Add user: isi email + password kamu (ini login admin). Lalu Authentication > Sign In / Providers > matikan "Allow new users to sign up" supaya orang lain nggak bisa daftar.
4. Project Settings > API: salin Project URL dan anon public key ke `config.js`. (anon key memang publik; keamanan dijaga aturan di langkah 2. Jangan pernah pakai service_role key di sini.)
5. Ganti isi repo GitHub kamu dengan semua file di folder ini (index.html, admin.html, config.js, defaults.json, assets/), commit dan push. Domain alfahistory.web.id tetap jalan seperti sebelumnya.
6. Buka alfahistory.web.id/admin.html, login, lalu di tab Karakter dan Shorts klik "Muat konten bawaan" sekali supaya konten yang sekarang pindah ke database. Setelah itu tambah/edit/hapus dari admin, tanpa perlu push ulang.

Kalau config.js belum diisi atau database masih kosong, website otomatis menampilkan konten bawaan.
