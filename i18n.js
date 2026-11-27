// ALFA | History of Islam — Extensible Trilingual Engine (v1.7.0) [ID, EN, AR]

(function(){

  const SUPPORTED = ["en", "id", "ar"];

  const STORAGE_KEY = "alfa_lang";



  const UI = {

    id: {

      navMap: "Peta",

      navTimeline: "Linimasa",

      navCharacters: "Tokoh",

      navStories: "Kisah",

      presetWorld: "Seluruh Dunia",

      presetIslam: "Dunia Islam",

      presetArabia: "Jazirah Arab",

      hudKicker: "Atlas Sejarah Dunia Islam",

      hudAllTitle: "Semua Era (570–2025 M)",

      hudAllDesc: "Akumulasi wilayah peristiwa, tokoh, dan situs sejarah peradaban Islam. Klik negara atau pin kota untuk detail.",

      hudFootprint: "Jejak Historis (klik Putar atau geser linimasa)",

      hudRegions: "Wilayah Peristiwa",

      mapHint: "Ctrl + scroll atau cubit untuk zoom, geser peta, klik negara atau pin untuk detail",

      playTimeline: "Putar Linimasa",

      pauseTimeline: "Jeda",

      allEras: "Semua Era",

      cumulativeView: "570–2025 M · Tampilan Akumulatif",

      eraSuffix: "M",

      hijriSuffix: "H",

      untilYear: "hingga",

      timelineHeading: "TIMELINE",

      charactersHeading: "FIGURES",

      shortsHeading: "SHORTS",

      videosHeading: "VIDEOS",

      seeAllShorts: "LIHAT SEMUA SHORTS",

      seeAllVideos: "LIHAT SEMUA VIDEO",

      eventsCount: n => `${n} peristiwa`,

      charsCount: n => `${n} tokoh`,

      placesCount: n => `${n} tempat`,

      moreCount: n => `+${n} lainnya`,

      readFullArticle: "Baca artikel lengkap ›",

      readDetail: "Baca detail ›",

      readFullProfile: "Baca profil lengkap ›",

      viewOnMap: "Lihat di peta",

      readMins: m => `BACA ${m} MENIT`,

      searchPlaceholder: "Cari tokoh, gelar, kabilah, peristiwa, lokasi...",

      lblFaith: "Agama",

      lblEra: "Era",

      lblGroup: "Kelompok",

      lblSort: "Urutkan",

      optAll: "Semua",

      optDefault: "Bawaan",

      optName: "Nama (A–Z)",

      optEra: "Era",

      optRank: "Kedudukan",

      showingAll: n => `Menampilkan semua ${n} tokoh`,

      showingFiltered: (a, b) => `Menampilkan ${a} dari ${b} tokoh`,

      noCharsMatch: "Tidak ada tokoh yang sesuai pencarian atau filter.",

      noChronoData: "Belum ada data kronologi.",

      popEvents: "Peristiwa Sejarah",

      popFigures: "Tokoh Penting",

      popPlaces: "Tempat Bersejarah",

      popEmpty: era => `Belum ada catatan sejarah untuk wilayah ini pada ${era}.`,

      popPolityIn: (pol, yr, era) => `Wilayah ${pol} pada tahun ${yr} M (${era}).`,

      watchYt: "Tonton di YouTube",

      openShortsYt: "Buka Shorts di YouTube",

      playHere: "▶ Putar di sini",

      ftDesc: "Menelusuri sejarah peradaban Islam melalui peta dunia interaktif, tokoh penting, dan kisah ringkas.",

      ftExplore: "Jelajahi",

      ftFollow: "Ikuti",

      ftSupport: "Dukung",

      supportTitle: "Dukung ALFA History",

      supportBtn: "Dukung via QRIS",

      supportDismiss: "Tutup",

      supportOpenLink: "Buka Link Donasi",

      supportCaption: "Scan QRIS untuk dukung riset & produksi",

      cpText: yr => `© ${yr} ALFA | History of Islam, @alfa-history. All rights reserved. | All Visual character is illustration`,

      back: "← Kembali",

      loading: "Memuat...",

      notFound: "Halaman tidak ditemukan.",

      loadErr: "Gagal memuat data.",

      tocTitle: "Daftar isi",

      detailBox: "Detail",

      relPlaces: "Tempat lainnya",

      relEvents: "Peristiwa lainnya",

      relChars: "Tokoh lainnya",

      previewHint: "Pratinjau: isi formulir di admin, halaman ini akan ikut berubah.",

      metaYear: "Tahun",

      metaRegion: "Wilayah",

      navSources: "Rujukan",

      ftSources: "Rujukan Ilmiah",

      ftSourcesBtn: "Metodologi & Sumber Rujukan ›",

      ftSourcesAll: "Semua Sumber Primer ›",

      sourcesTitle: "Rujukan Ilmiah & Transparansi Riset",

      sourcesSub: "Standar Otoritatif & Perpustakaan Digital Sejarah Islam (Nasional & Internasional)",

      tabSources: "Katalog Sumber Primer",

      tabTelling: "Transparansi & Adab Visual",

      catQuran: "Al-Qur'an & Terjemahan",

      catHadith: "Hadits & Verifikasi Sanad",

      catTarikh: "Kitab Induk Tarikh Klasik",

      catNusantara: "Manuskrip Sejarah Islam Nusantara",

      catAcad: "Arsitektur & Kajian Akademik",

      srcVisit: "Kunjungi Sumber",

      scopeGlobal: "Internasional",

      scopeID: "Nasional (RI)",

      tellingMethodHead: "Metodologi Penelusuran & Validasi Sejarah",

      tellingMethodBody: "ALFA History menelusuri sejarah peradaban Islam dengan mengutamakan naskah primer yang diakui secara akademis dan tradisi keilmuan Islam. Setiap kronologi peristiwa dan biografi tokoh dirujuk silang ke kitab induk tarikh muktabar seperti Tarikh ath-Thabari (Tarikh ar-Rusul wal-Muluk), Al-Bidayah wan-Nihayah Ibnu Katsir, As-Sirah an-Nabawiyyah Ibnu Hisyam, dan Al-Kamil fit-Tarikh Ibnul Atsir, serta diverifikasi derajat keshahihan riwayatnya melalui literatur hadits standar.",

      tellingEthicsHead: "Adab Kehormatan Syariat & Representasi Visual",

      tellingEthicsBody: "Menjaga kehormatan syariat dan adab keislaman merupakan prinsip mutlak ALFA History. Sesuai ijma' ulama dan adab kaum muslimin, sosok Baginda Rasulullah Muhammad ﷺ, para Nabi dan Rasul lainnya, serta Ummahatul Mukminin (istri-istri Nabi) TIDAK PERNAH divisualisasikan dalam bentuk rupa atau gambar fisik apa pun. Kehadiran mereka disajikan melalui kaligrafi, teks suci, atau latar arsitektur zaman tersebut.\n\nAdapun ilustrasi tokoh sahabat dan generasi sejarah setelahnya digambarkan dengan pendekatan realisme sejarah abad ke-7 (gaya novel grafis ligne claire, busana kabilah dan perlengkapan otentik tanpa ornamen modern) yang berfungsi semata-mata sebagai sarana visualisasi edukatif agar generasi muda dapat memahami konteks ruang, waktu, dan dinamika sejarah peradaban secara jernih.",

      detailSourcesHeading: "Rujukan Sumber Primer",

      detailSourcesNotice: "Data kronologi peristiwa, nasab tokoh, dan catatan geografis pada artikel ini diselaraskan dengan sumber-sumber primer sejarah dan kepustakaan Islam:",

      detailEthicsHeading: "Catatan Riset & Adab Representasi",

      detailEthicsBody: "Narasi dirangkum secara objektif dari kitab tarikh dan riwayat mu'tabar. Ilustrasi pendukung disajikan dengan adab keislaman dan otentisitas busana abad ke-7 murni sebagai media visualisasi edukasi.",

      btnSourcesDir: "Buka Direktori Lengkap Rujukan ›",

      qsKicker: "✦ RUJUKAN SEJARAH",

      qsAboutTelling: "Tentang Penuturan Ini",

      qsWhatAuthentic: "Otentisitas & Derajat Riwayat",

      qsCollection: "Koleksi Rujukan",

      qsNarration: "Teks Riwayat & Hadits",

      qsInBookRef: "Rujukan Kitab & Bab",

      qsGrading: "Derajat Keshahihan (Takhrij)",

      qsVerses: "Ayat Al-Qur'an Terkait",

      qsAlsoReported: "Juga Diriwayatkan / Dicatat Dalam",

      qsOpenSunnah: "Buka di Sunnah.com ↗",

      qsOpenQuran: "Baca di Quran.com ↗",

      qsOpenShamela: "Buka di Shamela.ws ↗",

      searchBtn: "Cari",

      searchPlaceholder: "Cari konsep, tokoh, peristiwa, lokasi (Ctrl+K)...",

      searchDlgTitle: "Pencarian Semantik & Linimasa",

      searchHint: "Cari dengan bahasa alami (contoh: \"sahabat perang badar\", \"penakluk andalusia\", \"kejatuhan baghdad\")",

      searchPopular: "Pencarian Populer",
      searchSuggest: "Saran Pencarian:",
      aiSummaryTitle: "RINGKASAN SEJARAH ALFA",
      aiSummaryLoading: "Menyusun ringkasan sejarah dari arsip ALFA...",
      openWatchRoom: "▸ Buka Ruang Putar & Rujukan",
      playQuick: "▸ Putar Cepat",
      geoScale: "Skala",
      geoLvl1: "Dunia › Benua & Samudra",
      geoLvl2: "Dunia › Negara",
      geoLvl3: "Kawasan › Provinsi & Wilayah",
      geoLvl4: "Wilayah › Kota Utama",
      geoLvl5: "Kota › Daerah & Situs Bersejarah",

      searchNoResults: "Tidak ditemukan hasil yang cocok.",

      badgeIntent: "Topik Tematik",

      badgeChar: "Tokoh",

      badgeEvent: "Peristiwa",

      badgePlace: "Tempat",

      eventFiguresHeading: "Tokoh dalam Peristiwa Ini",

      charEventsHeading: "Peristiwa Kunci Terkait",

      shareStory: "Bagi Kisah",

      linkCopied: "Tautan berhasil disalin ke clipboard!",

      menuTitle: "Navigasi",

      menuClose: "Tutup",

      ftMuqaddimahBtn: "Muqaddimah & Tentang ALFA ›",

      ftLinkMuq: "Muqaddimah",

      ftLinkSupport: "Dukung ALFA",

      ftLinkTerms: "Syarat & Ketentuan",

      ftLinkPrivacy: "Kebijakan Privasi",

      tabMuqaddimah: "Muqaddimah",

      tabSupport: "Dukung ALFA",

      tabTerms: "Syarat & Ketentuan",

      tabPrivacy: "Kebijakan Privasi",

      muqTitle: "Tentang Proyek ALFA History",

      muqLead: "ALFA History hadir untuk memetakan jejak peradaban Islam dari abad ke abad secara visual, terstruktur, dan berakar pada literatur klasik.",

      muqBody1: "Setiap garis lintasan peta, kronologi peristiwa, serta profil tokoh di situs ini dirangkai agar pelajar, peneliti pemula, dan pembaca umum bisa membaca konteks geografis sejarah tanpa terpisah dari naskah primernya.",

      muqBody2: "Penelusuran materi kami bersandar pada kitab-kitab tarikh mu'tabar seperti Tarikh ath-Thabari, Al-Bidayah wan-Nihayah, Sirah Ibnu Hisyam, Al-Kamil fit-Tarikh, hingga Siyar A'lam an-Nubala', disertai verifikasi hadits melalui Kutubus Sittah dan karya takhrij para ulama. Untuk sejarah Islam Nusantara, kami memadukannya dengan koleksi naskah klasik Perpustakaan Nasional dan Kementerian Agama RI.",

      muqBody3: "Kami sadar karya manusia tetap memiliki ruang khilaf. Bila Anda menemukan kekeliruan tahun, penulisan nama, lokasi geografis, atau rujukan kitab, silakan kirimkan masukan agar dapat segera ditelaah dan diperbaiki.",

      muqVerse1Tr: "\"Aku hanya bermaksud mendatangkan perbaikan selama aku masih sanggup. Dan tidak ada taufik bagiku melainkan dengan pertolongan Allah. Hanya kepada Allah aku bertawakal dan hanya kepada-Nya aku kembali.\"",

      muqVerse1Ref: "QS. Hud (11): 88",

      muqVerse2Tr: "\"Ya Tuhan kami, terimalah amal dari kami. Sungguh, Engkaulah Yang Maha Mendengar, Maha Mengetahui.\"",

      muqVerse2Ref: "QS. Al-Baqarah (2): 127",

      supHeading: "Menjaga Edukasi Sejarah Gratis Tetap Berjalan",

      supBody: "Seluruh peta interaktif, linimasa, artikel tokoh, dan dokumenter ALFA History dapat diakses terbuka tanpa paywall maupun iklan komersial. Meski gratis bagi pengunjung, pengerjaan riset naskah, verifikasi data, ilustrasi historis, serta pemeliharaan server berjalan dari biaya operasional nyata.",

      supHadithTr: "\"Barangsiapa yang menunjukkan kepada suatu kebaikan, maka baginya pahala seperti pahala orang yang mengerjakannya.\"",

      supHadithRef: "HR. Muslim no. 1893",

      supFund1Title: "Riset & Verifikasi Naskah Primer",

      supFund1Desc: "Pengadaan literatur sejarah, telaah kitab klasik, serta pemutakhiran data lokasi dan kronologi.",

      supFund2Title: "Ilustrasi Historis & Produksi Konten",

      supFund2Desc: "Pembuatan peta kartografi beresolusi tinggi, tata artistik abad ke-7 yang menjaga adab syariat, dan produksi video edukasi.",

      supFund3Title: "Infrastruktur Web & Arsip Terbuka",

      supFund3Desc: "Hosting, domain alfahistory.web.id, penyimpanan tile peta beresolusi tinggi, dan pengembangan fitur interaktif.",

      supQrNote: "Pindai QRIS dengan aplikasi perbankan atau dompet digital di Indonesia. Dukungan bersifat sukarela dan sepenuhnya disalurkan untuk keberlangsungan riset serta produksi konten ALFA History.",

      termsIntro: "Syarat dan Ketentuan ini mengatur penggunaan situs alfahistory.web.id beserta seluruh fitur peta, linimasa, dan arsip riset di dalamnya.",

      termsSec1Title: "1. Layanan & Akses Terbuka",

      termsSec1Body: "ALFA History menyediakan platform edukasi sejarah Islam interaktif secara gratis. Kami dapat memperbarui tampilan, menambah data peta, atau menyesuaikan fitur sewaktu-waktu demi menjaga ketepatan informasi dan kenyamanan akses.",

      termsSec2Title: "2. Sifat Konten Sejarah & Bukan Fatwa",

      termsSec2Body: "Seluruh artikel, kronologi, dan ringkasan naskah disusun untuk tujuan pendidikan sejarah dan literasi peradaban. Materi di situs ini bukan fatwa hukum syariat. Untuk persoalan fiqih, akidah, atau ibadah khusus, rujuklah langsung kepada ulama dan lembaga keilmuan tepercaya.",

      termsSec3Title: "3. Penggunaan Konten & Hak Cipta",

      termsSec3Body: "Pengunjung diperbolehkan membaca, mengutip untuk kajian ilmiah maupun pembelajaran non-komersial dengan mencantumkan sumber alfahistory.web.id. Dilarang memperjualbelikan ulang aset peta, ilustrasi karakter, atau salinan utuh basis data situs ini tanpa izin tertulis pengelola.",

      termsSec4Title: "4. Koreksi Data & Pelaporan",

      termsSec4Body: "Kami menyambut koreksi berbasis bukti apabila terdapat perbedaan tanggal Hijriah-Masehi, koordinat situs bersejarah, atau kutipan kitab agar kualitas rujukan terus terjaga.",

      termsSec5Title: "5. Batasan Tanggung Jawab",

      termsSec5Body: "ALFA History disediakan apa adanya dengan ketelitian riset setinggi mungkin. Kami tidak bertanggung jawab atas gangguan jaringan, perubahan kebijakan layanan pihak ketiga yang tertaut di direktori sumber, maupun penafsiran di luar konteks edukasi.",

      termsSec6Title: "6. Kontak Pengelola",

      termsSec6Body: "Pertanyaan resmi, masukan koreksi naskah, atau usulan kolaborasi edukasi dapat disampaikan melalui kanal resmi ALFA History di YouTube (@alfa-history) maupun Instagram (@alfaahistory).",

      privIntro: "Kebijakan Privasi ini menjelaskan bagaimana alfahistory.web.id memperlakukan data teknis pengunjung secara minimal dan transparan.",

      privSec1Title: "1. Tanpa Akun, Tanpa Iklan, Tanpa Pelacakan",

      privSec1Body: "ALFA History dapat diakses langsung tanpa pendaftaran akun, tanpa kata sandi, tanpa jaringan iklan pihak ketiga, dan tanpa pelacakan lintas situs.",

      privSec2Title: "2. Statistik Kunjungan Anonim",

      privSec2Body: "Kami mencatat agregat kunjungan halaman dan pembacaan konten secara anonim untuk mengetahui era atau tokoh mana yang paling dibutuhkan pembaca, tanpa mengaitkannya dengan identitas pribadi siapa pun.",

      privSec3Title: "3. Preferensi Lokal Browser (localStorage)",

      privSec3Body: "Pilihan bahasa (Indonesia, Inggris, atau Arab) dan status penutupan overlay dukungan disimpan secara lokal di browser perangkat Anda melalui localStorage semata agar pengalaman membaca tetap nyaman saat halaman dimuat ulang.",

      privSec4Title: "4. Log Teknis Hosting & Infrastruktur",

      privSec4Body: "Seperti layanan web statis dan API publik pada umumnya, infrastruktur hosting dan CDN dapat mencatat log permintaan teknis singkat (misalnya jenis peramban atau waktu akses) semata untuk keamanan jaringan dan pencegahan penyalahgunaan.",

      privSec5Title: "5. Kontak & Pembaruan Kebijakan",

      privSec5Body: "Apabila ada pembaruan teknis yang memengaruhi penyimpanan data lokal atau statistik kunjungan, rinciannya akan diperbarui langsung pada panel ini.",
      bismillahAlt: "Bismillahirrahmanirrahim",
      historicPlaceLabel: "Situs Bersejarah",
      docVideoBadge: "VIDEO DOKUMENTER"

    },

    en: {

      navMap: "Map",

      navTimeline: "Timeline",

      navCharacters: "Figures",

      navStories: "Stories",

      presetWorld: "Full World",

      presetIslam: "Islamic World",

      presetArabia: "Arabian Peninsula",

      hudKicker: "Atlas of Islamic History",

      hudAllTitle: "All Eras (570–2025 CE)",

      hudAllDesc: "Accumulated historical footprint of events, figures, and sites across Islamic civilization. Click a country or pin for details.",

      hudFootprint: "Historical Footprint (click Play or slide timeline)",

      hudRegions: "Event Regions",

      mapHint: "Ctrl + scroll or pinch to zoom, drag to pan, click country or pin for details",

      playTimeline: "Play Timeline",

      pauseTimeline: "Pause",

      allEras: "All Eras",

      cumulativeView: "570–2025 CE · Cumulative View",

      eraSuffix: "CE",

      hijriSuffix: "AH",

      untilYear: "until",

      timelineHeading: "TIMELINE",

      charactersHeading: "CHARACTERS",

      shortsHeading: "SHORTS",

      videosHeading: "VIDEOS",

      seeAllShorts: "SEE ALL SHORTS",

      seeAllVideos: "SEE ALL VIDEOS",

      eventsCount: n => `${n} ${n === 1 ? "event" : "events"}`,

      charsCount: n => `${n} ${n === 1 ? "character" : "characters"}`,

      placesCount: n => `${n} ${n === 1 ? "place" : "places"}`,

      moreCount: n => `+${n} more`,

      readFullArticle: "Read full article ›",

      readDetail: "Read detail ›",

      readFullProfile: "Read full profile ›",

      viewOnMap: "View on map",

      readMins: m => `READ ${m} ${m === 1 ? "MIN" : "MINS"}`,

      searchPlaceholder: "Search figures, titles, clans, events, locations...",

      lblFaith: "Religion",

      lblEra: "Era",

      lblGroup: "Filter By",

      lblSort: "Sort By",

      optAll: "All",

      optDefault: "Default",

      optName: "Name (A–Z)",

      optEra: "Era",

      optRank: "Significance",

      showingAll: n => `Showing all ${n} figures`,

      showingFiltered: (a, b) => `Showing ${a} of ${b} figures`,

      noCharsMatch: "No characters match your search or filter criteria.",

      noChronoData: "No chronology data available.",

      popEvents: "Historical Events",

      popFigures: "Notable Figures",

      popPlaces: "Historic Places",

      popEmpty: era => `No historical records found for this region in ${era}.`,

      popPolityIn: (pol, yr, era) => `${pol} territory in ${yr} CE (${era}).`,

      watchYt: "Watch on YouTube",

      openShortsYt: "Open Shorts on YouTube",

      playHere: "▶ Play here",

      ftDesc: "Tracing the history of Islam through interactive maps, notable figures, and short stories.",

      ftExplore: "Explore",

      ftFollow: "Follow",

      ftSupport: "Support",

      supportTitle: "Support ALFA History",

      supportBtn: "Support via QRIS",

      supportDismiss: "Dismiss",

      supportOpenLink: "Open Donation Link",

      supportCaption: "Scan QRIS to support research & production",

      cpText: yr => `© ${yr} ALFA | History of Islam, @alfa-history. All rights reserved. | All Visual character is illustration`,

      back: "← Back",

      loading: "Loading...",

      notFound: "Page not found.",

      loadErr: "Failed to load data.",

      tocTitle: "Table of Contents",

      detailBox: "Detail",

      relPlaces: "Other Places",

      relEvents: "Other Events",

      relChars: "Other Figures",

      previewHint: "Preview: fill the form in admin to see live changes here.",

      metaYear: "Year",

      metaRegion: "Region",

      navSources: "Sources",

      ftSources: "Scholarly Sources",

      ftSourcesBtn: "Methodology & Primary Sources ›",

      ftSourcesAll: "All Primary Sources ›",

      sourcesTitle: "Primary Sources & Research Methodology",

      sourcesSub: "Authoritative Standards & Digital Libraries of Islamic History (National & International)",

      tabSources: "Primary Sources Directory",

      tabTelling: "About This Telling & Visual Ethics",

      catQuran: "The Noble Quran & Exegesis",

      catHadith: "Hadith Corpus & Sanad Verification",

      catTarikh: "Classical Historical Chronicles",

      catNusantara: "Nusantara Islamic Manuscripts",

      catAcad: "Architecture & Academic Research",

      srcVisit: "Visit Source",

      scopeGlobal: "International",

      scopeID: "National (Indonesia)",

      tellingMethodHead: "Historical Research & Verification Methodology",

      tellingMethodBody: "ALFA History explores Islamic civilization by prioritizing primary texts recognized in classical scholarship and modern historical research. Event chronologies and biographical records are cross-referenced across seminal chronicles including Tarikh al-Tabari (Tarikh al-Rusul wa al-Muluk), Al-Bidayah wa al-Nihayah by Ibn Kathir, Sirah Ibn Hisham, and Al-Kamil fi al-Tarikh by Ibn al-Athir, with narrations verified against authenticated hadith literature.",

      tellingEthicsHead: "Islamic Reverence & Visual Representation Ethics",

      tellingEthicsBody: "Upholding sacred reverence and traditional Islamic etiquette is an inviolable standard for ALFA History. In adherence to Islamic scholarship and consensus, the Holy Prophet Muhammad ﷺ, all other Prophets and Messengers, and the Mothers of the Believers (Ummahatul Mukminin) are STRICTLY NEVER depicted in any physical portrait or visual likeness. Their presence is honored through sacred text, noble calligraphy, or historical landscapes.\n\nIllustrations of companions and historical figures follow 7th-century historical realism (ligne claire graphic novel style with period-accurate tribal garments, armor, and turbans without modern embellishments), serving purely as educational visual aids to help modern audiences understand historical chronology, geography, and context.",

      detailSourcesHeading: "Primary Sources & Historical Citations",

      detailSourcesNotice: "Chronological data, lineage, and geographic accounts in this article are aligned with authoritative primary sources of Islamic history:",

      detailEthicsHeading: "Research Transparency & Visual Notes",

      detailEthicsBody: "Synthesized from classical chronicles and authenticated traditions. Supporting illustrations observe Islamic representation ethics and 7th-century historical realism strictly for educational clarity.",

      btnSourcesDir: "Open Full Sources Directory ›",

      qsKicker: "✦ SOURCES",

      qsAboutTelling: "About this telling",

      qsWhatAuthentic: "What is authentic in it",

      qsCollection: "Collection",

      qsNarration: "Narration",

      qsInBookRef: "In-book reference",

      qsGrading: "Grading",

      qsVerses: "Verses",

      qsAlsoReported: "Also reported in",

      qsOpenSunnah: "Open on sunnah.com ↗",

      qsOpenQuran: "Read on Quran.com ↗",

      qsOpenShamela: "Open on Shamela ↗",

      searchBtn: "Search",

      searchPlaceholder: "Search concepts, figures, events, places (Ctrl+K)...",

      searchDlgTitle: "Semantic & Historical Search",

      searchHint: "Search with natural language (e.g. \"companions in badr\", \"conquest of andalusia\", \"fall of baghdad\")",

      searchPopular: "Popular Searches",
      searchSuggest: "Suggestions:",
      aiSummaryTitle: "ALFA HISTORICAL SUMMARY",
      aiSummaryLoading: "Synthesizing historical overview from ALFA archives...",
      openWatchRoom: "▸ Open Watch Room & Sources",
      playQuick: "▸ Quick Play",
      geoScale: "Scale",
      geoLvl1: "World › Continents & Oceans",
      geoLvl2: "World › Countries",
      geoLvl3: "Regions › Provinces",
      geoLvl4: "Regions › Major Cities",
      geoLvl5: "Cities › Historic Sites",

      searchNoResults: "No matching results found.",

      badgeIntent: "Thematic Topic",

      badgeChar: "Figure",

      badgeEvent: "Event",

      badgePlace: "Place",

      eventFiguresHeading: "Figures in this Event",

      charEventsHeading: "Key Associated Events",

      shareStory: "Share Story",

      linkCopied: "Link copied to clipboard!",

      menuTitle: "Navigation",

      menuClose: "Close",

      ftMuqaddimahBtn: "Muqaddimah & About ALFA ›",

      ftLinkMuq: "Muqaddimah",

      ftLinkSupport: "Support ALFA",

      ftLinkTerms: "Terms & Conditions",

      ftLinkPrivacy: "Privacy Policy",

      tabMuqaddimah: "Muqaddimah",

      tabSupport: "Support",

      tabTerms: "Terms & Conditions",

      tabPrivacy: "Privacy Policy",

      muqTitle: "About the ALFA History Project",

      muqLead: "ALFA History maps the trajectory of Islamic civilization across centuries in a visual, structured format rooted in classical scholarship.",

      muqBody1: "Every map trajectory, historical chronology, and biographical profile on this platform is arranged so students, researchers, and general readers can follow geographic context without losing sight of primary texts.",

      muqBody2: "Our research draws on authoritative chronicles including Tarikh al-Tabari, Al-Bidayah wa al-Nihayah, Sirah Ibn Hisham, Al-Kamil fi al-Tarikh, and Siyar A'lam al-Nubala', paired with hadith verification through the six canonical collections. For the history of Islam in the Indonesian archipelago, we cross-reference digitized manuscripts from the National Library of Indonesia and the Ministry of Religious Affairs.",

      muqBody3: "Every human work carries room for oversight. If you spot a discrepancy in dates, spelling, geographic placement, or source citations, please send a correction so we can review and refine it promptly.",

      muqVerse1Tr: "\"I only intend reform as much as I am able. And my success is not but through Allah. Upon Him I have relied, and to Him I return.\"",

      muqVerse1Ref: "Quran, Hud (11): 88",

      muqVerse2Tr: "\"Our Lord, accept this from us. Indeed You are the Hearing, the Knowing.\"",

      muqVerse2Ref: "Quran, Al-Baqarah (2): 127",

      supHeading: "Keeping Free Islamic History Education Accessible",

      supBody: "Every interactive map, timeline, figure profile, and documentary from ALFA History remains open without paywalls or third-party ads. While free for visitors, primary-source research, data verification, historical artwork, and high-resolution map hosting carry real ongoing costs.",

      supHadithTr: "\"Whoever guides someone to goodness will have a reward like one who did it.\"",

      supHadithRef: "Sahih Muslim 1893",

      supFund1Title: "Primary Source Research & Verification",

      supFund1Desc: "Acquiring classical texts, verifying historical chronologies, and refining geographic coordinates.",

      supFund2Title: "Historical Artwork & Video Production",

      supFund2Desc: "Crafting high-resolution cartography, Sharia-compliant 7th-century historical illustrations, and documentary videos.",

      supFund3Title: "Web Infrastructure & Open Archives",

      supFund3Desc: "Maintaining hosting, the alfahistory.web.id domain, high-resolution tile storage, and interactive features.",

      supQrNote: "Scan the QRIS code using any Indonesian banking or e-wallet app. All contributions are voluntary and go directly toward sustaining research and production for ALFA History.",

      termsIntro: "These Terms and Conditions govern your access to and use of alfahistory.web.id, including its interactive map, timeline, and research archives.",

      termsSec1Title: "1. Open Educational Service",

      termsSec1Body: "ALFA History provides an interactive Islamic history atlas and educational archive free of charge. We may update map layers, refine entries, or adjust platform features over time to improve accuracy and usability.",

      termsSec2Title: "2. Historical Content — Not Religious Rulings",

      termsSec2Body: "All articles, chronologies, and source summaries are compiled for historical education and literacy. Content here does not constitute formal religious rulings (fatwa). For matters of jurisprudence, creed, or worship, consult qualified scholars and trusted institutions.",

      termsSec3Title: "3. Content Use & Intellectual Property",

      termsSec3Body: "Visitors may read and cite materials for academic study or non-commercial teaching with clear attribution to alfahistory.web.id. Reselling map tiles, custom illustrations, or redistributing the full database without written permission is prohibited.",

      termsSec4Title: "4. Corrections & Source Feedback",

      termsSec4Body: "We welcome evidence-based corrections regarding Hijri-Gregorian dates, historic site locations, or classical citations so our archive stays accurate.",

      termsSec5Title: "5. Limitation of Liability",

      termsSec5Body: "ALFA History is provided as-is with careful scholarly verification. We are not liable for network interruptions, external changes on linked third-party repositories, or uses outside educational contexts.",

      termsSec6Title: "6. Contact",

      termsSec6Body: "For official inquiries, manuscript corrections, or educational collaboration, reach ALFA History through our official channels on YouTube (@alfa-history) or Instagram (@alfaahistory).",

      privIntro: "This Privacy Policy explains how alfahistory.web.id handles visitor data with minimal collection and full transparency.",

      privSec1Title: "1. No Accounts, No Ads, No Cross-Site Tracking",

      privSec1Body: "You can explore ALFA History immediately with no registration, no passwords, no advertising networks, and no behavioral tracking cookies.",

      privSec2Title: "2. Anonymous Visit Metrics",

      privSec2Body: "We record aggregate page views and content reads anonymously to understand which historical eras and figures readers explore most, never linked to any personal identity.",

      privSec3Title: "3. Browser Local Preferences (localStorage)",

      privSec3Body: "Your chosen language (Indonesian, English, or Arabic) and support-dock dismissal state are saved locally in your browser's localStorage solely to preserve reading preferences across reloads.",

      privSec4Title: "4. Standard Hosting & Infrastructure Logs",

      privSec4Body: "As with standard static hosting and CDN networks, brief technical request logs may be processed by infrastructure providers strictly for reliability, security, and abuse prevention.",

      privSec5Title: "5. Updates & Contact",

      privSec5Body: "Whenever technical updates change how local preferences or visit statistics work, this policy panel will be updated directly.",
      bismillahAlt: "In the Name of Allah, the Most Gracious, the Most Merciful",
      historicPlaceLabel: "Historic Site",
      docVideoBadge: "DOCUMENTARY FILM"

    },

    ar: {

      navMap: "خريطة العالم",

      navTimeline: "الخط الزمني",

      navCharacters: "الشخصيات",

      navStories: "القصص",

      presetWorld: "كل العالم",

      presetIslam: "العالم الإسلامي",

      presetArabia: "شبه الجزيرة العربية",

      hudKicker: "أطلس تاريخ الحضارة الإسلامية",

      hudAllTitle: "جميع العصور (٥٧٠–٢٠٢٥ م)",

      hudAllDesc: "التوزيع التاريخي التراكمي للأحداث والشخصيات والمعالم الحضارية عبر العالم الإسلامي. انقر على دولة أو موقع للتفاصيل.",

      hudFootprint: "الأثر التاريخي (اضغط تشغيل أو حرّك الخط الزمني)",

      hudRegions: "أقاليم الأحداث",

      mapHint: "Ctrl + تمرير للتكبير، اسحب للتنقل، انقر على دولة أو موقع للتفاصيل",

      playTimeline: "تشغيل الخط الزمني",

      pauseTimeline: "إيقاف مؤقت",

      allEras: "جميع العصور",

      cumulativeView: "٥٧٠–٢٠٢٥ م · عرض تراكمي",

      eraSuffix: "م",

      hijriSuffix: "هـ",

      untilYear: "حتى",

      timelineHeading: "الخط الزمني",

      charactersHeading: "الشخصيات",

      shortsHeading: "مقاطع قصيرة",

      videosHeading: "مرئيات وثائقية",

      seeAllShorts: "عرض جميع المقاطع القصيرة",

      seeAllVideos: "عرض جميع المرئيات",

      eventsCount: n => `${n} حدث`,

      charsCount: n => `${n} شخصية`,

      placesCount: n => `${n} موقع`,

      moreCount: n => `+${n} أخرى`,

      readFullArticle: "قراءة المقال كاملاً ›",

      readDetail: "تفاصيل أوفى ›",

      readFullProfile: "عرض السيرة الكاملة ›",

      viewOnMap: "عرض على الخريطة",

      readMins: m => `قراءة ${m} دقيقة`,

      searchPlaceholder: "ابحث عن الشخصيات، الألقاب، القبائل، الأحداث، المعالم...",

      lblFaith: "الديانة",

      lblEra: "العصر",

      lblGroup: "تصنيف حسب",

      lblSort: "ترتيب حسب",

      optAll: "الكل",

      optDefault: "افتراضي",

      optName: "الاسم (أ–ي)",

      optEra: "العصر",

      optRank: "الأهمية التاريخية",

      showingAll: n => `عرض جميع الشخصيات (${n})`,

      showingFiltered: (a, b) => `عرض ${a} من أصل ${b} شخصية`,

      noCharsMatch: "لم يتم العثور على شخصيات تطابق معايير البحث أو التصفية.",

      noChronoData: "لا تتوفر بيانات زمنية حالياً.",

      popEvents: "أحداث تاريخية",

      popFigures: "شخصيات بارزة",

      popPlaces: "معالم تاريخية",

      popEmpty: era => `لا توجد سجلات تاريخية موثقة لهذه المنطقة في ${era}.`,

      popPolityIn: (pol, yr, era) => `نطاق ${pol} في عام ${yr} م (${era}).`,

      watchYt: "مشاهدة على يوتيوب",

      openShortsYt: "فتح المقاطع على يوتيوب",

      playHere: "▶ تشغيل هنا",

      ftDesc: "استكشاف تاريخ الحضارة الإسلامية عبر خرائط تفاعلية وشخصيات بارزة وروايات موثقة.",

      ftExplore: "استكشاف",

      ftFollow: "متابعة",

      ftSupport: "دعم المشروع",

      supportTitle: "دعم أطلس تاريخ الإسلام",

      supportBtn: "دعم عبر QRIS",

      supportDismiss: "إغلاق",

      supportOpenLink: "رابط التبرع",

      supportCaption: "امسح رمز QRIS لدعم أبحاث وتوثيق التاريخ الإسلامي",

      cpText: yr => `© ${yr} أطلس ألفا لتاريخ الإسلام، @alfa-history. جميع الحقوق محفوظة. | الرسوم البصرية للشخصيات هي تمثيل توضيحي تعليمي`,

      back: "← عودة",

      loading: "جاري التحميل...",

      notFound: "الصفحة غير موجودة.",

      loadErr: "تعذر تحميل البيانات.",

      tocTitle: "فهرس المحتويات",

      detailBox: "بيانات وتفاصيل",

      relPlaces: "معالم أخرى ذات صلة",

      relEvents: "أحداث تاريخية ذات صلة",

      relChars: "شخصيات أخرى ذات صلة",

      previewHint: "معاينة: املأ الاستمارة في لوحة التحكم لمشاهدة التعديلات مباشرة.",

      metaYear: "العام",

      metaRegion: "الإقليم / المنطقة",

      navSources: "المصادر",

      ftSources: "المصادر والمراجع العلمية",

      ftSourcesBtn: "المنهجية والمصادر الأولية ›",

      ftSourcesAll: "جميع المصادر الأولية ›",

      sourcesTitle: "المصادر والمراجع العلمية ومنهجية التوثيق",

      sourcesSub: "المعايير المعتمدة والمكتبات الرقمية للتاريخ الإسلامي (محلياً ودولياً)",

      tabSources: "دليل المصادر الأولية",

      tabTelling: "منهجية السرد وآداب التمثيل البصري",

      catQuran: "القرآن الكريم وتفاسيره",

      catHadith: "كتب الحديث النبوي وتخريج الأسانيد",

      catTarikh: "أمهات كتب التاريخ والسير الكبرى",

      catNusantara: "مخطوطات تاريخ الإسلام في جنوب شرق آسيا",

      catAcad: "العمارة والدراسات الأكاديمية التوثيقية",

      srcVisit: "زيارة المصدر",

      scopeGlobal: "دولي",

      scopeID: "إندونيسيا (وطني)",

      tellingMethodHead: "منهجية التحقيق والتوثيق التاريخي",

      tellingMethodBody: "يعتمد مشروع ألفا لتاريخ الإسلام في تتبع الحضارة الإسلامية على أمهات المصادر المعترف بها في التراث العلمي الإسلامي والدراسات الأكاديمية الرصينة. يتم التحقق من التسلسل الزمني للأحداث وتراجم الشخصيات بالرجوع إلى كتب التاريخ الكبرى مثل تاريخ الرسل والملوك للطبري، والبداية والنهاية لابن كثير، والسيرة النبوية لابن هشام، والكامل في التاريخ لابن الأثير، مع ضبط الروايات وفق دواوين الحديث المعتمدة.",

      tellingEthicsHead: "آداب الشريعة وحرمة التمثيل البصري",

      tellingEthicsBody: "إن رعاية الأدب الشرعي وحرمة المقدسات الإسلامية أصلٌ راسخ لا تنازل عنه في مشروع ألفا. وتطبيقاً لإجماع علماء المسلمين، فإن الجناب النبوي الشريف لسيدنا محمد ﷺ، وسائر الأنبياء والمرسلين، وأمهات المؤمنين رضي الله عنهن، ممتنعون امتناعاً باتاً عن أي تجسيد أو تصوير أو رسم حسي بأي وجه من الوجوه. ويُقتصر في استحضارهم الشريف على الخط العربي العريق، والنصوص الشرعية، والمعالم الجغرافية المعاصرة لعهدهم.\n\nأما تصوير شخصيات الصحابة والتابعين والأعلام التاريخيين فيأتي وفق نمط الواقعية التاريخية للقرن السابع الميلادي (أسلوب الرواية المصورة بخطوط واضحة وأزياء تاريخية موثقة دون بهرجة حديثة)، مقتصراً على كونه وسيلة تعليمية إيضاحية تعين الأجيال الصاعدة على استيعاب السياق الزمني والمكاني والحضاري بوعي وبصيرة.",

      detailSourcesHeading: "المصادر والمراجع الأولية المعتمدة",

      detailSourcesNotice: "تمت مطابقة التسلسل الزمني، والأنساب، والمعالم الجغرافية الواردة في هذا المقال مع أمهات المصادر التاريخية الإسلامية المعتمدة:",

      detailEthicsHeading: "ملاحظات التوثيق وآداب التمثيل البصري",

      detailEthicsBody: "موجز مستخلص بموضوعية من أمهات كتب السير والتواريخ المعتمدة. الرسوم الإيضاحية تراعي الضوابط الشرعية والواقعية التاريخية لأزياء القرن السابع الميلادي كأداة تعليمية مرئية.",

      btnSourcesDir: "فتح دليل المصادر الكامل ›",

      qsKicker: "✦ توثيق ومصادر الرواية",

      qsAboutTelling: "عن هذا السرد التاريخي",

      qsWhatAuthentic: "ما صح وثبت في الرواية",

      qsCollection: "المصنف / الديوان",

      qsNarration: "نص الرواية / الحديث",

      qsInBookRef: "الموضع في الكتاب والباب",

      qsGrading: "درجة الصحة والتحقيق (التخريج)",

      qsVerses: "الآيات القرآنية الشاهدة",

      qsAlsoReported: "مروي ومثبت أيضاً في",

      qsOpenSunnah: "فتح في موقع Sunnah.com ↗",

      qsOpenQuran: "قراءة في Quran.com ↗",

      qsOpenShamela: "فتح في المكتبة الشاملة ↗",

      searchBtn: "بحث",

      searchPlaceholder: "ابحث في المفاهيم، الشخصيات، الأحداث (Ctrl+K)...",

      searchDlgTitle: "البحث الدلالي والتاريخي",

      searchHint: "ابحث بلغة طبيعية (مثال: \"صحابة غزوة بدر\"، \"فتح الأندلس\"، \"سقوط بغداد\")",

      searchPopular: "عمليات البحث الشائعة",
      searchSuggest: "اقتراحات البحث:",
      aiSummaryTitle: "ملخص ألفا التاريخي",
      aiSummaryLoading: "جارٍ إعداد الملخص التاريخي من أرشيف ألفا...",
      openWatchRoom: "▸ افتح غرفة العرض والمصادر",
      playQuick: "▸ تشغيل سريع",
      geoScale: "المقياس",
      geoLvl1: "العالم › القارات والمحيطات",
      geoLvl2: "العالم › الدول",
      geoLvl3: "الأقاليم › المحافظات والمناطق",
      geoLvl4: "المناطق › المدن الرئيسية",
      geoLvl5: "المدن › المواقع التاريخية",

      searchNoResults: "لم يتم العثور على نتائج مطابقة.",

      badgeIntent: "مفهوم تاريخي",

      badgeChar: "شخصية",

      badgeEvent: "حدث",

      badgePlace: "مكان",

      eventFiguresHeading: "شخصيات شاركت في هذا الحدث",

      charEventsHeading: "أبرز الأحداث المرتبطة",

      shareStory: "مشاركة القصة",

      linkCopied: "تم نسخ الرابط إلى الحافظة!",

      menuTitle: "قائمة التنقل",

      menuClose: "إغلاق",

      ftMuqaddimahBtn: "المقدمة وعن مشروع ألفا ›",

      ftLinkMuq: "المقدمة",

      ftLinkSupport: "ادعم ألفا",

      ftLinkTerms: "الشروط والأحكام",

      ftLinkPrivacy: "سياسة الخصوصية",

      tabMuqaddimah: "المقدمة",

      tabSupport: "ادعم ألفا",

      tabTerms: "الشروط والأحكام",

      tabPrivacy: "سياسة الخصوصية",

      muqTitle: "عن مشروع ألفا للتاريخ الإسلامي",

      muqLead: "يهدف مشروع ألفا إلى رسم معالم الحضارة الإسلامية عبر القرون بأسلوب بصري منظم يستند إلى أمهات المصادر الكلاسيكية.",

      muqBody1: "تُصاغ الخرائط التفاعلية والتسلسل الزمني وتراجم الأعلام في هذا الموقع لتمكين الدارسين والقراء من استيعاب السياق الجغرافي والتاريخي دون انقطاع عن النصوص الأصلية.",

      muqBody2: "يعتمد التوثيق على كتب التاريخ الكبرى مثل تاريخ الطبري، والبداية والنهاية، وسيرة ابن هشام، والكامل في التاريخ، وسير أعلام النبلاء، مع ضبط الروايات عبر الكتب الستة ودواوين التخريج، وتوثيق تاريخ الإسلام في الأرخبيل الإندونيسي عبر مخطوطات المكتبة الوطنية الإندونيسية ووزارة الشؤون الدينية.",

      muqBody3: "وكل عمل بشري عرضة للنقص والخطأ؛ فمن وجد تصحيحاً في تاريخ أو اسم علم أو موضع جغرافي أو توثيق مرجع، نرحب بمراسلته لتداركه ومراجعته.",

      muqVerse1Tr: "سورة هود: الآية ٨٨",

      muqVerse1Ref: "القرآن الكريم - هود (١١): ٨٨",

      muqVerse2Tr: "سورة البقرة: الآية ١٢٧",

      muqVerse2Ref: "القرآن الكريم - البقرة (٢): ١٢٧",

      supHeading: "استدامة المحتوى التاريخي المجاني والموثق",

      supBody: "تُتاح جميع الخرائط التفاعلية والخطوط الزمنية وتراجم الشخصيات والأفلام الوثائقية في ألفا مجاناً دون اشتراكات مدفوعة أو إعلانات تجارية. ومع مجانية التصفح، يتطلب البحث والتوثيق والرسم التاريخي وتشغيل الخوادم نفقات تشغيلية حقيقية.",

      supHadithTr: "من دلّ على خير فله مثل أجر فاعله — حديث شريف.",

      supHadithRef: "صحيح مسلم رقم ١٨٩٣",

      supFund1Title: "البحث وتحقيق المصادر الأولية",

      supFund1Desc: "توفير المراجع التراثية، ومراجعة التسلسل التاريخي، وضبط الإحداثيات الجغرافية للمواقع.",

      supFund2Title: "الرسوم التاريخية وإنتاج المحتوى",

      supFund2Desc: "تصميم الخرائط عالية الدقة، والرسوم الملتزمة بالضوابط الشرعية، وإنتاج المقاطع التعليمية.",

      supFund3Title: "البنية التقنية والأرشيف المفتوح",

      supFund3Desc: "تشغيل الاستضافة ونطاق alfahistory.web.id وتخزين طبقات الخرائط التفاعلية.",

      supQrNote: "امسح رمز QRIS عبر التطبيقات البنكية والمحافظ الرقمية في إندونيسيا. المساهمات طوعية بالكامل وتوجّه لاستدامة البحث والإنتاج في ألفا.",

      termsIntro: "تنظم هذه الشروط والأحكام استخدام موقع alfahistory.web.id وكافة الخرائط والأرشيفات البحثية المتاحة فيه.",

      termsSec1Title: "١. الخدمة والوصول المفتوح",

      termsSec1Body: "يقدّم موقع ألفا منصة تعليمية تفاعلية للتاريخ الإسلامي مجاناً، مع إمكانية تحديث طبقات الخريطة والمواد العلمية دورياً لتحسين الدقة وجودة العرض.",

      termsSec2Title: "٢. طبيعة المحتوى التاريخي",

      termsSec2Body: "جميع المقالات والتواريخ والموجزات معدة لأغراض التثقيف والبحث التاريخي وليست فتاوى شرعية. يُرجى في المسائل الفقهية والعقدية الرجوع إلى العلماء والمؤسسات العلمية المعتبرة.",

      termsSec3Title: "٣. استخدام المحتوى والملكية الفكرية",

      termsSec3Body: "يُسمح بالقراءة والاقتباس العلمي والتعليمي غير التجاري مع ذكر المصدر (alfahistory.web.id). ولا يُسمح بإعادة بيع الخرائط أو الرسوم أو نسخ قاعدة البيانات كاملة دون إذن خطي مسبق.",

      termsSec4Title: "٤. التصحيحات والملاحظات",

      termsSec4Body: "نرحب بالملاحظات الموثقة حول التواريخ الهجرية والميلادية أو الإحداثيات الجغرافية أو الإحالات المرجعية للارتقاء بدقة الأرشيف.",

      termsSec5Title: "٥. حدود المسؤولية",

      termsSec5Body: "يقدّم المحتوى كما هو بأقصى درجات التحري العلمي، ولا يتحمل الموقع مسؤولية أي انقطاعات تقنية أو تغييرات في المواقع المرجعية الخارجية المرتبطة به.",

      termsSec6Title: "٦. التواصل الرسمي",

      termsSec6Body: "للاستفسارات أو الملاحظات العلمية، يمكن التواصل عبر القنوات الرسمية لمشروع ألفا على YouTube (@alfa-history) أو Instagram (@alfaahistory).",

      privIntro: "توضح سياسة الخصوصية هذه كيفية تعامل alfahistory.web.id مع بيانات الزوار بأدنى حد من الجمع وبشفافية كاملة.",

      privSec1Title: "١. بلا حسابات وبلا إعلانات وبلا تتبع",

      privSec1Body: "يمكن تصفح ألفا مباشرة دون تسجيل حساب أو كلمات مرور، ودون شبكات إعلانية أو ملفات تتبع عابرة للمواقع.",

      privSec2Title: "٢. إحصاءات الزيارات المجهولة",

      privSec2Body: "تُجمع إحصاءات تصفح عامة ومجهولة المصدر لفهم أكثر الحقب والشخصيات اهتماماً لدى القراء، دون ربطها بهوية شخصية.",

      privSec3Title: "٣. التفضيلات المحلية في المتصفح (localStorage)",

      privSec3Body: "يُحفظ اختيار اللغة (الإندونيسية أو الإنجليزية أو العربية) وحالة إخفاء شريط الدعم محلياً في متصفحك فقط لتسهيل التصفح عند إعادة التحميل.",

      privSec4Title: "٤. سجلات الاستضافة التقنية",

      privSec4Body: "قد تعالج خوادم الاستضافة وشبكات التوزيع سجلات تقنية مؤقتة بالقدر اللازم لأمن الشبكة واستقرار الخدمة ومنع إساءة الاستخدام.",

      privSec5Title: "٥. التحديثات والتواصل",

      privSec5Body: "عند حدوث أي تغيير تقني يخص التفضيلات المحلية أو إحصاءات الاستخدام، تحدّث هذه الصفحة مباشرة.",
      bismillahAlt: "بسم الله الرحمن الرحيم",
      historicPlaceLabel: "معلم تاريخي",
      docVideoBadge: "فيلم وثائقي"

    }

  };



  const HEADING_MAP_EN = {

    "RINGKASAN BIOGRAFI": "BIOGRAPHY SUMMARY",

    "KISAH PENTING": "KEY ACCOUNTS",

    "Nasab & Kehidupan Awal": "Lineage & Early Life",

    "Nasab &amp; Kehidupan Awal": "Lineage & Early Life",

    "Peristiwa-Peristiwa Kunci & Peran Historis": "Key Events & Historical Role",

    "Peristiwa-Peristiwa Kunci &amp; Peran Historis": "Key Events & Historical Role",

    "Wafat & Warisan Sejarah": "Death & Historical Legacy",

    "Wafat &amp; Warisan Sejarah": "Death & Historical Legacy",

    "Latar Belakang & Kekuasaan di Yaman": "Background & Rule in Yemen",

    "Latar Belakang &amp; Kekuasaan di Yaman": "Background & Rule in Yemen",

    "Kematian & Dampak Sejarah": "Death & Historical Impact",

    "Kematian &amp; Dampak Sejarah": "Death & Historical Impact",

    "Daftar Isi": "Table of Contents",

    "Daftar isi": "Table of Contents",

    "1. Menyaksikan Tanda-Tanda Alam Kenabian": "1. Witnessing Signs of Prophethood in Nature",

    "2. Mengadakan Jamuan Khusus untuk Rombongan Quraisy": "2. Hosting a Special Feast for the Quraysh Caravan",

    "3. Memeriksa Tanda Kenabian (Khatamun Nubuwwah)": "3. Examining the Seal of Prophethood (Khatamun Nubuwwah)",

    "4. Peringatan Penuh Nasihat kepada Abu Thalib": "4. Warning and Counsel to Abu Talib",

    "5. Melindungi Muhammad dari Ahli Kitab Lain": "5. Protecting Muhammad from Hostile People of the Book",

    "Awan dan Pohon yang Menaungi:": "The Shading Cloud and Bowing Trees:",

    "Inisiatif Jamuan:": "Feast Initiative:",

    "Mencari Kehadiran Nabi:": "Seeking the Prophet's Presence:",

    "Wawancara dan Menguji Akhlak:": "Inquiry and Character Discernment:",

    "Melihat Stempel Kenabian:": "Observing the Prophetic Seal:",

    "Konfirmasi Nasab:": "Lineage Confirmation:",

    "Nasihat Memulangkan ke Makkah:": "Counsel to Return to Mecca:",

    "Menghalau Bahaya:": "Warding Off Danger:"

  };



  const HEADING_MAP_AR = {

    "RINGKASAN BIOGRAFI": "موجز السيرة",

    "KISAH PENTING": "روايات ومواقف مفصلية",

    "Nasab & Kehidupan Awal": "النسب والنشأة الأولى",

    "Nasab &amp; Kehidupan Awal": "النسب والنشأة الأولى",

    "Peristiwa-Peristiwa Kunci & Peran Historis": "الأحداث المفصلية والدور التاريخي",

    "Peristiwa-Peristiwa Kunci &amp; Peran Historis": "الأحداث المفصلية والدور التاريخي",

    "Wafat & Warisan Sejarah": "الوفاة والإرث التاريخي",

    "Wafat &amp; Warisan Sejarah": "الوفاة والإرث التاريخي",

    "Latar Belakang & Kekuasaan di Yaman": "الخلفية والحكم في اليمن",

    "Latar Belakang &amp; Kekuasaan di Yaman": "الخلفية والحكم في اليمن",

    "Kematian & Dampak Sejarah": "الموت والأثر التاريخي",

    "Kematian &amp; Dampak Sejarah": "الموت والأثر التاريخي",

    "Table of Contents": "فهرس المحتويات",

    "Daftar Isi": "فهرس المحتويات",

    "Daftar isi": "فهرس المحتويات",

    "1. Menyaksikan Tanda-Tanda Alam Kenabian": "١. مشاهدة دلائل النبوة في الطبيعة",

    "2. Mengadakan Jamuan Khusus untuk Rombongan Quraisy": "٢. إقامة مأدبة لقافلة قريش",

    "3. Memeriksa Tanda Kenabian (Khatamun Nubuwwah)": "٣. فحص خاتم النبوة الشريف",

    "4. Peringatan Penuh Nasihat kepada Abu Thalib": "٤. تحذير أبي طالب ونصحه",

    "5. Melindungi Muhammad dari Ahli Kitab Lain": "٥. حماية محمد ﷺ من كيد المتربصين",

    "Awan dan Pohon yang Menaungi:": "الغمامة المظلة وانحناء الشجر:",

    "Inisiatif Jamuan:": "المبادرة بالمأدبة:",

    "Mencari Kehadiran Nabi:": "البحث عن النبي ﷺ:",

    "Wawancara dan Menguji Akhlak:": "مساءلة واختبار الأخلاق:",

    "Melihat Stempel Kenabian:": "معاينة خاتم النبوة:",

    "Konfirmasi Nasab:": "تأكيد النسب:",

    "Nasihat Memulangkan ke Makkah:": "النصيحة بالعودة إلى مكة:",

    "Menghalau Bahaya:": "رد الخطر وتأمين السلامة:"

  };



  const FACT_LABELS_EN = {

    "Wafat": "Died",

    "Lahir": "Born",

    "Wilayah": "Region",

    "Tahun": "Year",

    "Gelar": "Title",

    "Gelar / Julukan": "Title / Epithet",

    "Julukan": "Epithet",

    "Nama asli": "Birth Name",

    "Nama Lengkap": "Full Name",

    "Hubungan dengan Nabi": "Relation to the Prophet",

    "Orang Tua": "Parents",

    "Suku": "Tribe",

    "Era/Latar": "Era / Setting",

    "Peristiwa": "Event",

    "Tahun Peristiwa": "Event Year",

    "Bangunan Utama": "Key Landmark",

    "Kaitan Al-Qur'an": "Quranic Reference",

    "Surah terkait": "Related Surah",

    "Masa Kekuasaan": "Reign"

  };



  const FACT_LABELS_AR = {

    "Wafat": "الوفاة",

    "Lahir": "الميلاد",

    "Wilayah": "الإقليم / المنطقة",

    "Tahun": "السنة",

    "Gelar": "اللقب",

    "Gelar / Julukan": "اللقب والكنية",

    "Julukan": "الكنية / اللقب",

    "Nama asli": "الاسم الأصلي",

    "Nama Lengkap": "الاسم الكامل",

    "Hubungan dengan Nabi": "الصلة بالنبي ﷺ",

    "Orang Tua": "الوالدان",

    "Suku": "القبيلة",

    "Era/Latar": "العصر / المكان",

    "Peristiwa": "الحدث",

    "Tahun Peristiwa": "سنة الحدث",

    "Bangunan Utama": "المعلم الرئيسي",

    "Kaitan Al-Qur'an": "الشاهد القرآني",

    "Surah terkait": "السورة الكريمة",

    "Masa Kekuasaan": "مدة الحكم"

  };



  const PROTECTED_TERMS = [

    ["Musim Semi Arab", "Arab Spring"]

  ];



  const PACKS = { en: null, ar: null };

  const PACK_PROMISES = {};



  function detectInitialLang(){

    try{

      const q = new URLSearchParams(location.search).get("lang");

      if(q && SUPPORTED.includes(q.toLowerCase())) return q.toLowerCase();

      const s = localStorage.getItem(STORAGE_KEY);

      if(s && SUPPORTED.includes(s)) return s;

    }catch(e){}

    return "en";

  }



  let LANG = detectInitialLang();



  async function ensurePack(){

    if(LANG === "id") return {};

    if(PACKS[LANG]) return PACKS[LANG];

    if(!PACK_PROMISES[LANG]){

      const file = LANG === "ar" ? "i18n_ar.json" : "i18n_en.json";

      PACK_PROMISES[LANG] = fetch(file)

        .then(r=>r.ok?r.json():{})

        .catch(()=>({}))

        .then(j=>{ PACKS[LANG] = j||{}; return PACKS[LANG]; });

    }

    return PACK_PROMISES[LANG];

  }



  function sanitizeProtected(str){

    if(!str) return str;

    let out = String(str);

    for(const [bad, good] of PROTECTED_TERMS){

      out = out.split(bad).join(good);

    }

    return out;

  }



  function normalizeArabic(str){
    if(!str || typeof str !== "string") return str;
    return str.replace(/(\S+)/g, w => w.indexOf("\u0651") !== -1 ? w.replace(/[\u064B-\u0650\u0652]/g, "") : w);
  }

  function normalizeDomArabic(){
    if(typeof document === "undefined") return;
    const sels = '[lang="ar"], [dir="rtl"], .src-muq-ar, [style*="Changa"]';
    document.querySelectorAll(sels).forEach(root => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      let n;
      while((n = walker.nextNode())){
        if(n.nodeValue && n.nodeValue.indexOf("\u0651") !== -1){
          const clean = normalizeArabic(n.nodeValue);
          if(clean !== n.nodeValue) n.nodeValue = clean;
        }
      }
    });
  }

  function t(key, ...args){

    const dict = UI[LANG] || UI.en;

    const v = dict[key] !== undefined ? dict[key] : (UI.en[key] !== undefined ? UI.en[key] : key);

    const raw = typeof v === "function" ? v(...args) : v;

    return LANG === "ar" ? normalizeArabic(raw) : raw;

  }



  function translateFacts(str){

    if(!str || LANG === "id") return str;

    const map = LANG === "ar" ? FACT_LABELS_AR : FACT_LABELS_EN;

    return String(str).split("\n").map(line=>{

      const idx = line.indexOf(":");

      if(idx < 0) return line;

      const k = line.slice(0, idx).trim();

      const rest = line.slice(idx + 1);

      const nk = map[k] || k;

      return nk + " :" + rest;

    }).join("\n");

  }



  function translateMeta(str){

    if(!str || LANG === "id") return str;

    let out = translateFacts(str);

    if(LANG === "ar"){

      out = out

        .replace(/\babad ke-(\d+)\b/gi, "القرن $1 الميلادي")

        .replace(/\bMasehi\b/g, "م")

        .replace(/\b(\d+)\s*M\b/g, "$1 م")

        .replace(/\b(\d+)\s*H\b/g, "$1 هـ")

        .replace(/\bCE\b/g, "م")

        .replace(/\bAH\b/g, "هـ")

        .replace(/Monk in Busra, Syam/g, "راهب في بصرى الشام")

        .replace(/Ruler of Yemen/g, "حاكم اليمن وقائد جيش الفيل")

        .replace(/Grandfather of the Prophet ﷺ/g, "جد النبي ﷺ وزعيم قريش");

    } else {

      out = out

        .replace(/\babad ke-(\d+)\b/gi, "$1th century")

        .replace(/\bMasehi\b/g, "CE")

        .replace(/\b(\d+)\s*M\b/g, "$1 CE")

        .replace(/\b(\d+)\s*H\b/g, "$1 AH");

    }

    return out;

  }



  function translateBodyHeadings(str, targetLang){

    if(!str || targetLang === "id") return str;

    let out = String(str);

    const map = targetLang === "ar" ? HEADING_MAP_AR : HEADING_MAP_EN;

    for(const [srcH, tgtH] of Object.entries(map)){

      out = out.split(srcH).join(tgtH);

    }

    return out;

  }



  function era(e){

    if(!e) return e;

    if(LANG === "id") return e;

    const pack = PACKS[LANG] || PACKS.en;

    const ov = pack && pack.eras && pack.eras[e.id];

    const nm = (ov && ov.name) || (LANG === "en" ? e.name_en : e.name_ar) || e.name;

    const ds = (ov && ov.desc) || (LANG === "en" ? e.desc_en : e.desc_ar) || e.desc;

    return {

      ...e,

      name: LANG === "ar" ? normalizeArabic(nm) : nm,

      desc: LANG === "ar" ? normalizeArabic(ds) : ds

    };

  }



  function polity(p){

    if(!p) return p;

    if(LANG === "id") return p;

    const pack = PACKS[LANG] || PACKS.en;

    const ov = pack && pack.polities && pack.polities[p.id];

    return { ...p, name: (LANG === "en" ? p.name_en : p.name_ar) || ov || p.name };

  }



  function place(p){

    if(!p) return p;

    if(LANG === "id") return p;

    const key = p.slug || p.id;

    const pack = PACKS[LANG] || PACKS.en;

    const ov = pack && pack.places && pack.places[key];

    const name = (ov && ov.name) || (LANG === "en" ? p.name_en : p.name_ar) || p.name || p.n;

    const subtitle = (ov && ov.subtitle) || (LANG === "en" ? p.subtitle_en : p.subtitle_ar) || p.subtitle || p.s;

    const desc = (ov && ov.description) || (LANG === "en" ? p.description_en : p.description_ar) || p.description || p.t;

    let b = (ov && ov.body) || (LANG === "en" ? p.body_en : p.body_ar) || p.body || "";

    if(b && !(ov && ov.body)) b = translateBodyHeadings(b, LANG);

    const outPlace = {

      ...p,

      n: name,

      name: name,

      s: subtitle,

      subtitle: subtitle,

      t: desc,

      description: desc,

      facts: translateFacts((ov && ov.facts) || (LANG === "en" ? p.facts_en : p.facts_ar) || p.facts || ""),

      body: b

    };

    if(LANG === "ar"){
      ["n","name","s","subtitle","t","description","facts","body"].forEach(k => {
        if(typeof outPlace[k] === "string") outPlace[k] = normalizeArabic(outPlace[k]);
      });
    }

    return outPlace;

  }



  function event(ev){

    if(!ev) return ev;

    const slug = ev.slug || ev.id;

    if(LANG === "id"){

      return {

        ...ev,

        title: sanitizeProtected(ev.title),

        summary: sanitizeProtected(ev.summary)

      };

    }

    const pack = PACKS[LANG] || PACKS.en;

    const ov = pack && pack.events && pack.events[slug];

    const title = (ov && ov.title) || (LANG === "en" ? ev.title_en : ev.title_ar) || sanitizeProtected(ev.title);

    const summary = (ov && ov.summary) || (LANG === "en" ? ev.summary_en : ev.summary_ar) || sanitizeProtected(ev.summary);

    let b = (ov && ov.body) || (LANG === "en" ? ev.body_en : ev.body_ar) || ev.body || "";

    if(b && !(ov && ov.body)) b = translateBodyHeadings(b, LANG);

    const outEv = {

      ...ev,

      title: title,

      summary: summary,

      facts: translateFacts((ov && ov.facts) || (LANG === "en" ? ev.facts_en : ev.facts_ar) || ev.facts || ""),

      body: b

    };

    if(LANG === "ar"){
      ["title","summary","facts","body"].forEach(k => {
        if(typeof outEv[k] === "string") outEv[k] = normalizeArabic(outEv[k]);
      });
    }

    return outEv;

  }



  function findCharOverride(pack, c){
    if(!pack || !pack.characters || !c) return null;
    const chMap = pack.characters;
    const canon = resolveCharacterName(c.name || "");
    if(chMap[c.name]) return chMap[c.name];
    if(canon && chMap[canon]) return chMap[canon];
    if(c.name_id && chMap[c.name_id]) return chMap[c.name_id];
    if(c.name_en && chMap[c.name_en]) return chMap[c.name_en];
    for(const [k, val] of Object.entries(chMap)){
      if(resolveCharacterName(k) === canon) return val;
    }
    return null;
  }

  function char(c){

    if(!c) return c;

    if(LANG === "id") return c;

    const pack = PACKS[LANG] || PACKS.en;

    const ov = findCharOverride(pack, c);

    

    const locRole = (ov && ov.role) || (LANG === "en" ? c.role_en : c.role_ar);

    const role = locRole || "";

    const meta = (ov && ov.meta) || (LANG === "en" ? c.meta_en : c.meta_ar) || translateMeta(c.meta || "");

    const facts = (ov && ov.facts) || (LANG === "en" ? c.facts_en : c.facts_ar) || translateFacts(c.facts || "");

    

    // Check if the pack has a dedicated localized body

    let bodyHtml = (ov && ov.body) || (LANG === "en" ? c.body_en : c.body_ar);

    if(!bodyHtml){

      bodyHtml = translateBodyHeadings(c.body || "", LANG);

    }



    const outChar = {

      ...c,

      name: (ov && ov.name) || (LANG === "en" ? c.name_en : c.name_ar) || c.name,

      role: role,

      meta: meta,

      facts: facts,

      body: bodyHtml

    };

    if(LANG === "ar"){
      ["name","role","meta","facts","body"].forEach(k => {
        if(typeof outChar[k] === "string") outChar[k] = normalizeArabic(outChar[k]);
      });
    }

    return outChar;

  }



  function readingMins(text){

    const plain = String(text || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

    if(!plain) return 1;

    const words = plain.split(" ").filter(Boolean).length;

    return Math.max(1, Math.ceil(words / 180));

  }



  function setLang(next){

    if(!SUPPORTED.includes(next)) return;

    LANG = next;

    try{ localStorage.setItem(STORAGE_KEY, LANG); }catch(e){}

    document.documentElement.lang = LANG;

    if(LANG === "ar"){

      document.documentElement.setAttribute("dir", "rtl");

    } else {

      document.documentElement.setAttribute("dir", "ltr");

    }

    window.dispatchEvent(new CustomEvent("alfa:langchange", { detail: { lang: LANG } }));

  }



  function toggleLang(){

    const idx = SUPPORTED.indexOf(LANG);

    setLang(SUPPORTED[(idx + 1) % SUPPORTED.length]);

  }



  // Initial boot direction and language

  document.documentElement.lang = LANG;

  if(LANG === "ar"){

    document.documentElement.setAttribute("dir", "rtl");

  } else {

    document.documentElement.setAttribute("dir", "ltr");

  }



  const ISLAMIC_SOURCES = [

    {

      id: "quran-com",

      cat: "catQuran",

      name: "Quran.com",

      url: "https://quran.com",

      scope: "scopeGlobal",

      origin: "global",

      desc_id: "Teks Mushaf Utsmani, terjemahan puluhan bahasa, murattal qari internasional, dan komparasi tafsir (Ibnu Katsir, As-Sa'di, Al-Baghawi).",

      desc_en: "Authentic Uthmani Quran text, international translations, multi-reciter audio, and classical tafsir comparisons (Ibn Kathir, Sa'di, Baghawi).",

      desc_ar: "نص المصحف العثماني برواية حفص وتراجم متعددة وتلاوات مشاهير القراء ومقارنة أمهات كتب التفسير (ابن كثير، السعدي، البغوي)."

    },

    {

      id: "quran-kemenag",

      cat: "catQuran",

      name: "Qur'an Kemenag RI",

      url: "https://quran.kemenag.go.id",

      scope: "scopeID",

      origin: "id",

      desc_id: "Mushaf Standar Indonesia resmi Kementerian Agama RI, dilengkapi Terjemahan Resmi Kemenag, Tafsir Ringkas, dan Tafsir Tahlili.",

      desc_en: "Official Indonesian Standard Quran by Ministry of Religious Affairs (Kemenag RI), featuring official Indonesian translations and analytical tafsir.",

      desc_ar: "المصحف الإندونيسي القياسي الرسمي لوزارة الشؤون الدينية بجمهورية إندونيسيا، مزوداً بالترجمة الرسمية والتفسير الوجيز والتحليلي."

    },

    {

      id: "sunnah-com",

      cat: "catHadith",

      name: "Sunnah.com",

      url: "https://sunnah.com",

      scope: "scopeGlobal",

      origin: "sa",

      desc_id: "Koleksi digital 9 Kitab Induk Hadits (Kutubus Sittah, Muwatta Malik, Musnad Ahmad, Sunan ad-Darimi) dengan penomoran standar internasional.",

      desc_en: "Comprehensive digital archive of the 9 major hadith collections (Kutub al-Sittah, Muwatta, Musnad Ahmad) with international numbering.",

      desc_ar: "الموسوعة الرقمية المعتمدة للكتب التسعة الكبرى في الحديث النبوي الشريف (الكتب الستة، موطأ مالك، مسند أحمد، سنن الدارمي) مع الترقيم العالمي."

    },

    {

      id: "dorar-net",

      cat: "catHadith",

      name: "Dorar.net (Al-Durar As-Saniyyah)",

      url: "https://dorar.net/hadith",

      scope: "scopeGlobal",

      origin: "sa",

      desc_id: "Ensiklopedia verifikasi keshahihan hadits (takhrij & tahqiq) paling otoritatif di dunia Islam di bawah bimbingan para muhadditsin.",

      desc_en: "The foremost digital encyclopedia for hadith authentication, chain analysis (sanad), and narrator evaluation (takhrij & tahqiq).",

      desc_ar: "الموسوعة الحديثية الكبرى بموقع الدرر السنية لتحقيق وتخريج الأحاديث النبوية وبيان درجتها صحة وضعفاً بإشراف كبار المحققين."

    },

    {

      id: "shamela-ws",

      cat: "catTarikh",

      name: "Shamela.ws (Al-Maktabah as-Syamilah)",

      url: "https://shamela.ws",

      scope: "scopeGlobal",

      origin: "sa",

      desc_id: "Perpustakaan digital kitab klasik Arab terlengkap: Tarikh ath-Thabari, Al-Bidayah wan-Nihayah Ibnu Katsir, Sirah Ibnu Hisyam, Al-Kamil Ibnul Atsir, dan Futuh al-Buldan.",

      desc_en: "Premier digital library of classical Arabic chronicles: Tarikh al-Tabari, Al-Bidayah wa al-Nihayah by Ibn Kathir, Sirah Ibn Hisham, and Al-Kamil fi al-Tarikh.",

      desc_ar: "المكتبة الرقمية الشاملة لأمهات المصادر الإسلامية: تاريخ الطبري، البداية والنهاية، السيرة النبوية لابن هشام، الكامل في التاريخ، وفتوح البلدان."

    },

    {

      id: "siyar-alam-nubala",

      cat: "catTarikh",

      name: "Siyar A'lam an-Nubala' (Adz-Dzahabi)",

      url: "https://shamela.ws/book/10906",

      scope: "scopeGlobal",

      origin: "sa",

      desc_id: "Mahakarya biografi thabaqat ulama, sahabat, dan tabiin karya Imam adz-Dzahabi; memuat rekaman rinci sirah nabawiyyah, syama'il (karakter & kemuliaan Nabi ﷺ), serta kiprah tokoh-tokoh besar peradaban Islam.",

      desc_en: "Premier biographical compendium of Companions and scholars by Imam al-Dhahabi, encompassing detailed prophetic biography, sublime traits (shama'il), and civilization figures.",

      desc_ar: "الموسوعة التراجمية الكبرى للإمام شمس الدين الذهبي، تشتمل على السيرة النبوية والشمائل الشريفة وسير الصحابة والتابعين وأعلام الأمة عبر العصور."

    },

    {

      id: "rahiq-makhtum",

      cat: "catTarikh",

      name: "Ar-Rahiq al-Makhtum (Al-Mubarakfuri)",

      url: "https://archive.org/search?query=Ar-Rahiq+al-Makhtum",

      scope: "scopeGlobal",

      origin: "sa",

      desc_id: "Kitab sirah nabawiyyah pemenang penghargaan dunia Rabithah Alam Islami karya Syaikh Shafiyyu ar-Rahman al-Mubarakfuri; rujukan kronologi peristiwa dakwah dan ekspedisi Rasulullah ﷺ.",

      desc_en: "Celebrated award-winning prophetic biography by Sheikh Safiur Rahman al-Mubarakpuri; premier chronological reference for prophetic milestones.",

      desc_ar: "الرحيق المختوم لفضيلة الشيخ صفي الرحمن المباركفوري، الكتاب الحائز على الجائزة الأولى لرابطة العالم الإسلامي في السيرة النبوية المطهرة."

    },

    {

      id: "suwar-hayat-sahabah",

      cat: "catTarikh",

      name: "Suwar min Hayatis Sahabah (Dr. Al-Basya)",

      url: "https://archive.org/search?query=Suwar+min+Hayat+al-Sahabah",

      scope: "scopeGlobal",

      origin: "sa",

      desc_id: "Koleksi biografi sastrawi 65 sahabat Rasulullah ﷺ karya Dr. Abdurrahman Ra'fat al-Basya; menyajikan keteladanan akhlak, keteguhan akidah, dan pengorbanan para sahabat.",

      desc_en: "Distinguished literary biographies of 65 Companions of the Prophet by Dr. Abdurrahman Ra'fat al-Basha, highlighting their faith, honor, and sacrifice.",

      desc_ar: "صور من حياة الصحابة للدكتور عبد الرحمن رأفت الباشا، يوثق مواقف البطولة والإيمان والقدوة لـ 65 صحابياً من خيرة رجال الأمة."

    },

    {

      id: "nurul-yaqin",

      cat: "catTarikh",

      name: "Khulashah Nurul Yaqin (Umar Abdul Jabbar)",

      url: "https://archive.org/search?query=Khulasah+Nur+al-Yaqin",

      scope: "scopeGlobal",

      origin: "sa",

      desc_id: "Ringkasan sirah nabawiyyah tiga jilid legendaris pesantren karya Syaikh Umar Abdul Jabbar; menyajikan kronologi padat dan pemetaan peristiwa dakwah secara runtut.",

      desc_en: "Renowned three-volume prophetic biography curriculum by Sheikh Umar Abdul Jabbar, providing concise chronology and milestone mapping.",

      desc_ar: "خلاصة نور اليقين في سيرة سيد المرسلين للشيخ عمر عبد الجبار، منهج دراسي جامع وموجز في ترتيب أحداث السيرة وغزواتها."

    },

    {

      id: "khastara-perpusnas",

      cat: "catNusantara",

      name: "Khastara Perpusnas RI",

      url: "https://khastara.perpusnas.go.id",

      scope: "scopeID",

      origin: "id",

      desc_id: "Koleksi digital naskah kuno Kesultanan Islam di Nusantara (Samudera Pasai, Aceh, Demak, Banten, Mataram Islam, Gowa-Tallo, Ternate-Tidore).",

      desc_en: "National Library of Indonesia's digital repository of ancient Islamic sultanate manuscripts across the Malay Archipelago.",

      desc_ar: "الأرشيف الرقمي للمكتبة الوطنية الإندونيسية لمخطوطات السلطنات الإسلامية القديمة في جنوب شرق آسيا."

    },

    {

      id: "lektur-kemenag",

      cat: "catNusantara",

      name: "Puslitbang Lektur Kemenag RI",

      url: "https://lektur.kemenag.go.id",

      scope: "scopeID",

      origin: "id",

      desc_id: "Inventarisasi dan riset naskah klasik keagamaan Nusantara, mushaf kuno, dan manuskrip ulama kepulauan Indonesia.",

      desc_en: "Research repository of classical Indonesian Islamic literature, ancient Quran manuscripts, and archipelago ulama treatises.",

      desc_ar: "مركز أبحاث وتوثيق التراث الديني والمصاحف العتيقة ومخطوطات كبار علماء الأرخبيل الإندونيسي."

    },

    {

      id: "archnet",

      cat: "catAcad",

      name: "ArchNet (MIT & Aga Khan Trust)",

      url: "https://archnet.org",

      scope: "scopeGlobal",

      origin: "global",

      desc_id: "Dokumentasi arsitektur, situs perkotaan bersejarah, monumen, dan lanskap geografi dunia Islam inisiasi MIT dan Aga Khan Trust for Culture.",

      desc_en: "Authoritative open-access digital archive on Islamic architecture, urbanism, historic cities, and monuments by MIT and AKTC.",

      desc_ar: "الأرشيف الرقمي المفتوح للعمارة الإسلامية وتاريخ المدن والمعالم الحضارية، بمبادرة من معهد ماساتشوستس للتقنية ومؤسسة الآغا خان."

    },

    {

      id: "brill-ei",

      cat: "catAcad",

      name: "Encyclopaedia of Islam (Brill)",

      url: "https://referenceworks.brillonline.com/browse/encyclopaedia-of-islam-3",

      scope: "scopeGlobal",

      origin: "global",

      desc_id: "Karya referensi akademis internasional paling komprehensif mengenai sejarah, geografi, dan peradaban dunia Islam.",

      desc_en: "The standard international academic encyclopedia covering history, geography, institutions, and civilization of the Islamic world.",

      desc_ar: "الموسوعة الأكاديمية العالمية القياسية لتاريخ وجغرافيا ومؤسسات وحضارة العالم الإسلامي الصادرة عن دار بريل العريقة."

    }

  ];



  

  // ==========================================

  // ALFA HISTORY GRAPH & SEMANTIC ENGINE (v1.8.0)

  // ==========================================

  const HISTORICAL_GRAPH = {

    events_to_chars: {

      "570-tahun-gajah": [

        { name: "Abdul Muthalib", role: "Sayyid Quraisy dan Penjaga Ka'bah", role_en: "Chief of Quraysh & Custodian of the Ka'bah", role_ar: "سيد قريش وسادن الكعبة المشرفة" },

        { name: "Abrahah", role: "Panglima Pasukan Gajah dari Yaman", role_en: "Commander of the Elephant Expedition from Yemen", role_ar: "قائد جيش الفيل القادم من اليمن" }

      ],

      "570-kelahiran-nabi": [

        { name: "Abdul Muthalib", role: "Kakek dan Pengasuh Pertama", role_en: "Grandfather & First Guardian", role_ar: "الجد والكافل الأول" }

      ],

      "572-disusui-siti-halimah": [

        { name: "Halimah as-Sa’diyah", role: "Ibu Susuan di Perkampungan Bani Sa'ad", role_en: "Wet Nurse in the Valley of Banu Sa'd", role_ar: "المرضعة في ديار بني سعد" }

      ],

      "576-yatim-piatu": [

        { name: "Abdul Muthalib", role: "Kakek Pengasuh Pasca Wafatnya Ibunda Aminah", role_en: "Guardian After the Passing of Mother Aminah", role_ar: "كافل النبي ﷺ بعد وفاة والدته آمنة" }

      ],

      "582-bertemu-bahira": [

        { name: "Bahira", role: "Rahib Penemu Tanda Kenabian di Busra", role_en: "Monk Who Recognized the Prophetic Signs at Busra", role_ar: "الراهب الذي عاين علامات النبوة في بصرى" },

        { name: "Abi Thalib", role: "Paman Pemimpin Kafilah Dagang ke Syam", role_en: "Uncle Leading the Trade Caravan to Syria", role_ar: "العم قائد قافلة التجارة إلى الشام" }

      ],

      "595-menikah-dengan-khadijah": [

        { name: "Abi Thalib", role: "Paman yang Menyampaikan Khutbah Lamaran", role_en: "Uncle Who Delivered the Marriage Oration", role_ar: "العم الذي ألقى خطبة النكاح" }

      ],

      "605-peletakan-hajar-aswad": [],

      "610-wahyu-pertama": [

        { name: "Waraqah bin Naufal", role: "Ulama Ahli Kitab Saksi Namus al-Akbar", role_en: "Scholar of Scripture Who Testified to the First Revelation", role_ar: "العالم بالكتاب الشاهد لنزول الوحي الأول" }

      ],

      "613-dakwah-terang-terangan": [

        { name: "Ali bin Abi Thalib", role: "Pemuda Pertama yang Mengikrarkan Dukungan", role_en: "First Youth to Pledge Open Support", role_ar: "أول فتى أعلن نصرته للدعوة" },

        { name: "Abu Lahab", role: "Penentang Keras Dakwah Terbuka di Bukit Shafa", role_en: "Fierce Opponent of Open Da'wah at Mount Safa", role_ar: "أشد المعارضين للدعوة الجهرية عند جبل الصفا" }

      ],

      "615-hijrah-ke-habasyah": [

        { name: "Utsman bin Affan", role: "Pemimpin Rombongan Muhajirin Pertama ke Habasyah", role_en: "Leader of the First Emigrant Group to Abyssinia", role_ar: "قائد طليعة المهاجرين إلى الحبشة" }

      ],

      "616-hamzah-dan-umar-masuk-islam": [

        { name: "Hamzah bin Abdul Muthalib", role: "Singa Allah dan Pelindung Dakwah Terbuka", role_en: "Lion of Allah & Protector of Public Preaching", role_ar: "أسد الله وحامي الدعوة الجهرية" },

        { name: "Umar bin Khattab", role: "Al-Faruq Penegas Barisan Shalat Terang-terangan", role_en: "Al-Faruq Who Strengthened Public Prayer at the Ka'bah", role_ar: "الفاروق الذي أعز صفوف الصلاة علانية" }

      ],

      "619-pemboikotan-dan-tahun-duka-cita": [

        { name: "Abi Thalib", role: "Pemimpin Perlindungan Bani Hasyim di Syi'ib", role_en: "Protector of Banu Hashim During the Boycott in the Ravine", role_ar: "حامي بني هاشم أثناء حصار الشعب" }

      ],

      "621-isra-dan-miraj": [

        { name: "Abu Bakar Asshiddiq", role: "Peraih Gelar Ash-Shiddiq atas Pembenaran Mukjizat", role_en: "Earned the Title al-Siddiq for Immediate Affirmation", role_ar: "صاحب لقب الصديق لتصديقه الفوري بالمعجزة" }

      ],

      "622-hijrah-ke-madinah": [

        { name: "Abu Bakar Asshiddiq", role: "Teman Seperjalanan di Gua Tsur", role_en: "Companion in the Cave of Thawr During the Hijrah", role_ar: "الرفيق في غار ثور أثناء الهجرة" },

        { name: "Ali bin Abi Thalib", role: "Penebus Ranjang Tidur Nabi di Makkah", role_en: "Took the Prophet's Bed in Mecca to Shield the Escape", role_ar: "فادي فراش النبي ﷺ ليلة الهجرة في مكة" }

      ],

      "624-perang-badar": [

        { name: "Ali bin Abi Thalib", role: "Panglima dan Pahlawan Duel Mubarazah", role_en: "Champion of the Opening Duel at Badr", role_ar: "فارس المبارزة الأول يوم بدر" },

        { name: "Hamzah bin Abdul Muthalib", role: "Singa Allah Penakluk Pembesar Quraisy", role_en: "Lion of Allah & Victorious Duellist at Badr", role_ar: "أسد الله وقاهر صناديد قريش يوم بدر" },

        { name: "Abu Bakar Asshiddiq", role: "Penjaga Tenda Komando Rasulullah (Arisy)", role_en: "Guardian of the Command Shelter at Badr (al-Arish)", role_ar: "حارس العريش ومقر القيادة يوم بدر" },

        { name: "Sa’ad bin Abi Waqqash", role: "Pemanah Ulung Pertahanan Muslimin", role_en: "Master Archer in the Defense of the Believers", role_ar: "أحد أمهر رماة المسلمين يوم بدر" },

        { name: "Bilal bin Rabah", role: "Penuntut Keadilan atas Majikan Zalim Umayyah", role_en: "Confronted Former Oppressor Umayyah ibn Khalaf", role_ar: "المنتصر بالحق على سيده السابق أمية بن خلف" },

        { name: "Abu Jahal", role: "Panglima Tertinggi Pasukan Musyrik yang Tewas", role_en: "Quraysh Commander Slain on the Field of Badr", role_ar: "قائد جيش المشركين الصريع يوم بدر" }

      ],

      "625-perang-uhud": [

        { name: "Hamzah bin Abdul Muthalib", role: "Sayyidus Syuhada yang Syahid di Medan Uhud", role_en: "Master of Martyrs Who Fell at Uhud", role_ar: "سيد الشهداء الذي استشهد في ميدان أحد" },

        { name: "Ali bin Abi Thalib", role: "Pembawa Panji Perang dan Perisai Rasulullah", role_en: "Standard-Bearer & Shield in the Battle of Uhud", role_ar: "حامل اللواء والمدافع عن النبي ﷺ يوم أحد" },

        { name: "Abu Bakar Asshiddiq", role: "Pembela Garis Depan Penyelamat Komando", role_en: "Frontline Defender Protecting the Center at Uhud", role_ar: "المدافع في الصفوف الأمامية يوم أحد" },

        { name: "Abu Ubaidah bin al-Jarrah", role: "Pencabut Rantai Zirah Besi dari Pipi Nabi", role_en: "Extracted the Helmet Rings Embedded at Uhud", role_ar: "الذي نزع حلقات المغفر يوم أحد" },

        { name: "Khalid bin Walid", role: "Panglima Kavaleri Musyrik Sebelum Masuk Islam", role_en: "Quraysh Cavalry Commander Prior to Embracing Islam", role_ar: "قائد فرسان المشركين قبل إسلامه" }

      ],

      "627-perang-khandaq": [

        { name: "Ali bin Abi Thalib", role: "Penakluk Pendekar Ahzab Amr bin Abdi Wudd", role_en: "Defeated the Confederate Champion Amr ibn Abd Wudd", role_ar: "قاهر فارس الأحزاب عمرو بن عبد ود" },

        { name: "Abu Bakar Asshiddiq", role: "Penjaga Pos Pertahanan Sektor Parit Madinah", role_en: "Defender of a Garrison Sector Along the Trench", role_ar: "المرابط على أحد قطاعات الخندق بالمدينة" },

        { name: "Umar bin Khattab", role: "Pengawas Jalur Sempit Garis Parit Pertahanan", role_en: "Commander Guarding the Narrow Breach of the Trench", role_ar: "المراقب لثغرة الخندق الضيقة" }

      ],

      "628-perjanjian-hudaibiyah": [

        { name: "Utsman bin Affan", role: "Utusan Negosiasi Masuk Kota Makkah dan Pemicu Baiat Ridhwan", role_en: "Envoy to Mecca Whose Detention Sparked Bay'at al-Ridwan", role_ar: "سفير التفاوض إلى مكة ومفجر بيعة الرضوان" },

        { name: "Ali bin Abi Thalib", role: "Juru Tulis Naskah Perjanjian Damai Hudaibiyah", role_en: "Scribe of the Treaty of Hudaybiyyah", role_ar: "كاتب نص صلح الحديبية" },

        { name: "Abu Bakar Asshiddiq", role: "Penasihat Setia Penenang Jiwa Para Sahabat", role_en: "Steadfast Counselor Who Reassured the Companions", role_ar: "المستشار الصادق ومثبت قلوب الصحابة" },

        { name: "Umar bin Khattab", role: "Sahabat Kritis yang Meminta Kepastian Kemenangan Nyata", role_en: "Questioned the Terms Before Embracing Their Wisdom", role_ar: "المحاور السائل عن حكمة بنود الصلح" }

      ],

      "630-fathu-makkah": [

        { name: "Khalid bin Walid", role: "Panglima Sayap Kanan Penembus Masuk Kota Makkah", role_en: "Commander of the Right Wing Entering Mecca", role_ar: "قائد الميمنة الداخلة إلى مكة" },

        { name: "Abu Bakar Asshiddiq", role: "Sahabat Pendamping Masuk Masjidil Haram", role_en: "Companion Accompanying the Entry Into Mecca", role_ar: "الرفيق الملازم عند دخول المسجد الحرام" },

        { name: "Bilal bin Rabah", role: "Muadzin Pertama Penyeru Adzan dari Atas Ka'bah", role_en: "First Muezzin Calling the Adhan Atop the Ka'bah", role_ar: "أول مؤذن يرفع الأذان من فوق الكعبة" },

        { name: "Ali bin Abi Thalib", role: "Pembantu Penurunan dan Penghancuran Berhala Ka'bah", role_en: "Assisted in Clearing the Idols Around the Ka'bah", role_ar: "المشارك في إزالة الأصنام وتحطيمها حول الكعبة" }

      ],

      "632-haji-wada-dan-wafatnya-nabi": [

        { name: "Abu Bakar Asshiddiq", role: "Imam Shalat Sahabat dan Pembaca Khutbah Peneguh Umat", role_en: "Led Final Prayers & Delivered the Steadfast Address", role_ar: "إمام الصلاة وخطيب تثبيت الأمة عند الوفاة" },

        { name: "Ali bin Abi Thalib", role: "Pengurus Pemakaman Rasulullah di Kamar Aisyah", role_en: "Overseer of the Funeral Rites in Medina", role_ar: "المتولي لتجهيز الدفن الشريف بالمدينة المنورة" }

      ],

      "632-abu-bakar-menjadi-khalifah": [

        { name: "Abu Bakar Asshiddiq", role: "Khalifah Pertama Pengukuh Fondasi Daulah", role_en: "First Caliph Who Consolidated the Early Caliphate", role_ar: "أول الخلفاء الراشدين ومثبت أركان الدولة" },

        { name: "Umar bin Khattab", role: "Pembaiat Pertama di Saqifah Bani Sa'idah", role_en: "First to Pledge Allegiance at Saqifah Bani Sa'idah", role_ar: "أول المبايعين في سقيفة بني ساعدة" },

        { name: "Abu Ubaidah bin al-Jarrah", role: "Amien al-Ummah yang Menyepakati Baiat Saqifah", role_en: "Amin al-Ummah Who Helped Unify the Saqifah Pledge", role_ar: "أمين الأمة المشارك في اجتماع السقيفة" }

      ],

      "636-penaklukan-syam-dan-yarmuk": [

        { name: "Khalid bin Walid", role: "Panglima Manuver Kavaleri Penentu Kehancuran Bizantium", role_en: "Mastermind of the Decisive Cavalry Encirclement at Yarmouk", role_ar: "مهندس المناورة الفروسية الحاسمة في اليرموك" },

        { name: "Abu Ubaidah bin al-Jarrah", role: "Amirul Jaisy (Panglima Tertinggi) Muslimin di Syam", role_en: "Commander-in-Chief (Amir al-Jaysh) of Forces in Syria", role_ar: "أمير الجيوش الإسلامية في بلاد الشام" }

      ],

      "636-qadisiyyah-dan-madain": [

        { name: "Sa’ad bin Abi Waqqash", role: "Panglima Tertinggi Penakluk Imperium Persia Sasania", role_en: "Supreme Commander Who Victory Over Sassanian Forces", role_ar: "القائد العام الفاتح في معركة القادسية" }

      ],

      "637-penyerahan-baitul-maqdis": [

        { name: "Umar bin Khattab", role: "Amirul Mukminin Penerima Kunci Al-Quds dan Pembuat Piagam Aelia", role_en: "Caliph Who Received the Keys of Jerusalem & Issued the Covenant", role_ar: "أمير المؤمنين مستلم مفاتيح القدس ومسطر العهدة العمرية" },

        { name: "Abu Ubaidah bin al-Jarrah", role: "Pengepung Kota Baitul Maqdis Hingga Menyerah Damai", role_en: "Led the Siege Resulting in Peaceful Capitulation", role_ar: "قائد حصار بيت المقدس حتى التسليم السلمي" }

      ],

      "639-penaklukan-mesir": [

        { name: "Amr bin Ash", role: "Panglima Penakluk Benteng Babilon dan Pembebas Mesir", role_en: "Commander Who Captured Babylon Fortress & Liberated Egypt", role_ar: "فاتح حصن بابليون ومؤسس الفسطاط في مصر" }

      ],

      "644-wafatnya-umar-utsman-menjadi-khalifah": [

        { name: "Umar bin Khattab", role: "Amirul Mukminin Syahid Pembentuk Dewan Syura Enam Tokoh", role_en: "Martyred Caliph Who Established the Six-Member Electoral Council", role_ar: "الخليفة الشهيد ومؤسس مجلس الشورى الستي" },

        { name: "Utsman bin Affan", role: "Khalifah Ketiga Terpilih Hasil Musyawarah Syura", role_en: "Third Caliph Elected by the Shura Council", role_ar: "ثالث الخلفاء الراشدين المختار عبر الشورى" }

      ],

      "650-mushaf-utsmani": [

        { name: "Utsman bin Affan", role: "Pemrakarsa Penyatuan Bacaan dan Penggandaan Mushaf Induk Al-Qur'an", role_en: "Initiator of the Unified Standard Uthmani Codex", role_ar: "جامع الأمة على المصحف الإمام الموحّد" }

      ],

      "656-wafatnya-utsman-ali-menjadi-khalifah": [

        { name: "Utsman bin Affan", role: "Dzun Nurain yang Wafat Syahid Mempertahankan Keutuhan Umat", role_en: "Martyred Third Caliph Who Refused Civil Bloodshed in Medina", role_ar: "ذو النورين الشهيد الصابر حقناً لدماء المسلمين" },

        { name: "Ali bin Abi Thalib", role: "Khalifah Keempat yang Menerima Baiat di Masjid Nabawi", role_en: "Fourth Caliph Receiving Allegiance in Medina", role_ar: "رابع الخلفاء الراشدين المبايع في المسجد النبوي" }

      ],

      "656-perang-jamal-dan-shiffin": [

        { name: "Ali bin Abi Thalib", role: "Amirul Mukminin Penjaga Garis Hukum dan Persatuan Negara", role_en: "Caliph Striving to Preserve Law & Unity of the Ummah", role_ar: "أمير المؤمنين الساعي لصون وحدة الدولة والنظام" },

        { name: "Mu’awiyah bin Abi Sufyan", role: "Gubernur Syam Penuntut Qishash Darah Utsman", role_en: "Governor of Syria Demanding Retribution for Uthman's Assassination", role_ar: "والي الشام المطالب بالقصاص لدم عثمان" },

        { name: "Amr bin Ash", role: "Juru Runding Pihak Syam dalam Majelis Tahkim", role_en: "Chief Syrian Negotiator at the Arbitration Council", role_ar: "كبير مفاوضي أهل الشام في التحكيم" }

      ],

      "661-wafatnya-ali": [

        { name: "Ali bin Abi Thalib", role: "Amirul Mukminin yang Gugur Syahid Ditikam Ibnu Muljam", role_en: "Martyred Caliph Struck Down in Kufa Mosque", role_ar: "أمير المؤمنين الذي استشهد طعناً في مسجد الكوفة" },

        { name: "Hasan bin Ali", role: "Putra Tertua yang Menerima Wasiat Kepemimpinan Sementara", role_en: "Eldest Son Who Assumed Interim Leadership in Kufa", role_ar: "السبط الأكبر المبايع بعد استشهاد أبيه بالكوفة" }

      ],

      "661-daulah-umayyah-berdiri": [

        { name: "Mu’awiyah bin Abi Sufyan", role: "Pendiri Daulah Umayyah Berpusat di Damaskus", role_en: "Founder of the Umayyad Caliphate in Damascus", role_ar: "مؤسس الدولة الأموية وعاصمتها دمشق" },

        { name: "Hasan bin Ali", role: "Sayyidul Ummah Tokoh Perdamaian Amul Jama'ah (Tahun Persatuan)", role_en: "Peacemaker Who Unified the Community in the Year of Unity (41 AH)", role_ar: "سيد شباب أهل الجنة وصانع صلح عام الجماعة" }

      ],

      "680-peristiwa-karbala": [

        { name: "Husain bin Ali", role: "Sayyidus Syuhada yang Gugur Syahid di Padang Karbala", role_en: "Grandson of the Prophet Who Fell at Karbala", role_ar: "سبط النبي ﷺ وسيد الشهداء في كربلاء" },

        { name: "Yazid bin Mu’awiyah", role: "Khalifah Kedua Umayyah Pemegang Takhta Damaskus", role_en: "Second Umayyad Caliph Reigning from Damascus", role_ar: "ثاني خلفاء بني أمية في دمشق" }

      ],

      "685-masa-abdul-malik": [

        { name: "Abdul Malik bin Marwan", role: "Khalifah Pemersatu Negeri dan Pembangun Kubah Shakhrah", role_en: "Caliph Who Reunified the Realm & Commissioned the Dome of the Rock", role_ar: "موحد الأمة الأموية وباني قبة الصخرة" },

        { name: "Al-Hajjaj bin Yusuf ats-Tsaqafi", role: "Gubernur Penumpas Perlawanan Makkah dan Irak", role_en: "Governor Who Crushed Revolts Across the Hijaz and Iraq", role_ar: "والي العراق والحجاز ومخمد الثورات" },

        { name: "Abdullah bin az-Zubair", role: "Khalifah Makkah Pembela Otonomi Hijaz Selama 9 Tahun", role_en: "Caliph in Mecca Defending Hijaz Autonomy for Nine Years", role_ar: "خليفة مكة والمدافع عن الحجاز تسع سنوات" }

      ],

      "711-penaklukan-andalusia": [

        { name: "Thariq bin Ziyad", role: "Panglima Penyeberang Selat Jabal Thariq (Gibraltar)", role_en: "Commander Who Crossed the Strait of Gibraltar into Iberia", role_ar: "القائد الذي عبر مضيق جبل طارق فاتحاً للأندلس" },

        { name: "Musa bin Nushair", role: "Gubernur Ifriqiyah Pemimpin Pasukan Bala Bantuan ke Toledo", role_en: "Governor of Ifriqiya Who Reinforced the Iberian Campaign", role_ar: "والي إفريقية وقائد المدد المتجه إلى طليطلة" }

      ],

      "712-islam-masuk-ke-sindh": [

        { name: "Muhammad bin Qasim ats-Tsaqafi", role: "Panglima Muda 17 Tahun Pembawa Islam ke Lembah Indus", role_en: "Young Commander Who Opened Sindh in the Indus Valley", role_ar: "القائد الشاب فاتح بلاد السند ووادي السند" }

      ],

      "717-pengepungan-konstantinopel-kedua": [

        { name: "Maslamah bin Abdul Malik", role: "Panglima Pengepung Darat dan Laut Selat Bosphorus", role_en: "Commander Leading the Land and Naval Siege of Constantinople", role_ar: "قائد حصار القسطنطينية براً وبحراً" },

        { name: "Umar bin Abdul Aziz", role: "Khalifah Adil yang Menarik Mundur Pasukan Demi Menjaga Jiwa Prajurit", role_en: "Just Caliph Who Ordered Tactical Withdrawal to Spare His Troops", role_ar: "الخليفة العادل الذي سحب الجيش حفاظاً على أرواح الجند" }

      ],

      "732-pertempuran-tours-poitiers": [

        { name: "Abdurrahman al-Ghafiqi", role: "Gubernur Mujahid Andalusia yang Gugur di Balath asy-Syuhada", role_en: "Andalusian Governor Who Fell at the Battle of Tours", role_ar: "والي الأندلس الشهيد في بلاط الشهداء" }

      ],

      "756-emirat-cordoba-berdiri": [

        { name: "Abdurrahman ad-Dakhil", role: "Shaqr Quraisy (Rajawali Quraisy) Pendiri Keamiran Cordoba", role_en: "Falcon of Quraysh Who Founded the Emirate of Cordoba", role_ar: "صقر قريش ومؤسس إمارة قرطبة الأموية" }

      ]

    },



    semantic_intents: [

      {

        id: "badr-heroes",

        triggers: ["sahabat", "tokoh", "ikut", "perang badar", "badr", "ahli badar", "siapa saja"],

        all_match: ["badar"],

        title_id: "Para Sahabat yang Berjuang di Perang Badar (624 M)",

        title_en: "Companions Who Fought at the Battle of Badr (624 CE)",

        title_ar: "أعلام وصحابة غزوة بدر الكبرى (٢ هـ)",

        desc_id: "Perang pembeda (Yaum al-Furqan) yang menentukan tonggak berdirinya kekuatan peradaban Islam di Madinah.",

        desc_en: "The decisive Day of Criterion (Yawm al-Furqan) that established the Islamic presence in Medina.",

        desc_ar: "يوم الفرقان الذي فرّق الله به بين الحق والباطل وثبّت صرح الدولة النبوية في المدينة المنورة.",

        entities: [

          { type: "characters", id: "Ali bin Abi Thalib", role: "Panglima & Juara Tanding Mubarazah" },

          { type: "characters", id: "Hamzah bin Abdul Muthalib", role: "Singa Allah & Pahlawan Badar" },

          { type: "characters", id: "Abu Bakar Asshiddiq", role: "Penjaga Tenda Rasulullah ﷺ (Arisy)" },

          { type: "characters", id: "Sa’ad bin Abi Waqqash", role: "Pemanah Ulung Kaum Muslimin" },

          { type: "characters", id: "Bilal bin Rabah", role: "Penuntut Keadilan atas Majikan Zalim" },

          { type: "characters", id: "Abu Jahal", role: "Panglima Tertinggi Quraisy yang Tewas" },

          { type: "events", id: "624-perang-badar", role: "Peristiwa Utama: Perang Badar Kubra" }

        ]

      },

      {

        id: "fall-of-golden-age",

        triggers: ["keemasan", "hancur", "mongol", "baghdad", "runtuh", "jatuh", "golden age", "menghancurkan"],

        all_match: ["keemasan"],

        title_id: "Peristiwa yang Mengakhiri Masa Keemasan Islam: Invasi Baghdad (1258 M)",

        title_en: "The Catastrophe that Ended the Golden Age: Fall of Baghdad (1258 CE)",

        title_ar: "سقوط بغداد ونهاية العصر الذهبي للحضارة العباسية (٦٥٦ هـ)",

        desc_id: "Serangan pasukan Mongol pimpinan Hulagu Khan yang meluluhlantakkan pusat ilmu pengetahuan dunia dan perpustakaan Baitul Hikmah.",

        desc_en: "The Mongol siege led by Hulagu Khan that devastated the intellectual center of the world and the House of Wisdom.",

        desc_ar: "غزو المغول بقيادة هولاكو خان وتدمير بيت الحكمة وحواضر العلم الكبرى في دار السلام بغداد.",

        entities: [

          { type: "events", id: "1258-jatuhnya-baghdad", role: "Peristiwa Kunci: Pengepungan & Kejatuhan Kota Baghdad" },

          { type: "events", id: "1260-pertempuran-ain-jalut", role: "Titik Balik: Pembendungan Tentara Mongol oleh Pasukan Mamluk" },

          { type: "places", id: "baghdad", role: "Ibu Kota Abbasiyah & Pusat Peradaban Dunia" }

        ]

      },

      {

        id: "first-woman-believer",

        triggers: ["wanita", "pertama", "masuk islam", "beriman", "istri nabi", "tahirah", "khadijah"],

        all_match: ["wanita"],

        title_id: "Wanita Pertama yang Masuk Islam: Sayyidah Khadijah",

        title_en: "The First Female Believer: Sayyidah Khadijah",

        title_ar: "أول من آمن من النساء: أم المؤمنين خديجة رضي الله عنها",

        desc_id: "Ummul Mukminin yang pertama kali mempercayai kenabian, menenteramkan Rasulullah ﷺ, dan mencurahkan seluruh hartanya demi tegaknya dakwah.",

        desc_en: "The Mother of the Believers who first embraced the message, comforted the Prophet ﷺ, and spent her wealth for Islam.",

        desc_ar: "أم المؤمنين الطاهرة التي صدّقت بالرسالة وثبّتت فؤاد النبي ﷺ وبذلت كل مالها لنصرة الدين الحق.",

        entities: [

          { type: "events", id: "610-wahyu-pertama", role: "Turunnya Wahyu Pertama di Gua Hira" },

          { type: "events", id: "595-menikah-dengan-khadijah", role: "Pernikahan Suci di Kota Makkah" },

          { type: "events", id: "617-pemboikotan-bani-hasyim", role: "Pengorbanan Harta Selama Pemboikotan Quraisy" }

        ]

      },

      {

        id: "conquest-of-andalusia",

        triggers: ["spanyol", "andalus", "andalusia", "gibraltar", "thariq", "musa", "penakluk"],

        all_match: ["andalus"],

        title_id: "Penaklukan Semenanjung Iberia & Peradaban Andalusia",

        title_en: "Conquest of the Iberian Peninsula & Civilization of al-Andalus",

        title_ar: "فتح شبه الجزيرة الأيبيرية وتأسيس حضارة الأندلس (٩٢ هـ)",

        desc_id: "Penyeberangan legendaris pasukan muslim melintasi Selat Gibraltar yang mengawali 800 tahun peradaban gemilang Islam di Eropa barat.",

        desc_en: "The historic crossing of the Strait of Gibraltar initiating eight centuries of Islamic scientific and cultural flourishing in Europe.",

        desc_ar: "عبور القائد طارق بن زياد لمضيق جبل طارق وافتتاح ٨٠٠ عام من الإشعاع الحضاري والعلمي الإسلامي في أوروبا.",

        entities: [

          { type: "characters", id: "Thariq bin Ziyad", role: "Panglima Pemberani Penyeberang Selat Gibraltar" },

          { type: "characters", id: "Musa bin Nushair", role: "Gubernur Afrika Utara Pemimpin Ekspedisi Lanjutan" },

          { type: "characters", id: "Abdurrahman ad-Dakhil", role: "Shaqr Quraisy Pendiri Keamiran Cordoba" },

          { type: "events", id: "711-thariq-bin-ziyad-ke-andalusia", role: "Ekspedisi Penyeberangan & Pertempuran Guadalete" },

          { type: "events", id: "756-berdirinya-keamiran-cordoba", role: "Kelahiran Keamiran Umayyah Cordoba di Spanyol" },

          { type: "places", id: "cordoba", role: "Pusat Kemilau Sains & Filsafat Islam di Eropa" }

        ]

      },

      {

        id: "liberation-of-jerusalem",

        triggers: ["baitul maqdis", "al-quds", "yerusalem", "palestina", "pembebas", "kunci"],

        all_match: ["maqdis"],

        title_id: "Pembebasan Damai Baitul Maqdis (Al-Quds)",

        title_en: "The Peaceful Liberation of Jerusalem (Baitul Maqdis)",

        title_ar: "فتح بيت المقدس وتوقيع العهدة العمرية الخالدة (١٦ هـ)",

        desc_id: "Penyerahan kunci kota suci ketiga umat Islam langsung kepada Khalifah Umar bin Khattab dan pencanangan Piagam Kerukunan (Al-Uhda al-Umariyyah).",

        desc_en: "The handover of keys to Caliph Umar ibn al-Khattab and the signing of the historic Umariyya Covenant of tolerance.",

        desc_ar: "استلام أمير المؤمنين عمر بن الخطاب لمفاتيح القدس الشريف وتسطير العهدة العمرية أعظم وثيقة تسامح ديني في التاريخ.",

        entities: [

          { type: "characters", id: "Umar bin Khattab", role: "Penerima Kunci Kota & Penandatangan Piagam Toleransi" },

          { type: "characters", id: "Abu Ubaidah bin al-Jarrah", role: "Panglima Pengepung & Negosiator Perdamaian" },

          { type: "events", id: "637-penaklukan-baitul-maqdis", role: "Peristiwa Kunci: Penyerahan Damai Baitul Maqdis" },

          { type: "places", id: "palestina", role: "Bumi Para Nabi & Lokasi Masjidil Aqsha" }

        ]

      },

      {

        id: "sword-of-allah",

        triggers: ["pedang allah", "saifullah", "tak terkalahkan", "khalid", "yarmuk", "panglima"],

        all_match: ["pedang"],

        title_id: "Saifullah al-Maslul: Khalid bin Walid",

        title_en: "The Drawn Sword of Allah: Khalid ibn al-Walid",

        title_ar: "سيف الله المسلول: خالد بن الوليد رضي الله عنه",

        desc_id: "Panglima tak terkalahkan dalam puluhan palagan tempur besar, perancang taktik manuver kavaleri di Yarmuk yang menumbangkan imperium Romawi.",

        desc_en: "The undefeated general of dozens of battles whose cavalry masterstrokes at Yarmouk shattered the Byzantine imperial forces.",

        desc_ar: "القائد المظفر الذي لم يُهزم في معركة قط ومهندس معركة اليرموك الخالدة التي أنهت الوجود البيزنطي في بلاد الشام.",

        entities: [

          { type: "characters", id: "Khalid bin Walid", role: "Saifullah al-Maslul & Panglima Penakluk Syam" },

          { type: "events", id: "634-perang-yarmuk", role: "Kemenangan Menentukan atas Kekaisaran Bizantium" },

          { type: "events", id: "629-perang-mutah", role: "Penyelamatan Pasukan & Gelar Saifullah dari Nabi ﷺ" },

          { type: "events", id: "632-perang-riddah", role: "Penumpasan Pembangkang & Musailamah di Yamamah" },

          { type: "events", id: "630-fathu-makkah", role: "Panglima Sayap Penembus Masuk Makkah" }

        ]

      }

    ]

  };



    const CHARACTER_ALIASES = {
    "abdul muthalib": "Abdul Muthallib",
    "abdul muthallib": "Abdul Muthallib",
    "hamzah bin abdul muthalib": "Hamzah bin Abdul Muthallib",
    "hamzah bin abdul muthallib": "Hamzah bin Abdul Muthallib",
    "abi thalib": "Abu Thalib bin Abdul Muthallib",
    "abu thalib": "Abu Thalib bin Abdul Muthallib",
    "abu thalib bin abdul muthallib": "Abu Thalib bin Abdul Muthallib",
    "abu ubaidah bin al-jarrah": "Abu Ubaidah bin Jarrah",
    "abu ubaidah bin jarrah": "Abu Ubaidah bin Jarrah",
    "sa'ad bin abi waqqash": "Sa'ad bin Abi Waqash",
    "sa'ad bin abi waqash": "Sa'ad bin Abi Waqash",
    "sa’ad bin abi waqqash": "Sa'ad bin Abi Waqash",
    "sa’ad bin abi waqash": "Sa'ad bin Abi Waqash",
    "amr bin ash": "Amru bin Ash",
    "amru bin ash": "Amru bin Ash",
    "halimah as-sa'diyah": "Halimah Assa'diyah",
    "halimah as-sa’diyah": "Halimah Assa'diyah",
    "halimah assa'diyah": "Halimah Assa'diyah",
    "husain bin ali": "Husein bin Ali",
    "husein bin ali": "Husein bin Ali",
    "abu bakar": "Abu Bakar Asshiddiq",
    "abu bakar ash-shiddiq": "Abu Bakar Asshiddiq",
    "umar bin al-khattab": "Umar bin Khattab"
  };

  function resolveCharacterName(name){
    if(!name) return "";
    const clean = String(name).trim().toLowerCase().replace(/['’`]/g, "'");
    return CHARACTER_ALIASES[clean] || name;
  }

  // Helper to resolve entity image from defaults

  function getEntityImg(type, idOrName){

    try{

      const D = window.__ALFA_DEFS || window.DEFS || (typeof DEFS !== "undefined" ? DEFS : null) || {
      characters: window.CHALL || [],
      events: window.EV || [],
      places: window.PL || []
    };

      if(!D) return "";

      if(type === "characters"){
        const canon = resolveCharacterName(idOrName);
        const c = (/^[0-9]+$/.test(idOrName) || /^d\d+$/.test(idOrName)) 
          ? D.characters[+idOrName.replace(/\D/g,"")] 
          : D.characters.find(x => x.name === canon || x.name === idOrName || x.slug === idOrName || x.id === idOrName);
        return c && c.img ? c.img : "";
      }

      if(type === "events"){

        const e = D.events.find(x => x.slug === idOrName || x.title === idOrName || x.id === idOrName);

        if(e && Array.isArray(e.slides) && e.slides[0]) return e.slides[0];

        if(e && Array.isArray(e.gallery) && e.gallery[0]) return e.gallery[0];

      }

      if(type === "places"){

        const p = D.places.find(x => x.slug === idOrName || x.id === idOrName || x.name === idOrName);

        if(p && Array.isArray(p.slides) && p.slides[0]) return p.slides[0];

      }

    }catch(e){}

    return "";

  }



  // Auto-Wiki Cross-Linker

  function autoWikiLink(containerEl, currentType, currentId){

    if(!containerEl || typeof window === "undefined") return;

    try{

      const D = window.__ALFA_DEFS || window.DEFS || (typeof DEFS !== "undefined" ? DEFS : null);

      if(!D) return;



      const ALIASES = {

        "Abi Thalib": ["Abu Thalib", "Abu Talib", "Abi Thalib"],

        "Abu Bakar Asshiddiq": ["Abu Bakar Asshiddiq", "Abu Bakar", "Abu Bakr"],

        "Ali bin Abi Thalib": ["Ali bin Abi Thalib"],

        "Hamzah bin Abdul Muthalib": ["Hamzah bin Abdul Muthalib", "Sayyidus Syuhada"],

        "Umar bin Khattab": ["Umar bin Khattab", "Umar bin al-Khattab"],

        "Utsman bin Affan": ["Utsman bin Affan", "Utsman bin 'Affan"],

        "Khalid bin Walid": ["Khalid bin Walid", "Khalid ibn al-Walid", "Saifullah"],

        "Sa’ad bin Abi Waqqash": ["Sa’ad bin Abi Waqqash", "Sa'ad bin Abi Waqqash", "Sa'ad bin Abi Waqqas"],

        "Bilal bin Rabah": ["Bilal bin Rabah"],

        "Abu Jahal": ["Abu Jahal", "Abu Jahl"],

        "Waraqah bin Naufal": ["Waraqah bin Naufal"],

        "Thariq bin Ziyad": ["Thariq bin Ziyad", "Tariq ibn Ziyad"],

        "Musa bin Nushair": ["Musa bin Nushair"],

        "Abdurrahman ad-Dakhil": ["Abdurrahman ad-Dakhil"],

        "Umar bin Abdul Aziz": ["Umar bin Abdul Aziz"],

        "makkah": ["Mecca", "Makkah"],

        "yatsrib": ["Medina", "Madinah", "Yatsrib"],

        "syam": ["Levant", "Syam", "Suriah"],

        "palestina": ["Jerusalem", "Al-Quds", "Baitul Maqdis", "Palestina"],

        "baghdad": ["Baghdad"],

        "cordoba": ["Cordoba", "Kordoba"],

        "624-perang-badar": ["Battle of Badr", "Perang Badar"],

        "625-perang-uhud": ["Battle of Uhud", "Perang Uhud"],

        "634-perang-yarmuk": ["Battle of Yarmouk", "Perang Yarmuk"],

        "636-perang-qadisiyah": ["Battle of al-Qadisiyyah", "Perang Qadisiyah"],

        "1258-jatuhnya-baghdad": ["Fall of Baghdad", "Jatuhnya Baghdad", "Kejatuhan Baghdad"]

      };



      // Build catalog of targets

      const catalog = [];

      const seenNames = new Set();



      (D.characters || []).forEach((c, idx) => {

        const idVal = c.id || "d" + idx;

        if(currentType === "characters" && (currentId === idVal || currentId === c.name || currentId === c.slug)) return;

        if(c.name && c.name.length >= 3){

          if(!seenNames.has(c.name)){

            catalog.push({ type: "characters", id: idVal, name: c.name, url: "/detail.html?t=characters&id=" + encodeURIComponent(idVal) });

            seenNames.add(c.name);

          }

          const alts = ALIASES[c.name] || [];

          alts.forEach(alt => {

            if(!seenNames.has(alt)){

              catalog.push({ type: "characters", id: idVal, name: alt, url: "/detail.html?t=characters&id=" + encodeURIComponent(idVal) });

              seenNames.add(alt);

            }

          });

        }

      });



      (D.events || []).forEach(e => {

        const slug = e.slug || e.id;

        if(currentType === "events" && (currentId === slug || currentId === e.title)) return;

        if(e.title && e.title.length >= 4 && !seenNames.has(e.title)){

          catalog.push({ type: "events", id: slug, name: e.title, url: "/detail.html?t=events&id=" + encodeURIComponent(slug) });

          seenNames.add(e.title);

        }

        const alts = ALIASES[slug] || [];

        alts.forEach(alt => {

          if(!seenNames.has(alt)){

            catalog.push({ type: "events", id: slug, name: alt, url: "/detail.html?t=events&id=" + encodeURIComponent(slug) });

            seenNames.add(alt);

          }

        });

      });



      (D.places || []).forEach(p => {

        const slug = p.slug || p.id;

        if(currentType === "places" && (currentId === slug || currentId === p.name)) return;

        const rawName = p.name || "";

        const cleanName = rawName.replace(/\(.*?\)/g, "").trim();

        if(cleanName.length >= 3 && !/^(Jalur|Peta|Wilayah)/i.test(cleanName) && !seenNames.has(cleanName)){

          catalog.push({ type: "places", id: slug, name: cleanName, url: "/detail.html?t=places&id=" + encodeURIComponent(slug) });

          seenNames.add(cleanName);

        }

        if(rawName.includes("(") && rawName.includes(")")){

          const sub = rawName.slice(rawName.indexOf("(") + 1, rawName.indexOf(")")).trim();

          if(sub.length >= 3 && !/^(kuno)/i.test(sub) && !seenNames.has(sub)){

            catalog.push({ type: "places", id: slug, name: sub, url: "/detail.html?t=places&id=" + encodeURIComponent(slug) });

            seenNames.add(sub);

          }

        }

        const alts = ALIASES[slug] || [];

        alts.forEach(alt => {

          if(!seenNames.has(alt)){

            catalog.push({ type: "places", id: slug, name: alt, url: "/detail.html?t=places&id=" + encodeURIComponent(slug) });

            seenNames.add(alt);

          }

        });

      });



      // Sort by longest name first to avoid prefix collisions

      catalog.sort((a, b) => b.name.length - a.name.length);



      const linkedEntities = new Set();

      const targetTags = new Set(["P", "LI", "BLOCKQUOTE", "TD"]);



      function walk(node){

        if(!node) return;

        if(node.nodeType === 3){ // Text node

          const parent = node.parentElement;

          if(!parent || !targetTags.has(parent.tagName)) return;

          if(parent.closest("a") || parent.closest("h1,h2,h3,h4,h5,h6,nav,.toc,figcaption,script,style")) return;



          const text = node.nodeValue;

          for(const item of catalog){

            const entKey = item.type + ":" + item.id;

            if(linkedEntities.has(entKey)) continue;



            // Word-boundary match case-insensitive

            const escaped = item.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

            const reg = new RegExp("(^|[^\\p{L}\\p{N}_])(" + escaped + ")(?![\\p{L}\\p{N}_])", "iu");

            const match = reg.exec(text);

            if(match){

              const matchIdx = match.index + match[1].length;

              const matchedStr = match[2];



              // Split text node

              const before = text.slice(0, matchIdx);

              const after = text.slice(matchIdx + matchedStr.length);



              const a = document.createElement("a");

              a.className = "wiki-link";

              a.href = item.url;

              a.title = (item.type === "characters" ? "Tokoh: " : item.type === "events" ? "Peristiwa: " : "Tempat: ") + item.name;

              a.textContent = matchedStr;



              const parentNode = node.parentNode;

              if(before) parentNode.insertBefore(document.createTextNode(before), node);

              parentNode.insertBefore(a, node);

              if(after){

                const afterNode = document.createTextNode(after);

                parentNode.insertBefore(afterNode, node);

                walk(afterNode);

              }

              parentNode.removeChild(node);

              linkedEntities.add(entKey);

              return; // One link per text-slice

            }

          }

        } else if(node.nodeType === 1){

          const tn = node.tagName;

          if(/^(A|H1|H2|H3|H4|H5|H6|NAV|FIGCAPTION|SCRIPT|STYLE)$/.test(tn)) return;

          Array.from(node.childNodes).forEach(walk);

        }

      }



      walk(containerEl);

    }catch(err){

      console.warn("AutoWikiLink error:", err);

    }

  }



  // --- MULTILINGUAL STEMMING & BACKGROUND PRELOAD ---

  function stem(word){

    let w = String(word || "").toLowerCase();

    if(w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';

    if(w.endsWith('es') && w.length > 4) return w.slice(0, -2);

    if(w.endsWith('s') && !w.endsWith('ss') && w.length > 3) return w.slice(0, -1);

    return w;

  }



  function preloadAllPacks(){

    if(!PACKS.en && !PACK_PROMISES.en){

      PACK_PROMISES.en = fetch("i18n_en.json")

        .then(r => r.ok ? r.json() : {})

        .catch(() => ({}))

        .then(j => { PACKS.en = j || {}; return PACKS.en; });

    }

    if(!PACKS.ar && !PACK_PROMISES.ar){

      PACK_PROMISES.ar = fetch("i18n_ar.json")

        .then(r => r.ok ? r.json() : {})

        .catch(() => ({}))

        .then(j => { PACKS.ar = j || {}; return PACKS.ar; });

    }

  }

  if(typeof window !== "undefined"){

    if(window.requestIdleCallback) window.requestIdleCallback(preloadAllPacks);

    else setTimeout(preloadAllPacks, 1200);

  }



  // --- COMPREHENSIVE HISTORICAL CONCEPTS TAXONOMY ---

  const HISTORICAL_CONCEPTS = [

    {

      id: "concept-companions",
      triggers: ["companion", "companions", "sahabat", "sahabah", "ash-sahabah", "ashabah", "sahabat nabi", "para sahabat", "sahabat rasul", "sahabat-sahabat", "al-ashab", "hawariyun", "sahabi"],
      title_id: "Para Sahabat Nabi Muhammad ﷺ",
      title_en: "The Noble Companions of the Prophet (Ash-Sahabah)",
      title_ar: "صحابة رسول الله ﷺ الكرام",
      desc_id: "Generasi terbaik umat Islam yang hidup sezaman, beriman, dan berjuang bersama Rasulullah ﷺ.",
      desc_en: "The blessed first generation of Muslims who believed, accompanied, and struggled alongside the Prophet ﷺ.",
      desc_ar: "الجيل الأول المبارك من المسلمين الذين آمنوا بصحبة النبي ﷺ وجاهدوا معه.",
      matchEntities: (D) => {
        if(!D || !Array.isArray(D.characters)) return [];
        const EXCLUDED_ENEMIES = new Set(["abu lahab", "abu jahal", "abrahah", "al-hajjaj bin yusuf ats-tsaqafi"]);
        return D.characters.filter(c => {
          const nameLow = (c.name || "").toLowerCase();
          if(EXCLUDED_ENEMIES.has(nameLow)) return false;
          const groups = c.groups || [];
          if(groups.includes("Penentang Dakwah") || groups.includes("Penguasa Kuno")) return false;
          return groups.includes('Khulafaur Rasyidin') || groups.includes('Sahabat Nabi') || groups.includes('Sahabat') || groups.includes('Sepuluh Sahabat Dijanjikan Surga') || groups.includes('Assabiqunal Awwalun') ||
                 (c.meta && c.meta.toLowerCase().includes('sahabat') && !c.meta.toLowerCase().includes('menentang'));
        }).map(c => ({ type: 'characters', id: c.name, role: c.role }));
      }
    },

    {

      id: "concept-caliphs",

      triggers: ["caliph", "caliphs", "khalifah", "khilafah", "khulafa", "pemimpin islam", "amirul mukminin", "amiralmuminin", "caliphate"],

      title_id: "Para Khalifah Peradaban Islam",

      title_en: "The Caliphs & Leaders of Islamic Civilization",

      title_ar: "خلفاء وقادة الحضارة الإسلامية",

      desc_id: "Para pemimpin negara dan penerus kepemimpinan umat Islam sejak era Khulafaur Rasyidin hingga era Daulah.",

      desc_en: "The leaders and successors of Islamic governance from the Rightly Guided Caliphs to the major dynasties.",

      desc_ar: "قادة وخلفاء الأمة الإسلامية منذ عصر الخلفاء الراشدين والدول المتعاقبة.",

      matchEntities: (D) => {

        if(!D || !Array.isArray(D.characters)) return [];

        return D.characters.filter(c => {

          const groups = c.groups || [];

          return groups.includes('Khulafaur Rasyidin') || (c.role && c.role.toLowerCase().includes('khalifah'));

        }).map(c => ({ type: 'characters', id: c.name, role: c.role }));

      }

    },

    {

      id: "concept-battles",

      triggers: ["battle", "battles", "war", "wars", "perang", "pertempuran", "ghazwah", "ghazwa", "marakah", "ma'rakah", "palagan"],

      title_id: "Pertempuran & Perang Penentu Sejarah",

      title_en: "Decisive Battles & Military Milestones",

      title_ar: "المعارك والغزوات المفصلية في التاريخ",

      desc_id: "Peristiwa-peristiwa pertempuran dan perlawanan yang mengubah peta politik dan pertahanan peradaban Islam.",

      desc_en: "Decisive military engagements and battles that reshaped the geopolitical landscape of the Islamic world.",

      desc_ar: "الغزوات والوقائع العسكرية الكبرى التي غيّرت مسار التاريخ والخرائط السياسية.",

      matchEntities: (D) => {

        if(!D || !Array.isArray(D.events)) return [];

        return D.events.filter(e => {

          const t = (e.title || "").toLowerCase();

          return t.includes('perang') || t.includes('pertempuran');

        }).slice(0, 16).map(e => ({ type: 'events', id: e.slug, role: (e.year ? e.year + " M — " : "") + e.title }));

      }

    },

    {

      id: "concept-conquests",

      triggers: ["conquest", "conquests", "penaklukan", "pembebasan", "futuh", "fathu", "fath", "futuhat", "ekspedisi"],

      title_id: "Penaklukan & Pembebasan Wilayah (Al-Futuhat)",

      title_en: "The Historic Islamic Conquests (Al-Futuhat)",

      title_ar: "الفتوحات الإسلامية الكبرى",

      desc_id: "Gelombang pembebasan kota-kota dan wilayah penting yang memperluas peradaban Islam lintas benua.",

      desc_en: "Major historical conquests and liberations that expanded Islamic civilization across three continents.",

      desc_ar: "مسيرة الفتوحات التاريخية الكبرى التي نشرت رسالة وحضارة الإسلام عبر القارات.",

      matchEntities: (D) => {

        if(!D || !Array.isArray(D.events)) return [];

        return D.events.filter(e => {

          const t = (e.title || "").toLowerCase();

          return t.includes('penaklukan') || t.includes('fathu');

        }).slice(0, 15).map(e => ({ type: 'events', id: e.slug, role: (e.year ? e.year + " M — " : "") + e.title }));

      }

    },

    {

      id: "concept-scholars",

      triggers: ["scholar", "scholars", "scientist", "scientists", "ulama", "ilmuwan", "cendekiawan", "filsuf", "philosopher", "philosophers", "astronomy", "algebra", "mathematician", "doctor", "medicine", "optics", "physics"],

      title_id: "Ulama, Cendekiawan & Ilmuwan Peradaban",

      title_en: "Scholars, Scientists & Philosophers of Islam",

      title_ar: "علماء وفلاسفة وعلماء الطبيعة في الحضارة الإسلامية",

      desc_id: "Tokoh-tokoh pemikir dan ilmuwan besar yang membangun puncak kejayaan intelektual dunia Islam.",

      desc_en: "Great thinkers, polymaths, and scholars who pioneered science, mathematics, and philosophy.",

      desc_ar: "العلماء والمفكرون وأئمة العلوم الذين شادوا صرح النهضة العلمية والفكرية.",

      matchEntities: (D) => {

        if(!D || !Array.isArray(D.events)) return [];

        return D.events.filter(e => {

          const t = (e.title || "").toLowerCase();

          return t.includes('khawarizmi') || t.includes('baitul hikmah') || t.includes('al-azhar') || t.includes('haitham') || t.includes('ibnu sina') || t.includes('ghazali') || t.includes('ibnu rusyd') || t.includes('ibnu khaldun');

        }).map(e => ({ type: 'events', id: e.slug, role: (e.year ? e.year + " M — " : "") + e.title }));

      }

    },

    {

      id: "concept-women",

      triggers: ["women", "woman", "wanita", "perempuan", "wives", "wife", "istri nabi", "ummul mukminin", "female", "nisa", "tokoh wanita"],

      title_id: "Tokoh Perempuan & Ummahatul Mukminin",

      title_en: "Notable Women in Islamic History & Ummahat al-Mu'minin",

      title_ar: "أعلام النساء وأمهات المؤمنين في التاريخ الإسلامي",

      desc_id: "Keteladanan para ibunda kaum Muslimin dan pahlawan wanita yang mengukir sejarah agung.",

      desc_en: "The Mothers of the Believers and iconic female figures who shaped history through faith and courage.",

      desc_ar: "أمهات المؤمنين والشخصيات النسائية الخالدة اللاتي صنعن التاريخ بالإيمان والجهاد.",

      matchEntities: (D) => {

        if(!D || !Array.isArray(D.characters)) return [];

        return D.characters.filter(c => c.gender === 'Wanita' || (c.role && c.role.toLowerCase().includes('ummul'))).map(c => ({ type: 'characters', id: c.name, role: c.role }));

      }

    },

    {

      id: "concept-spain",

      triggers: ["spain", "spanyol", "andalus", "andalusia", "cordoba", "granada", "gibraltar", "iberia", "al-andalus"],

      title_id: "Sejarah Peradaban Islam di Andalusia (Spanyol)",

      title_en: "Islamic Civilization in Andalusia (Spain)",

      title_ar: "تاريخ الحضارة الإسلامية في الأندلس",

      desc_id: "Perjalanan peradaban Islam di Semenanjung Iberia sejak era penaklukan Thariq bin Ziyad hingga kemilau Cordoba.",

      desc_en: "The golden age of Muslim Spain from Tariq ibn Ziyad's landing in 711 CE to the civilization of Cordoba.",

      desc_ar: "ملحمة الحضارة الإسلامية في شبه الجزيرة الأيبيرية من الفتح إلى سقوط غرناطة.",

      matchEntities: (D) => {

        if(!D) return [];

        const chars = (D.characters || []).filter(c => (c.countries && c.countries.includes('ES')) || (c.meta && c.meta.toLowerCase().includes('andalus'))).map(c => ({ type: 'characters', id: c.name, role: c.role }));

        const evs = (D.events || []).filter(e => (e.countries && e.countries.includes('ES')) || (e.title && (e.title.toLowerCase().includes('andalusia') || e.title.toLowerCase().includes('cordoba') || e.title.toLowerCase().includes('granada')))).map(e => ({ type: 'events', id: e.slug, role: (e.year ? e.year + " M — " : "") + e.title }));

        return [...chars, ...evs];

      }

    },

    {

      id: "concept-crusades",

      triggers: ["crusade", "crusades", "perang salib", "salib", "pasukan salib", "saladin", "hittin"],

      title_id: "Perang Salib & Pembebasan Al-Quds",

      title_en: "The Crusades & the Liberation of Jerusalem",

      title_ar: "الحروب الصليبية وتحرير القدس",

      desc_id: "Konflik berkepanjangan di Tanah Syam dan perlawanan Salahuddin al-Ayyubi membebaskan Baitul Maqdis.",

      desc_en: "The military campaigns in the Levant and Saladin's historic liberation of Jerusalem.",

      desc_ar: "الحملات الصليبية في بلاد الشام وملاحم صلاح الدين الأيوبي في استرداد القدس.",

      matchEntities: (D) => {

        if(!D) return [];

        const chars = (D.characters || []).filter(c => c.name.includes('Salahuddin') || (c.meta && c.meta.toLowerCase().includes('salib'))).map(c => ({ type: 'characters', id: c.name, role: c.role }));

        const evs = (D.events || []).filter(e => (e.title && (e.title.toLowerCase().includes('salib') || e.title.toLowerCase().includes('salahuddin') || e.title.toLowerCase().includes('ramla')))).map(e => ({ type: 'events', id: e.slug, role: (e.year ? e.year + " M — " : "") + e.title }));

        return [...chars, ...evs];

      }

    },

    {

      id: "concept-mongols",

      triggers: ["mongol", "mongols", "tartar", "hulagu", "genghis", "hancur", "keemasan", "baghdad", "invasi mongol"],

      title_id: "Invasi Pasukan Mongol & Titik Balik Ain Jalut",

      title_en: "The Mongol Invasions & the Turning Point of Ain Jalut",

      title_ar: "الغزو المغولي ونقطة التحول في معركة عين جالوت",

      desc_id: "Kejatuhan Baghdad 1258 M dan pembendungan tentara Mongol oleh kaum Mamluk di Ain Jalut 1260 M.",

      desc_en: "The devastating fall of Baghdad in 1258 CE and the Mamluk victory at Ain Jalut in 1260 CE.",

      desc_ar: "سقوط بغداد سنة ٦٥٦ هـ وانتصار المماليك الحاسم في عين جالوت سنة ٦٥٨ هـ.",

      matchEntities: (D) => {

        if(!D) return [];

        return (D.events || []).filter(e => (e.title && (e.title.toLowerCase().includes('mongol') || e.title.toLowerCase().includes('baghdad') || e.title.toLowerCase().includes('ain jalut')))).map(e => ({ type: 'events', id: e.slug, role: (e.year ? e.year + " M — " : "") + e.title }));

      }

    },

    {

      id: "concept-jerusalem",

      triggers: ["jerusalem", "palestine", "palestina", "al-quds", "baitul maqdis", "aqsa", "masjidil aqsa", "yerusalem"],

      title_id: "Kota Suci Baitul Maqdis (Al-Quds, Yerusalem)",

      title_en: "The Holy City of Bayt al-Maqdis (Jerusalem, Al-Quds)",

      title_ar: "بيت المقدس والقدس الشريف",

      desc_id: "Kota suci ketiga umat Islam, kiblat pertama, dan pusat peristiwa besar dari era Umar bin Khattab hingga Salahuddin.",

      desc_en: "The third holiest site in Islam, first Qibla, from Umar ibn al-Khattab's entry to Saladin's liberation.",

      desc_ar: "ثالث الحرمين الشريفين وأولى القبلتين، ومحور الأحداث الكبرى من عهد عمر بن الخطاب إلى صلاح الدين.",

      matchEntities: (D) => {

        if(!D) return [];

        const evs = (D.events || []).filter(e => (e.title && (e.title.toLowerCase().includes('baitul maqdis') || e.title.toLowerCase().includes('yerusalem') || e.title.toLowerCase().includes('palestina') || e.title.toLowerCase().includes('isra')))).map(e => ({ type: 'events', id: e.slug, role: (e.year ? e.year + " M — " : "") + e.title }));

        const pls = (D.places || []).filter(p => (p.name && (p.name.toLowerCase().includes('baitul') || p.name.toLowerCase().includes('palestina')))).map(p => ({ type: 'places', id: p.slug, role: p.subtitle }));

        return [...evs, ...pls];

      }

    },

    {

      id: "concept-treaties",

      triggers: ["treaty", "treaties", "perjanjian", "piagam", "hudaibiyah", "madinah", "constitution", "covenant"],

      title_id: "Perjanjian & Piagam Bersejarah",

      title_en: "Historic Treaties & Constitutions",

      title_ar: "المعاهدات والعهود الدستورية التاريخية",

      desc_id: "Piagam Madinah, Perjanjian Hudaibiyah, dan Perjanjian Damai yang menjadi tonggak diplomasi peradaban Islam.",

      desc_en: "The Constitution of Medina, Treaty of Hudaybiyyah, and foundational covenants of early Islam.",

      desc_ar: "وثيقة المدينة وصلح الحديبية والعهود الدبلوماسية التاريخية.",

      matchEntities: (D) => {

        if(!D || !Array.isArray(D.events)) return [];

        return D.events.filter(e => {

          const t = (e.title || "").toLowerCase();

          return t.includes('piagam') || t.includes('hudaibiyah') || t.includes('perjanjian');

        }).map(e => ({ type: 'events', id: e.slug, role: (e.year ? e.year + " M — " : "") + e.title }));

      }

    },

    {

      id: "concept-trade",

      triggers: ["trader", "traders", "merchant", "merchants", "pedagang", "saudagar", "perdagangan", "kafilah", "caravan", "perniagaan"],

      title_id: "Saudagar & Perdagangan Bersejarah",

      title_en: "Historic Traders & Merchants of Islam",

      title_ar: "التجارة والقوافل ورواد الأعمال في التاريخ",

      desc_id: "Kafilah dagang Quraisy ke Syam dan para saudagar mukmin teladan seperti Khadijah dan Abdurrahman bin Auf.",

      desc_en: "The trade caravans of Quraysh and exemplary merchant companions like Khadijah and Abdurrahman ibn Awf.",

      desc_ar: "قوافل قريش التجارية ونماذج التجار المسلمين الأوائل كخديجة وعبد الرحمن بن عوف.",

      matchEntities: (D) => {

        if(!D || !Array.isArray(D.characters)) return [];

        return D.characters.filter(c => {

          const m = ((c.role || "") + " " + (c.meta || "")).toLowerCase();

          return m.includes('saudagar') || m.includes('dagang') || m.includes('pedagang') || m.includes('kaya') || c.name.includes('Khadijah') || c.name.includes('Abdurrahman bin Auf');

        }).map(c => ({ type: 'characters', id: c.name, role: c.role }));

      }

    },

    {

      id: "concept-monk",

      triggers: ["monk", "monks", "pendeta", "rahib", "bahira", "buhaira", "waraqah", "nasrani", "christian"],

      title_id: "Pertemuan dengan Rahib Bahira & Waraqah bin Naufal",

      title_en: "Encounters with Christian Monks & Scholars (Bahira & Waraqah)",

      title_ar: "لقاء الراهب بحيرا وورقة بن نوفل",

      desc_id: "Penyaksian tanda-tanda kenabian dalam kitab-kitab suci terdahulu oleh Rahib Bahira di Busra dan Waraqah bin Naufal di Makkah.",

      desc_en: "Early recognitions of prophetic signs in ancient scriptures by Monk Bahira in Busra and Waraqah in Mecca.",

      desc_ar: "شهادة الراهب بحيرا في بصرى الشام وورقة بن نوفل في مكة على دلائل النبوة في الكتب القديمة.",

      matchEntities: (D) => {

        if(!D) return [];

        const chars = (D.characters || []).filter(c => c.name.includes('Bahira') || c.name.includes('Waraqah')).map(c => ({ type: 'characters', id: c.name, role: c.role }));

        const evs = (D.events || []).filter(e => (e.title || "").toLowerCase().includes('bahira')).map(e => ({ type: 'events', id: e.slug, role: (e.year ? e.year + " M — " : "") + e.title }));

        return [...chars, ...evs];

      }

    }

  ];



  // --- SEMANTIC SEARCH ENGINE (CONCEPTS + INTENTS + MULTILINGUAL STEMMING) ---

  function semanticSearch(rawQuery, currentLang){
    const lang = currentLang || LANG || "id";
    const q = String(rawQuery || "").trim().toLowerCase();
    if(!q) return { matchedIntent: null, results: [] };

    // Synonyms dictionary
    const SYNONYM_MAP = {
      "companions": ["sahabat", "sahabah", "ashabah", "companion", "hawariyun", "ashab", "khulafaur rasyidin", "tokoh", "figures"],
      "companion": ["sahabat", "sahabah", "ashabah", "companions", "ashab", "tokoh", "figures"],
      "sahabat": ["companions", "companion", "sahabah", "ashabah", "hawariyun", "tokoh", "figures"],
      "figures": ["tokoh", "karakter", "characters", "figure", "sahabat", "biografi"],
      "figure": ["tokoh", "karakter", "characters", "figures", "tokoh"],
      "characters": ["figures", "tokoh", "karakter", "figure"],
      "places": ["tempat", "lokasi", "kota", "negeri", "wilayah", "place"],
      "place": ["tempat", "lokasi", "kota", "negeri", "wilayah", "places"],
      "tempat": ["places", "place", "lokasi", "kota", "wilayah"],
      "battles": ["perang", "pertempuran", "battle", "ghazwah", "sariyah", "badar", "uhud", "khandaq"],
      "battle": ["perang", "pertempuran", "battles", "ghazwah", "sariyah", "badar", "uhud", "khandaq"],
      "perang": ["battle", "battles", "pertempuran", "ghazwah", "sariyah", "badar", "uhud", "khandaq"],
      "caliphs": ["khalifah", "khulafaur rasyidin", "caliph", "amiril mukminin"],
      "caliph": ["khalifah", "khulafaur rasyidin", "caliphs", "amiril mukminin"],
      "khalifah": ["caliph", "caliphs", "khulafaur rasyidin", "amiril mukminin", "abu bakar", "umar", "utsman", "ali"]
    };

    



    const qStem = stem(q);

    const results = [];

    const seen = new Set();

    const D = window.__ALFA_DEFS || window.DEFS || (typeof DEFS !== "undefined" ? DEFS : null);

    const enPack = PACKS.en || {};

    const arPack = PACKS.ar || {};



    let matchedHeader = null;



    // 1. Check Specific Predefined Semantic Intents (Highest Precision)

    let bestIntent = null;

    let highestScore = 0;



    for(const intent of (HISTORICAL_GRAPH.semantic_intents || [])){

      let score = 0;

      if(intent.all_match && intent.all_match.length){

        const allOk = intent.all_match.some(w => {

          const wLow = w.toLowerCase();

          return q.includes(wLow) || qStem.includes(wLow) || qStem.includes(stem(wLow));

        });

        if(!allOk) continue;

        score += 35;

      }

      for(const trig of intent.triggers){

        const trLow = trig.toLowerCase();

        if(q.includes(trLow) || qStem.includes(trLow) || qStem.includes(stem(trLow))) score += 12;

      }

      if(score > highestScore && score >= 20){

        highestScore = score;

        bestIntent = intent;

      }

    }



    if(bestIntent){

      matchedHeader = {

        title: lang === "ar" ? bestIntent.title_ar : (lang === "en" ? bestIntent.title_en : bestIntent.title_id),

        desc: lang === "ar" ? bestIntent.desc_ar : (lang === "en" ? bestIntent.desc_en : bestIntent.desc_id)

      };



      bestIntent.entities.forEach((ent, idx) => {

        let title = ent.id.replace(/^\d+-/, "").split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

        let role = ent.role;

        let img = getEntityImg(ent.type, ent.id);



        if(D){

          if(ent.type === "characters" && Array.isArray(D.characters)){

            const c = D.characters.find(x => (x.name && x.name.toLowerCase() === ent.id.toLowerCase()) || x.id === ent.id);

            if(c){

              const enC = enPack.characters ? enPack.characters[c.id || c.name] : null;

              const arC = arPack.characters ? arPack.characters[c.id || c.name] : null;

              title = (lang === "en" && enC?.name) || (lang === "ar" && arC?.name) || c.name;

              if(!img) img = c.img || "";

              if(!role) role = (lang === "en" && enC?.role) || (lang === "ar" && arC?.role) || c.role || "";

            }

          } else if(ent.type === "events" && Array.isArray(D.events)){

            const entSlugStripped = ent.id.replace(/^\d+-/, "").toLowerCase();

            const e = D.events.find(x => x.slug === ent.id || (x.slug && x.slug.replace(/^\d+-/, "").toLowerCase() === entSlugStripped) || x.id === ent.id || (x.title && x.title.toLowerCase().includes(entSlugStripped)));

            if(e){

              const enE = enPack.events ? enPack.events[e.slug] : null;

              const arE = arPack.events ? arPack.events[e.slug] : null;

              title = (lang === "en" && enE?.title) || (lang === "ar" && arE?.title) || e.title;

              const yr = e.year ? (e.year + " " + t("eraSuffix")) : "";

              if(!img) img = (Array.isArray(e.slides) && e.slides[0]) || (Array.isArray(e.gallery) && e.gallery[0]) || "";

              if(!role) role = yr + " — " + (((lang === "en" && enE?.summary) || (lang === "ar" && arE?.summary) || e.summary || "").slice(0, 90) + "...");

            }

          } else if(ent.type === "places" && Array.isArray(D.places)){

            const p = D.places.find(x => x.slug === ent.id || x.id === ent.id || (x.name && x.name.toLowerCase() === ent.id.toLowerCase()) || (x.slug && x.slug.toLowerCase() === ent.id.toLowerCase()));

            if(p){

              const enP = enPack.places ? enPack.places[p.slug] : null;

              const arP = arPack.places ? arPack.places[p.slug] : null;

              title = (lang === "en" && enP?.name) || (lang === "ar" && arP?.name) || p.name;

              if(!img) img = (Array.isArray(p.slides) && p.slides[0]) || "";

              if(!role) role = (lang === "en" && enP?.subtitle) || (lang === "ar" && arP?.subtitle) || p.subtitle || "";

            }

          }

        }



        const url = "/detail.html?t=" + ent.type + "&id=" + encodeURIComponent(ent.id);

        const key = ent.type + ":" + ent.id.toLowerCase();

        seen.add(key);



        results.push({

          type: ent.type,

          id: ent.id,

          title: title,

          role: role,

          badge: t(ent.type === "characters" ? "badgeChar" : ent.type === "events" ? "badgeEvent" : "badgePlace"),

          img: img,

          url: url,

          isIntentMatch: true,

          score: 1000 - idx

        });

      });

    }



    // 2. Check Broad Historical Concepts (Taxonomy Matching)

    if(!matchedHeader){

      for(const c of HISTORICAL_CONCEPTS){

        const hit = c.triggers.some(tr => {

          const trLow = tr.toLowerCase();

          const trStem = stem(trLow);

          return q === trLow || q === trStem || qStem === trStem || q.includes(trLow) || (trLow.length > 4 && q.includes(trStem));

        });



        if(hit){

          matchedHeader = {

            title: lang === "ar" ? c.title_ar : (lang === "en" ? c.title_en : c.title_id),

            desc: lang === "ar" ? c.desc_ar : (lang === "en" ? c.desc_en : c.desc_id)

          };



          const entities = c.matchEntities(D);

          entities.forEach((ent, idx) => {

            const key = ent.type + ":" + ent.id.toLowerCase();

            if(seen.has(key)) return;

            seen.add(key);



            let title = ent.id.replace(/^\d+-/, "").split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

            let role = ent.role;

            let img = getEntityImg(ent.type, ent.id);



            if(D){

              if(ent.type === "characters" && Array.isArray(D.characters)){

                const ch = D.characters.find(x => x.name === ent.id || x.id === ent.id);

                if(ch){

                  const enC = enPack.characters ? enPack.characters[ch.id || ch.name] : null;

                  const arC = arPack.characters ? arPack.characters[ch.id || ch.name] : null;

                  title = (lang === "en" && enC?.name) || (lang === "ar" && arC?.name) || ch.name;

                  if(!img) img = ch.img || "";

                  if(ch.role) role = (lang === "en" && enC?.role) || (lang === "ar" && arC?.role) || ch.role;

                }

              } else if(ent.type === "events" && Array.isArray(D.events)){

                const ev = D.events.find(x => x.slug === ent.id || x.id === ent.id);

                if(ev){

                  const enE = enPack.events ? enPack.events[ev.slug] : null;

                  const arE = arPack.events ? arPack.events[ev.slug] : null;

                  title = (lang === "en" && enE?.title) || (lang === "ar" && arE?.title) || ev.title;

                  if(!img) img = (Array.isArray(ev.slides) && ev.slides[0]) || (Array.isArray(ev.gallery) && ev.gallery[0]) || "";

                  role = (ev.year ? ev.year + " " + t("eraSuffix") : "") + " — " + (((lang === "en" && enE?.summary) || (lang === "ar" && arE?.summary) || ev.summary || "").slice(0, 85) + "...");

                }

              } else if(ent.type === "places" && Array.isArray(D.places)){

                const pl = D.places.find(x => x.slug === ent.id || x.id === ent.id);

                if(pl){

                  const enP = enPack.places ? enPack.places[pl.slug] : null;

                  const arP = arPack.places ? arPack.places[pl.slug] : null;

                  title = (lang === "en" && enP?.name) || (lang === "ar" && arP?.name) || pl.name;

                  if(!img) img = (Array.isArray(pl.slides) && pl.slides[0]) || "";

                  if(pl.subtitle) role = (lang === "en" && enP?.subtitle) || (lang === "ar" && arP?.subtitle) || pl.subtitle;

                }

              }

            }



            results.push({

              type: ent.type,

              id: ent.id,

              title: title,

              role: role,

              badge: t(ent.type === "characters" ? "badgeChar" : ent.type === "events" ? "badgeEvent" : "badgePlace"),

              img: img,

              url: "/detail.html?t=" + ent.type + "&id=" + encodeURIComponent(ent.id),

              isConceptMatch: true,

              score: 900 - idx

            });

          });

          break;

        }

      }

    }



    // 3. Stop words filter

    const STOP_WORDS = new Set([

      "para", "yang", "dan", "di", "ke", "dari", "ikut", "dalam", "pada", "tentang", 

      "siapa", "saja", "ada", "itu", "ini", "dengan", "oleh", "atau", "adalah", "yaitu",

      "the", "and", "of", "in", "to", "who", "for", "with", "on", "at", "by", "from",

      "في", "من", "إلى", "على", "عن", "مع", "التي", "الذي", "الذين", "كان"

    ]);



    // 4. Multilingual Entity Search (Indonesian, English, Arabic)

    if(D){

      const rawTokens = q.split(/\s+/).filter(w => w.length >= 2);

      const tokens = rawTokens.filter(w => !STOP_WORDS.has(w));

      let searchTokens = tokens.length ? tokens : rawTokens;
      const extraSyns = [];
      for(const tk of searchTokens){
        if(SYNONYM_MAP[tk]) extraSyns.push(...SYNONYM_MAP[tk]);
        if(SYNONYM_MAP[stem(tk)]) extraSyns.push(...SYNONYM_MAP[stem(tk)]);
      }
      if(extraSyns.length){
        searchTokens = [...new Set([...searchTokens, ...extraSyns])];
      }
      const searchStems = searchTokens.map(stem);



      // Search characters
      (D.characters || []).forEach((c, idx) => {
        const idVal = c.name || c.id || ("d" + idx);
        const key = "characters:" + idVal.toLowerCase();
        if(seen.has(key)) return;

        const enC = enPack.characters ? (enPack.characters[c.id || "d" + idx] || enPack.characters[c.name]) : null;
        const arC = arPack.characters ? (arPack.characters[c.id || "d" + idx] || arPack.characters[c.name]) : null;

        const namePool = [c.name, enC?.name, arC?.name].filter(Boolean).join(" ").toLowerCase();
        const cGroups = Array.isArray(c.groups) ? c.groups.join(" ") : (c.groups || "");
        const cEras = Array.isArray(c.eras) ? c.eras.join(" ") : (c.eras || "");
        const rolePool = [c.role, c.meta, cGroups, cEras, enC?.role, enC?.meta, arC?.role, arC?.meta].filter(Boolean).join(" ").toLowerCase();
        const bodyPool = [c.body, enC?.body, arC?.body].filter(Boolean).join(" ").toLowerCase();

        // Filter out enemies of Islam from general searches unless explicitly queried
        const isEnemy = (c.groups || []).includes("Penentang Dakwah");
        const queryWantsEnemy = /lahab|jahal|penentang|musuh|musyrik|quraisy/i.test(q);
        if(isEnemy && !queryWantsEnemy) return;

        let s = 0;
        if(namePool === q) s += 500;
        else if(namePool.includes(q)) s += 250;
        else if(namePool.includes(qStem)) s += 200;

        for(const tk of searchTokens){
          if(namePool.includes(tk)) s += 80;
        }

        if(rolePool.includes(q)) s += 150;
        else if(rolePool.includes(qStem)) s += 100;
        for(const tk of searchTokens){
          if(rolePool.includes(tk)) s += 40;
        }

        if(q.length >= 4 && bodyPool.includes(q)) s += 15;

        if(s >= 25){
          seen.add(key);
          const title = (lang === "en" && enC?.name) || (lang === "ar" && arC?.name) || c.name;
          const role = (lang === "en" && enC?.role) || (lang === "ar" && arC?.role) || c.role || "";
          results.push({
            type: "characters",
            id: idVal,
            title: title,
            role: role,
            badge: t("badgeChar"),
            img: c.img || "",
            url: "/detail.html?t=characters&id=" + encodeURIComponent(idVal),
            score: s
          });
        }
      });

      // Search events
      (D.events || []).forEach(e => {
        const slug = e.slug || e.id;
        const key = "events:" + slug.toLowerCase();
        if(seen.has(key)) return;

        const enE = enPack.events ? enPack.events[slug] : null;
        const arE = arPack.events ? arPack.events[slug] : null;

        const titlePool = [e.title, enE?.title, arE?.title].filter(Boolean).join(" ").toLowerCase();
        const summPool = [e.summary, enE?.summary, arE?.summary].filter(Boolean).join(" ").toLowerCase();
        const bodyPool = [e.body, enE?.body, arE?.body].filter(Boolean).join(" ").toLowerCase();

        let s = 0;
        if(titlePool === q) s += 480;
        else if(titlePool.includes(q)) s += 240;
        else if(titlePool.includes(qStem)) s += 180;

        for(const tk of searchTokens){
          if(titlePool.includes(tk)) s += 70;
        }

        if(summPool.includes(q)) s += 80;
        else if(summPool.includes(qStem)) s += 50;
        for(const tk of searchTokens){
          if(summPool.includes(tk)) s += 30;
        }

        if(e.year && String(e.year) === q) s += 200;
        if(q.length >= 4 && bodyPool.includes(q)) s += 15;

        if(s >= 25){
          seen.add(key);
          const img = (Array.isArray(e.slides) && e.slides[0]) || (Array.isArray(e.gallery) && e.gallery[0]) || "";
          const title = (lang === "en" && enE?.title) || (lang === "ar" && arE?.title) || e.title;
          const summ = (lang === "en" && enE?.summary) || (lang === "ar" && arE?.summary) || e.summary || "";
          results.push({
            type: "events",
            id: slug,
            title: title,
            role: (e.year ? e.year + " " + t("eraSuffix") : "") + (summ ? " — " + summ.slice(0, 85) + "..." : ""),
            badge: t("badgeEvent"),
            img: img,
            url: "/detail.html?t=events&id=" + encodeURIComponent(slug),
            score: s
          });
        }
      });

      // Search places
      (D.places || []).forEach(p => {
        const slug = p.slug || p.id;
        const key = "places:" + slug.toLowerCase();
        if(seen.has(key)) return;

        const enP = enPack.places ? enPack.places[slug] : null;
        const arP = arPack.places ? arPack.places[slug] : null;

        const namePool = [p.name, p.slug, enP?.name, arP?.name].filter(Boolean).join(" ").toLowerCase();
        const subPool = [p.subtitle, enP?.subtitle, arP?.subtitle].filter(Boolean).join(" ").toLowerCase();
        const descPool = [p.description, p.body, enP?.body, arP?.body].filter(Boolean).join(" ").toLowerCase();

        let s = 0;
        if(namePool === q) s += 420;
        else if(namePool.includes(q)) s += 220;
        else if(namePool.includes(qStem)) s += 160;

        for(const tk of searchTokens){
          if(namePool.includes(tk)) s += 60;
        }

        if(subPool.includes(q)) s += 120;
        for(const tk of searchTokens){
          if(subPool.includes(tk)) s += 30;
        }

        if(q.length >= 4 && descPool.includes(q)) s += 15;

        if(s >= 25){
          seen.add(key);
          const img = (Array.isArray(p.slides) && p.slides[0]) || "";
          const name = (lang === "en" && enP?.name) || (lang === "ar" && arP?.name) || p.name;
          const sub = (lang === "en" && enP?.subtitle) || (lang === "ar" && arP?.subtitle) || p.subtitle || "";
          results.push({
            type: "places",
            id: slug,
            title: name,
            role: sub,
            badge: t("badgePlace"),
            img: img,
            url: "/detail.html?t=places&id=" + encodeURIComponent(slug),
            score: s
          });
        }
      });
    }

    results.sort((a, b) => b.score - a.score);



    return {

      matchedIntent: matchedHeader,

      results: results.slice(0, 24)

    };

  }



  // --- GEMINI AI HISTORICAL ASSISTANT BRIDGE ---

  async function queryGeminiAI(userQuery, currentLang){

    const lang = currentLang || LANG || "id";

    const q = String(userQuery || "").trim();

    if(!q) return null;



    let key = "";

    try{

      key = (window.ALFA_CFG && window.ALFA_CFG.geminiKey) || localStorage.getItem("alfa_gemini_key") || "";

    }catch(e){}

    if(!key) return { active: false, reason: "no_key" };



    const langInstruction = lang === "ar"

      ? "أجب باللغة العربية الفصحى العلمية الموجزة."

      : (lang === "en" ? "Answer in concise, authoritative historical English." : "Jawab dalam bahasa Indonesia yang lugas, terpelajar, dan berwibawa.");



    const prompt = `Anda adalah asisten ensiklopedia sejarah Islam di alfahistory.web.id.

Tugas: Berikan intisari sejarah ringkas 2-3 kalimat mengenai pertanyaan atau topik ini: "${q}".

Kaidah Ketat:

- ${langInstruction}

- Wajib berbasis fakta sejarah yang akurat (sebutkan tahun, nama tokoh, atau peristiwa penentu).

- Dilarang keras menyematkan emoji apa pun.

- Dilarang pembuka klise (seperti 'Tentu saja', 'Dalam lembaran sejarah', 'Berdasarkan catatan'). Langsung masuk ke fakta peristiwa.`;



    const modelsToTry = [
      (window.ALFA_CFG && window.ALFA_CFG.geminiModel) || localStorage.getItem("alfa_gemini_model") || "gemini-flash-lite-latest",
      "gemini-flash-lite-latest",
      "gemini-3.5-flash-lite",
      "gemini-3.8-flash",
      "gemini-flash-latest"
    ].filter((v,i,a)=>a.indexOf(v)===i);



    for(const model of modelsToTry){

      try{

        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;

        const res = await fetch(url, {

          method: "POST",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify({

            contents: [{ parts: [{ text: prompt }] }]

          })

        });

        if(!res.ok) continue;

        const data = await res.json();

        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if(text && text.trim()){

          return {

            active: true,

            model: model,

            text: text.trim().replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "")

          };

        }

      }catch(err){}

    }

    return { active: false, reason: "api_error" };

  }





  // Get characters for an event with flexible slug and alias resolution

  function getEventCharacters(eventSlug){

    if(!eventSlug) return [];

    const raw = String(eventSlug).trim().toLowerCase();

    const stripped = raw.replace(/^\d+-/, "");



    // 1. Exact match

    let list = HISTORICAL_GRAPH.events_to_chars[raw] || HISTORICAL_GRAPH.events_to_chars[stripped];



    // 2. Fallback: match by stripped slug or substring in slug keys

    if(!list || !list.length){

      for(const [k, chars] of Object.entries(HISTORICAL_GRAPH.events_to_chars)){

        const kStripped = k.replace(/^\d+-/, "").toLowerCase();

        if(k.toLowerCase() === raw || kStripped === stripped || raw.includes(kStripped) || kStripped.includes(stripped)){

          list = chars;

          break;

        }

      }

    }



    if(!list || !list.length) return [];



    const D = window.__ALFA_DEFS || window.DEFS || (typeof DEFS !== "undefined" ? DEFS : null);
    const charsArr = (D && Array.isArray(D.characters)) ? D.characters : [];
    const findDefChar = nm => {
      const cn = resolveCharacterName(nm);
      return charsArr.find(x => x.name === nm || x.name === cn || resolveCharacterName(x.name) === cn) || { name: cn };
    };

    return list.map(item => {

      const canonName = resolveCharacterName(item.name);

      const img = getEntityImg("characters", canonName) || getEntityImg("characters", item.name);

      const locDef = char(findDefChar(canonName));

      let roleStr = item.role || "";
      if(LANG !== "id"){
        roleStr = (LANG === "en" ? item.role_en : item.role_ar) || (locDef && locDef.role) || "";
      }
      if(LANG === "ar") roleStr = normalizeArabic(roleStr);

      return {

        name: (LANG === "ar" ? normalizeArabic(locDef && locDef.name ? locDef.name : item.name) : (locDef && locDef.name ? locDef.name : item.name)),

        role: roleStr,

        img: img,

        url: "/detail.html?t=characters&id=" + encodeURIComponent(canonName)

      };

    });

  }



  // Get events for a character with normalized names

  function getCharacterEvents(charName){

    if(!charName) return [];

    const res = [];

    const D = window.__ALFA_DEFS || window.DEFS || (typeof DEFS !== "undefined" ? DEFS : null);

    const evMap = {};

    if(D && Array.isArray(D.events)){

      D.events.forEach(e => {

        evMap[e.slug] = e;

        evMap[e.slug.replace(/^\d+-/, "")] = e;

      });

    }

    const findDefChar = nm => {
      const cn = resolveCharacterName(nm);
      return (D && Array.isArray(D.characters) ? D.characters : []).find(x => x.name === nm || x.name === cn || resolveCharacterName(x.name) === cn) || { name: cn };
    };
    const locDef = char(findDefChar(charName));

    const cTarget = String(charName).trim().toLowerCase();
    const cCanon = resolveCharacterName(charName).toLowerCase();



    for(const [slug, chars] of Object.entries(HISTORICAL_GRAPH.events_to_chars)){

      const found = chars.find(c => {

        const cName = (c.name || "").toLowerCase();
        const cNameCan = resolveCharacterName(c.name || "").toLowerCase();

        return cName === cTarget || cNameCan === cCanon || cName.includes(cTarget) || cTarget.includes(cName);

      });

      if(found){

        const stripped = slug.replace(/^\d+-/, "");

        const rawEv = evMap[slug] || evMap[stripped] || {};
        const locEv = rawEv.slug ? event(rawEv) : rawEv;

        let roleStr = found.role || "";
        if(LANG !== "id"){
          roleStr = (LANG === "en" ? found.role_en : found.role_ar) || (locDef && locDef.role) || "";
        }
        if(LANG === "ar") roleStr = normalizeArabic(roleStr);

        res.push({

          slug: rawEv.slug || slug,

          title: locEv.title || slug.replace(/^\d+-/, "").replace(/-/g, " "),

          year: rawEv.year || slug.match(/^\d+/)?.[0] || "",

          role: roleStr,

          img: (Array.isArray(rawEv.slides) && rawEv.slides[0]) || "",

          url: "/detail.html?t=events&id=" + encodeURIComponent(rawEv.slug || slug)

        });

      }

    }

    return res;

  }



  window.ALFA_I18N = {

    HISTORICAL_CONCEPTS,

    queryGeminiAI,



    HISTORICAL_GRAPH,

    semanticSearch,

    autoWikiLink,

    getEventCharacters,
    resolveCharacterName,

    getCharacterEvents,

    normalizeArabic,
    normalizeDomArabic,

    setDefaultsData: defs => { window.__ALFA_DEFS = defs; },

    SUPPORTED,

    getLang: () => LANG,

    setLang,

    toggleLang,

    ensurePack,

    t,

    era,

    polity,

    place,

    event,

    char,

    readingMins,

    getSources: () => ISLAMIC_SOURCES.map(s => ({

      ...s,

      category: t(s.cat),

      scopeLabel: t(s.scope),

      desc: LANG === "id" ? s.desc_id : (LANG === "ar" ? s.desc_ar : s.desc_en)

    })),

    countryName: code => {

      try{

        return new Intl.DisplayNames([LANG === "id" ? "id" : (LANG === "ar" ? "ar" : "en")], { type: "region" }).of(code) || code;

      }catch(e){ return code; }

    }

  };

})();

