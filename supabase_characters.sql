-- =====================================================================
-- ALFA HISTORY - SUPABASE CHARACTERS SCHEMA & SEED SCRIPT (v1.6.0)
-- Includes 40 historical figures from Pre-Prophetic to Umayyad Era
-- Generated at: 2026-11-10T13:35:19.763Z
-- =====================================================================

-- 1. Pastikan tabel characters memiliki kolom lengkap
CREATE TABLE IF NOT EXISTS public.characters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text,
  bio text,
  img text,
  t integer DEFAULT 0,
  meta text,
  body text,
  facts text,
  slides jsonb DEFAULT '[]'::jsonb,
  gallery jsonb DEFAULT '[]'::jsonb,
  show_label boolean DEFAULT true,
  eras text[] DEFAULT ARRAY[]::text[],
  groups text[] DEFAULT ARRAY[]::text[],
  faith text,
  gender text,
  countries text[] DEFAULT ARRAY[]::text[]
);

-- 2. Upsert (Insert jika belum ada, Update jika nama sudah ada)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abdul Muthalib') THEN
    UPDATE public.characters SET
      role = 'Kakek Nabi SAW',
      img = COALESCE(NULLIF('', ''), img),
      t = 0,
      meta = 'Nama asli: Syaibah al-Hamd
Era/Latar: Makkah, akhir abad ke-6 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Abdul Muthalib bin Hasyim adalah pemimpin suku Quraisy yang disegani dan penjaga urusan Ka’bah, termasuk pelayanan air dan makanan bagi para peziarah. Ia kakek Nabi Muhammad SAW dari pihak ayah dan mengasuh beliau setelah ibunda beliau, Aminah, wafat.
# 🌟 KISAH PENTING
- Menggali kembali sumur Zamzam
Ia menemukan kembali sumur Zamzam yang telah lama tertimbun dan mengelolanya untuk melayani para jamaah.
- Nazar dan tebusan seratus unta
Menurut riwayat sirah, ia bernazar mengorbankan salah satu putranya. Undian jatuh pada Abdullah, lalu ia ditebus dengan seratus unta.
- Menghadapi Abrahah
Saat pasukan Abrahah datang, ia menemui sang panglima untuk meminta untanya dikembalikan dan menegaskan bahwa Ka’bah ada Pemiliknya yang akan menjaganya. Ia lalu mengajak penduduk berlindung ke perbukitan.
- Mengasuh cucunya
Sepeninggal Aminah, ia menyayangi dan mengasuh Muhammad kecil hingga wafat saat beliau berusia sekitar delapan tahun, sebelum Abu Thalib mengambil alih.',
      facts = 'Wafat : sekitar 578 M
Hubungan dengan Nabi : Kakek (ayah dari Abdullah)
Julukan : Syaibah al-Hamd',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Pra-Kenabian']::text[],
      groups = ARRAY['Keluarga Nabi']::text[],
      faith = 'Jahiliyah (Quraisy)',
      gender = 'Pria',
      countries = ARRAY['SA']::text[]
    WHERE name = 'Abdul Muthalib';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abdul Muthalib',
      'Kakek Nabi SAW',
      '',
      0,
      'Nama asli: Syaibah al-Hamd
Era/Latar: Makkah, akhir abad ke-6 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Abdul Muthalib bin Hasyim adalah pemimpin suku Quraisy yang disegani dan penjaga urusan Ka’bah, termasuk pelayanan air dan makanan bagi para peziarah. Ia kakek Nabi Muhammad SAW dari pihak ayah dan mengasuh beliau setelah ibunda beliau, Aminah, wafat.
# 🌟 KISAH PENTING
- Menggali kembali sumur Zamzam
Ia menemukan kembali sumur Zamzam yang telah lama tertimbun dan mengelolanya untuk melayani para jamaah.
- Nazar dan tebusan seratus unta
Menurut riwayat sirah, ia bernazar mengorbankan salah satu putranya. Undian jatuh pada Abdullah, lalu ia ditebus dengan seratus unta.
- Menghadapi Abrahah
Saat pasukan Abrahah datang, ia menemui sang panglima untuk meminta untanya dikembalikan dan menegaskan bahwa Ka’bah ada Pemiliknya yang akan menjaganya. Ia lalu mengajak penduduk berlindung ke perbukitan.
- Mengasuh cucunya
Sepeninggal Aminah, ia menyayangi dan mengasuh Muhammad kecil hingga wafat saat beliau berusia sekitar delapan tahun, sebelum Abu Thalib mengambil alih.',
      'Wafat : sekitar 578 M
Hubungan dengan Nabi : Kakek (ayah dari Abdullah)
Julukan : Syaibah al-Hamd',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Pra-Kenabian']::text[],
      ARRAY['Keluarga Nabi']::text[],
      'Jahiliyah (Quraisy)',
      'Pria',
      ARRAY['SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abrahah') THEN
    UPDATE public.characters SET
      role = 'Penguasa Yaman',
      img = COALESCE(NULLIF('', ''), img),
      t = 1,
      meta = 'Gubernur Yaman atas nama Kerajaan Aksum (Habasyah)
Era/Latar: Yaman dan Makkah, ±570 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Abrahah adalah penguasa Yaman yang memerintah atas nama Kerajaan Aksum (Habasyah) yang beragama Nasrani. Ia dikenal karena upayanya menghancurkan Ka’bah pada tahun kelahiran Nabi Muhammad SAW.
# 🌟 KISAH PENTING
- Gereja megah di Shan’a
Menurut riwayat sirah, ia membangun gereja besar (al-Qullais) di Shan’a dengan harapan mengalihkan ibadah haji bangsa Arab ke sana.
- Pasukan bergajah menuju Makkah
Ia memimpin pasukan bergajah untuk meruntuhkan Ka’bah. Tahun peristiwa itu dikenal sebagai Tahun Gajah.
- Kebinasaan pasukannya
Allah menurunkan burung-burung yang melempari mereka dengan batu dari tanah yang dibakar (QS. Al-Fil), sehingga pasukan itu hancur sebelum mencapai Ka’bah.',
      facts = 'Wilayah : Yaman
Peristiwa : Tahun Gajah, ±570 M
Surah terkait : Al-Fil',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Pra-Kenabian']::text[],
      groups = ARRAY['Penguasa']::text[],
      faith = 'Nasrani',
      gender = 'Pria',
      countries = ARRAY['YE', 'SA']::text[]
    WHERE name = 'Abrahah';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abrahah',
      'Penguasa Yaman',
      '',
      1,
      'Gubernur Yaman atas nama Kerajaan Aksum (Habasyah)
Era/Latar: Yaman dan Makkah, ±570 M',
      '# 📜 RINGKASAN BIOGRAFI
Abrahah adalah penguasa Yaman yang memerintah atas nama Kerajaan Aksum (Habasyah) yang beragama Nasrani. Ia dikenal karena upayanya menghancurkan Ka’bah pada tahun kelahiran Nabi Muhammad SAW.
# 🌟 KISAH PENTING
- Gereja megah di Shan’a
Menurut riwayat sirah, ia membangun gereja besar (al-Qullais) di Shan’a dengan harapan mengalihkan ibadah haji bangsa Arab ke sana.
- Pasukan bergajah menuju Makkah
Ia memimpin pasukan bergajah untuk meruntuhkan Ka’bah. Tahun peristiwa itu dikenal sebagai Tahun Gajah.
- Kebinasaan pasukannya
Allah menurunkan burung-burung yang melempari mereka dengan batu dari tanah yang dibakar (QS. Al-Fil), sehingga pasukan itu hancur sebelum mencapai Ka’bah.',
      'Wilayah : Yaman
Peristiwa : Tahun Gajah, ±570 M
Surah terkait : Al-Fil',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Pra-Kenabian']::text[],
      ARRAY['Penguasa']::text[],
      'Nasrani',
      'Pria',
      ARRAY['YE', 'SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Halimah as-Sa’diyah') THEN
    UPDATE public.characters SET
      role = 'Ibu Susu Nabi SAW',
      img = COALESCE(NULLIF('', ''), img),
      t = 2,
      meta = 'Suku: Bani Sa’d bin Bakr
Era/Latar: Pedalaman dekat Makkah, ±570–575 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Halimah binti Abi Dzu’aib dari Bani Sa’d adalah wanita yang menyusui dan mengasuh Muhammad kecil. Bangsawan Makkah biasa menitipkan bayi kepada wanita badui agar anak mereka tumbuh sehat dan fasih berbahasa Arab.
# 🌟 KISAH PENTING
- Mengambil bayi yatim
Menurut riwayat sirah, banyak wanita menolak bayi yatim itu karena berharap upah, sampai Halimah akhirnya membawanya pulang.
- Keberkahan di rumahnya
Ia dan keluarganya merasakan keberkahan sejak mengasuh Muhammad, mulai dari susu yang melimpah hingga ternak yang gemuk, padahal tahun itu musim paceklik.
- Peristiwa pembelahan dada
Dalam riwayat Muslim, dua malaikat membelah dada Muhammad kecil dan menyucikan hatinya. Setelah kejadian itu Halimah mengembalikannya kepada ibunya.',
      facts = 'Suku : Bani Sa’d bin Bakr
Hubungan dengan Nabi : Ibu susu',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Pra-Kenabian']::text[],
      groups = ARRAY['Keluarga Nabi']::text[],
      faith = 'Islam',
      gender = 'Wanita',
      countries = ARRAY['SA']::text[]
    WHERE name = 'Halimah as-Sa’diyah';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Halimah as-Sa’diyah',
      'Ibu Susu Nabi SAW',
      '',
      2,
      'Suku: Bani Sa’d bin Bakr
Era/Latar: Pedalaman dekat Makkah, ±570–575 M',
      '# 📜 RINGKASAN BIOGRAFI
Halimah binti Abi Dzu’aib dari Bani Sa’d adalah wanita yang menyusui dan mengasuh Muhammad kecil. Bangsawan Makkah biasa menitipkan bayi kepada wanita badui agar anak mereka tumbuh sehat dan fasih berbahasa Arab.
# 🌟 KISAH PENTING
- Mengambil bayi yatim
Menurut riwayat sirah, banyak wanita menolak bayi yatim itu karena berharap upah, sampai Halimah akhirnya membawanya pulang.
- Keberkahan di rumahnya
Ia dan keluarganya merasakan keberkahan sejak mengasuh Muhammad, mulai dari susu yang melimpah hingga ternak yang gemuk, padahal tahun itu musim paceklik.
- Peristiwa pembelahan dada
Dalam riwayat Muslim, dua malaikat membelah dada Muhammad kecil dan menyucikan hatinya. Setelah kejadian itu Halimah mengembalikannya kepada ibunya.',
      'Suku : Bani Sa’d bin Bakr
Hubungan dengan Nabi : Ibu susu',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Pra-Kenabian']::text[],
      ARRAY['Keluarga Nabi']::text[],
      'Islam',
      'Wanita',
      ARRAY['SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Bahira') THEN
    UPDATE public.characters SET
      role = 'Pendeta',
      img = COALESCE(NULLIF('assets/c3.webp', ''), img),
      t = 3,
      meta = 'Rahib Nasrani di Bushra, Syam
Era/Latar: Bushra (Syam), ±582 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Bahira adalah rahib Nasrani yang tinggal di biara dekat Bushra, Syam, dan dikenal menguasai ilmu kitab terdahulu. Ia menjadi saksi awal tanda-tanda kenabian pada Muhammad muda.
# 🌟 KISAH PENTING
- Menjamu rombongan Quraisy
Saat kafilah Abu Thalib melintas, Bahira mengundang mereka makan, padahal biasanya ia tidak menghiraukan kafilah yang lewat.
- Mengenali tanda kenabian
Menurut riwayat sirah, ia memperhatikan tanda-tanda pada Muhammad muda dan bertanya tentang beliau, lalu menyampaikan bahwa anak itu akan menjadi orang besar.
- Memperingatkan Abu Thalib
Ia meminta Abu Thalib membawa pulang keponakannya agar tidak diganggu orang-orang yang memusuhinya.',
      facts = 'Lokasi : Bushra, Syam
Peristiwa : Safar dagang ke Syam, Nabi berusia ±12 tahun',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Pra-Kenabian']::text[],
      groups = ARRAY['Ulama Ahli Kitab']::text[],
      faith = 'Nasrani',
      gender = 'Pria',
      countries = ARRAY['SY']::text[]
    WHERE name = 'Bahira';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Bahira',
      'Pendeta',
      'assets/c3.webp',
      3,
      'Rahib Nasrani di Bushra, Syam
Era/Latar: Bushra (Syam), ±582 M',
      '# 📜 RINGKASAN BIOGRAFI
Bahira adalah rahib Nasrani yang tinggal di biara dekat Bushra, Syam, dan dikenal menguasai ilmu kitab terdahulu. Ia menjadi saksi awal tanda-tanda kenabian pada Muhammad muda.
# 🌟 KISAH PENTING
- Menjamu rombongan Quraisy
Saat kafilah Abu Thalib melintas, Bahira mengundang mereka makan, padahal biasanya ia tidak menghiraukan kafilah yang lewat.
- Mengenali tanda kenabian
Menurut riwayat sirah, ia memperhatikan tanda-tanda pada Muhammad muda dan bertanya tentang beliau, lalu menyampaikan bahwa anak itu akan menjadi orang besar.
- Memperingatkan Abu Thalib
Ia meminta Abu Thalib membawa pulang keponakannya agar tidak diganggu orang-orang yang memusuhinya.',
      'Lokasi : Bushra, Syam
Peristiwa : Safar dagang ke Syam, Nabi berusia ±12 tahun',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Pra-Kenabian']::text[],
      ARRAY['Ulama Ahli Kitab']::text[],
      'Nasrani',
      'Pria',
      ARRAY['SY']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abi Thalib') THEN
    UPDATE public.characters SET
      role = '',
      img = COALESCE(NULLIF('assets/c1.webp', ''), img),
      t = 4,
      meta = 'Gelar: Pemimpin Bani Hasyim
Era/Latar: Makkah, akhir abad ke-6 hingga 619 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Abu Thalib bin Abdul Muthalib adalah paman Nabi Muhammad SAW dan ayah Ali bin Abi Thalib. Setelah Abdul Muthalib wafat, ia mengasuh Muhammad sepenuh hati meski hidup dalam kesederhanaan.
# 🌟 PERAN HISTORIS
- Pengasuh dan pelindung
Ia membawa Muhammad muda berdagang ke Syam, dan kelak melindunginya dari tekanan Quraisy dengan wibawa sebagai pemimpin Bani Hasyim.
- Pemboikotan Bani Hasyim
Saat Quraisy memboikot Bani Hasyim dan Bani Muthalib selama sekitar tiga tahun, ia ikut bertahan bersama Nabi SAW di lembah (Syi’b) yang dikenal dengan namanya.
- Tahun Duka Cita
Ia wafat sekitar tahun 619 M, tidak lama sebelum Khadijah wafat, sehingga tahun itu dikenal sebagai Tahun Duka Cita. Menurut riwayat yang masyhur ia wafat tanpa mengucapkan syahadat, sementara sebagian ulama berpandangan lain.',
      facts = 'Wafat : sekitar 619 M (Tahun Duka Cita)
Hubungan dengan Nabi : Paman
Anak : Thalib, Aqil, Ja’far, Ali',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Pra-Kenabian', 'Periode Makkah']::text[],
      groups = ARRAY['Keluarga Nabi']::text[],
      faith = 'Jahiliyah (Quraisy)',
      gender = 'Pria',
      countries = ARRAY['SA']::text[]
    WHERE name = 'Abi Thalib';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abi Thalib',
      '',
      'assets/c1.webp',
      4,
      'Gelar: Pemimpin Bani Hasyim
Era/Latar: Makkah, akhir abad ke-6 hingga 619 M',
      '# 📜 RINGKASAN BIOGRAFI
Abu Thalib bin Abdul Muthalib adalah paman Nabi Muhammad SAW dan ayah Ali bin Abi Thalib. Setelah Abdul Muthalib wafat, ia mengasuh Muhammad sepenuh hati meski hidup dalam kesederhanaan.
# 🌟 PERAN HISTORIS
- Pengasuh dan pelindung
Ia membawa Muhammad muda berdagang ke Syam, dan kelak melindunginya dari tekanan Quraisy dengan wibawa sebagai pemimpin Bani Hasyim.
- Pemboikotan Bani Hasyim
Saat Quraisy memboikot Bani Hasyim dan Bani Muthalib selama sekitar tiga tahun, ia ikut bertahan bersama Nabi SAW di lembah (Syi’b) yang dikenal dengan namanya.
- Tahun Duka Cita
Ia wafat sekitar tahun 619 M, tidak lama sebelum Khadijah wafat, sehingga tahun itu dikenal sebagai Tahun Duka Cita. Menurut riwayat yang masyhur ia wafat tanpa mengucapkan syahadat, sementara sebagian ulama berpandangan lain.',
      'Wafat : sekitar 619 M (Tahun Duka Cita)
Hubungan dengan Nabi : Paman
Anak : Thalib, Aqil, Ja’far, Ali',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Pra-Kenabian', 'Periode Makkah']::text[],
      ARRAY['Keluarga Nabi']::text[],
      'Jahiliyah (Quraisy)',
      'Pria',
      ARRAY['SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Khadijah') THEN
    UPDATE public.characters SET
      role = 'Sayyidah',
      img = COALESCE(NULLIF('assets/c5.webp', ''), img),
      t = 5,
      meta = 'Gelar: Ummul Mukminin, At-Thahirah
Era/Latar: Makkah, abad ke-6–7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Khadijah binti Khuwailid adalah saudagari terpandang Quraisy yang menjadi istri pertama Nabi Muhammad SAW. Ia dikenal cerdas, dermawan, dan menjaga kehormatan diri.
# 🌟 PERAN HISTORIS
- Pengusaha yang mengenali amanah
Ia mempercayakan dagangannya ke Syam kepada Muhammad muda dan terkesan oleh kejujuran beliau yang diceritakan pembantunya, Maisarah.
- Pendamping di awal wahyu
Saat wahyu pertama turun dan Nabi SAW gemetar, ia menenangkan beliau dan menjadi orang pertama yang beriman.
- Menopang dakwah dengan harta
Ia mendukung dakwah dengan hartanya, termasuk saat pemboikotan, dan wafat sekitar tiga tahun sebelum hijrah.',
      facts = 'Wafat : sekitar 619 M (tahun ke-10 kenabian)
Pernikahan : Dengan Nabi SAW saat beliau berusia 25 tahun
Anak : Qasim, Abdullah, Zainab, Ruqayyah, Ummu Kultsum, Fatimah',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Pra-Kenabian', 'Periode Makkah']::text[],
      groups = ARRAY['Ummahat al-Mu’minin', 'Assabiqunal Awwalun', 'Keluarga Nabi']::text[],
      faith = 'Islam',
      gender = 'Wanita',
      countries = ARRAY['SA']::text[]
    WHERE name = 'Khadijah';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Khadijah',
      'Sayyidah',
      'assets/c5.webp',
      5,
      'Gelar: Ummul Mukminin, At-Thahirah
Era/Latar: Makkah, abad ke-6–7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Khadijah binti Khuwailid adalah saudagari terpandang Quraisy yang menjadi istri pertama Nabi Muhammad SAW. Ia dikenal cerdas, dermawan, dan menjaga kehormatan diri.
# 🌟 PERAN HISTORIS
- Pengusaha yang mengenali amanah
Ia mempercayakan dagangannya ke Syam kepada Muhammad muda dan terkesan oleh kejujuran beliau yang diceritakan pembantunya, Maisarah.
- Pendamping di awal wahyu
Saat wahyu pertama turun dan Nabi SAW gemetar, ia menenangkan beliau dan menjadi orang pertama yang beriman.
- Menopang dakwah dengan harta
Ia mendukung dakwah dengan hartanya, termasuk saat pemboikotan, dan wafat sekitar tiga tahun sebelum hijrah.',
      'Wafat : sekitar 619 M (tahun ke-10 kenabian)
Pernikahan : Dengan Nabi SAW saat beliau berusia 25 tahun
Anak : Qasim, Abdullah, Zainab, Ruqayyah, Ummu Kultsum, Fatimah',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Pra-Kenabian', 'Periode Makkah']::text[],
      ARRAY['Ummahat al-Mu’minin', 'Assabiqunal Awwalun', 'Keluarga Nabi']::text[],
      'Islam',
      'Wanita',
      ARRAY['SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Waraqah bin Naufal') THEN
    UPDATE public.characters SET
      role = 'Cendekiawan Nasrani',
      img = COALESCE(NULLIF('', ''), img),
      t = 6,
      meta = 'Sepupu Khadijah
Era/Latar: Makkah, awal abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Waraqah bin Naufal adalah sepupu Khadijah yang meninggalkan penyembahan berhala dan memeluk Nasrani. Ia menguasai kitab-kitab terdahulu dan menulis Injil dalam bahasa Ibrani, menurut riwayat Bukhari.
# 🌟 PERAN HISTORIS
- Saksi wahyu pertama
Khadijah membawa Nabi SAW menemuinya setelah wahyu turun di Gua Hira. Waraqah mengenali malaikat yang datang itu sebagai Namus yang pernah diutus kepada Nabi Musa AS.
- Janji dukungan
Ia berkata jika masih hidup saat kaumnya mengusir beliau, ia akan membelanya sekuat tenaga.
- Wafat tak lama setelahnya
Ia wafat tidak lama kemudian, saat wahyu sempat terhenti.',
      facts = 'Hubungan : Sepupu Khadijah
Peristiwa : Menemui Nabi SAW setelah wahyu pertama, 610 M',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Makkah']::text[],
      groups = ARRAY['Ulama Ahli Kitab']::text[],
      faith = 'Nasrani',
      gender = 'Pria',
      countries = ARRAY['SA']::text[]
    WHERE name = 'Waraqah bin Naufal';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Waraqah bin Naufal',
      'Cendekiawan Nasrani',
      '',
      6,
      'Sepupu Khadijah
Era/Latar: Makkah, awal abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Waraqah bin Naufal adalah sepupu Khadijah yang meninggalkan penyembahan berhala dan memeluk Nasrani. Ia menguasai kitab-kitab terdahulu dan menulis Injil dalam bahasa Ibrani, menurut riwayat Bukhari.
# 🌟 PERAN HISTORIS
- Saksi wahyu pertama
Khadijah membawa Nabi SAW menemuinya setelah wahyu turun di Gua Hira. Waraqah mengenali malaikat yang datang itu sebagai Namus yang pernah diutus kepada Nabi Musa AS.
- Janji dukungan
Ia berkata jika masih hidup saat kaumnya mengusir beliau, ia akan membelanya sekuat tenaga.
- Wafat tak lama setelahnya
Ia wafat tidak lama kemudian, saat wahyu sempat terhenti.',
      'Hubungan : Sepupu Khadijah
Peristiwa : Menemui Nabi SAW setelah wahyu pertama, 610 M',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Makkah']::text[],
      ARRAY['Ulama Ahli Kitab']::text[],
      'Nasrani',
      'Pria',
      ARRAY['SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abu Bakar Asshiddiq') THEN
    UPDATE public.characters SET
      role = 'Sayyidina',
      img = COALESCE(NULLIF('assets/c4.webp', ''), img),
      t = 7,
      meta = 'Nama asli: Abdullah bin Abi Quhafah
Gelar: Ash-Shiddiq, Al-Atiq
Era/Latar: Makkah dan Madinah, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Abu Bakar adalah sahabat karib Nabi Muhammad SAW sejak sebelum kenabian dan khalifah pertama umat Islam. Ia seorang pedagang kain yang jujur dan dihormati di Makkah.
# 🌟 KARAKTERISTIK KUNCI & PERAN HISTORIS
- Pembenar pertama
Ia segera membenarkan risalah Nabi SAW dan digelari Ash-Shiddiq. Ia juga memerdekakan sejumlah budak yang disiksa karena Islam, salah satunya Bilal bin Rabah.
- Sahabat dalam hijrah
Ia menemani Nabi SAW berhijrah dan bersembunyi di Gua Tsur sebelum melanjutkan perjalanan ke Madinah.
- Khalifah pertama
Setelah Nabi SAW wafat, ia dibaiat sebagai khalifah. Ia memberangkatkan pasukan Usamah, memerangi gerakan kemurtadan dan nabi palsu dalam Perang Riddah, dan memerintahkan pengumpulan Al-Qur’an setelah Perang Yamamah.',
      facts = 'Jabatan : Khalifah pertama (Khulafaur Rasyidin)
Masa Jabatan : 11–13 H (632–634 M)
Wafat : Jumadil Akhir 13 H (634 M)
Penerus : Umar bin Khattab',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Khulafaur Rasyidin', 'Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA']::text[]
    WHERE name = 'Abu Bakar Asshiddiq';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abu Bakar Asshiddiq',
      'Sayyidina',
      'assets/c4.webp',
      7,
      'Nama asli: Abdullah bin Abi Quhafah
Gelar: Ash-Shiddiq, Al-Atiq
Era/Latar: Makkah dan Madinah, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Abu Bakar adalah sahabat karib Nabi Muhammad SAW sejak sebelum kenabian dan khalifah pertama umat Islam. Ia seorang pedagang kain yang jujur dan dihormati di Makkah.
# 🌟 KARAKTERISTIK KUNCI & PERAN HISTORIS
- Pembenar pertama
Ia segera membenarkan risalah Nabi SAW dan digelari Ash-Shiddiq. Ia juga memerdekakan sejumlah budak yang disiksa karena Islam, salah satunya Bilal bin Rabah.
- Sahabat dalam hijrah
Ia menemani Nabi SAW berhijrah dan bersembunyi di Gua Tsur sebelum melanjutkan perjalanan ke Madinah.
- Khalifah pertama
Setelah Nabi SAW wafat, ia dibaiat sebagai khalifah. Ia memberangkatkan pasukan Usamah, memerangi gerakan kemurtadan dan nabi palsu dalam Perang Riddah, dan memerintahkan pengumpulan Al-Qur’an setelah Perang Yamamah.',
      'Jabatan : Khalifah pertama (Khulafaur Rasyidin)
Masa Jabatan : 11–13 H (632–634 M)
Wafat : Jumadil Akhir 13 H (634 M)
Penerus : Umar bin Khattab',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Khulafaur Rasyidin', 'Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Ali bin Abi Thalib') THEN
    UPDATE public.characters SET
      role = 'Sayyidina',
      img = COALESCE(NULLIF('assets/c2.webp', ''), img),
      t = 8,
      meta = 'Gelar: Asadullah (Singa Allah), Babu Madinatil ''Ilm (Pintu Kota Ilmu), Amirul Mukminin, Abu Turab
Era/Latar: Jazirah Arab Abad ke-7 Masehi (Makkah & Madinah)',
      body = '# 📜 RINGKASAN BIOGRAFI & LORE
Sayyidina Ali bin Abi Thalib radhiyallahu ''anhu adalah sepupu sekaligus menantu Nabi Muhammad SAW, serta pemuda pertama yang memeluk agama Islam. Beliau tumbuh di bawah asuhan langsung Rasulullah SAW, membawanya menjadi sosok ulung yang memadukan dua keunggulan utama: keberanian luar biasa di medan perang dan kecerdasan intelektual/spiritual yang sangat mendalam.
# 🌟 KARAKTERISTIK KUNCI & PERAN HISTORIS
- Keteguhan & Keberanian Sejak Muda
Malam Hijrah (Makkah): Saat rumah Rasulullah SAW dikepung pemuda Quraisy, Ali dengan penuh keberanian menawarkan diri tidur di pembaringan Nabi SAW menggunakan mantel hijau beliau untuk mengelabui para pengepung.
Pahlawan Medan Perang: Terkenal sebagai ksatria tak tertandingi dalam Perang Badr, Uhud, dan khususnya Perang Khaibar, di mana beliau memimpin penaklukan benteng dan merobohkan pintu gerbang Khaibar yang amat berat.
- Gerbang Ilmu & Keadilan Hikmah
Rasulullah SAW bersabda: “Aku adalah kotanya ilmu dan Ali adalah pintunya.” Ali dikenal sebagai rujukan utama para sahabat dalam urusan hukum, peradilan, keilmuan bahasa Arab, dan hikmah spiritual.
- Kepemimpinan Kekhalifahan (Khulafaur Rasyidin ke-4)
Menjadi Khalifah ke-4 menggantikan Sayyidina Utsman bin Affan radhiyallahu ''anhu di tengah dinamika politik Islam era pertengahan. Beliau memimpin dengan kesederhanaan, keadilan tegas, dan kepedulian tinggi terhadap rakyat jelata.',
      facts = 'Umur : sekitar 63 tahun
Memeluk Islam pada : Masa awal kenabian, saat masih remaja
Jabatan : Khalifah keempat setelah Sy. Utsman bin Affan
Masa Jabatan : 35–40 H (656–661 M)
Wafat : Ramadhan 40 H, ditikam Abdurrahman bin Muljam di Kufah',
      slides = '["assets/ali-sheet.webp"]'::jsonb,
      gallery = '[{"url":"assets/ali-g1.webp","caption":"Perang Badar"},{"url":"assets/ali-g2.webp","caption":"Duel antara Ali dengan jawara yahudi"},{"url":"assets/ali-g3.webp","caption":"Pedang dzulfikar"}]'::jsonb,
      eras = ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Khulafaur Rasyidin', 'Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Keluarga Nabi', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'IQ']::text[]
    WHERE name = 'Ali bin Abi Thalib';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Ali bin Abi Thalib',
      'Sayyidina',
      'assets/c2.webp',
      8,
      'Gelar: Asadullah (Singa Allah), Babu Madinatil ''Ilm (Pintu Kota Ilmu), Amirul Mukminin, Abu Turab
Era/Latar: Jazirah Arab Abad ke-7 Masehi (Makkah & Madinah)',
      '# 📜 RINGKASAN BIOGRAFI & LORE
Sayyidina Ali bin Abi Thalib radhiyallahu ''anhu adalah sepupu sekaligus menantu Nabi Muhammad SAW, serta pemuda pertama yang memeluk agama Islam. Beliau tumbuh di bawah asuhan langsung Rasulullah SAW, membawanya menjadi sosok ulung yang memadukan dua keunggulan utama: keberanian luar biasa di medan perang dan kecerdasan intelektual/spiritual yang sangat mendalam.
# 🌟 KARAKTERISTIK KUNCI & PERAN HISTORIS
- Keteguhan & Keberanian Sejak Muda
Malam Hijrah (Makkah): Saat rumah Rasulullah SAW dikepung pemuda Quraisy, Ali dengan penuh keberanian menawarkan diri tidur di pembaringan Nabi SAW menggunakan mantel hijau beliau untuk mengelabui para pengepung.
Pahlawan Medan Perang: Terkenal sebagai ksatria tak tertandingi dalam Perang Badr, Uhud, dan khususnya Perang Khaibar, di mana beliau memimpin penaklukan benteng dan merobohkan pintu gerbang Khaibar yang amat berat.
- Gerbang Ilmu & Keadilan Hikmah
Rasulullah SAW bersabda: “Aku adalah kotanya ilmu dan Ali adalah pintunya.” Ali dikenal sebagai rujukan utama para sahabat dalam urusan hukum, peradilan, keilmuan bahasa Arab, dan hikmah spiritual.
- Kepemimpinan Kekhalifahan (Khulafaur Rasyidin ke-4)
Menjadi Khalifah ke-4 menggantikan Sayyidina Utsman bin Affan radhiyallahu ''anhu di tengah dinamika politik Islam era pertengahan. Beliau memimpin dengan kesederhanaan, keadilan tegas, dan kepedulian tinggi terhadap rakyat jelata.',
      'Umur : sekitar 63 tahun
Memeluk Islam pada : Masa awal kenabian, saat masih remaja
Jabatan : Khalifah keempat setelah Sy. Utsman bin Affan
Masa Jabatan : 35–40 H (656–661 M)
Wafat : Ramadhan 40 H, ditikam Abdurrahman bin Muljam di Kufah',
      '["assets/ali-sheet.webp"]'::jsonb,
      '[{"url":"assets/ali-g1.webp","caption":"Perang Badar"},{"url":"assets/ali-g2.webp","caption":"Duel antara Ali dengan jawara yahudi"},{"url":"assets/ali-g3.webp","caption":"Pedang dzulfikar"}]'::jsonb,
      true,
      ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Khulafaur Rasyidin', 'Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Keluarga Nabi', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'IQ']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Hamzah bin Abdul Muthalib') THEN
    UPDATE public.characters SET
      role = 'Paman Nabi SAW',
      img = COALESCE(NULLIF('', ''), img),
      t = 9,
      meta = 'Gelar: Asadullah (Singa Allah), Sayyidusy Syuhada
Era/Latar: Makkah dan Madinah, abad ke-6–7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Hamzah adalah paman sekaligus saudara sepersusuan Nabi Muhammad SAW, terkenal sebagai pemburu dan petarung yang gagah berani. Keislamannya menguatkan kaum Muslimin yang saat itu masih tertindas.
# 🌟 PERAN HISTORIS
- Masuk Islam membela Nabi
Menurut riwayat sirah, ia masuk Islam setelah mengetahui Abu Jahal menghina Nabi SAW. Ia mendatangi Abu Jahal dan menegaskan keislamannya.
- Pahlawan Badar
Ia ikut Perang Badar dan dikenal dengan bulu burung unta di dadanya sebagai tanda pengenal.
- Syahid di Uhud
Ia gugur di Perang Uhud (3 H) setelah ditombak Wahsyi bin Harb. Nabi SAW sangat berduka dan beliau dijuluki Sayyidusy Syuhada.',
      facts = 'Wafat : Syawal 3 H (625 M), Perang Uhud
Hubungan dengan Nabi : Paman dan saudara sepersusuan
Dimakamkan : Uhud',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Makkah', 'Periode Madinah']::text[],
      groups = ARRAY['Assabiqunal Awwalun', 'Keluarga Nabi', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA']::text[]
    WHERE name = 'Hamzah bin Abdul Muthalib';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Hamzah bin Abdul Muthalib',
      'Paman Nabi SAW',
      '',
      9,
      'Gelar: Asadullah (Singa Allah), Sayyidusy Syuhada
Era/Latar: Makkah dan Madinah, abad ke-6–7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Hamzah adalah paman sekaligus saudara sepersusuan Nabi Muhammad SAW, terkenal sebagai pemburu dan petarung yang gagah berani. Keislamannya menguatkan kaum Muslimin yang saat itu masih tertindas.
# 🌟 PERAN HISTORIS
- Masuk Islam membela Nabi
Menurut riwayat sirah, ia masuk Islam setelah mengetahui Abu Jahal menghina Nabi SAW. Ia mendatangi Abu Jahal dan menegaskan keislamannya.
- Pahlawan Badar
Ia ikut Perang Badar dan dikenal dengan bulu burung unta di dadanya sebagai tanda pengenal.
- Syahid di Uhud
Ia gugur di Perang Uhud (3 H) setelah ditombak Wahsyi bin Harb. Nabi SAW sangat berduka dan beliau dijuluki Sayyidusy Syuhada.',
      'Wafat : Syawal 3 H (625 M), Perang Uhud
Hubungan dengan Nabi : Paman dan saudara sepersusuan
Dimakamkan : Uhud',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Makkah', 'Periode Madinah']::text[],
      ARRAY['Assabiqunal Awwalun', 'Keluarga Nabi', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Bilal bin Rabah') THEN
    UPDATE public.characters SET
      role = 'Muadzin Pertama',
      img = COALESCE(NULLIF('', ''), img),
      t = 10,
      meta = 'Gelar: Muadzin Rasulullah SAW
Era/Latar: Makkah, Madinah, Syam, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Bilal bin Rabah adalah sahabat asal Habasyah yang dahulu seorang budak di Makkah. Ia dikenal berhati teguh dan bersuara merdu, dan menjadi muadzin pertama dalam sejarah Islam.
# 🌟 KISAH PENTING
- Disiksa karena imannya
Majikannya, Umayyah bin Khalaf, menyiksanya di bawah terik matahari dengan batu besar di dada agar meninggalkan Islam, tetapi ia terus mengucapkan “Ahad, Ahad”.
- Dimerdekakan Abu Bakar
Abu Bakar membeli dan memerdekakannya.
- Adzan pertama dan Fathu Makkah
Setelah hijrah, ia ditunjuk mengumandangkan adzan. Saat Fathu Makkah, ia mengumandangkan adzan di atas Ka’bah.',
      facts = 'Asal : Habasyah (Ethiopia)
Jabatan : Muadzin Nabi SAW
Wafat : sekitar 20 H (±641 M), di Syam',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Assabiqunal Awwalun', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'ET', 'SY']::text[]
    WHERE name = 'Bilal bin Rabah';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Bilal bin Rabah',
      'Muadzin Pertama',
      '',
      10,
      'Gelar: Muadzin Rasulullah SAW
Era/Latar: Makkah, Madinah, Syam, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Bilal bin Rabah adalah sahabat asal Habasyah yang dahulu seorang budak di Makkah. Ia dikenal berhati teguh dan bersuara merdu, dan menjadi muadzin pertama dalam sejarah Islam.
# 🌟 KISAH PENTING
- Disiksa karena imannya
Majikannya, Umayyah bin Khalaf, menyiksanya di bawah terik matahari dengan batu besar di dada agar meninggalkan Islam, tetapi ia terus mengucapkan “Ahad, Ahad”.
- Dimerdekakan Abu Bakar
Abu Bakar membeli dan memerdekakannya.
- Adzan pertama dan Fathu Makkah
Setelah hijrah, ia ditunjuk mengumandangkan adzan. Saat Fathu Makkah, ia mengumandangkan adzan di atas Ka’bah.',
      'Asal : Habasyah (Ethiopia)
Jabatan : Muadzin Nabi SAW
Wafat : sekitar 20 H (±641 M), di Syam',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Assabiqunal Awwalun', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'ET', 'SY']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abu Jahal') THEN
    UPDATE public.characters SET
      role = 'Tokoh Quraisy',
      img = COALESCE(NULLIF('assets/c6.webp', ''), img),
      t = 11,
      meta = 'Nama asli: Amr bin Hisyam (digelari Abul Hakam)
Era/Latar: Makkah, hingga 624 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Amr bin Hisyam dari Bani Makhzum adalah tokoh Quraisy yang sangat dihormati kaumnya, digelari Abul Hakam. Karena kesombongan dan permusuhannya pada dakwah Nabi SAW, kaum Muslimin menyebutnya Abu Jahal.
# 🌟 PERAN HISTORIS
- Penentang keras dakwah
Ia menghalangi, mengejek, dan menyiksa kaum Muslimin yang lemah, serta berusaha mencegah orang mendengarkan Al-Qur’an.
- Pemicu keislaman Hamzah
Penghinaannya terhadap Nabi SAW menjadi sebab Hamzah masuk Islam.
- Tewas di Badar
Ia memimpin Quraisy menuju Badar dan terbunuh di sana pada 2 H. Dua pemuda Anshar, Mu’adz dan Mu’awwidz, menyerangnya, lalu Abdullah bin Mas’ud menuntaskannya.',
      facts = 'Wafat : 17 Ramadhan 2 H (624 M), Perang Badar
Suku : Bani Makhzum, Quraisy',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Makkah', 'Periode Madinah']::text[],
      groups = ARRAY['Penentang Dakwah']::text[],
      faith = 'Jahiliyah (Quraisy)',
      gender = 'Pria',
      countries = ARRAY['SA']::text[]
    WHERE name = 'Abu Jahal';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abu Jahal',
      'Tokoh Quraisy',
      'assets/c6.webp',
      11,
      'Nama asli: Amr bin Hisyam (digelari Abul Hakam)
Era/Latar: Makkah, hingga 624 M',
      '# 📜 RINGKASAN BIOGRAFI
Amr bin Hisyam dari Bani Makhzum adalah tokoh Quraisy yang sangat dihormati kaumnya, digelari Abul Hakam. Karena kesombongan dan permusuhannya pada dakwah Nabi SAW, kaum Muslimin menyebutnya Abu Jahal.
# 🌟 PERAN HISTORIS
- Penentang keras dakwah
Ia menghalangi, mengejek, dan menyiksa kaum Muslimin yang lemah, serta berusaha mencegah orang mendengarkan Al-Qur’an.
- Pemicu keislaman Hamzah
Penghinaannya terhadap Nabi SAW menjadi sebab Hamzah masuk Islam.
- Tewas di Badar
Ia memimpin Quraisy menuju Badar dan terbunuh di sana pada 2 H. Dua pemuda Anshar, Mu’adz dan Mu’awwidz, menyerangnya, lalu Abdullah bin Mas’ud menuntaskannya.',
      'Wafat : 17 Ramadhan 2 H (624 M), Perang Badar
Suku : Bani Makhzum, Quraisy',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Makkah', 'Periode Madinah']::text[],
      ARRAY['Penentang Dakwah']::text[],
      'Jahiliyah (Quraisy)',
      'Pria',
      ARRAY['SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abu Lahab') THEN
    UPDATE public.characters SET
      role = 'Penentang Dakwah',
      img = COALESCE(NULLIF('', ''), img),
      t = 12,
      meta = 'Nama asli: Abdul Uzza bin Abdul Muthalib
Era/Latar: Makkah, hingga 2 H (624 M)',
      body = '# 📜 RINGKASAN BIOGRAFI
Abu Lahab adalah paman Nabi SAW yang kaya, namun menjadi salah satu penentang dakwah yang paling sengit. Ia dijuluki Abu Lahab (bapak nyala api) karena wajahnya yang kemerahan.
# 🌟 PERAN HISTORIS
- Menghina di Bukit Shafa
Ketika Nabi SAW menyeru kaumnya di Bukit Shafa, ia mengucapkan kata-kata celaan. Turunlah Surah Al-Lahab sebagai teguran atasnya.
- Bersama istrinya menyakiti Nabi
Istrinya, Ummu Jamil, juga dikenal gigih memusuhi dan menyakiti Nabi SAW.
- Wafat setelah Badar
Ia tidak ikut ke Badar dan menyuruh orang lain menggantikannya. Beberapa hari setelah kabar kekalahan Quraisy, ia wafat karena penyakit.',
      facts = 'Wafat : sekitar 2 H (624 M)
Surah terkait : Al-Lahab
Hubungan dengan Nabi : Paman',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Makkah', 'Periode Madinah']::text[],
      groups = ARRAY['Penentang Dakwah']::text[],
      faith = 'Jahiliyah (Quraisy)',
      gender = 'Pria',
      countries = ARRAY['SA']::text[]
    WHERE name = 'Abu Lahab';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abu Lahab',
      'Penentang Dakwah',
      '',
      12,
      'Nama asli: Abdul Uzza bin Abdul Muthalib
Era/Latar: Makkah, hingga 2 H (624 M)',
      '# 📜 RINGKASAN BIOGRAFI
Abu Lahab adalah paman Nabi SAW yang kaya, namun menjadi salah satu penentang dakwah yang paling sengit. Ia dijuluki Abu Lahab (bapak nyala api) karena wajahnya yang kemerahan.
# 🌟 PERAN HISTORIS
- Menghina di Bukit Shafa
Ketika Nabi SAW menyeru kaumnya di Bukit Shafa, ia mengucapkan kata-kata celaan. Turunlah Surah Al-Lahab sebagai teguran atasnya.
- Bersama istrinya menyakiti Nabi
Istrinya, Ummu Jamil, juga dikenal gigih memusuhi dan menyakiti Nabi SAW.
- Wafat setelah Badar
Ia tidak ikut ke Badar dan menyuruh orang lain menggantikannya. Beberapa hari setelah kabar kekalahan Quraisy, ia wafat karena penyakit.',
      'Wafat : sekitar 2 H (624 M)
Surah terkait : Al-Lahab
Hubungan dengan Nabi : Paman',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Makkah', 'Periode Madinah']::text[],
      ARRAY['Penentang Dakwah']::text[],
      'Jahiliyah (Quraisy)',
      'Pria',
      ARRAY['SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Umar bin Khattab') THEN
    UPDATE public.characters SET
      role = 'Sayyidina',
      img = COALESCE(NULLIF('', ''), img),
      t = 13,
      meta = 'Gelar: Al-Faruq (pembeda yang hak dan batil), Amirul Mukminin
Era/Latar: Makkah dan Madinah, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Umar bin Khattab adalah khalifah kedua. Dahulu ia dikenal keras dan menentang Islam, hingga Allah membukakan hatinya sekitar tahun ke-6 kenabian dan ia menjadi salah satu pembela Islam yang paling tangguh.
# 🌟 PERAN HISTORIS
- Keislaman yang menguatkan
Setelah ia masuk Islam, kaum Muslimin lebih berani beribadah secara terbuka di sekitar Ka’bah.
- Khalifah kedua
Ia dipilih Abu Bakar sebagai penggantinya. Di masanya wilayah Islam meluas ke Syam, Irak, Persia, dan Mesir.
- Penataan negara
Ia membentuk diwan (daftar gaji prajurit) dan baitul mal, mendirikan kota garnisun seperti Kufah, Bashrah, dan Fustat, serta menetapkan penanggalan Hijriyah.
- Adil dan sederhana
Ia dikenal memantau keadaan rakyatnya sendiri, hidup sederhana, dan tegas pada para pejabat.
- Wafat sebagai syahid
Ia ditikam Abu Lu’lu’ah saat memimpin shalat Subuh dan wafat pada Dzulhijjah 23 H.',
      facts = 'Jabatan : Khalifah kedua (Khulafaur Rasyidin)
Masa Jabatan : 13–23 H (634–644 M)
Wafat : Dzulhijjah 23 H (644 M), Madinah
Penerus : Utsman bin Affan',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Khulafaur Rasyidin', 'Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'PS']::text[]
    WHERE name = 'Umar bin Khattab';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Umar bin Khattab',
      'Sayyidina',
      '',
      13,
      'Gelar: Al-Faruq (pembeda yang hak dan batil), Amirul Mukminin
Era/Latar: Makkah dan Madinah, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Umar bin Khattab adalah khalifah kedua. Dahulu ia dikenal keras dan menentang Islam, hingga Allah membukakan hatinya sekitar tahun ke-6 kenabian dan ia menjadi salah satu pembela Islam yang paling tangguh.
# 🌟 PERAN HISTORIS
- Keislaman yang menguatkan
Setelah ia masuk Islam, kaum Muslimin lebih berani beribadah secara terbuka di sekitar Ka’bah.
- Khalifah kedua
Ia dipilih Abu Bakar sebagai penggantinya. Di masanya wilayah Islam meluas ke Syam, Irak, Persia, dan Mesir.
- Penataan negara
Ia membentuk diwan (daftar gaji prajurit) dan baitul mal, mendirikan kota garnisun seperti Kufah, Bashrah, dan Fustat, serta menetapkan penanggalan Hijriyah.
- Adil dan sederhana
Ia dikenal memantau keadaan rakyatnya sendiri, hidup sederhana, dan tegas pada para pejabat.
- Wafat sebagai syahid
Ia ditikam Abu Lu’lu’ah saat memimpin shalat Subuh dan wafat pada Dzulhijjah 23 H.',
      'Jabatan : Khalifah kedua (Khulafaur Rasyidin)
Masa Jabatan : 13–23 H (634–644 M)
Wafat : Dzulhijjah 23 H (644 M), Madinah
Penerus : Utsman bin Affan',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Khulafaur Rasyidin', 'Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'PS']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Utsman bin Affan') THEN
    UPDATE public.characters SET
      role = 'Sayyidina',
      img = COALESCE(NULLIF('', ''), img),
      t = 14,
      meta = 'Gelar: Dzun Nurain (pemilik dua cahaya)
Era/Latar: Makkah, Habasyah, Madinah, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Utsman bin Affan adalah saudagar kaya dan pemalu dari Bani Umayyah yang masuk Islam sejak awal. Ia menikahi dua putri Nabi SAW, Ruqayyah lalu Ummu Kultsum, sehingga dijuluki Dzun Nurain.
# 🌟 PERAN HISTORIS
- Dermawan untuk Islam
Ia membeli sumur Raumah di Madinah untuk diwakafkan dan membiayai sebagian besar Pasukan Usrah dalam Perang Tabuk.
- Hijrah ke Habasyah
Ia termasuk kaum Muslimin yang berhijrah ke Habasyah bersama istrinya, Ruqayyah.
- Khalifah ketiga
Dipilih lewat musyawarah enam sahabat, ia memperluas wilayah Islam dan membangun armada laut.
- Mushaf Utsmani
Ia memerintahkan penyalinan Al-Qur’an dalam mushaf baku oleh tim yang dipimpin Zaid bin Tsabit, lalu mengirimkannya ke berbagai kota.
- Wafat dikepung
Di akhir masa jabatannya muncul gejolak politik. Ia dikepung di rumahnya dan wafat sebagai syahid pada 35 H.',
      facts = 'Jabatan : Khalifah ketiga
Masa Jabatan : 23–35 H (644–656 M)
Wafat : Dzulhijjah 35 H (656 M), Madinah
Penerus : Ali bin Abi Thalib',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Khulafaur Rasyidin', 'Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Keluarga Nabi', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'ET']::text[]
    WHERE name = 'Utsman bin Affan';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Utsman bin Affan',
      'Sayyidina',
      '',
      14,
      'Gelar: Dzun Nurain (pemilik dua cahaya)
Era/Latar: Makkah, Habasyah, Madinah, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Utsman bin Affan adalah saudagar kaya dan pemalu dari Bani Umayyah yang masuk Islam sejak awal. Ia menikahi dua putri Nabi SAW, Ruqayyah lalu Ummu Kultsum, sehingga dijuluki Dzun Nurain.
# 🌟 PERAN HISTORIS
- Dermawan untuk Islam
Ia membeli sumur Raumah di Madinah untuk diwakafkan dan membiayai sebagian besar Pasukan Usrah dalam Perang Tabuk.
- Hijrah ke Habasyah
Ia termasuk kaum Muslimin yang berhijrah ke Habasyah bersama istrinya, Ruqayyah.
- Khalifah ketiga
Dipilih lewat musyawarah enam sahabat, ia memperluas wilayah Islam dan membangun armada laut.
- Mushaf Utsmani
Ia memerintahkan penyalinan Al-Qur’an dalam mushaf baku oleh tim yang dipimpin Zaid bin Tsabit, lalu mengirimkannya ke berbagai kota.
- Wafat dikepung
Di akhir masa jabatannya muncul gejolak politik. Ia dikepung di rumahnya dan wafat sebagai syahid pada 35 H.',
      'Jabatan : Khalifah ketiga
Masa Jabatan : 23–35 H (644–656 M)
Wafat : Dzulhijjah 35 H (656 M), Madinah
Penerus : Ali bin Abi Thalib',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Khulafaur Rasyidin', 'Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Keluarga Nabi', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'ET']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Aisyah binti Abu Bakar') THEN
    UPDATE public.characters SET
      role = 'Sayyidah',
      img = COALESCE(NULLIF('', ''), img),
      t = 15,
      meta = 'Gelar: Ummul Mukminin, Ash-Shiddiqah binti Ash-Shiddiq
Era/Latar: Makkah dan Madinah, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Aisyah adalah putri Abu Bakar dan istri Nabi Muhammad SAW. Ia termasuk ulama perempuan terkemuka yang menjadi rujukan para sahabat dalam fikih dan hadits.
# 🌟 PERAN HISTORIS
- Perawi hadits
Ia meriwayatkan ribuan hadits tentang kehidupan Nabi SAW, terutama urusan rumah tangga dan ibadah beliau.
- Peristiwa Ifk
Ia pernah difitnah, lalu Allah membersihkan namanya melalui wahyu dalam Surah An-Nur.
- Nabi wafat di rumahnya
Nabi SAW wafat di rumahnya dan dimakamkan di sana.
- Setelah wafatnya Utsman
Ia ikut dalam peristiwa Perang Jamal (36 H) dengan maksud menuntut ditegakkannya hukum atas para pembunuh Utsman, lalu kembali ke Madinah dan mengajar hingga wafat.',
      facts = 'Wafat : 17 Ramadhan 58 H (678 M), Madinah
Dimakamkan : Baqi’
Ayah : Abu Bakar Ash-Shiddiq',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Ummahat al-Mu’minin', 'Keluarga Nabi']::text[],
      faith = 'Islam',
      gender = 'Wanita',
      countries = ARRAY['SA']::text[]
    WHERE name = 'Aisyah binti Abu Bakar';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Aisyah binti Abu Bakar',
      'Sayyidah',
      '',
      15,
      'Gelar: Ummul Mukminin, Ash-Shiddiqah binti Ash-Shiddiq
Era/Latar: Makkah dan Madinah, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Aisyah adalah putri Abu Bakar dan istri Nabi Muhammad SAW. Ia termasuk ulama perempuan terkemuka yang menjadi rujukan para sahabat dalam fikih dan hadits.
# 🌟 PERAN HISTORIS
- Perawi hadits
Ia meriwayatkan ribuan hadits tentang kehidupan Nabi SAW, terutama urusan rumah tangga dan ibadah beliau.
- Peristiwa Ifk
Ia pernah difitnah, lalu Allah membersihkan namanya melalui wahyu dalam Surah An-Nur.
- Nabi wafat di rumahnya
Nabi SAW wafat di rumahnya dan dimakamkan di sana.
- Setelah wafatnya Utsman
Ia ikut dalam peristiwa Perang Jamal (36 H) dengan maksud menuntut ditegakkannya hukum atas para pembunuh Utsman, lalu kembali ke Madinah dan mengajar hingga wafat.',
      'Wafat : 17 Ramadhan 58 H (678 M), Madinah
Dimakamkan : Baqi’
Ayah : Abu Bakar Ash-Shiddiq',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Ummahat al-Mu’minin', 'Keluarga Nabi']::text[],
      'Islam',
      'Wanita',
      ARRAY['SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Khalid bin Walid') THEN
    UPDATE public.characters SET
      role = 'Pedang Allah',
      img = COALESCE(NULLIF('', ''), img),
      t = 16,
      meta = 'Gelar: Saifullah al-Maslul (Pedang Allah yang terhunus)
Era/Latar: Makkah, Madinah, Syam, Irak, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Khalid bin Walid dari Bani Makhzum adalah ahli strategi perang yang dijuluki panglima nyaris tak terkalahkan. Ia memeluk Islam sekitar tahun 8 H.
# 🌟 PERAN HISTORIS
- Dari lawan menjadi pembela
Di pihak Quraisy, taktiknya membalikkan jalannya Perang Uhud. Setelah masuk Islam, ia menjadi salah satu panglima terbaik.
- Mu’tah dan gelar Saifullah
Pada Perang Mu’tah ia mengambil alih pasukan setelah tiga panglima gugur, dan Nabi SAW menjulukinya Pedang Allah.
- Penumpas Riddah, penakluk Irak dan Syam
Di masa Abu Bakar ia menumpas kemurtadan, mengalahkan Musailamah di Yamamah, lalu memimpin penaklukan Irak dan Syam, termasuk Perang Yarmuk.
- Dicopot dari jabatan
Umar kemudian mengganti panglima tertinggi dengan Abu Ubaidah, dan Khalid tetap berjuang sebagai prajurit.
- Wafat di ranjangnya
Ia wafat di Hims sekitar 21 H dan dikenang menyesal tidak gugur di medan perang.',
      facts = 'Wafat : sekitar 21 H (642 M), Hims
Gelar dari Nabi SAW : Saifullah
Memeluk Islam : sekitar 8 H',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Panglima & Penakluk', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'IQ', 'SY']::text[]
    WHERE name = 'Khalid bin Walid';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Khalid bin Walid',
      'Pedang Allah',
      '',
      16,
      'Gelar: Saifullah al-Maslul (Pedang Allah yang terhunus)
Era/Latar: Makkah, Madinah, Syam, Irak, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Khalid bin Walid dari Bani Makhzum adalah ahli strategi perang yang dijuluki panglima nyaris tak terkalahkan. Ia memeluk Islam sekitar tahun 8 H.
# 🌟 PERAN HISTORIS
- Dari lawan menjadi pembela
Di pihak Quraisy, taktiknya membalikkan jalannya Perang Uhud. Setelah masuk Islam, ia menjadi salah satu panglima terbaik.
- Mu’tah dan gelar Saifullah
Pada Perang Mu’tah ia mengambil alih pasukan setelah tiga panglima gugur, dan Nabi SAW menjulukinya Pedang Allah.
- Penumpas Riddah, penakluk Irak dan Syam
Di masa Abu Bakar ia menumpas kemurtadan, mengalahkan Musailamah di Yamamah, lalu memimpin penaklukan Irak dan Syam, termasuk Perang Yarmuk.
- Dicopot dari jabatan
Umar kemudian mengganti panglima tertinggi dengan Abu Ubaidah, dan Khalid tetap berjuang sebagai prajurit.
- Wafat di ranjangnya
Ia wafat di Hims sekitar 21 H dan dikenang menyesal tidak gugur di medan perang.',
      'Wafat : sekitar 21 H (642 M), Hims
Gelar dari Nabi SAW : Saifullah
Memeluk Islam : sekitar 8 H',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Panglima & Penakluk', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'IQ', 'SY']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abu Ubaidah bin al-Jarrah') THEN
    UPDATE public.characters SET
      role = 'Kepercayaan Umat',
      img = COALESCE(NULLIF('', ''), img),
      t = 17,
      meta = 'Nama asli: Amir bin Abdullah bin al-Jarrah
Gelar: Amin hadzihil Ummah (kepercayaan umat ini)
Era/Latar: Makkah, Madinah, Syam, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Abu Ubaidah adalah sahabat awal yang masuk Islam lewat dakwah Abu Bakar dan termasuk sepuluh sahabat yang dijanjikan surga. Nabi SAW menjulukinya kepercayaan umat ini.
# 🌟 PERAN HISTORIS
- Pelindung Nabi di Uhud
Ia membantu mencabut mata rantai topi baja yang menancap di wajah Nabi SAW pada Perang Uhud hingga dua gigi serinya tanggal.
- Panglima penakluk Syam
Di masa Umar ia menjadi panglima tertinggi pasukan Syam dan memimpin penaklukan wilayah itu, termasuk kemenangan di Yarmuk.
- Wafat dalam wabah
Ia wafat dalam wabah Amwas (18 H) dan memilih tetap bersama pasukannya.',
      facts = 'Wafat : 18 H (639 M), wabah Amwas
Usia : sekitar 58 tahun
Status : Salah satu sepuluh sahabat yang dijanjikan surga',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Panglima & Penakluk', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'SY', 'JO']::text[]
    WHERE name = 'Abu Ubaidah bin al-Jarrah';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abu Ubaidah bin al-Jarrah',
      'Kepercayaan Umat',
      '',
      17,
      'Nama asli: Amir bin Abdullah bin al-Jarrah
Gelar: Amin hadzihil Ummah (kepercayaan umat ini)
Era/Latar: Makkah, Madinah, Syam, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Abu Ubaidah adalah sahabat awal yang masuk Islam lewat dakwah Abu Bakar dan termasuk sepuluh sahabat yang dijanjikan surga. Nabi SAW menjulukinya kepercayaan umat ini.
# 🌟 PERAN HISTORIS
- Pelindung Nabi di Uhud
Ia membantu mencabut mata rantai topi baja yang menancap di wajah Nabi SAW pada Perang Uhud hingga dua gigi serinya tanggal.
- Panglima penakluk Syam
Di masa Umar ia menjadi panglima tertinggi pasukan Syam dan memimpin penaklukan wilayah itu, termasuk kemenangan di Yarmuk.
- Wafat dalam wabah
Ia wafat dalam wabah Amwas (18 H) dan memilih tetap bersama pasukannya.',
      'Wafat : 18 H (639 M), wabah Amwas
Usia : sekitar 58 tahun
Status : Salah satu sepuluh sahabat yang dijanjikan surga',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Panglima & Penakluk', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'SY', 'JO']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Sa’ad bin Abi Waqqash') THEN
    UPDATE public.characters SET
      role = 'Penakluk Persia',
      img = COALESCE(NULLIF('', ''), img),
      t = 18,
      meta = 'Gelar: Mustajabud Da’wah (doanya mustajab)
Era/Latar: Makkah, Madinah, Irak, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Sa’ad bin Abi Waqqash dari Bani Zuhrah adalah paman Nabi SAW dari pihak ibu dan salah satu dari sepuluh sahabat yang dijanjikan surga. Ia masuk Islam saat masih remaja dan dikenal sebagai pemanah ulung yang doanya mustajab.
# 🌟 PERAN HISTORIS
- Pemanah pertama di jalan Allah
Menurut riwayat, ia orang pertama yang melepaskan anak panah di jalan Allah, dan di Uhud ia menjaga Nabi SAW dengan panahnya.
- Panglima Qadisiyyah
Umar mengangkatnya memimpin pasukan menghadapi Persia di Qadisiyyah (15 H), pertempuran yang membuka jalan ke ibu kota Persia, Mada’in.
- Pendiri kota Kufah
Ia memimpin penaklukan Mada’in dan mendirikan kota Kufah sebagai pangkalan pasukan, lalu menjadi gubernurnya.',
      facts = 'Wafat : sekitar 55 H (±675 M), Madinah
Peristiwa besar : Perang Qadisiyyah, 15 H (636 M)
Status : Salah satu sepuluh sahabat yang dijanjikan surga',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Panglima & Penakluk', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'IQ']::text[]
    WHERE name = 'Sa’ad bin Abi Waqqash';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Sa’ad bin Abi Waqqash',
      'Penakluk Persia',
      '',
      18,
      'Gelar: Mustajabud Da’wah (doanya mustajab)
Era/Latar: Makkah, Madinah, Irak, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Sa’ad bin Abi Waqqash dari Bani Zuhrah adalah paman Nabi SAW dari pihak ibu dan salah satu dari sepuluh sahabat yang dijanjikan surga. Ia masuk Islam saat masih remaja dan dikenal sebagai pemanah ulung yang doanya mustajab.
# 🌟 PERAN HISTORIS
- Pemanah pertama di jalan Allah
Menurut riwayat, ia orang pertama yang melepaskan anak panah di jalan Allah, dan di Uhud ia menjaga Nabi SAW dengan panahnya.
- Panglima Qadisiyyah
Umar mengangkatnya memimpin pasukan menghadapi Persia di Qadisiyyah (15 H), pertempuran yang membuka jalan ke ibu kota Persia, Mada’in.
- Pendiri kota Kufah
Ia memimpin penaklukan Mada’in dan mendirikan kota Kufah sebagai pangkalan pasukan, lalu menjadi gubernurnya.',
      'Wafat : sekitar 55 H (±675 M), Madinah
Peristiwa besar : Perang Qadisiyyah, 15 H (636 M)
Status : Salah satu sepuluh sahabat yang dijanjikan surga',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Makkah', 'Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Sepuluh Sahabat Dijanjikan Surga', 'Assabiqunal Awwalun', 'Panglima & Penakluk', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'IQ']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Amr bin Ash') THEN
    UPDATE public.characters SET
      role = 'Penakluk Mesir',
      img = COALESCE(NULLIF('', ''), img),
      t = 19,
      meta = 'Gelar: Fatih Misr (Penakluk Mesir)
Era/Latar: Makkah, Madinah, Mesir, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Amr bin Ash dari Bani Sahm adalah diplomat dan ahli siasat yang cerdik. Ia sempat menjadi utusan Quraisy kepada Najasyi di Habasyah sebelum masuk Islam sekitar tahun 8 H.
# 🌟 PERAN HISTORIS
- Memimpin penaklukan Mesir
Atas izin Umar, ia membawa pasukan kecil memasuki Mesir (sekitar 18 H) dan mengalahkan pasukan Bizantium di Babilonia dan Iskandariyah (21 H).
- Pendiri Fustat
Ia mendirikan kota Fustat beserta masjid Amr bin Ash sebagai pusat pemerintahan baru.
- Gubernur Mesir
Ia memerintah Mesir dengan perjanjian yang menjamin keamanan jiwa, harta, dan tempat ibadah penduduk setempat.',
      facts = 'Wafat : 43 H (664 M), Mesir
Peristiwa besar : Penaklukan Mesir, 18–21 H (639–642 M)',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Panglima & Penakluk', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'EG']::text[]
    WHERE name = 'Amr bin Ash';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Amr bin Ash',
      'Penakluk Mesir',
      '',
      19,
      'Gelar: Fatih Misr (Penakluk Mesir)
Era/Latar: Makkah, Madinah, Mesir, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Amr bin Ash dari Bani Sahm adalah diplomat dan ahli siasat yang cerdik. Ia sempat menjadi utusan Quraisy kepada Najasyi di Habasyah sebelum masuk Islam sekitar tahun 8 H.
# 🌟 PERAN HISTORIS
- Memimpin penaklukan Mesir
Atas izin Umar, ia membawa pasukan kecil memasuki Mesir (sekitar 18 H) dan mengalahkan pasukan Bizantium di Babilonia dan Iskandariyah (21 H).
- Pendiri Fustat
Ia mendirikan kota Fustat beserta masjid Amr bin Ash sebagai pusat pemerintahan baru.
- Gubernur Mesir
Ia memerintah Mesir dengan perjanjian yang menjamin keamanan jiwa, harta, dan tempat ibadah penduduk setempat.',
      'Wafat : 43 H (664 M), Mesir
Peristiwa besar : Penaklukan Mesir, 18–21 H (639–642 M)',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Panglima & Penakluk', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'EG']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Hasan bin Ali') THEN
    UPDATE public.characters SET
      role = 'Cucu Nabi & Khalifah Kelima',
      img = COALESCE(NULLIF('assets/hasan.jpg', ''), img),
      t = 20,
      meta = 'Nama asli: Hasan bin Ali bin Abi Thalib
Gelar: Sayyid Syabab Ahl al-Jannah, Al-Mujtaba
Era/Latar: Madinah dan Kufah, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Hasan bin Ali adalah cucu sulung Nabi Muhammad ﷺ dari putrinya Fatimah az-Zahra dan Ali bin Abi Thalib. Setelah pembunuhan ayahnya di Kufah pada 40 H (661 M), penduduk Irak membaiatnya sebagai khalifah kelima.
# 🌟 PERAN HISTORIS
- Enam bulan kekhalifahan di Kufah
Ia memimpin kekhalifahan di Kufah selama sekitar enam bulan di tengah ketegangan militer yang memuncak melawan kubu Mu’awiyah di Syam.
- Tahun Persatuan (''Aam al-Jama''ah)
Menghadapi risiko perpecahan dan pertumpahan darah sesama muslim, Hasan menginisiasi perundingan damai dengan Mu’awiyah pada Rabiul Awwal 41 H. Ia melepaskan hak kepemimpinannya demi keselamatan umat, memenuhi sabda Nabi ﷺ bahwa cucunya kelak mendamaikan dua kubu besar kaum muslimin.
- Menetap di Madinah hingga wafat
Setelah menyerahkan urusan pemerintahan, Hasan kembali ke Madinah dan mengabdikan hidupnya untuk mengajar, ibadah, dan menyantuni kaum miskin hingga wafat pada 50 H (670 M) dan dimakamkan di Pemakaman Baqi’.',
      facts = 'Lahir : 15 Ramadan 3 H (624 M), Madinah
Jabatan : Khalifah kelima (Khulafaur Rasyidin)
Masa Jabatan : 40–41 H (661 M)
Wafat : 50 H (670 M), Madinah
Peristiwa Kunci : ''Aam al-Jama''ah (Tahun Persatuan) 661 M',
      slides = '["assets/slide_hasan.jpg"]'::jsonb,
      gallery = '[{"url":"assets/slide_hasan.jpg","caption":"Peristiwa ''Aam al-Jama''ah (661 M) — Perjanjian damai dan rekonsiliasi demi persatuan umat"}]'::jsonb,
      eras = ARRAY['Periode Madinah', 'Khulafaur Rasyidin']::text[],
      groups = ARRAY['Khulafaur Rasyidin', 'Keluarga Nabi', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'IQ']::text[]
    WHERE name = 'Hasan bin Ali';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Hasan bin Ali',
      'Cucu Nabi & Khalifah Kelima',
      'assets/hasan.jpg',
      20,
      'Nama asli: Hasan bin Ali bin Abi Thalib
Gelar: Sayyid Syabab Ahl al-Jannah, Al-Mujtaba
Era/Latar: Madinah dan Kufah, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Hasan bin Ali adalah cucu sulung Nabi Muhammad ﷺ dari putrinya Fatimah az-Zahra dan Ali bin Abi Thalib. Setelah pembunuhan ayahnya di Kufah pada 40 H (661 M), penduduk Irak membaiatnya sebagai khalifah kelima.
# 🌟 PERAN HISTORIS
- Enam bulan kekhalifahan di Kufah
Ia memimpin kekhalifahan di Kufah selama sekitar enam bulan di tengah ketegangan militer yang memuncak melawan kubu Mu’awiyah di Syam.
- Tahun Persatuan (''Aam al-Jama''ah)
Menghadapi risiko perpecahan dan pertumpahan darah sesama muslim, Hasan menginisiasi perundingan damai dengan Mu’awiyah pada Rabiul Awwal 41 H. Ia melepaskan hak kepemimpinannya demi keselamatan umat, memenuhi sabda Nabi ﷺ bahwa cucunya kelak mendamaikan dua kubu besar kaum muslimin.
- Menetap di Madinah hingga wafat
Setelah menyerahkan urusan pemerintahan, Hasan kembali ke Madinah dan mengabdikan hidupnya untuk mengajar, ibadah, dan menyantuni kaum miskin hingga wafat pada 50 H (670 M) dan dimakamkan di Pemakaman Baqi’.',
      'Lahir : 15 Ramadan 3 H (624 M), Madinah
Jabatan : Khalifah kelima (Khulafaur Rasyidin)
Masa Jabatan : 40–41 H (661 M)
Wafat : 50 H (670 M), Madinah
Peristiwa Kunci : ''Aam al-Jama''ah (Tahun Persatuan) 661 M',
      '["assets/slide_hasan.jpg"]'::jsonb,
      '[{"url":"assets/slide_hasan.jpg","caption":"Peristiwa ''Aam al-Jama''ah (661 M) — Perjanjian damai dan rekonsiliasi demi persatuan umat"}]'::jsonb,
      true,
      ARRAY['Periode Madinah', 'Khulafaur Rasyidin']::text[],
      ARRAY['Khulafaur Rasyidin', 'Keluarga Nabi', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'IQ']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Husain bin Ali') THEN
    UPDATE public.characters SET
      role = 'Cucu Nabi & Syahid Karbala',
      img = COALESCE(NULLIF('assets/husain.jpg', ''), img),
      t = 21,
      meta = 'Nama asli: Husain bin Ali bin Abi Thalib
Gelar: Sayyid Syuhada, Sayyid Syabab Ahl al-Jannah
Era/Latar: Madinah, Makkah, dan Karbala, abad ke-7 Masehi',
      body = '# 📜 RINGKASAN BIOGRAFI
Husain bin Ali adalah cucu kedua Nabi Muhammad ﷺ dan adik kandung Hasan bin Ali. Bersama saudaranya, ia digelari pemuka pemuda surga oleh Rasulullah ﷺ.
# 🌟 PERAN HISTORIS
- Menolak baiat Yazid
Ketika Mu’awiyah wafat pada 60 H dan menunjuk putranya Yazid sebagai penerus takhta, Husain menolak membaiat sistem suksesi dinasti tersebut demi menjaga prinsip musyawarah (syura) kepemimpinan umat.
- Perjalanan menuju Kufah
Setelah ratusan surat undangan dan janji kesetiaan tiba dari penduduk Irak, Husain berangkat bersama keluarga dan rombongan kecil dari Makkah menuju Kufah pada Zulhijjah 60 H.
- Tragedi Karbala
Di padang tandus Karbala dekat Sungai Eufrat, rombongannya dikepung oleh pasukan pimpinan Umar bin Sa’ad atas perintah Ubaidullah bin Ziyad. Setelah pasokan air diputus dan negosiasi gagal, pertempuran timpang terjadi pada 10 Muharram 61 H (680 M). Husain gugur bersama puluhan kerabat dan pembelanya.',
      facts = 'Lahir : 5 Sya''ban 4 H (626 M), Madinah
Wafat : 10 Muharram 61 H (10 Oktober 680 M), Karbala, Irak
Ayah & Ibu : Ali bin Abi Thalib & Fatimah az-Zahra
Peristiwa Kunci : Tragedi Karbala (Asyura)',
      slides = '["assets/slide_husain.jpg"]'::jsonb,
      gallery = '[{"url":"assets/slide_husain.jpg","caption":"Tenda perkemahan kafilah Husain bin Ali di padang Karbala menjelang 10 Muharram 61 H"}]'::jsonb,
      eras = ARRAY['Periode Madinah', 'Khulafaur Rasyidin', 'Daulah Umayyah']::text[],
      groups = ARRAY['Keluarga Nabi', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'IQ']::text[]
    WHERE name = 'Husain bin Ali';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Husain bin Ali',
      'Cucu Nabi & Syahid Karbala',
      'assets/husain.jpg',
      21,
      'Nama asli: Husain bin Ali bin Abi Thalib
Gelar: Sayyid Syuhada, Sayyid Syabab Ahl al-Jannah
Era/Latar: Madinah, Makkah, dan Karbala, abad ke-7 Masehi',
      '# 📜 RINGKASAN BIOGRAFI
Husain bin Ali adalah cucu kedua Nabi Muhammad ﷺ dan adik kandung Hasan bin Ali. Bersama saudaranya, ia digelari pemuka pemuda surga oleh Rasulullah ﷺ.
# 🌟 PERAN HISTORIS
- Menolak baiat Yazid
Ketika Mu’awiyah wafat pada 60 H dan menunjuk putranya Yazid sebagai penerus takhta, Husain menolak membaiat sistem suksesi dinasti tersebut demi menjaga prinsip musyawarah (syura) kepemimpinan umat.
- Perjalanan menuju Kufah
Setelah ratusan surat undangan dan janji kesetiaan tiba dari penduduk Irak, Husain berangkat bersama keluarga dan rombongan kecil dari Makkah menuju Kufah pada Zulhijjah 60 H.
- Tragedi Karbala
Di padang tandus Karbala dekat Sungai Eufrat, rombongannya dikepung oleh pasukan pimpinan Umar bin Sa’ad atas perintah Ubaidullah bin Ziyad. Setelah pasokan air diputus dan negosiasi gagal, pertempuran timpang terjadi pada 10 Muharram 61 H (680 M). Husain gugur bersama puluhan kerabat dan pembelanya.',
      'Lahir : 5 Sya''ban 4 H (626 M), Madinah
Wafat : 10 Muharram 61 H (10 Oktober 680 M), Karbala, Irak
Ayah & Ibu : Ali bin Abi Thalib & Fatimah az-Zahra
Peristiwa Kunci : Tragedi Karbala (Asyura)',
      '["assets/slide_husain.jpg"]'::jsonb,
      '[{"url":"assets/slide_husain.jpg","caption":"Tenda perkemahan kafilah Husain bin Ali di padang Karbala menjelang 10 Muharram 61 H"}]'::jsonb,
      true,
      ARRAY['Periode Madinah', 'Khulafaur Rasyidin', 'Daulah Umayyah']::text[],
      ARRAY['Keluarga Nabi', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'IQ']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Mu’awiyah bin Abi Sufyan') THEN
    UPDATE public.characters SET
      role = 'Pendiri Daulah Umayyah',
      img = COALESCE(NULLIF('assets/muawiyah.jpg', ''), img),
      t = 22,
      meta = 'Nama asli: Mu’awiyah bin Abi Sufyan Shakhr bin Harb
Julukan: Abu Abdirrahman, Katib al-Wahy (Juru Tulis Wahyu)
Era/Latar: Makkah, Madinah, dan Damaskus, 602–680 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Mu’awiyah bin Abi Sufyan adalah sahabat Nabi dari kalangan Quraisy yang memeluk Islam saat Fathu Makkah dan ditugaskan mencatat wahyu serta surat-surat kenegaraan. Ia kemudian memimpin Syam selama puluhan tahun sebelum mendirikan dinasti kekhalifahan pertama dalam sejarah Islam.
# 🌟 PERAN HISTORIS
- Membangun armada laut muslim
Sebagai Gubernur Syam di era Khalifah Umar dan Utsman, ia membentuk kekuatan angkatan laut Islam pertama di Laut Tengah dan memenangkan Pertempuran Dzatush Shawari (655 M) melawan Bizantium.
- Pendirian Daulah Umayyah
Menyusul perjanjian damai dengan Hasan bin Ali pada 661 M, ia memindahkan pusat kekhalifahan ke Damaskus dan merombak birokrasi pemerintahan dengan sistem pos (Barid) dan pengarsipan resmi (Diwan al-Khatam).
- Perluasan wilayah dan diplomasi
Selama hampir dua puluh tahun pemerintahannya, ia menekan ancaman Bizantium hingga ke perbatasan Anatolia serta memperluas pengaruh Islam ke Afrika Utara dan perbatasan timur.',
      facts = 'Lahir : ±602 M, Makkah
Jabatan : Khalifah Pertama Daulah Umayyah
Masa Kekhalifahan : 41–60 H (661–680 M)
Wafat : Rajab 60 H (680 M), Damaskus, Suriah
Penerus : Yazid bin Mu’awiyah',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Madinah', 'Khulafaur Rasyidin', 'Daulah Umayyah']::text[],
      groups = ARRAY['Khalifah Umayyah', 'Penguasa', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'SY']::text[]
    WHERE name = 'Mu’awiyah bin Abi Sufyan';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Mu’awiyah bin Abi Sufyan',
      'Pendiri Daulah Umayyah',
      'assets/muawiyah.jpg',
      22,
      'Nama asli: Mu’awiyah bin Abi Sufyan Shakhr bin Harb
Julukan: Abu Abdirrahman, Katib al-Wahy (Juru Tulis Wahyu)
Era/Latar: Makkah, Madinah, dan Damaskus, 602–680 M',
      '# 📜 RINGKASAN BIOGRAFI
Mu’awiyah bin Abi Sufyan adalah sahabat Nabi dari kalangan Quraisy yang memeluk Islam saat Fathu Makkah dan ditugaskan mencatat wahyu serta surat-surat kenegaraan. Ia kemudian memimpin Syam selama puluhan tahun sebelum mendirikan dinasti kekhalifahan pertama dalam sejarah Islam.
# 🌟 PERAN HISTORIS
- Membangun armada laut muslim
Sebagai Gubernur Syam di era Khalifah Umar dan Utsman, ia membentuk kekuatan angkatan laut Islam pertama di Laut Tengah dan memenangkan Pertempuran Dzatush Shawari (655 M) melawan Bizantium.
- Pendirian Daulah Umayyah
Menyusul perjanjian damai dengan Hasan bin Ali pada 661 M, ia memindahkan pusat kekhalifahan ke Damaskus dan merombak birokrasi pemerintahan dengan sistem pos (Barid) dan pengarsipan resmi (Diwan al-Khatam).
- Perluasan wilayah dan diplomasi
Selama hampir dua puluh tahun pemerintahannya, ia menekan ancaman Bizantium hingga ke perbatasan Anatolia serta memperluas pengaruh Islam ke Afrika Utara dan perbatasan timur.',
      'Lahir : ±602 M, Makkah
Jabatan : Khalifah Pertama Daulah Umayyah
Masa Kekhalifahan : 41–60 H (661–680 M)
Wafat : Rajab 60 H (680 M), Damaskus, Suriah
Penerus : Yazid bin Mu’awiyah',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Madinah', 'Khulafaur Rasyidin', 'Daulah Umayyah']::text[],
      ARRAY['Khalifah Umayyah', 'Penguasa', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'SY']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Yazid bin Mu’awiyah') THEN
    UPDATE public.characters SET
      role = 'Khalifah Umayyah Kedua',
      img = COALESCE(NULLIF('', ''), img),
      t = 23,
      meta = 'Nama asli: Yazid bin Mu’awiyah bin Abi Sufyan
Era/Latar: Damaskus, 647–683 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Yazid bin Mu’awiyah adalah khalifah kedua Daulah Umayyah dan penguasa pertama dalam peradaban Islam yang mewarisi tampuk kekuasaan melalui penunjukan keluarga. Pemerintahannya yang singkat di Damaskus berlangsung di tengah pergolakan politik hebat yang memicu Fitnah Kedua.
# 🌟 PERAN HISTORIS
- Masa krisis dan Tragedi Karbala
Naiknya Yazid ke tampuk kekuasaan pada 60 H (680 M) menghadapi penolakan tokoh-tokoh utama Madinah dan Hijaz. Ketegangan berujung pada Pertempuran Karbala di Irak yang menewaskan cucu Nabi ﷺ, Husain bin Ali.
- Pertempuran Al-Harrah dan pengepungan Makkah
Pemberontakan terbuka di Madinah direspons Yazid dengan mengirim pasukan pimpinan Muslim bin Uqbah dalam Pertempuran Al-Harrah (683 M). Pasukannya kemudian bergerak mengepung Makkah yang dikuasai Abdullah bin az-Zubair sebelum ekspedisi terhenti akibat kematian mendadak Yazid.',
      facts = 'Lahir : ±26 H (647 M), Damaskus
Jabatan : Khalifah Kedua Daulah Umayyah
Masa Kekhalifahan : 60–64 H (680–683 M)
Wafat : Rabiul Awwal 64 H (November 683 M), Huwwarin, Suriah
Penerus : Mu’awiyah bin Yazid (Mu’awiyah II)',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SY', 'IQ', 'SA']::text[]
    WHERE name = 'Yazid bin Mu’awiyah';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Yazid bin Mu’awiyah',
      'Khalifah Umayyah Kedua',
      '',
      23,
      'Nama asli: Yazid bin Mu’awiyah bin Abi Sufyan
Era/Latar: Damaskus, 647–683 M',
      '# 📜 RINGKASAN BIOGRAFI
Yazid bin Mu’awiyah adalah khalifah kedua Daulah Umayyah dan penguasa pertama dalam peradaban Islam yang mewarisi tampuk kekuasaan melalui penunjukan keluarga. Pemerintahannya yang singkat di Damaskus berlangsung di tengah pergolakan politik hebat yang memicu Fitnah Kedua.
# 🌟 PERAN HISTORIS
- Masa krisis dan Tragedi Karbala
Naiknya Yazid ke tampuk kekuasaan pada 60 H (680 M) menghadapi penolakan tokoh-tokoh utama Madinah dan Hijaz. Ketegangan berujung pada Pertempuran Karbala di Irak yang menewaskan cucu Nabi ﷺ, Husain bin Ali.
- Pertempuran Al-Harrah dan pengepungan Makkah
Pemberontakan terbuka di Madinah direspons Yazid dengan mengirim pasukan pimpinan Muslim bin Uqbah dalam Pertempuran Al-Harrah (683 M). Pasukannya kemudian bergerak mengepung Makkah yang dikuasai Abdullah bin az-Zubair sebelum ekspedisi terhenti akibat kematian mendadak Yazid.',
      'Lahir : ±26 H (647 M), Damaskus
Jabatan : Khalifah Kedua Daulah Umayyah
Masa Kekhalifahan : 60–64 H (680–683 M)
Wafat : Rabiul Awwal 64 H (November 683 M), Huwwarin, Suriah
Penerus : Mu’awiyah bin Yazid (Mu’awiyah II)',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['SY', 'IQ', 'SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abdullah bin az-Zubair') THEN
    UPDATE public.characters SET
      role = 'Sahabat & Khalifah di Makkah',
      img = COALESCE(NULLIF('', ''), img),
      t = 24,
      meta = 'Nama asli: Abdullah bin az-Zubair bin al-Awwam
Julukan: Ibnuz Zubair, Al-A''idh bi al-Bait
Era/Latar: Madinah dan Makkah, 624–692 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Abdullah bin az-Zubair adalah putra Zubair bin Awwam dan Asma'' binti Abu Bakar, sekaligus anak pertama yang lahir di kalangan Muhajirin setelah tiba di Madinah. Ia dikenal tangguh di medan perang dan merupakan salah satu sahabat muda terkemuka yang menentang suksesi monarki Umayyah.
# 🌟 PERAN HISTORIS
- Deklarasi kekhalifahan di Makkah
Setelah wafatnya Yazid pada 683 M, Abdullah menolak kekuasaan Damaskus dan dibaiat sebagai khalifah oleh penduduk Hijaz. Otoritasnya segera diakui oleh Irak, Yaman, dan sebagian Mesir selama Fitnah Kedua.
- Renovasi Ka''bah
Ia memimpin pembangunan kembali Ka''bah sesuai fondasi Nabi Ibrahim AS setelah bangunan suci tersebut rusak akibat pelontar batu pasukan Umayyah pada pengepungan tahun 683 M.
- Pertahanan terakhir di Makkah
Pada 73 H (692 M), tentara Umayyah pimpinan Al-Hajjaj bin Yusuf mengepung Makkah selama enam bulan. Menolak tawaran menyerah, Abdullah bertempur hingga gugur di pelataran Masjidil Haram.',
      facts = 'Lahir : 2 H (624 M), Madinah
Jabatan : Khalifah di Hijaz dan wilayah barat
Masa Kekhalifahan : 64–73 H (683–692 M)
Wafat : Jumadil Ula 73 H (Oktober 692 M), Makkah
Orang Tua : Zubair bin Awwam & Asma'' binti Abu Bakar',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Madinah', 'Khulafaur Rasyidin', 'Daulah Umayyah']::text[],
      groups = ARRAY['Sahabat', 'Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'IQ', 'EG']::text[]
    WHERE name = 'Abdullah bin az-Zubair';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abdullah bin az-Zubair',
      'Sahabat & Khalifah di Makkah',
      '',
      24,
      'Nama asli: Abdullah bin az-Zubair bin al-Awwam
Julukan: Ibnuz Zubair, Al-A''idh bi al-Bait
Era/Latar: Madinah dan Makkah, 624–692 M',
      '# 📜 RINGKASAN BIOGRAFI
Abdullah bin az-Zubair adalah putra Zubair bin Awwam dan Asma'' binti Abu Bakar, sekaligus anak pertama yang lahir di kalangan Muhajirin setelah tiba di Madinah. Ia dikenal tangguh di medan perang dan merupakan salah satu sahabat muda terkemuka yang menentang suksesi monarki Umayyah.
# 🌟 PERAN HISTORIS
- Deklarasi kekhalifahan di Makkah
Setelah wafatnya Yazid pada 683 M, Abdullah menolak kekuasaan Damaskus dan dibaiat sebagai khalifah oleh penduduk Hijaz. Otoritasnya segera diakui oleh Irak, Yaman, dan sebagian Mesir selama Fitnah Kedua.
- Renovasi Ka''bah
Ia memimpin pembangunan kembali Ka''bah sesuai fondasi Nabi Ibrahim AS setelah bangunan suci tersebut rusak akibat pelontar batu pasukan Umayyah pada pengepungan tahun 683 M.
- Pertahanan terakhir di Makkah
Pada 73 H (692 M), tentara Umayyah pimpinan Al-Hajjaj bin Yusuf mengepung Makkah selama enam bulan. Menolak tawaran menyerah, Abdullah bertempur hingga gugur di pelataran Masjidil Haram.',
      'Lahir : 2 H (624 M), Madinah
Jabatan : Khalifah di Hijaz dan wilayah barat
Masa Kekhalifahan : 64–73 H (683–692 M)
Wafat : Jumadil Ula 73 H (Oktober 692 M), Makkah
Orang Tua : Zubair bin Awwam & Asma'' binti Abu Bakar',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Madinah', 'Khulafaur Rasyidin', 'Daulah Umayyah']::text[],
      ARRAY['Sahabat', 'Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'IQ', 'EG']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Marwan bin al-Hakam') THEN
    UPDATE public.characters SET
      role = 'Pendiri Cabang Marwaniyah',
      img = COALESCE(NULLIF('', ''), img),
      t = 25,
      meta = 'Nama asli: Marwan bin al-Hakam bin Abi al-Ash
Julukan: Abu Abdil Malik
Era/Latar: Makkah, Madinah, dan Damaskus, 623–685 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Marwan bin al-Hakam adalah tokoh berpengaruh dari klan Bani Umayyah yang pernah menjabat sekretaris Khalifah Utsman bin Affan dan beberapa kali menjadi Gubernur Madinah. Ia mengambil alih kendali di saat dinasti Umayyah hampir runtuh pasca wafatnya Mu’awiyah II.
# 🌟 PERAN HISTORIS
- Pertempuran Marj Rahith (684 M)
Ketika sebagian besar wilayah kekhalifahan beralih membaiat Abdullah bin az-Zubair, Marwan mengumpulkan faksi suku Yaman di Syam. Dalam pertempuran sengit di Marj Rahith, pasukannya mengalahkan koalisi suku Qaysi dan memastikan kekuasaan tetap di tangan Bani Umayyah.
- Mengalihkan kekuasaan ke garis Marwani
Kemenangan Marwan mengubah trajektori dinasti, memindahkan garis keturunan khalifah Umayyah dari cabang Abu Sufyan (Sufyaniyah) ke garis keturunannya sendiri (Marwaniyah) yang bertahan hingga akhir dinasti.
- Merebut kembali Mesir
Ia bergerak ke selatan dan merebut kembali provinsi kaya Mesir dari pendukung Ibnuz Zubair sebelum wafat pada 685 M.',
      facts = 'Lahir : 2 H (623 M), Makkah
Jabatan : Khalifah Keempat Daulah Umayyah
Masa Kekhalifahan : 64–65 H (684–685 M)
Wafat : Ramadan 65 H (April 685 M), Damaskus
Penerus : Abdul Malik bin Marwan',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Periode Madinah', 'Khulafaur Rasyidin', 'Daulah Umayyah']::text[],
      groups = ARRAY['Khalifah Umayyah', 'Penguasa', 'Sahabat']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'SY', 'EG']::text[]
    WHERE name = 'Marwan bin al-Hakam';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Marwan bin al-Hakam',
      'Pendiri Cabang Marwaniyah',
      '',
      25,
      'Nama asli: Marwan bin al-Hakam bin Abi al-Ash
Julukan: Abu Abdil Malik
Era/Latar: Makkah, Madinah, dan Damaskus, 623–685 M',
      '# 📜 RINGKASAN BIOGRAFI
Marwan bin al-Hakam adalah tokoh berpengaruh dari klan Bani Umayyah yang pernah menjabat sekretaris Khalifah Utsman bin Affan dan beberapa kali menjadi Gubernur Madinah. Ia mengambil alih kendali di saat dinasti Umayyah hampir runtuh pasca wafatnya Mu’awiyah II.
# 🌟 PERAN HISTORIS
- Pertempuran Marj Rahith (684 M)
Ketika sebagian besar wilayah kekhalifahan beralih membaiat Abdullah bin az-Zubair, Marwan mengumpulkan faksi suku Yaman di Syam. Dalam pertempuran sengit di Marj Rahith, pasukannya mengalahkan koalisi suku Qaysi dan memastikan kekuasaan tetap di tangan Bani Umayyah.
- Mengalihkan kekuasaan ke garis Marwani
Kemenangan Marwan mengubah trajektori dinasti, memindahkan garis keturunan khalifah Umayyah dari cabang Abu Sufyan (Sufyaniyah) ke garis keturunannya sendiri (Marwaniyah) yang bertahan hingga akhir dinasti.
- Merebut kembali Mesir
Ia bergerak ke selatan dan merebut kembali provinsi kaya Mesir dari pendukung Ibnuz Zubair sebelum wafat pada 685 M.',
      'Lahir : 2 H (623 M), Makkah
Jabatan : Khalifah Keempat Daulah Umayyah
Masa Kekhalifahan : 64–65 H (684–685 M)
Wafat : Ramadan 65 H (April 685 M), Damaskus
Penerus : Abdul Malik bin Marwan',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Periode Madinah', 'Khulafaur Rasyidin', 'Daulah Umayyah']::text[],
      ARRAY['Khalifah Umayyah', 'Penguasa', 'Sahabat']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'SY', 'EG']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abdul Malik bin Marwan') THEN
    UPDATE public.characters SET
      role = 'Arsitek Kejayaan Umayyah',
      img = COALESCE(NULLIF('assets/abdul_malik.jpg', ''), img),
      t = 26,
      meta = 'Nama asli: Abdul Malik bin Marwan bin al-Hakam
Julukan: Abu al-Muluk (Ayah Para Raja), Hammam al-Halab
Era/Latar: Madinah, Damaskus, dan Yerusalem, 646–705 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Abdul Malik bin Marwan adalah khalifah kelima Daulah Umayyah yang mengakhiri Fitnah Kedua dan meletakkan fondasi institusi negara Islam modern. Ia dikenal cerdas, mendalami fikih Madinah di masa mudanya, dan memiliki ketegasan politik tinggi.
# 🌟 PERAN HISTORIS
- Mengakhiri Fitnah Kedua
Ia menumpas perpecahan internal kekhalifahan dengan mengalahkan Mus''ab bin az-Zubair di Irak dan mengutus Al-Hajjaj merebut Makkah pada 692 M, menyatukan kembali imperium di bawah satu komando pusat.
- Arabisasi administrasi dan moneter
Ia mengganti bahasa Yunani dan Pahlavi dalam catatan pajak dan administrasi negara dengan bahasa Arab (Ta’rib). Selain itu, ia menghapus ketergantungan pada koin Bizantium dan Sasaniyah dengan mencetak mata uang dinar emas dan dirham perak berukir kaligrafi Al-Qur''an pertama.
- Membangun Qubbat ash-Shakhrah
Pada tahun 691 M (72 H), ia merampungkan pembangunan monumen arsitektur Qubbat ash-Shakhrah (Kubah Batu / Dome of the Rock) di Yerusalem yang menjadi salah satu mahakarya arsitektur Islam tertua yang bertahan hingga kini.',
      facts = 'Lahir : 26 H (646 M), Madinah
Jabatan : Khalifah Kelima Daulah Umayyah
Masa Kekhalifahan : 65–86 H (685–705 M)
Wafat : Syawwal 86 H (Oktober 705 M), Damaskus
Peninggalan : Kubah Shakhrah, Mata Uang Dinar Islam Pertama, Arabisasi Birokrasi',
      slides = '["assets/slide_abdul_malik.jpg"]'::jsonb,
      gallery = '[{"url":"assets/slide_abdul_malik.jpg","caption":"Cetak biru arsitektur Qubbat ash-Shakhrah (Kubah Batu) di Yerusalem"}]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SY', 'PS', 'IQ', 'SA']::text[]
    WHERE name = 'Abdul Malik bin Marwan';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abdul Malik bin Marwan',
      'Arsitek Kejayaan Umayyah',
      'assets/abdul_malik.jpg',
      26,
      'Nama asli: Abdul Malik bin Marwan bin al-Hakam
Julukan: Abu al-Muluk (Ayah Para Raja), Hammam al-Halab
Era/Latar: Madinah, Damaskus, dan Yerusalem, 646–705 M',
      '# 📜 RINGKASAN BIOGRAFI
Abdul Malik bin Marwan adalah khalifah kelima Daulah Umayyah yang mengakhiri Fitnah Kedua dan meletakkan fondasi institusi negara Islam modern. Ia dikenal cerdas, mendalami fikih Madinah di masa mudanya, dan memiliki ketegasan politik tinggi.
# 🌟 PERAN HISTORIS
- Mengakhiri Fitnah Kedua
Ia menumpas perpecahan internal kekhalifahan dengan mengalahkan Mus''ab bin az-Zubair di Irak dan mengutus Al-Hajjaj merebut Makkah pada 692 M, menyatukan kembali imperium di bawah satu komando pusat.
- Arabisasi administrasi dan moneter
Ia mengganti bahasa Yunani dan Pahlavi dalam catatan pajak dan administrasi negara dengan bahasa Arab (Ta’rib). Selain itu, ia menghapus ketergantungan pada koin Bizantium dan Sasaniyah dengan mencetak mata uang dinar emas dan dirham perak berukir kaligrafi Al-Qur''an pertama.
- Membangun Qubbat ash-Shakhrah
Pada tahun 691 M (72 H), ia merampungkan pembangunan monumen arsitektur Qubbat ash-Shakhrah (Kubah Batu / Dome of the Rock) di Yerusalem yang menjadi salah satu mahakarya arsitektur Islam tertua yang bertahan hingga kini.',
      'Lahir : 26 H (646 M), Madinah
Jabatan : Khalifah Kelima Daulah Umayyah
Masa Kekhalifahan : 65–86 H (685–705 M)
Wafat : Syawwal 86 H (Oktober 705 M), Damaskus
Peninggalan : Kubah Shakhrah, Mata Uang Dinar Islam Pertama, Arabisasi Birokrasi',
      '["assets/slide_abdul_malik.jpg"]'::jsonb,
      '[{"url":"assets/slide_abdul_malik.jpg","caption":"Cetak biru arsitektur Qubbat ash-Shakhrah (Kubah Batu) di Yerusalem"}]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['SY', 'PS', 'IQ', 'SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Al-Hajjaj bin Yusuf ats-Tsaqafi') THEN
    UPDATE public.characters SET
      role = 'Gubernur Irak & Ahli Administrasi',
      img = COALESCE(NULLIF('assets/al_hajjaj.jpg', ''), img),
      t = 27,
      meta = 'Nama asli: Al-Hajjaj bin Yusuf bin al-Hakam ats-Tsaqafi
Julukan: Al-Mubir
Era/Latar: Thaif, Makkah, dan Wasit, 661–714 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Al-Hajjaj bin Yusuf adalah administrator militer tangguh asal Thaif yang menjadi tangan kanan Khalifah Abdul Malik dan Al-Walid I. Ketegasan tanpa kompromi menjadikannya figur paling ditakuti, sekaligus penentu stabilitas kekhalifahan Umayyah di wilayah timur.
# 🌟 PERAN HISTORIS
- Menundukkan perlawanan Hijaz dan Irak
Ia memimpin pasukan Umayyah menaklukkan pertahanan Abdullah bin az-Zubair di Makkah (692 M), lalu diangkat menjadi Gubernur Irak untuk memadamkan pemberontakan Khawarij dan perlawanan Ibnul Asy''ats di Dayr al-Jamajim.
- Pendirian kota Wasit
Untuk mengendalikan persaingan suku antara faksi Kufah dan Bashrah, ia membangun kota baru bernama Wasit di antara kedua kota tersebut sebagai markas garnisun tentara Syam.
- Standardisasi tanda baca mushaf Al-Qur''an
Menyadari kesulitan bangsa non-Arab dalam membaca aksara gundul, ia memerintahkan para pakar bahasa seperti Nashr bin Ashim dan Yahya bin Ya''mar untuk menyempurnakan penulisan Al-Qur''an dengan titik pembeda huruf dan harakat tanda vokal.
- Mendukung ekspansi ke timur
Dari markasnya di Irak, ia mengorganisasi dan mendanai dua ekspedisi militer besar: penaklukan Sindh di bawah Muhammad bin Qasim dan penaklukan Transoxiana di bawah Qutaibah bin Muslim.',
      facts = 'Lahir : 41 H (661 M), Thaif
Jabatan : Gubernur Irak dan Wilayah Timur Umayyah
Masa Jabatan : 75–95 H (694–714 M)
Wafat : Ramadan 95 H (Juni 714 M), Wasit, Irak
Jasa Kunci : Titik & harakat mushaf Al-Qur''an, pembangunan kota Wasit',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'IQ', 'SY']::text[]
    WHERE name = 'Al-Hajjaj bin Yusuf ats-Tsaqafi';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Al-Hajjaj bin Yusuf ats-Tsaqafi',
      'Gubernur Irak & Ahli Administrasi',
      'assets/al_hajjaj.jpg',
      27,
      'Nama asli: Al-Hajjaj bin Yusuf bin al-Hakam ats-Tsaqafi
Julukan: Al-Mubir
Era/Latar: Thaif, Makkah, dan Wasit, 661–714 M',
      '# 📜 RINGKASAN BIOGRAFI
Al-Hajjaj bin Yusuf adalah administrator militer tangguh asal Thaif yang menjadi tangan kanan Khalifah Abdul Malik dan Al-Walid I. Ketegasan tanpa kompromi menjadikannya figur paling ditakuti, sekaligus penentu stabilitas kekhalifahan Umayyah di wilayah timur.
# 🌟 PERAN HISTORIS
- Menundukkan perlawanan Hijaz dan Irak
Ia memimpin pasukan Umayyah menaklukkan pertahanan Abdullah bin az-Zubair di Makkah (692 M), lalu diangkat menjadi Gubernur Irak untuk memadamkan pemberontakan Khawarij dan perlawanan Ibnul Asy''ats di Dayr al-Jamajim.
- Pendirian kota Wasit
Untuk mengendalikan persaingan suku antara faksi Kufah dan Bashrah, ia membangun kota baru bernama Wasit di antara kedua kota tersebut sebagai markas garnisun tentara Syam.
- Standardisasi tanda baca mushaf Al-Qur''an
Menyadari kesulitan bangsa non-Arab dalam membaca aksara gundul, ia memerintahkan para pakar bahasa seperti Nashr bin Ashim dan Yahya bin Ya''mar untuk menyempurnakan penulisan Al-Qur''an dengan titik pembeda huruf dan harakat tanda vokal.
- Mendukung ekspansi ke timur
Dari markasnya di Irak, ia mengorganisasi dan mendanai dua ekspedisi militer besar: penaklukan Sindh di bawah Muhammad bin Qasim dan penaklukan Transoxiana di bawah Qutaibah bin Muslim.',
      'Lahir : 41 H (661 M), Thaif
Jabatan : Gubernur Irak dan Wilayah Timur Umayyah
Masa Jabatan : 75–95 H (694–714 M)
Wafat : Ramadan 95 H (Juni 714 M), Wasit, Irak
Jasa Kunci : Titik & harakat mushaf Al-Qur''an, pembangunan kota Wasit',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'IQ', 'SY']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Al-Walid bin Abdul Malik') THEN
    UPDATE public.characters SET
      role = 'Khalifah Penaklukan & Arsitektur',
      img = COALESCE(NULLIF('', ''), img),
      t = 28,
      meta = 'Nama asli: Al-Walid bin Abdul Malik bin Marwan
Julukan: Al-Walid I
Era/Latar: Damaskus, 668–715 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Al-Walid I adalah khalifah keenam Daulah Umayyah yang memimpin kekhalifahan pada fase ekspansi teritorial paling luas dalam sejarah Islam. Pada masa pemerintahannya, kedaulatan Islam membentang dari Samudra Atlantik di barat hingga anak benua India dan perbatasan Tiongkok di timur.
# 🌟 PERAN HISTORIS
- Gelombang penaklukan tiga front
Ia memercayakan komando pasukan kepada panglima-panglima ulung: Thariq bin Ziyad dan Musa bin Nushair menaklukkan Semenanjung Iberia (Spanyol), Qutaibah bin Muslim menundukkan Asia Tengah, dan Muhammad bin Qasim menguasai lembah Indus.
- Mahakarya Masjid Agung Damaskus
Ia merancang dan membangun Masjid Agung Umayyah di Damaskus (selesai 715 M) dengan mosaik kaca berkilau emas karya seniman terbaik, menjadikannya standar rancang bangun masjid kekhalifahan.
- Renovasi Masjid Nabawi dan layanan sosial
Ia merenovasi besar-besaran Masjid Nabawi di Madinah dan menyertakan kamar-kamar istri Nabi ke dalam area masjid. Selain itu, ia mendirikan rumah sakit umum dan lembaga bantuan sosial pertama bagi penyandang disabilitas dan penderita lepra yang digaji dari kas negara.',
      facts = 'Lahir : ±50 H (668 M), Madinah
Jabatan : Khalifah Keenam Daulah Umayyah
Masa Kekhalifahan : 86–96 H (705–715 M)
Wafat : Jumadil Akhir 96 H (Februari 715 M), Damaskus
Peninggalan : Masjid Agung Umayyah Damaskus, perluasan wilayah Andalusia, Sindh, dan Transoxiana',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SY', 'ES', 'PK', 'UZ', 'SA']::text[]
    WHERE name = 'Al-Walid bin Abdul Malik';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Al-Walid bin Abdul Malik',
      'Khalifah Penaklukan & Arsitektur',
      '',
      28,
      'Nama asli: Al-Walid bin Abdul Malik bin Marwan
Julukan: Al-Walid I
Era/Latar: Damaskus, 668–715 M',
      '# 📜 RINGKASAN BIOGRAFI
Al-Walid I adalah khalifah keenam Daulah Umayyah yang memimpin kekhalifahan pada fase ekspansi teritorial paling luas dalam sejarah Islam. Pada masa pemerintahannya, kedaulatan Islam membentang dari Samudra Atlantik di barat hingga anak benua India dan perbatasan Tiongkok di timur.
# 🌟 PERAN HISTORIS
- Gelombang penaklukan tiga front
Ia memercayakan komando pasukan kepada panglima-panglima ulung: Thariq bin Ziyad dan Musa bin Nushair menaklukkan Semenanjung Iberia (Spanyol), Qutaibah bin Muslim menundukkan Asia Tengah, dan Muhammad bin Qasim menguasai lembah Indus.
- Mahakarya Masjid Agung Damaskus
Ia merancang dan membangun Masjid Agung Umayyah di Damaskus (selesai 715 M) dengan mosaik kaca berkilau emas karya seniman terbaik, menjadikannya standar rancang bangun masjid kekhalifahan.
- Renovasi Masjid Nabawi dan layanan sosial
Ia merenovasi besar-besaran Masjid Nabawi di Madinah dan menyertakan kamar-kamar istri Nabi ke dalam area masjid. Selain itu, ia mendirikan rumah sakit umum dan lembaga bantuan sosial pertama bagi penyandang disabilitas dan penderita lepra yang digaji dari kas negara.',
      'Lahir : ±50 H (668 M), Madinah
Jabatan : Khalifah Keenam Daulah Umayyah
Masa Kekhalifahan : 86–96 H (705–715 M)
Wafat : Jumadil Akhir 96 H (Februari 715 M), Damaskus
Peninggalan : Masjid Agung Umayyah Damaskus, perluasan wilayah Andalusia, Sindh, dan Transoxiana',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['SY', 'ES', 'PK', 'UZ', 'SA']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Thariq bin Ziyad') THEN
    UPDATE public.characters SET
      role = 'Penakluk Al-Andalus',
      img = COALESCE(NULLIF('assets/thariq.jpg', ''), img),
      t = 29,
      meta = 'Nama asli: Thariq bin Ziyad al-Laytsi
Julukan: Penakluk Al-Andalus, Fatih al-Andalus
Era/Latar: Maghrib dan Semenanjung Iberia, akhir abad ke-7 hingga 720 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Thariq bin Ziyad adalah panglima militer muslim berdarah Berber yang bertugas di bawah Gubernur Afrika Utara, Musa bin Nushair. Kepemimpinannya membuka gerbang kehadiran peradaban Islam di Eropa barat yang bertahan selama hampir delapan abad.
# 🌟 PERAN HISTORIS
- Menyeberangi selat menuju Eropa
Pada Rajab 92 H (April 711 M), Thariq memimpin sekitar 7.000 prajurit menyeberangi selat sempit antara Afrika Utara dan Eropa. Pasukannya mendarat di kaki bukit karang kokoh yang sejak saat itu diabadikan dengan namanya: Jabal Thariq (Gibraltar).
- Kemenangan di Guadalete
Di lembah Sungai Guadalete (Wadi Lakkah), pasukan Thariq yang mendapat bala bantuan berhadapan dengan pasukan raksasa Raja Visigoth, Roderic. Dengan formasi infanteri rapat dan manuver kavaleri cepat, pasukannya mematahkan garis depan musuh hingga Roderic tewas di medan laga.
- Membuka kota-kota utama Iberia
Tanpa menunggu lama, Thariq bergerak cepat ke utara membagi pasukannya untuk mengamankan Malaga, Granada, dan Cordoba, sebelum merebut ibu kota Visigoth di Toledo.',
      facts = 'Asal : Bangsa Berber (Afrika Utara)
Peristiwa Kunci : Pertempuran Guadalete (711 M), Penaklukan Toledo
Wilayah : Gibraltar, Spanyol, Maroko
Wafat : ±102 H (720 M), Damaskus',
      slides = '["assets/slide_thariq.jpg"]'::jsonb,
      gallery = '[{"url":"assets/slide_thariq.jpg","caption":"Pendaratan di tebing karang Jabal Thariq (Gibraltar) menghadap Selat Mediterania"}]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Panglima & Penakluk']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['MA', 'ES', 'GI']::text[]
    WHERE name = 'Thariq bin Ziyad';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Thariq bin Ziyad',
      'Penakluk Al-Andalus',
      'assets/thariq.jpg',
      29,
      'Nama asli: Thariq bin Ziyad al-Laytsi
Julukan: Penakluk Al-Andalus, Fatih al-Andalus
Era/Latar: Maghrib dan Semenanjung Iberia, akhir abad ke-7 hingga 720 M',
      '# 📜 RINGKASAN BIOGRAFI
Thariq bin Ziyad adalah panglima militer muslim berdarah Berber yang bertugas di bawah Gubernur Afrika Utara, Musa bin Nushair. Kepemimpinannya membuka gerbang kehadiran peradaban Islam di Eropa barat yang bertahan selama hampir delapan abad.
# 🌟 PERAN HISTORIS
- Menyeberangi selat menuju Eropa
Pada Rajab 92 H (April 711 M), Thariq memimpin sekitar 7.000 prajurit menyeberangi selat sempit antara Afrika Utara dan Eropa. Pasukannya mendarat di kaki bukit karang kokoh yang sejak saat itu diabadikan dengan namanya: Jabal Thariq (Gibraltar).
- Kemenangan di Guadalete
Di lembah Sungai Guadalete (Wadi Lakkah), pasukan Thariq yang mendapat bala bantuan berhadapan dengan pasukan raksasa Raja Visigoth, Roderic. Dengan formasi infanteri rapat dan manuver kavaleri cepat, pasukannya mematahkan garis depan musuh hingga Roderic tewas di medan laga.
- Membuka kota-kota utama Iberia
Tanpa menunggu lama, Thariq bergerak cepat ke utara membagi pasukannya untuk mengamankan Malaga, Granada, dan Cordoba, sebelum merebut ibu kota Visigoth di Toledo.',
      'Asal : Bangsa Berber (Afrika Utara)
Peristiwa Kunci : Pertempuran Guadalete (711 M), Penaklukan Toledo
Wilayah : Gibraltar, Spanyol, Maroko
Wafat : ±102 H (720 M), Damaskus',
      '["assets/slide_thariq.jpg"]'::jsonb,
      '[{"url":"assets/slide_thariq.jpg","caption":"Pendaratan di tebing karang Jabal Thariq (Gibraltar) menghadap Selat Mediterania"}]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Panglima & Penakluk']::text[],
      'Islam',
      'Pria',
      ARRAY['MA', 'ES', 'GI']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Musa bin Nushair') THEN
    UPDATE public.characters SET
      role = 'Gubernur Ifriqiya & Penakluk Iberia',
      img = COALESCE(NULLIF('', ''), img),
      t = 30,
      meta = 'Nama asli: Musa bin Nushair al-Lakhmi
Julukan: Abu Abdirrahman
Era/Latar: Qayrawan, Maroko, dan Spanyol, 640–716 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Musa bin Nushair adalah jenderal veteran dan administrator ulung yang ditunjuk Khalifah Abdul Malik untuk memimpin provinsi Ifriqiya (Afrika Utara). Ia berhasil menundukkan perlawanan suku-suku lokal dan mengintegrasikan masyarakat Berber ke dalam struktur militer dan dakwah Islam.
# 🌟 PERAN HISTORIS
- Pasifikasi Afrika Utara hingga Samudra Atlantik
Ia menuntaskan penguasaan Maghrib, menaklukkan Tangier, dan membangun pangkalan armada laut di Qayrawan (Kairouan) untuk mengimbangi dominasi maritim Bizantium.
- Mengirim ekspedisi Hispania
Setelah menerima laporan intelijen dari ekspedisi pengintaian Tarif bin Malik, Musa menugaskan Thariq bin Ziyad memimpin penyeberangan ke Hispania pada 711 M.
- Ekspedisi 18.000 pasukan ke Semenanjung Iberia
Pada 712 M, Musa menyusul ke Iberia memimpin 18.000 prajurit gabungan Arab dan Berber. Ia menaklukkan kota-kota berbenteng tebal seperti Sevilla, Carmona, dan Merida, lalu bergabung dengan Thariq di Toledo untuk membebaskan Saragossa (Zaragoza) hingga mendekati kaki Pegunungan Pyrenees.',
      facts = 'Lahir : 19 H (640 M), Syam
Jabatan : Gubernur Ifriqiya dan Wilayah Barat Umayyah
Wafat : 97 H (716 M), Hijaz (dalam perjalanan haji)
Peristiwa Kunci : Penaklukan Maghrib Barat, Pengepungan Merida (712 M)',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Panglima & Penakluk', 'Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['TN', 'MA', 'ES', 'SY']::text[]
    WHERE name = 'Musa bin Nushair';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Musa bin Nushair',
      'Gubernur Ifriqiya & Penakluk Iberia',
      '',
      30,
      'Nama asli: Musa bin Nushair al-Lakhmi
Julukan: Abu Abdirrahman
Era/Latar: Qayrawan, Maroko, dan Spanyol, 640–716 M',
      '# 📜 RINGKASAN BIOGRAFI
Musa bin Nushair adalah jenderal veteran dan administrator ulung yang ditunjuk Khalifah Abdul Malik untuk memimpin provinsi Ifriqiya (Afrika Utara). Ia berhasil menundukkan perlawanan suku-suku lokal dan mengintegrasikan masyarakat Berber ke dalam struktur militer dan dakwah Islam.
# 🌟 PERAN HISTORIS
- Pasifikasi Afrika Utara hingga Samudra Atlantik
Ia menuntaskan penguasaan Maghrib, menaklukkan Tangier, dan membangun pangkalan armada laut di Qayrawan (Kairouan) untuk mengimbangi dominasi maritim Bizantium.
- Mengirim ekspedisi Hispania
Setelah menerima laporan intelijen dari ekspedisi pengintaian Tarif bin Malik, Musa menugaskan Thariq bin Ziyad memimpin penyeberangan ke Hispania pada 711 M.
- Ekspedisi 18.000 pasukan ke Semenanjung Iberia
Pada 712 M, Musa menyusul ke Iberia memimpin 18.000 prajurit gabungan Arab dan Berber. Ia menaklukkan kota-kota berbenteng tebal seperti Sevilla, Carmona, dan Merida, lalu bergabung dengan Thariq di Toledo untuk membebaskan Saragossa (Zaragoza) hingga mendekati kaki Pegunungan Pyrenees.',
      'Lahir : 19 H (640 M), Syam
Jabatan : Gubernur Ifriqiya dan Wilayah Barat Umayyah
Wafat : 97 H (716 M), Hijaz (dalam perjalanan haji)
Peristiwa Kunci : Penaklukan Maghrib Barat, Pengepungan Merida (712 M)',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Panglima & Penakluk', 'Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['TN', 'MA', 'ES', 'SY']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Muhammad bin Qasim ats-Tsaqafi') THEN
    UPDATE public.characters SET
      role = 'Penakluk Lembah Indus (Sindh)',
      img = COALESCE(NULLIF('assets/muhammad_bin_qasim.jpg', ''), img),
      t = 31,
      meta = 'Nama asli: Muhammad bin Qasim bin Muhammad ats-Tsaqafi
Era/Latar: Basrah, Makran, dan Sindh, 695–715 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Muhammad bin Qasim adalah jenderal muda asal Thaif yang dipercaya memimpin ekspedisi ke anak benua India pada usia 17 tahun. Kepiawaiannya mengombinasikan taktik artileri manjanik dengan diplomasi toleran menjadikannya figur pembuka dakwah Islam di Asia Selatan.
# 🌟 PERAN HISTORIS
- Ekspedisi membalas pembajakan kapal di Debal
Ekspedisi diluncurkan setelah perompak laut di bawah perlindungan Raja Dahir dari Sindh menyerang kapal-kapal muslim yang membawa janda dan anak-anak yatim pedagang dari Sailan (Sri Lanka). Menggunakan mesin pelontar batu raksasa bernama ''Al-Arus'', pasukannya merebut pelabuhan Debal pada 711 M.
- Mengalahkan Raja Dahir di Sungai Indus
Ia memimpin pasukannya menyeberangi Sungai Indus dan mengalahkan tentara bergajah Raja Dahir dalam pertempuran terbuka di Rawar (712 M), mengamankan kota-kota strategis Brahmanabad dan Alor.
- Kebijakan toleransi beragama dan administrasi Sindh
Di Multan dan Brahmanabad, ia menetapkan status Dzimmi bagi masyarakat Hindu dan Buddha, menjamin hak perlindungan kuil, serta merekrut bangsawan lokal (Brahmana) ke dalam dinas perpajakan dan administrasi daerah.',
      facts = 'Lahir : ±75 H (695 M), Thaif
Wilayah Kampanye : Sindh, Punjab, Balochistan (Pakistan modern)
Jabatan : Panglima Ekspedisi Sindh
Wafat : 96 H (715 M), Wasit, Irak
Peristiwa Kunci : Pengepungan Debal (711 M), Penaklukan Multan (713 M)',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Panglima & Penakluk']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['IQ', 'PK', 'IN']::text[]
    WHERE name = 'Muhammad bin Qasim ats-Tsaqafi';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Muhammad bin Qasim ats-Tsaqafi',
      'Penakluk Lembah Indus (Sindh)',
      'assets/muhammad_bin_qasim.jpg',
      31,
      'Nama asli: Muhammad bin Qasim bin Muhammad ats-Tsaqafi
Era/Latar: Basrah, Makran, dan Sindh, 695–715 M',
      '# 📜 RINGKASAN BIOGRAFI
Muhammad bin Qasim adalah jenderal muda asal Thaif yang dipercaya memimpin ekspedisi ke anak benua India pada usia 17 tahun. Kepiawaiannya mengombinasikan taktik artileri manjanik dengan diplomasi toleran menjadikannya figur pembuka dakwah Islam di Asia Selatan.
# 🌟 PERAN HISTORIS
- Ekspedisi membalas pembajakan kapal di Debal
Ekspedisi diluncurkan setelah perompak laut di bawah perlindungan Raja Dahir dari Sindh menyerang kapal-kapal muslim yang membawa janda dan anak-anak yatim pedagang dari Sailan (Sri Lanka). Menggunakan mesin pelontar batu raksasa bernama ''Al-Arus'', pasukannya merebut pelabuhan Debal pada 711 M.
- Mengalahkan Raja Dahir di Sungai Indus
Ia memimpin pasukannya menyeberangi Sungai Indus dan mengalahkan tentara bergajah Raja Dahir dalam pertempuran terbuka di Rawar (712 M), mengamankan kota-kota strategis Brahmanabad dan Alor.
- Kebijakan toleransi beragama dan administrasi Sindh
Di Multan dan Brahmanabad, ia menetapkan status Dzimmi bagi masyarakat Hindu dan Buddha, menjamin hak perlindungan kuil, serta merekrut bangsawan lokal (Brahmana) ke dalam dinas perpajakan dan administrasi daerah.',
      'Lahir : ±75 H (695 M), Thaif
Wilayah Kampanye : Sindh, Punjab, Balochistan (Pakistan modern)
Jabatan : Panglima Ekspedisi Sindh
Wafat : 96 H (715 M), Wasit, Irak
Peristiwa Kunci : Pengepungan Debal (711 M), Penaklukan Multan (713 M)',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Panglima & Penakluk']::text[],
      'Islam',
      'Pria',
      ARRAY['IQ', 'PK', 'IN']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Qutaibah bin Muslim al-Bahili') THEN
    UPDATE public.characters SET
      role = 'Penakluk Transoxiana (Asia Tengah)',
      img = COALESCE(NULLIF('assets/qutaibah.jpg', ''), img),
      t = 32,
      meta = 'Nama asli: Qutaibah bin Muslim bin Amr al-Bahili
Era/Latar: Khurasan, Merv, dan Transoxiana, 669–715 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Qutaibah bin Muslim adalah Gubernur Khurasan di bawah kepemimpinan Khalifah Al-Walid I. Selama satu dekade kampanye tanpa henti, ia memimpin pasukan muslim menyeberangi Sungai Oxus (Amu Darya) dan mengintegrasikan jantung peradaban Asia Tengah ke dalam dunia Islam.
# 🌟 PERAN HISTORIS
- Kampanye tahunan menembus Transoxiana (Ma Wara'' an-Nahr)
Mulai tahun 705 M, Qutaibah melancarkan operasi militer terencana setiap musim semi dari basisnya di Merv, merebut kepangeranan-kepangeranan Sogdiana, Tokharistan, dan Khwarizm.
- Penaklukan Bukhara dan Samarkand
Ia menundukkan kota Bukhara setelah pengepungan bertahap pada 709 M dan merebut benteng pertahanan Samarkand pada 712 M. Di kota-kota ini ia membangun masjid agung pertama dan mendirikan pusat pengajaran agama bagi penduduk lokal.
- Menjangkau Lembah Fergana dan perbatasan Dinasti Tang
Pasukannya terus merangsek ke timur menembus Lembah Fergana, merebut Shash (Tashkent), hingga mengirim utusan diplomatik ke Kashgar di hadapan kaisar Dinasti Tang Tiongkok pada 715 M.',
      facts = 'Lahir : 49 H (669 M), Bashrah
Jabatan : Gubernur Khurasan & Komandan Transoxiana
Masa Kampanye : 86–96 H (705–715 M)
Wafat : 96 H (715 M), Lembah Fergana
Kota Ditaklukkan : Bukhara, Samarkand, Khiva, Tashkent',
      slides = '["assets/slide_qutaibah.jpg"]'::jsonb,
      gallery = '[{"url":"assets/slide_qutaibah.jpg","caption":"Ekspedisi pasukan berkuda Qutaibah bin Muslim melintasi oase Samarkand dan Transoxiana"}]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Panglima & Penakluk']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['IQ', 'TM', 'UZ', 'KZ', 'KG']::text[]
    WHERE name = 'Qutaibah bin Muslim al-Bahili';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Qutaibah bin Muslim al-Bahili',
      'Penakluk Transoxiana (Asia Tengah)',
      'assets/qutaibah.jpg',
      32,
      'Nama asli: Qutaibah bin Muslim bin Amr al-Bahili
Era/Latar: Khurasan, Merv, dan Transoxiana, 669–715 M',
      '# 📜 RINGKASAN BIOGRAFI
Qutaibah bin Muslim adalah Gubernur Khurasan di bawah kepemimpinan Khalifah Al-Walid I. Selama satu dekade kampanye tanpa henti, ia memimpin pasukan muslim menyeberangi Sungai Oxus (Amu Darya) dan mengintegrasikan jantung peradaban Asia Tengah ke dalam dunia Islam.
# 🌟 PERAN HISTORIS
- Kampanye tahunan menembus Transoxiana (Ma Wara'' an-Nahr)
Mulai tahun 705 M, Qutaibah melancarkan operasi militer terencana setiap musim semi dari basisnya di Merv, merebut kepangeranan-kepangeranan Sogdiana, Tokharistan, dan Khwarizm.
- Penaklukan Bukhara dan Samarkand
Ia menundukkan kota Bukhara setelah pengepungan bertahap pada 709 M dan merebut benteng pertahanan Samarkand pada 712 M. Di kota-kota ini ia membangun masjid agung pertama dan mendirikan pusat pengajaran agama bagi penduduk lokal.
- Menjangkau Lembah Fergana dan perbatasan Dinasti Tang
Pasukannya terus merangsek ke timur menembus Lembah Fergana, merebut Shash (Tashkent), hingga mengirim utusan diplomatik ke Kashgar di hadapan kaisar Dinasti Tang Tiongkok pada 715 M.',
      'Lahir : 49 H (669 M), Bashrah
Jabatan : Gubernur Khurasan & Komandan Transoxiana
Masa Kampanye : 86–96 H (705–715 M)
Wafat : 96 H (715 M), Lembah Fergana
Kota Ditaklukkan : Bukhara, Samarkand, Khiva, Tashkent',
      '["assets/slide_qutaibah.jpg"]'::jsonb,
      '[{"url":"assets/slide_qutaibah.jpg","caption":"Ekspedisi pasukan berkuda Qutaibah bin Muslim melintasi oase Samarkand dan Transoxiana"}]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Panglima & Penakluk']::text[],
      'Islam',
      'Pria',
      ARRAY['IQ', 'TM', 'UZ', 'KZ', 'KG']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Sulaiman bin Abdul Malik') THEN
    UPDATE public.characters SET
      role = 'Pemrakarsa Ekspedisi Konstantinopel',
      img = COALESCE(NULLIF('', ''), img),
      t = 33,
      meta = 'Nama asli: Sulaiman bin Abdul Malik bin Marwan
Era/Latar: Ramlah dan Damaskus, 674–717 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Sulaiman bin Abdul Malik adalah khalifah ketujuh Daulah Umayyah yang menggantikan saudaranya Al-Walid I. Sebelum naik takhta, ia menjabat Gubernur Palestina selama bertahun-tahun dan membangun kota Ramlah sebagai pusat pemerintahan baru provinsi tersebut.
# 🌟 PERAN HISTORIS
- Pengepungan akbar Konstantinopel (717 M)
Ia mengerahkan armada laut berkekuatan ratusan kapal perang dan pasukan darat gabungan di bawah komando saudaranya, Maslamah bin Abdul Malik, untuk mengepung benteng pertahanan ibu kota Kekaisaran Bizantium di Konstantinopel.
- Menetap di Dabiq demi memantau front utara
Sulaiman meninggalkan Damaskus dan mendirikan pos komando di Dabiq, dekat perbatasan Anatolia, bersumpah tidak akan kembali ke istananya sebelum pasukannya berhasil menembus benteng Bizantium atau ajal menjemputnya.
- Wasiat bersejarah penunjukan Umar II
Saat jatuh sakit keras di perkemahan militer Dabiq, ia mendengarkan saran ulama penasihatnya, Raja'' bin Haywah, untuk tidak mewariskan takhta kepada anak-anaknya yang masih belia, melainkan memilih sepupunya yang zuhud, Umar bin Abdul Aziz.',
      facts = 'Lahir : ±54 H (674 M), Madinah
Jabatan : Khalifah Ketujuh Daulah Umayyah
Masa Kekhalifahan : 96–99 H (715–717 M)
Wafat : Safar 99 H (September 717 M), Dabiq, Suriah Utara
Peninggalan : Pendirian kota Ramlah, Wasiat kepemimpinan kepada Umar bin Abdul Aziz',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SY', 'TR', 'PS']::text[]
    WHERE name = 'Sulaiman bin Abdul Malik';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Sulaiman bin Abdul Malik',
      'Pemrakarsa Ekspedisi Konstantinopel',
      '',
      33,
      'Nama asli: Sulaiman bin Abdul Malik bin Marwan
Era/Latar: Ramlah dan Damaskus, 674–717 M',
      '# 📜 RINGKASAN BIOGRAFI
Sulaiman bin Abdul Malik adalah khalifah ketujuh Daulah Umayyah yang menggantikan saudaranya Al-Walid I. Sebelum naik takhta, ia menjabat Gubernur Palestina selama bertahun-tahun dan membangun kota Ramlah sebagai pusat pemerintahan baru provinsi tersebut.
# 🌟 PERAN HISTORIS
- Pengepungan akbar Konstantinopel (717 M)
Ia mengerahkan armada laut berkekuatan ratusan kapal perang dan pasukan darat gabungan di bawah komando saudaranya, Maslamah bin Abdul Malik, untuk mengepung benteng pertahanan ibu kota Kekaisaran Bizantium di Konstantinopel.
- Menetap di Dabiq demi memantau front utara
Sulaiman meninggalkan Damaskus dan mendirikan pos komando di Dabiq, dekat perbatasan Anatolia, bersumpah tidak akan kembali ke istananya sebelum pasukannya berhasil menembus benteng Bizantium atau ajal menjemputnya.
- Wasiat bersejarah penunjukan Umar II
Saat jatuh sakit keras di perkemahan militer Dabiq, ia mendengarkan saran ulama penasihatnya, Raja'' bin Haywah, untuk tidak mewariskan takhta kepada anak-anaknya yang masih belia, melainkan memilih sepupunya yang zuhud, Umar bin Abdul Aziz.',
      'Lahir : ±54 H (674 M), Madinah
Jabatan : Khalifah Ketujuh Daulah Umayyah
Masa Kekhalifahan : 96–99 H (715–717 M)
Wafat : Safar 99 H (September 717 M), Dabiq, Suriah Utara
Peninggalan : Pendirian kota Ramlah, Wasiat kepemimpinan kepada Umar bin Abdul Aziz',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['SY', 'TR', 'PS']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Maslamah bin Abdul Malik') THEN
    UPDATE public.characters SET
      role = 'Panglima Pengepungan Konstantinopel',
      img = COALESCE(NULLIF('', ''), img),
      t = 34,
      meta = 'Nama asli: Maslamah bin Abdul Malik bin Marwan
Julukan: Jaradah al-Safra (Belalang Kuning)
Era/Latar: Damaskus, Anatolia, dan Konstantinopel, akhir abad ke-7 hingga 738 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Maslamah bin Abdul Malik adalah pangeran dan komandan tertinggi militer Umayyah yang memimpin operasi militer di front utara melawan Bizantium dan Kaukasus selama empat dekade. Keberanian dan ketahanan fisiknya di medan tempur menjadikannya pilar utama pertahanan kekhalifahan.
# 🌟 PERAN HISTORIS
- Pengepungan Konstantinopel Kedua (717–718 M)
Ia memimpin lebih dari 100 ribu tentara darat dan armada laut mengepung benteng Theodosius di Konstantinopel selama lebih dari setahun. Menghadapi semburan api Yunani (Greek fire) di laut, musim dingin beku yang ekstrem, serta serangan bangsa Bulgar dari darat, ia mempertahankan disiplin pasukan sampai perintah penarikan mundur dikeluarkan oleh Khalifah Umar bin Abdul Aziz.
- Front Kaukasus dan perang melawan bangsa Khazar
Sebagai Gubernur Armenia dan Azerbaijan, ia memimpin kampanye defensif dan ofensif melintasi Pegunungan Kaukasus, mengamankan celah Derbent (Bab al-Abwab) dari serbuan nomaden bangsa Khazar.
- Menumpas pemberontakan Yazid bin al-Muhallab
Di Irak pada tahun 720 M, Maslamah memimpin pasukan Syam memadamkan pemberontakan besar Yazid bin al-Muhallab di dekat Kufah.',
      facts = 'Lahir : ±66 H (685 M), Damaskus
Jabatan : Panglima Tertinggi Front Bizantium & Gubernur Irak/Kaukasus
Wafat : 121 H (738 M), Syam
Peristiwa Kunci : Pengepungan Konstantinopel (717–718 M), Perang Derbent melawan Khazar',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Panglima & Penakluk']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SY', 'TR', 'GE', 'AZ']::text[]
    WHERE name = 'Maslamah bin Abdul Malik';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Maslamah bin Abdul Malik',
      'Panglima Pengepungan Konstantinopel',
      '',
      34,
      'Nama asli: Maslamah bin Abdul Malik bin Marwan
Julukan: Jaradah al-Safra (Belalang Kuning)
Era/Latar: Damaskus, Anatolia, dan Konstantinopel, akhir abad ke-7 hingga 738 M',
      '# 📜 RINGKASAN BIOGRAFI
Maslamah bin Abdul Malik adalah pangeran dan komandan tertinggi militer Umayyah yang memimpin operasi militer di front utara melawan Bizantium dan Kaukasus selama empat dekade. Keberanian dan ketahanan fisiknya di medan tempur menjadikannya pilar utama pertahanan kekhalifahan.
# 🌟 PERAN HISTORIS
- Pengepungan Konstantinopel Kedua (717–718 M)
Ia memimpin lebih dari 100 ribu tentara darat dan armada laut mengepung benteng Theodosius di Konstantinopel selama lebih dari setahun. Menghadapi semburan api Yunani (Greek fire) di laut, musim dingin beku yang ekstrem, serta serangan bangsa Bulgar dari darat, ia mempertahankan disiplin pasukan sampai perintah penarikan mundur dikeluarkan oleh Khalifah Umar bin Abdul Aziz.
- Front Kaukasus dan perang melawan bangsa Khazar
Sebagai Gubernur Armenia dan Azerbaijan, ia memimpin kampanye defensif dan ofensif melintasi Pegunungan Kaukasus, mengamankan celah Derbent (Bab al-Abwab) dari serbuan nomaden bangsa Khazar.
- Menumpas pemberontakan Yazid bin al-Muhallab
Di Irak pada tahun 720 M, Maslamah memimpin pasukan Syam memadamkan pemberontakan besar Yazid bin al-Muhallab di dekat Kufah.',
      'Lahir : ±66 H (685 M), Damaskus
Jabatan : Panglima Tertinggi Front Bizantium & Gubernur Irak/Kaukasus
Wafat : 121 H (738 M), Syam
Peristiwa Kunci : Pengepungan Konstantinopel (717–718 M), Perang Derbent melawan Khazar',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Panglima & Penakluk']::text[],
      'Islam',
      'Pria',
      ARRAY['SY', 'TR', 'GE', 'AZ']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Umar bin Abdul Aziz') THEN
    UPDATE public.characters SET
      role = 'Khalifah Adil & Mujaddid',
      img = COALESCE(NULLIF('assets/umar_bin_abdul_aziz.jpg', ''), img),
      t = 35,
      meta = 'Nama asli: Umar bin Abdul Aziz bin Marwan
Julukan: Khulafaur Rasyidin Kelima, Umar II
Era/Latar: Madinah, Kairo, dan Damaskus, 682–720 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Umar bin Abdul Aziz adalah khalifah kedelapan Daulah Umayyah yang garis keturunan ibunya bersambung langsung kepada Umar bin Khattab. Masa kepemimpinannya yang singkat dikenang sebagai era pemulihan keadilan sosial, transparansi baitul mal, dan keteladanan moral kepemimpinan.
# 🌟 PERAN HISTORIS
- Reformasi agraria dan pengembalian harta ke kas negara
Begitu dibaiat pada 99 H (717 M), ia mengembalikan perkebunan dan tanah hadiah kekhalifahan milik keluarganya ke Baitul Mal, serta mencabut hak-hak istimewa para bangsawan dinasti Umayyah.
- Menghapus jizyah bagi mualaf (Mawali)
Ia membatalkan kewajiban pembayaran pajak kepala (jizyah) bagi penduduk non-Arab yang telah memeluk Islam di Mesir, Irak, Khurasan, dan Sind. Langkah ini memicu gelombang konversi massal ke dalam Islam dan menghapus diskriminasi etnis.
- Menghentikan ekspedisi perang yang menguras rakyat
Ia menarik mundur pasukan Maslamah dari pengepungan Konstantinopel yang memakan banyak korban jiwa, mengalihkan fokus negara dari ekspansi militer ke kesejahteraan sosial dan pembangunan dalam negeri.
- Kodifikasi resmi hadis pertama
Ia memerintahkan Gubernur Madinah Abu Bakar bin Hazm dan ulama besar Ibnu Syihab az-Zuhri untuk mencatat dan mengumpulkan hadis-hadis Nabi ﷺ secara resmi agar tidak lenyap bersama wafatnya para penghafal hadis.',
      facts = 'Lahir : 61 H (682 M), Madinah
Jabatan : Khalifah Kedelapan Daulah Umayyah
Masa Kekhalifahan : 99–101 H (717–720 M)
Wafat : Rajab 101 H (Februari 720 M), Dair Sim''an, dekat Ma''arrat an-Nu''man, Suriah
Peninggalan : Kodifikasi hadis resmi pertama, kesetaraan hak kaum Mawali',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SA', 'SY', 'EG']::text[]
    WHERE name = 'Umar bin Abdul Aziz';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Umar bin Abdul Aziz',
      'Khalifah Adil & Mujaddid',
      'assets/umar_bin_abdul_aziz.jpg',
      35,
      'Nama asli: Umar bin Abdul Aziz bin Marwan
Julukan: Khulafaur Rasyidin Kelima, Umar II
Era/Latar: Madinah, Kairo, dan Damaskus, 682–720 M',
      '# 📜 RINGKASAN BIOGRAFI
Umar bin Abdul Aziz adalah khalifah kedelapan Daulah Umayyah yang garis keturunan ibunya bersambung langsung kepada Umar bin Khattab. Masa kepemimpinannya yang singkat dikenang sebagai era pemulihan keadilan sosial, transparansi baitul mal, dan keteladanan moral kepemimpinan.
# 🌟 PERAN HISTORIS
- Reformasi agraria dan pengembalian harta ke kas negara
Begitu dibaiat pada 99 H (717 M), ia mengembalikan perkebunan dan tanah hadiah kekhalifahan milik keluarganya ke Baitul Mal, serta mencabut hak-hak istimewa para bangsawan dinasti Umayyah.
- Menghapus jizyah bagi mualaf (Mawali)
Ia membatalkan kewajiban pembayaran pajak kepala (jizyah) bagi penduduk non-Arab yang telah memeluk Islam di Mesir, Irak, Khurasan, dan Sind. Langkah ini memicu gelombang konversi massal ke dalam Islam dan menghapus diskriminasi etnis.
- Menghentikan ekspedisi perang yang menguras rakyat
Ia menarik mundur pasukan Maslamah dari pengepungan Konstantinopel yang memakan banyak korban jiwa, mengalihkan fokus negara dari ekspansi militer ke kesejahteraan sosial dan pembangunan dalam negeri.
- Kodifikasi resmi hadis pertama
Ia memerintahkan Gubernur Madinah Abu Bakar bin Hazm dan ulama besar Ibnu Syihab az-Zuhri untuk mencatat dan mengumpulkan hadis-hadis Nabi ﷺ secara resmi agar tidak lenyap bersama wafatnya para penghafal hadis.',
      'Lahir : 61 H (682 M), Madinah
Jabatan : Khalifah Kedelapan Daulah Umayyah
Masa Kekhalifahan : 99–101 H (717–720 M)
Wafat : Rajab 101 H (Februari 720 M), Dair Sim''an, dekat Ma''arrat an-Nu''man, Suriah
Peninggalan : Kodifikasi hadis resmi pertama, kesetaraan hak kaum Mawali',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['SA', 'SY', 'EG']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Hisyam bin Abdul Malik') THEN
    UPDATE public.characters SET
      role = 'Reformator Fiskal & Birokrasi',
      img = COALESCE(NULLIF('', ''), img),
      t = 36,
      meta = 'Nama asli: Hisyam bin Abdul Malik bin Marwan
Julukan: Abu al-Walid
Era/Latar: Damaskus dan Rusafah, 691–743 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Hisyam bin Abdul Malik adalah putra keempat Abdul Malik yang menduduki takhta kekhalifahan. Memerintah selama hampir dua puluh tahun, ia dikenal hemat, disiplin mengelola kas negara, dan berhasil menstabilkan kekhalifahan setelah gejolak suksesi pendahulunya.
# 🌟 PERAN HISTORIS
- Disiplin kas negara dan reformasi irigasi
Ia menertibkan kembali pencatatan pajak dan audit keuangan daerah. Pendapatan negara digunakan untuk membangun saluran irigasi pertanian di lembah Eufrat serta kompleks istana gurun Rusafah (Sergiopolis) yang ia jadikan pusat kediamannya.
- Menghadapi pergolakan di front barat dan timur
Di bawah kepemimpinannya, kekhalifahan menghadapi serangkaian ujian berat: Pertempuran Tours (732 M) di Prancis tengah, Pemberontakan Berber di Afrika Utara (739–743 M), serta bentrokan sengit pasukan Arab melawan persekutuan Turgesh di Transoxiana.
- Merestrukturisasi birokrasi dan penerjemahan naskah
Ia mendukung penerjemahan teks-teks sejarah dan administrasi Sasaniyah ke dalam bahasa Arab, memperkaya perpustakaan kekhalifahan dan memperkuat tata kelola birokrasi profesional.',
      facts = 'Lahir : 72 H (691 M), Damaskus
Jabatan : Khalifah Kesepuluh Daulah Umayyah
Masa Kekhalifahan : 105–125 H (724–743 M)
Wafat : Rabiul Akhir 125 H (Februari 743 M), Rusafah, Suriah
Peninggalan : Kompleks Rusafah, stabilitas fiskal dua dekade',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SY', 'IQ', 'FR', 'ES']::text[]
    WHERE name = 'Hisyam bin Abdul Malik';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Hisyam bin Abdul Malik',
      'Reformator Fiskal & Birokrasi',
      '',
      36,
      'Nama asli: Hisyam bin Abdul Malik bin Marwan
Julukan: Abu al-Walid
Era/Latar: Damaskus dan Rusafah, 691–743 M',
      '# 📜 RINGKASAN BIOGRAFI
Hisyam bin Abdul Malik adalah putra keempat Abdul Malik yang menduduki takhta kekhalifahan. Memerintah selama hampir dua puluh tahun, ia dikenal hemat, disiplin mengelola kas negara, dan berhasil menstabilkan kekhalifahan setelah gejolak suksesi pendahulunya.
# 🌟 PERAN HISTORIS
- Disiplin kas negara dan reformasi irigasi
Ia menertibkan kembali pencatatan pajak dan audit keuangan daerah. Pendapatan negara digunakan untuk membangun saluran irigasi pertanian di lembah Eufrat serta kompleks istana gurun Rusafah (Sergiopolis) yang ia jadikan pusat kediamannya.
- Menghadapi pergolakan di front barat dan timur
Di bawah kepemimpinannya, kekhalifahan menghadapi serangkaian ujian berat: Pertempuran Tours (732 M) di Prancis tengah, Pemberontakan Berber di Afrika Utara (739–743 M), serta bentrokan sengit pasukan Arab melawan persekutuan Turgesh di Transoxiana.
- Merestrukturisasi birokrasi dan penerjemahan naskah
Ia mendukung penerjemahan teks-teks sejarah dan administrasi Sasaniyah ke dalam bahasa Arab, memperkaya perpustakaan kekhalifahan dan memperkuat tata kelola birokrasi profesional.',
      'Lahir : 72 H (691 M), Damaskus
Jabatan : Khalifah Kesepuluh Daulah Umayyah
Masa Kekhalifahan : 105–125 H (724–743 M)
Wafat : Rabiul Akhir 125 H (Februari 743 M), Rusafah, Suriah
Peninggalan : Kompleks Rusafah, stabilitas fiskal dua dekade',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['SY', 'IQ', 'FR', 'ES']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abdurrahman al-Ghafiqi') THEN
    UPDATE public.characters SET
      role = 'Panglima Pertempuran Tours',
      img = COALESCE(NULLIF('assets/al_ghafiqi.jpg', ''), img),
      t = 37,
      meta = 'Nama asli: Abdurrahman bin Abdullah al-Ghafiqi
Julukan: Syahid Balath asy-Syuhada
Era/Latar: Al-Andalus dan Prancis, awal abad ke-8 hingga 732 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Abdurrahman al-Ghafiqi adalah administrator dan jenderal Yaman yang dua kali dipercaya menjabat Gubernur Al-Andalus. Sosoknya dihormati oleh faksi suku Arab maupun Berber karena keadilan dan kemampuannya menyatukan pasukan di Semenanjung Iberia.
# 🌟 PERAN HISTORIS
- Menyatukan faksi-faksi Al-Andalus
Ketika tiba di Cordoba pada 112 H (730 M), ia menumpas pemberontakan Utsman bin Abi Nis''ah (Munuza) di Katalonia dan menyatukan seluruh elemen militer Andalusia di bawah satu panji pertahanan.
- Ekspedisi melintasi Pegunungan Pyrenees
Pada musim semi 732 M, ia memimpin ekspedisi terbesar muslim menyeberangi Pyrenees ke wilayah Galia (Prancis). Pasukannya merebut Bordeaux dan mengalahkan pasukan Adipati Odo dari Aquitaine di tepi Sungai Garonne.
- Pertempuran Tours / Balath asy-Syuhada (732 M)
Pasukannya bergerak ke utara menuju biara Saint-Martin di Tours sebelum dihadang oleh barisan infanteri berat Frank di bawah pimpinan Charles Martel. Dalam pertempuran sengit yang berlangsung beberapa hari di antara Poitiers dan Tours pada Oktober 732 M (Ramadan 114 H), Al-Ghafiqi gugur saat memimpin serangan di garis depan.',
      facts = 'Asal : Bani Ghafiq (Kabilah Yaman)
Jabatan : Gubernur Al-Andalus
Wafat : Ramadan 114 H (Oktober 732 M), antara Tours dan Poitiers, Prancis
Peristiwa Kunci : Pertempuran Sungai Garonne, Pertempuran Balath asy-Syuhada',
      slides = '["assets/slide_tours.jpg"]'::jsonb,
      gallery = '[{"url":"assets/slide_tours.jpg","caption":"Pertempuran Balath asy-Syuhada (Tours, 732 M) di dataran Prancis tengah"}]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Panglima & Penakluk']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['ES', 'FR']::text[]
    WHERE name = 'Abdurrahman al-Ghafiqi';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abdurrahman al-Ghafiqi',
      'Panglima Pertempuran Tours',
      'assets/al_ghafiqi.jpg',
      37,
      'Nama asli: Abdurrahman bin Abdullah al-Ghafiqi
Julukan: Syahid Balath asy-Syuhada
Era/Latar: Al-Andalus dan Prancis, awal abad ke-8 hingga 732 M',
      '# 📜 RINGKASAN BIOGRAFI
Abdurrahman al-Ghafiqi adalah administrator dan jenderal Yaman yang dua kali dipercaya menjabat Gubernur Al-Andalus. Sosoknya dihormati oleh faksi suku Arab maupun Berber karena keadilan dan kemampuannya menyatukan pasukan di Semenanjung Iberia.
# 🌟 PERAN HISTORIS
- Menyatukan faksi-faksi Al-Andalus
Ketika tiba di Cordoba pada 112 H (730 M), ia menumpas pemberontakan Utsman bin Abi Nis''ah (Munuza) di Katalonia dan menyatukan seluruh elemen militer Andalusia di bawah satu panji pertahanan.
- Ekspedisi melintasi Pegunungan Pyrenees
Pada musim semi 732 M, ia memimpin ekspedisi terbesar muslim menyeberangi Pyrenees ke wilayah Galia (Prancis). Pasukannya merebut Bordeaux dan mengalahkan pasukan Adipati Odo dari Aquitaine di tepi Sungai Garonne.
- Pertempuran Tours / Balath asy-Syuhada (732 M)
Pasukannya bergerak ke utara menuju biara Saint-Martin di Tours sebelum dihadang oleh barisan infanteri berat Frank di bawah pimpinan Charles Martel. Dalam pertempuran sengit yang berlangsung beberapa hari di antara Poitiers dan Tours pada Oktober 732 M (Ramadan 114 H), Al-Ghafiqi gugur saat memimpin serangan di garis depan.',
      'Asal : Bani Ghafiq (Kabilah Yaman)
Jabatan : Gubernur Al-Andalus
Wafat : Ramadan 114 H (Oktober 732 M), antara Tours dan Poitiers, Prancis
Peristiwa Kunci : Pertempuran Sungai Garonne, Pertempuran Balath asy-Syuhada',
      '["assets/slide_tours.jpg"]'::jsonb,
      '[{"url":"assets/slide_tours.jpg","caption":"Pertempuran Balath asy-Syuhada (Tours, 732 M) di dataran Prancis tengah"}]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Panglima & Penakluk']::text[],
      'Islam',
      'Pria',
      ARRAY['ES', 'FR']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Marwan bin Muhammad') THEN
    UPDATE public.characters SET
      role = 'Khalifah Umayyah Terakhir di Damaskus',
      img = COALESCE(NULLIF('', ''), img),
      t = 38,
      meta = 'Nama asli: Marwan bin Muhammad bin Marwan bin al-Hakam
Julukan: Marwan al-Himar (karena ketabahan fisiknya), Al-Ja''di, Marwan II
Era/Latar: Armenia, Harran, dan Mesir, 691–750 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Marwan bin Muhammad adalah jenderal perang berpengalaman yang menghabiskan sebagian besar hidupnya memimpin pasukan di front Armenia dan Kaukasus. Ia merebut takhta kekhalifahan pada 127 H (744 M) di tengah perang saudara internal yang telah meretakkan persatuan Bani Umayyah.
# 🌟 PERAN HISTORIS
- Memindahkan ibu kota ke Harran
Menghadapi penolakan penduduk Syam selatan, Marwan memindahkan pusat pemerintahan dari Damaskus ke kota garnisun Harran di Mesopotamia atas (Jazirah).
- Reformasi taktik kavaleri tempur
Ia merevolusi organisasi militer Arab dari formasi barisan statis (Sufuf) tradisional menjadi unit-unit taktis kavaleri dan infanteri mandiri yang lebih lincah (Kardus).
- Pertempuran Zab Hulu dan runtuhnya dinasti
Meskipun memadamkan pemberontakan di Syam dan Irak selama enam tahun tanpa henti, pasukannya akhirnya berhadapan dengan gelombang Revolusi Abbasiyah berkibar bendera hitam pimpinan Abdullah bin Ali dalam Pertempuran Sungai Zab Hulu pada Januari 750 M. Pasukannya terpecah dan Marwan melarikan diri ke Mesir hingga tewas dalam pertempuran terakhir di Zawilah (Bousir), mengakhiri kekuasaan Daulah Umayyah di Timur.',
      facts = 'Lahir : 72 H (691 M), Madinah
Jabatan : Khalifah Terakhir Daulah Umayyah di Damaskus
Masa Kekhalifahan : 127–132 H (744–750 M)
Wafat : 27 Zulhijjah 132 H (Agustus 750 M), Bousir, Mesir Hulu
Peristiwa Kunci : Pertempuran Zab Hulu (750 M), Berakhirnya Umayyah Damaskus',
      slides = '[]'::jsonb,
      gallery = '[]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SY', 'IQ', 'EG', 'TR']::text[]
    WHERE name = 'Marwan bin Muhammad';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Marwan bin Muhammad',
      'Khalifah Umayyah Terakhir di Damaskus',
      '',
      38,
      'Nama asli: Marwan bin Muhammad bin Marwan bin al-Hakam
Julukan: Marwan al-Himar (karena ketabahan fisiknya), Al-Ja''di, Marwan II
Era/Latar: Armenia, Harran, dan Mesir, 691–750 M',
      '# 📜 RINGKASAN BIOGRAFI
Marwan bin Muhammad adalah jenderal perang berpengalaman yang menghabiskan sebagian besar hidupnya memimpin pasukan di front Armenia dan Kaukasus. Ia merebut takhta kekhalifahan pada 127 H (744 M) di tengah perang saudara internal yang telah meretakkan persatuan Bani Umayyah.
# 🌟 PERAN HISTORIS
- Memindahkan ibu kota ke Harran
Menghadapi penolakan penduduk Syam selatan, Marwan memindahkan pusat pemerintahan dari Damaskus ke kota garnisun Harran di Mesopotamia atas (Jazirah).
- Reformasi taktik kavaleri tempur
Ia merevolusi organisasi militer Arab dari formasi barisan statis (Sufuf) tradisional menjadi unit-unit taktis kavaleri dan infanteri mandiri yang lebih lincah (Kardus).
- Pertempuran Zab Hulu dan runtuhnya dinasti
Meskipun memadamkan pemberontakan di Syam dan Irak selama enam tahun tanpa henti, pasukannya akhirnya berhadapan dengan gelombang Revolusi Abbasiyah berkibar bendera hitam pimpinan Abdullah bin Ali dalam Pertempuran Sungai Zab Hulu pada Januari 750 M. Pasukannya terpecah dan Marwan melarikan diri ke Mesir hingga tewas dalam pertempuran terakhir di Zawilah (Bousir), mengakhiri kekuasaan Daulah Umayyah di Timur.',
      'Lahir : 72 H (691 M), Madinah
Jabatan : Khalifah Terakhir Daulah Umayyah di Damaskus
Masa Kekhalifahan : 127–132 H (744–750 M)
Wafat : 27 Zulhijjah 132 H (Agustus 750 M), Bousir, Mesir Hulu
Peristiwa Kunci : Pertempuran Zab Hulu (750 M), Berakhirnya Umayyah Damaskus',
      '[]'::jsonb,
      '[]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['SY', 'IQ', 'EG', 'TR']::text[]
    );
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.characters WHERE name = 'Abdurrahman ad-Dakhil') THEN
    UPDATE public.characters SET
      role = 'Pendiri Umayyah di Cordoba',
      img = COALESCE(NULLIF('assets/abdurrahman_ad_dakhil.jpg', ''), img),
      t = 39,
      meta = 'Nama asli: Abdurrahman bin Mu’awiyah bin Hisyam bin Abdul Malik
Julukan: Ad-Dakhil (Sang Pendatang), Saqr Quraisy (Rajawali Quraisy), Abdurrahman I
Era/Latar: Damaskus, Maghrib, dan Cordoba, 731–788 M',
      body = '# 📜 RINGKASAN BIOGRAFI
Abdurrahman ad-Dakhil adalah cucu Khalifah Hisyam bin Abdul Malik yang meloloskan diri dari kejaran agen-agen Dinasti Abbasiyah pasca runtuhnya Damaskus pada 750 M. Ia menempuh perjalanan pelarian ribuan kilometer melintasi gurun Afrika Utara hingga mencapai Semenanjung Iberia.
# 🌟 PERAN HISTORIS
- Pelarian dramatis melintasi Afrika Utara
Bersama pelayan setianya Badr, ia melompat ke Sungai Eufrat saat disergap pasukan Abbasiyah, lalu menyamar melintasi Mesir dan pesisir Maghrib mencari perlindungan pada kabilah Berber Nafza, suku asal ibunya.
- Membangun kembali dinasti di Al-Andalus
Pada 138 H (755 M), ia mendarat di Almunecar, Spanyol selatan. Menggalang dukungan mantan tentara Umayyah dan kabilah Yaman, ia mengalahkan Gubernur Yusuf al-Fihri dalam Pertempuran Musarah di luar gerbang Cordoba pada Mei 756 M dan memproklamasikan berdirinya Keamiran Umayyah di Spanyol.
- Pembangunan Masjid Agung Cordoba
Selama 32 tahun masa pemerintahannya, ia menangkis serbuan Raja Frank Charlemagne di Zaragoza (778 M) dan mendirikan Masjid Agung Cordoba (Mezquita) yang kelak menjadi simbol puncak kecemerlangan arsitektur Islam di tanah Eropa.',
      facts = 'Lahir : 113 H (731 M), dekat Damaskus
Jabatan : Amir Pertama Keamiran Umayyah Cordoba
Masa Pemerintahan : 138–172 H (756–788 M)
Wafat : 24 Rabiul Awwal 172 H (September 788 M), Cordoba, Spanyol
Peninggalan : Pendirian Dinasti Umayyah Andalusia, Peletakan batu pertama Masjid Agung Cordoba',
      slides = '["assets/slide_cordoba.jpg"]'::jsonb,
      gallery = '[{"url":"assets/slide_cordoba.jpg","caption":"Keamiran Cordoba dan kemegahan arsitektur lengkung merah-putih Masjid Agung Mezquita"}]'::jsonb,
      eras = ARRAY['Daulah Umayyah']::text[],
      groups = ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      faith = 'Islam',
      gender = 'Pria',
      countries = ARRAY['SY', 'MA', 'ES']::text[]
    WHERE name = 'Abdurrahman ad-Dakhil';
  ELSE
    INSERT INTO public.characters (name, role, img, t, meta, body, facts, slides, gallery, show_label, eras, groups, faith, gender, countries)
    VALUES (
      'Abdurrahman ad-Dakhil',
      'Pendiri Umayyah di Cordoba',
      'assets/abdurrahman_ad_dakhil.jpg',
      39,
      'Nama asli: Abdurrahman bin Mu’awiyah bin Hisyam bin Abdul Malik
Julukan: Ad-Dakhil (Sang Pendatang), Saqr Quraisy (Rajawali Quraisy), Abdurrahman I
Era/Latar: Damaskus, Maghrib, dan Cordoba, 731–788 M',
      '# 📜 RINGKASAN BIOGRAFI
Abdurrahman ad-Dakhil adalah cucu Khalifah Hisyam bin Abdul Malik yang meloloskan diri dari kejaran agen-agen Dinasti Abbasiyah pasca runtuhnya Damaskus pada 750 M. Ia menempuh perjalanan pelarian ribuan kilometer melintasi gurun Afrika Utara hingga mencapai Semenanjung Iberia.
# 🌟 PERAN HISTORIS
- Pelarian dramatis melintasi Afrika Utara
Bersama pelayan setianya Badr, ia melompat ke Sungai Eufrat saat disergap pasukan Abbasiyah, lalu menyamar melintasi Mesir dan pesisir Maghrib mencari perlindungan pada kabilah Berber Nafza, suku asal ibunya.
- Membangun kembali dinasti di Al-Andalus
Pada 138 H (755 M), ia mendarat di Almunecar, Spanyol selatan. Menggalang dukungan mantan tentara Umayyah dan kabilah Yaman, ia mengalahkan Gubernur Yusuf al-Fihri dalam Pertempuran Musarah di luar gerbang Cordoba pada Mei 756 M dan memproklamasikan berdirinya Keamiran Umayyah di Spanyol.
- Pembangunan Masjid Agung Cordoba
Selama 32 tahun masa pemerintahannya, ia menangkis serbuan Raja Frank Charlemagne di Zaragoza (778 M) dan mendirikan Masjid Agung Cordoba (Mezquita) yang kelak menjadi simbol puncak kecemerlangan arsitektur Islam di tanah Eropa.',
      'Lahir : 113 H (731 M), dekat Damaskus
Jabatan : Amir Pertama Keamiran Umayyah Cordoba
Masa Pemerintahan : 138–172 H (756–788 M)
Wafat : 24 Rabiul Awwal 172 H (September 788 M), Cordoba, Spanyol
Peninggalan : Pendirian Dinasti Umayyah Andalusia, Peletakan batu pertama Masjid Agung Cordoba',
      '["assets/slide_cordoba.jpg"]'::jsonb,
      '[{"url":"assets/slide_cordoba.jpg","caption":"Keamiran Cordoba dan kemegahan arsitektur lengkung merah-putih Masjid Agung Mezquita"}]'::jsonb,
      true,
      ARRAY['Daulah Umayyah']::text[],
      ARRAY['Khalifah Umayyah', 'Penguasa']::text[],
      'Islam',
      'Pria',
      ARRAY['SY', 'MA', 'ES']::text[]
    );
  END IF;
END $$;

