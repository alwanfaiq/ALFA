// ALFA | History of Islam — Extensible Multi-Language Engine (v1.7.0)
(function(){
  const SUPPORTED = ["en", "id"]; // Tambah kode bahasa lain di sini nanti (mis. "ar", "ms", "tr")
  const STORAGE_KEY = "alfa_lang";

  const UI = {
    id: {
      navMap: "Peta Dunia",
      navTimeline: "Timeline",
      navCharacters: "Tokoh",
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
      charactersHeading: "CHARACTERS",
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
      supportCaption: "Scan QRIS untuk dukung riset & produksi video",
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
      qsOpenShamela: "Buka di Shamela.ws ↗"
    },
    en: {
      navMap: "World Map",
      navTimeline: "Timeline",
      navCharacters: "Characters",
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
      qsOpenShamela: "Open on Shamela ↗"
    }
  };

  const HEADING_MAP_EN = {
    "RINGKASAN BIOGRAFI": "BIOGRAPHY SUMMARY",
    "KISAH PENTING": "KEY ACCOUNTS",
    "Nasab & Kehidupan Awal": "Lineage & Early Life",
    "Peristiwa-Peristiwa Kunci & Peran Historis": "Key Events & Historical Role",
    "Wafat & Warisan Sejarah": "Death & Historical Legacy",
    "Latar Belakang & Kekuasaan di Yaman": "Background & Rule in Yemen",
    "Kematian & Dampak Sejarah": "Death & Historical Impact"
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

  // Istilah internasional yang TIDAK boleh diterjemahkan ke bahasa Indonesia aneh
  const PROTECTED_TERMS = [
    ["Musim Semi Arab", "Arab Spring"]
  ];

  let EN_PACK = null;
  let PACK_PROMISE = null;

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
    if(EN_PACK) return EN_PACK;
    if(!PACK_PROMISE){
      PACK_PROMISE = fetch("i18n_en.json").then(r=>r.ok?r.json():{}).catch(()=>({})).then(j=>{EN_PACK=j||{};return EN_PACK});
    }
    return PACK_PROMISE;
  }

  function sanitizeProtected(str){
    if(!str) return str;
    let out = String(str);
    for(const [bad, good] of PROTECTED_TERMS){
      out = out.split(bad).join(good);
    }
    return out;
  }

  function t(key, ...args){
    const dict = UI[LANG] || UI.en;
    const v = dict[key] !== undefined ? dict[key] : (UI.en[key] !== undefined ? UI.en[key] : key);
    return typeof v === "function" ? v(...args) : v;
  }

  function translateFacts(str){
    if(!str || LANG === "id") return str;
    return String(str).split("\n").map(line=>{
      const idx = line.indexOf(":");
      if(idx < 0) return line;
      const k = line.slice(0, idx).trim();
      const rest = line.slice(idx + 1);
      const nk = FACT_LABELS_EN[k] || k;
      return nk + " :" + rest;
    }).join("\n");
  }

  function translateMeta(str){
    if(!str || LANG === "id") return str;
    return translateFacts(str)
      .replace(/\babad ke-(\d+)\b/gi, "$1th century")
      .replace(/\bMasehi\b/g, "CE")
      .replace(/\b(\d+)\s*M\b/g, "$1 CE")
      .replace(/\b(\d+)\s*H\b/g, "$1 AH");
  }

  function translateBodyHeadings(str){
    if(!str || LANG === "id") return str;
    let out = String(str);
    for(const [idH, enH] of Object.entries(HEADING_MAP_EN)){
      out = out.split(idH).join(enH);
    }
    return out;
  }

  function era(e){
    if(!e) return e;
    if(LANG === "id") return e;
    const ov = EN_PACK && EN_PACK.eras && EN_PACK.eras[e.id];
    return {
      ...e,
      name: e.name_en || (ov && ov.name) || e.name,
      desc: e.desc_en || (ov && ov.desc) || e.desc
    };
  }

  function polity(p){
    if(!p) return p;
    if(LANG === "id") return p;
    const ov = EN_PACK && EN_PACK.polities && EN_PACK.polities[p.id];
    return { ...p, name: p.name_en || ov || p.name };
  }

  function place(p){
    if(!p) return p;
    if(LANG === "id") return p;
    const key = p.slug || p.id;
    const ov = EN_PACK && EN_PACK.places && EN_PACK.places[key];
    return {
      ...p,
      n: p.name_en || (ov && ov.name) || p.n || p.name,
      name: p.name_en || (ov && ov.name) || p.name || p.n,
      s: p.subtitle_en || (ov && ov.subtitle) || p.s || p.subtitle,
      subtitle: p.subtitle_en || (ov && ov.subtitle) || p.subtitle || p.s,
      t: p.description_en || (ov && ov.description) || p.t || p.description,
      description: p.description_en || (ov && ov.description) || p.description || p.t,
      facts: translateFacts(p.facts_en || p.facts || ""),
      body: translateBodyHeadings(p.body_en || p.body || "")
    };
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
    const ov = EN_PACK && EN_PACK.events && EN_PACK.events[slug];
    return {
      ...ev,
      title: ev.title_en || (ov && ov.title) || sanitizeProtected(ev.title),
      summary: ev.summary_en || (ov && ov.summary) || sanitizeProtected(ev.summary),
      facts: translateFacts(ev.facts_en || ev.facts || ""),
      body: translateBodyHeadings(ev.body_en || ev.body || "")
    };
  }

  function char(c){
    if(!c) return c;
    if(LANG === "id") return c;
    const ov = EN_PACK && EN_PACK.characters && EN_PACK.characters[c.name];
    return {
      ...c,
      role: c.role_en || (ov && ov.role) || c.role,
      meta: c.meta_en || (ov && ov.meta) || translateMeta(c.meta || ""),
      facts: c.facts_en || (ov && ov.facts) || translateFacts(c.facts || ""),
      body: c.body_en || (ov && ov.body) || translateBodyHeadings(c.body || "")
    };
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
    window.dispatchEvent(new CustomEvent("alfa:langchange", { detail: { lang: LANG } }));
  }

  function toggleLang(){
    const idx = SUPPORTED.indexOf(LANG);
    setLang(SUPPORTED[(idx + 1) % SUPPORTED.length]);
  }

  document.documentElement.lang = LANG;

  const ISLAMIC_SOURCES = [
    {
      id: "quran-com",
      cat: "catQuran",
      name: "Quran.com",
      url: "https://quran.com",
      scope: "scopeGlobal",
      desc_id: "Teks Mushaf Utsmani, terjemahan puluhan bahasa, murattal qari internasional, dan komparasi tafsir (Ibnu Katsir, As-Sa'di, Al-Baghawi).",
      desc_en: "Authentic Uthmani Quran text, international translations, multi-reciter audio, and classical tafsir comparisons (Ibn Kathir, Sa'di, Baghawi)."
    },
    {
      id: "quran-kemenag",
      cat: "catQuran",
      name: "Qur'an Kemenag RI",
      url: "https://quran.kemenag.go.id",
      scope: "scopeID",
      desc_id: "Mushaf Standar Indonesia resmi Kementerian Agama RI, dilengkapi Terjemahan Resmi Kemenag, Tafsir Ringkas, dan Tafsir Tahlili.",
      desc_en: "Official Indonesian Standard Quran by Ministry of Religious Affairs (Kemenag RI), featuring official Indonesian translations and analytical tafsir."
    },
    {
      id: "sunnah-com",
      cat: "catHadith",
      name: "Sunnah.com",
      url: "https://sunnah.com",
      scope: "scopeGlobal",
      desc_id: "Koleksi digital 9 Kitab Induk Hadits (Kutubus Sittah, Muwatta Malik, Musnad Ahmad, Sunan ad-Darimi) dengan penomoran standar internasional.",
      desc_en: "Comprehensive digital archive of the 9 major hadith collections (Kutub al-Sittah, Muwatta, Musnad Ahmad) with international numbering."
    },
    {
      id: "dorar-net",
      cat: "catHadith",
      name: "Dorar.net (Al-Durar As-Saniyyah)",
      url: "https://dorar.net/hadith",
      scope: "scopeGlobal",
      desc_id: "Ensiklopedia verifikasi keshahihan hadits (takhrij & tahqiq) paling otoritatif di dunia Islam di bawah bimbingan para muhadditsin.",
      desc_en: "The foremost digital encyclopedia for hadith authentication, chain analysis (sanad), and narrator evaluation (takhrij & tahqiq)."
    },
    {
      id: "shamela-ws",
      cat: "catTarikh",
      name: "Shamela.ws (Al-Maktabah as-Syamilah)",
      url: "https://shamela.ws",
      scope: "scopeGlobal",
      desc_id: "Perpustakaan digital kitab klasik Arab terlengkap: Tarikh ath-Thabari, Al-Bidayah wan-Nihayah Ibnu Katsir, Sirah Ibnu Hisyam, Al-Kamil Ibnul Atsir, dan Futuh al-Buldan.",
      desc_en: "Premier digital library of classical Arabic chronicles: Tarikh al-Tabari, Al-Bidayah wa al-Nihayah by Ibn Kathir, Sirah Ibn Hisham, and Al-Kamil fi al-Tarikh."
    },
    {
      id: "khastara-perpusnas",
      cat: "catNusantara",
      name: "Khastara Perpusnas RI",
      url: "https://khastara.perpusnas.go.id",
      scope: "scopeID",
      desc_id: "Koleksi digital naskah kuno Kesultanan Islam di Nusantara (Samudera Pasai, Aceh, Demak, Banten, Mataram Islam, Gowa-Tallo, Ternate-Tidore).",
      desc_en: "National Library of Indonesia's digital repository of ancient Islamic sultanate manuscripts across the Malay Archipelago."
    },
    {
      id: "lektur-kemenag",
      cat: "catNusantara",
      name: "Puslitbang Lektur Kemenag RI",
      url: "https://lektur.kemenag.go.id",
      scope: "scopeID",
      desc_id: "Inventarisasi dan riset naskah klasik keagamaan Nusantara, mushaf kuno, dan manuskrip ulama kepulauan Indonesia.",
      desc_en: "Research repository of classical Indonesian Islamic literature, ancient Quran manuscripts, and archipelago ulama treatises."
    },
    {
      id: "archnet",
      cat: "catAcad",
      name: "ArchNet (MIT & Aga Khan Trust)",
      url: "https://archnet.org",
      scope: "scopeGlobal",
      desc_id: "Dokumentasi arsitektur, situs perkotaan bersejarah, monumen, dan lanskap geografi dunia Islam inisiasi MIT dan Aga Khan Trust for Culture.",
      desc_en: "Authoritative open-access digital archive on Islamic architecture, urbanism, historic cities, and monuments by MIT and AKTC."
    },
    {
      id: "brill-ei",
      cat: "catAcad",
      name: "Encyclopaedia of Islam (Brill)",
      url: "https://referenceworks.brillonline.com/browse/encyclopaedia-of-islam-3",
      scope: "scopeGlobal",
      desc_id: "Karya referensi akademis internasional paling komprehensif mengenai sejarah, geografi, dan peradaban dunia Islam.",
      desc_en: "The standard international academic encyclopedia covering history, geography, institutions, and civilization of the Islamic world."
    }
  ];

  window.ALFA_I18N = {
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
      desc: LANG === "id" ? s.desc_id : s.desc_en
    })),
    countryName: code => {
      try{
        return new Intl.DisplayNames([LANG === "id" ? "id" : "en"], { type: "region" }).of(code) || code;
      }catch(e){ return code; }
    }
  };
})();
