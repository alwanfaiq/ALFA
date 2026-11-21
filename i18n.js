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
      metaRegion: "Wilayah"
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
      metaRegion: "Region"
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
    countryName: code => {
      try{
        return new Intl.DisplayNames([LANG === "id" ? "id" : "en"], { type: "region" }).of(code) || code;
      }catch(e){ return code; }
    }
  };
})();
