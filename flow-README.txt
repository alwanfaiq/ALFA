PANDUAN GOOGLE FLOW UNTUK ALFA | HISTORY OF ISLAM

Cara pakai
1. Satu file .txt = satu batch. Satu baris = satu prompt. Atur rasio gambar di Flow sesuai yang tertulis di indeks (16:9 atau 9:16) sebelum generate.
2. Urutan hasil sama dengan urutan baris, jadi cek indeks di bawah untuk tahu gambar itu milik siapa atau apa.
3. Generate beberapa varian per prompt, lalu pilih yang paling konsisten dengan gaya karakter yang sudah ada.

Setelah gambar jadi, masukkan ke website
- Peta baru (flow-1): ubah ke WebP lebar sekitar 1920px, namai map2.webp, upload ke folder assets/ di GitHub. Tab peta "Dunia Islam Awal" akan muncul sendiri. Titik 20 tempat di peta itu sudah diberi posisi perkiraan (berdasarkan bingkai bujur 10 sampai 70 BT dan lintang 12 sampai 42 LU). Geser posisinya di Admin, tab Place, klik gambar peta, bila ada yang meleset.
- Cover karakter (flow-2): Admin, tab Karakter, pilih karakter, upload di kolom cover. Alat crop akan memotong ke bingkai 287x787.
- Character sheet (flow-3): Admin, tab Karakter, kolom Slide atas halaman karakter (boleh lebih dari satu gambar).
- Foto tempat (flow-4): Admin, tab Place, kolom Foto kartu peta dan halaman detail.

Catatan
- Nabi Muhammad SAW dan para malaikat sengaja tidak digambarkan, sama seperti karakter yang sudah ada.
- Dua karakter perempuan baru (Halimah dan Aisyah) digambar berwajah tertutup agar tidak menggambarkan wajah. Hapus kalimat "face fully covered" di prompt bila ingin wajah terlihat.
- AI sering salah menulis teks. Judul di character sheet mungkin perlu dikoreksi, atau hapus bagian "title text" dan tulis sendiri.
- Prompt tempat berupa ilustrasi rekonstruksi, bukan foto. Tidak ada foto asli abad ke-7.
- Cek ulang kemiripan busana dan bahan dengan sumber sejarah bila kamu perlu akurasi tinggi.

INDEKS URUTAN (baris di tiap file = nomor di bawah)

flow-1-peta.txt (rasio 16:9)
  1-3: tiga varian peta Dunia Islam Awal. Pilih satu yang terbaik, simpan sebagai assets/map2.webp

flow-2-cover-karakter.txt (rasio 9:16)
  1. Abdul Muthalib
  2. Abrahah
  3. Halimah as-Sa’diyah
  4. Waraqah bin Naufal
  5. Hamzah bin Abdul Muthalib
  6. Bilal bin Rabah
  7. Abu Lahab
  8. Umar bin Khattab
  9. Utsman bin Affan
  10. Aisyah binti Abu Bakar
  11. Khalid bin Walid
  12. Abu Ubaidah bin al-Jarrah
  13. Sa’ad bin Abi Waqqash
  14. Amr bin Ash

flow-3-character-sheet.txt (rasio 16:9)
  1. Abdul Muthalib
  2. Abrahah
  3. Halimah as-Sa’diyah
  4. Bahira
  5. Abi Thalib
  6. Khadijah
  7. Waraqah bin Naufal
  8. Abu Bakar Asshiddiq
  9. Hamzah bin Abdul Muthalib
  10. Bilal bin Rabah
  11. Abu Jahal
  12. Abu Lahab
  13. Umar bin Khattab
  14. Utsman bin Affan
  15. Aisyah binti Abu Bakar
  16. Khalid bin Walid
  17. Abu Ubaidah bin al-Jarrah
  18. Sa’ad bin Abi Waqqash
  19. Amr bin Ash

flow-4-foto-tempat.txt (rasio 16:9)
  1. Makkah (peta arab)
  2. Yatsrib (Madinah) (peta arab)
  3. Syam (Levant) (peta arab)
  4. Palestina (peta arab)
  5. Iraq (Kuno) (peta arab)
  6. Yaman (peta arab)
  7. Jalur Pasukan Gajah (peta arab)
  8. Gua Hira (peta arab)
  9. Makkah (peta khilafah)
  10. Madinah (peta khilafah)
  11. Badar (peta khilafah)
  12. Khaibar (peta khilafah)
  13. Tabuk (peta khilafah)
  14. Yamamah (peta khilafah)
  15. Damaskus (peta khilafah)
  16. Yarmuk (peta khilafah)
  17. Baitul Maqdis (peta khilafah)
  18. Hims (peta khilafah)
  19. Konstantinopel (peta khilafah)
  20. Iskandariyah (peta khilafah)
  21. Fustat (peta khilafah)
  22. Barqah (peta khilafah)
  23. Kufah dan Qadisiyyah (peta khilafah)
  24. Al-Mada’in (peta khilafah)
  25. Bashrah (peta khilafah)
  26. Nahawand (peta khilafah)
  27. Merv (peta khilafah)
  28. Habasyah (Aksum) (peta khilafah)
