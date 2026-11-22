// ALFA | History of Islam — Extensible Trilingual Engine (v1.7.0) [ID, EN, AR]
(function(){
  const SUPPORTED = ["en", "id", "ar"];
  const STORAGE_KEY = "alfa_lang";

  const UI = {
    id: {
      navMap: "Peta Dunia",
      navTimeline: "Timeline",
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
      menuClose: "Tutup"
    },
    en: {
      navMap: "World Map",
      navTimeline: "Timeline",
      navCharacters: "Characters",
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
      menuClose: "Close"
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
      menuClose: "إغلاق"
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

  function t(key, ...args){
    const dict = UI[LANG] || UI.en;
    const v = dict[key] !== undefined ? dict[key] : (UI.en[key] !== undefined ? UI.en[key] : key);
    return typeof v === "function" ? v(...args) : v;
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
    return {
      ...e,
      name: (ov && ov.name) || (LANG === "en" ? e.name_en : e.name_ar) || e.name,
      desc: (ov && ov.desc) || (LANG === "en" ? e.desc_en : e.desc_ar) || e.desc
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
    return {
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
    return {
      ...ev,
      title: title,
      summary: summary,
      facts: translateFacts((ov && ov.facts) || (LANG === "en" ? ev.facts_en : ev.facts_ar) || ev.facts || ""),
      body: b
    };
  }

  function char(c){
    if(!c) return c;
    if(LANG === "id") return c;
    const pack = PACKS[LANG] || PACKS.en;
    const ov = pack && pack.characters && (pack.characters[c.name] || pack.characters[c.name_id] || pack.characters[c.name_en]);
    
    const role = (ov && ov.role) || (LANG === "en" ? c.role_en : c.role_ar) || c.role;
    const meta = (ov && ov.meta) || (LANG === "en" ? c.meta_en : c.meta_ar) || translateMeta(c.meta || "");
    const facts = (ov && ov.facts) || (LANG === "en" ? c.facts_en : c.facts_ar) || translateFacts(c.facts || "");
    
    // Check if the pack has a dedicated localized body
    let bodyHtml = (ov && ov.body) || (LANG === "en" ? c.body_en : c.body_ar);
    if(!bodyHtml){
      bodyHtml = translateBodyHeadings(c.body || "", LANG);
    }

    return {
      ...c,
      name: (ov && ov.name) || (LANG === "en" ? c.name_en : c.name_ar) || c.name,
      role: role,
      meta: meta,
      facts: facts,
      body: bodyHtml
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
      desc_id: "Perpustakaan digital kitab klasik Arab terlengkap: Tarikh ath-Thabari, Al-Bidayah wan-Nihayah Ibnu Katsir, Sirah Ibnu Hisyam, Al-Kamil Ibnul Atsir, dan Futuh al-Buldan.",
      desc_en: "Premier digital library of classical Arabic chronicles: Tarikh al-Tabari, Al-Bidayah wa al-Nihayah by Ibn Kathir, Sirah Ibn Hisham, and Al-Kamil fi al-Tarikh.",
      desc_ar: "المكتبة الرقمية الشاملة لأمهات المصادر الإسلامية: تاريخ الطبري، البداية والنهاية، السيرة النبوية لابن هشام، الكامل في التاريخ، وفتوح البلدان."
    },
    {
      id: "khastara-perpusnas",
      cat: "catNusantara",
      name: "Khastara Perpusnas RI",
      url: "https://khastara.perpusnas.go.id",
      scope: "scopeID",
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
        { name: "Abdul Muthalib", role: "Sayyid Quraisy & Penjaga Ka'bah" },
        { name: "Abrahah", role: "Panglima Pasukan Gajah dari Yaman" }
      ],
      "570-kelahiran-nabi": [
        { name: "Abdul Muthalib", role: "Kakek & Pengasuh Pertama" }
      ],
      "572-disusui-siti-halimah": [
        { name: "Halimah as-Sa’diyah", role: "Ibu Susuan di Perkampungan Bani Sa'ad" }
      ],
      "576-yatim-piatu": [
        { name: "Abdul Muthalib", role: "Kakek Pengasuh Pasca Wafatnya Ibunda Aminah" }
      ],
      "582-bertemu-bahira": [
        { name: "Bahira", role: "Rahib Penemu Tanda Kenabian di Busra" },
        { name: "Abi Thalib", role: "Paman Pemimpin Kafilah Dagang ke Syam" }
      ],
      "595-menikah-dengan-khadijah": [
        { name: "Khadijah", role: "Ummul Mukminin & Pendukung Utama Dakwah" },
        { name: "Abi Thalib", role: "Paman yang Menyampaikan Khutbah Lamaran" }
      ],
      "610-wahyu-pertama": [
        { name: "Khadijah", role: "Penenteram Jiwa Rasulullah ﷺ Pasca Turun Wahyu" },
        { name: "Waraqah bin Naufal", role: "Ulama Ahli Kitab Saksi Namus al-Akbar" }
      ],
      "613-dakwah-terang-terangan": [
        { name: "Ali bin Abi Thalib", role: "Pemuda Pertama yang Mengikrarkan Dukungan" },
        { name: "Abu Lahab", role: "Penentang Keras Dakwah Terbuka di Bukit Shafa" }
      ],
      "615-hijrah-ke-habasyah": [
        { name: "Utsman bin Affan", role: "Pemimpin Rombongan Muhajirin Pertama" }
      ],
      "616-hamzah-dan-umar-masuk-islam": [
        { name: "Hamzah bin Abdul Muthalib", role: "Singa Allah & Pelindung Dakwah" },
        { name: "Umar bin Khattab", role: "Penguat Kemuliaan & Keterbukaan Syiar Islam" }
      ],
      "617-pemboikotan-bani-hasyim": [
        { name: "Abi Thalib", role: "Pemimpin Keteguhan Perlindungan Bani Hasyim" },
        { name: "Khadijah", role: "Penyumbang Seluruh Harta Selama Pemboikotan" },
        { name: "Abu Jahal", role: "Penggagas Piagam Pemboikotan Total di Ka'bah" }
      ],
      "619-tahun-kesedihan": [
        { name: "Abi Thalib", role: "Wafatnya Paman Pelindung Terbesar" },
        { name: "Khadijah", role: "Wafatnya Istri Tercinta & Ummul Mukminin Pertama" }
      ],
      "622-hijrah-ke-madinah": [
        { name: "Abu Bakar Asshiddiq", role: "Sahabat Karib Pendamping di Gua Tsur" },
        { name: "Ali bin Abi Thalib", role: "Penebus Ranjang Tidur Nabi ﷺ di Makkah" }
      ],
      "624-perang-badar": [
        { name: "Ali bin Abi Thalib", role: "Panglima & Pahlawan Duel Mubarazah" },
        { name: "Hamzah bin Abdul Muthalib", role: "Singa Allah Penakluk Pembesar Quraisy" },
        { name: "Abu Bakar Asshiddiq", role: "Penjaga Tenda Komando Rasulullah ﷺ (Arisy)" },
        { name: "Sa’ad bin Abi Waqqash", role: "Pemanah Ulung Pertahanan Muslimin" },
        { name: "Bilal bin Rabah", role: "Penuntut Keadilan atas Majikan Zalim Umayyah" },
        { name: "Abu Jahal", role: "Panglima Tertinggi Pasukan Musyrik yang Tewas" }
      ],
      "625-perang-uhud": [
        { name: "Hamzah bin Abdul Muthalib", role: "Sayyidus Syuhada (Gugur Syahid di Uhud)" },
        { name: "Ali bin Abi Thalib", role: "Pembawa Panji Perang & Perisai Rasulullah ﷺ" },
        { name: "Abu Bakar Asshiddiq", role: "Pembela Barisan Depan di Masa Kritis" },
        { name: "Abu Ubaidah bin al-Jarrah", role: "Pencabut Rantai Zirah dari Pipi Nabi ﷺ" },
        { name: "Khalid bin Walid", role: "Panglima Kavaleri Kanan Quraisy (Sebelum Masuk Islam)" }
      ],
      "627-perang-khandaq": [
        { name: "Ali bin Abi Thalib", role: "Penakluk Pendekar Ahzab Amr bin Abdi Wudd" },
        { name: "Abu Bakar Asshiddiq", role: "Penjaga Titik Sektor Parit Madinah" },
        { name: "Umar bin Khattab", role: "Pemeriksa Pos Pasukan Pertahanan Parit" }
      ],
      "628-perjanjian-hudaibiyah": [
        { name: "Utsman bin Affan", role: "Utusan Diplomatik Masuk ke Kota Makkah" },
        { name: "Ali bin Abi Thalib", role: "Juru Tulis Naskah Perjanjian Damai" },
        { name: "Abu Bakar Asshiddiq", role: "Saksi Utama Baiat Ridhwan di Bawah Pohon" },
        { name: "Umar bin Khattab", role: "Penguji Keteguhan & Hikmah Perjanjian" }
      ],
      "629-perang-khaibar": [
        { name: "Ali bin Abi Thalib", role: "Pembawa Panji & Pembuka Benteng Qamush" },
        { name: "Abu Bakar Asshiddiq", role: "Panglima Sayap Penyerang Benteng" },
        { name: "Umar bin Khattab", role: "Panglima Sayap Penyerang Benteng" }
      ],
      "629-perang-mutah": [
        { name: "Khalid bin Walid", role: "Penyelamat Pasukan & Bergelar Saifullah al-Maslul" }
      ],
      "630-fathu-makkah": [
        { name: "Khalid bin Walid", role: "Panglima Sayap Kanan Penembus Kota Makkah" },
        { name: "Abu Bakar Asshiddiq", role: "Pendamping Rasulullah ﷺ Masuk Ka'bah" },
        { name: "Bilal bin Rabah", role: "Pengumandang Adzan Pembebasan di Atas Ka'bah" },
        { name: "Ali bin Abi Thalib", role: "Pembantu Penurunan dan Penghancuran Berhala" }
      ],
      "630-perang-hunain": [
        { name: "Ali bin Abi Thalib", role: "Pembalik Serangan Sengit di Lembah Hunain" },
        { name: "Abu Bakar Asshiddiq", role: "Pembela yang Tetap Bertahan di Samping Nabi ﷺ" }
      ],
      "632-haji-wada": [
        { name: "Abu Bakar Asshiddiq", role: "Pendamping Utama Ibadah Haji Perpisahan" },
        { name: "Ali bin Abi Thalib", role: "Penyampai Pesan Penting Sepulang dari Yaman" }
      ],
      "632-wafatnya-nabi": [
        { name: "Abu Bakar Asshiddiq", role: "Penenang Hati Umat & Khalifah Pertama" },
        { name: "Umar bin Khattab", role: "Penyumpah Setia di Saqifah Bani Sa'idah" },
        { name: "Ali bin Abi Thalib", role: "Pemimpin Pengurusan Jenazah Rasulullah ﷺ" }
      ],
      "632-perang-riddah": [
        { name: "Abu Bakar Asshiddiq", role: "Pemrakarsa Perang Menegakkan Syariat Zakat" },
        { name: "Khalid bin Walid", role: "Panglima Penumpas Musailamah di Yamamah" }
      ],
      "634-perang-yarmuk": [
        { name: "Khalid bin Walid", role: "Panglima Tertinggi & Penakluk Pasukan Romawi" },
        { name: "Abu Ubaidah bin al-Jarrah", role: "Panglima Pasukan Tengah (Aminul Ummah)" },
        { name: "Amr bin Ash", role: "Panglima Sayap Kanan Menghadapi Pasukan Bizantium" }
      ],
      "636-perang-qadisiyah": [
        { name: "Sa’ad bin Abi Waqqash", role: "Panglima Tertinggi Penakluk Kekaisaran Persia" }
      ],
      "637-penaklukan-baitul-maqdis": [
        { name: "Umar bin Khattab", role: "Penerima Kunci Al-Quds & Penulis Piagam Perdamaian" },
        { name: "Abu Ubaidah bin al-Jarrah", role: "Pengepung Kota & Negosiator Damai" }
      ],
      "641-penaklukan-mesir": [
        { name: "Amr bin Ash", role: "Panglima Penakluk Mesir & Pendiri Kota Fustat" }
      ],
      "642-perang-nahawand": [
        { name: "Umar bin Khattab", role: "Khalifah Pengarah Strategi Fathul Futuh" }
      ],
      "656-perang-jamal": [
        { name: "Ali bin Abi Thalib", role: "Khalifah Keempat yang Menjaga Persatuan Umat" },
        { name: "Aisyah binti Abu Bakar", role: "Ummul Mukminin Penuntut Keadilan Darah Utsman" }
      ],
      "657-perang-shiffin": [
        { name: "Ali bin Abi Thalib", role: "Khalifah Pemimpin Pasukan Irak" },
        { name: "Mu’awiyah bin Abi Sufyan", role: "Gubernur Syam Pihak Berselisih" },
        { name: "Amr bin Ash", role: "Juru Runding Tahkim Pihak Syam" }
      ],
      "661-kekhalifahan-umayyah": [
        { name: "Hasan bin Ali", role: "Sayyid yang Berdamai Demi Persatuan (Amul Jama'ah)" },
        { name: "Mu’awiyah bin Abi Sufyan", role: "Khalifah Pertama Dinasti Umayyah di Damaskus" }
      ],
      "680-peristiwa-karbala": [
        { name: "Husain bin Ali", role: "Sayyidus Syuhada Penegak Prinsip Kebenaran" },
        { name: "Yazid bin Mu’awiyah", role: "Khalifah Umayyah di Damaskus" }
      ],
      "685-masa-abdul-malik": [
        { name: "Abdul Malik bin Marwan", role: "Khalifah Pemersatu Negeri & Pembangun Qubbah ash-Shakhrah" },
        { name: "Al-Hajjaj bin Yusuf ats-Tsaqafi", role: "Gubernur Irak Penstabil Keamanan Negara" }
      ],
      "711-thariq-bin-ziyad-ke-andalusia": [
        { name: "Thariq bin Ziyad", role: "Panglima Penyeberang Selat Jabal Thariq (Gibraltar)" },
        { name: "Musa bin Nushair", role: "Gubernur Afrika Utara Penguat Penaklukan Semenanjung Iberia" }
      ],
      "711-penaklukan-sindh": [
        { name: "Muhammad bin Qasim ats-Tsaqafi", role: "Panglima Muda Penakluk Lembah Indus dan Sindh" }
      ],
      "712-penaklukan-transoxiana": [
        { name: "Qutaibah bin Muslim al-Bahili", role: "Panglima Penakluk Bukhara dan Samarkand" }
      ],
      "717-kekhalifahan-umar-bin-abdul-aziz": [
        { name: "Umar bin Abdul Aziz", role: "Khalifah Zahid & Pembaru Keadilan Peradaban Islam" }
      ],
      "732-pertempuran-tours-poitiers": [
        { name: "Abdurrahman al-Ghafiqi", role: "Panglima Pasukan Muslimin di Pertempuran Balathusy Syuhada" }
      ],
      "756-berdirinya-keamiran-cordoba": [
        { name: "Abdurrahman ad-Dakhil", role: "Shaqr Quraisy (Rajawali Quraisy) Pendiri Keamiran Cordoba" }
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
          { type: "characters", id: "Khadijah", role: "Ummul Mukminin & Tokoh Pertama yang Beriman" },
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

  // Helper to resolve entity image from defaults
  function getEntityImg(type, idOrName){
    try{
      const D = window.__ALFA_DEFS;
      if(!D) return "";
      if(type === "characters"){
        const c = (/^[0-9]+$/.test(idOrName) || /^d\d+$/.test(idOrName)) ? D.characters[+idOrName.replace(/\D/g,"")] : D.characters.find(x => x.name === idOrName || x.slug === idOrName || x.id === idOrName);
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
      const D = window.__ALFA_DEFS;
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
            catalog.push({ type: "characters", id: idVal, name: c.name, url: "detail.html?t=characters&id=" + encodeURIComponent(idVal) });
            seenNames.add(c.name);
          }
          const alts = ALIASES[c.name] || [];
          alts.forEach(alt => {
            if(!seenNames.has(alt)){
              catalog.push({ type: "characters", id: idVal, name: alt, url: "detail.html?t=characters&id=" + encodeURIComponent(idVal) });
              seenNames.add(alt);
            }
          });
        }
      });

      (D.events || []).forEach(e => {
        const slug = e.slug || e.id;
        if(currentType === "events" && (currentId === slug || currentId === e.title)) return;
        if(e.title && e.title.length >= 4 && !seenNames.has(e.title)){
          catalog.push({ type: "events", id: slug, name: e.title, url: "detail.html?t=events&id=" + encodeURIComponent(slug) });
          seenNames.add(e.title);
        }
        const alts = ALIASES[slug] || [];
        alts.forEach(alt => {
          if(!seenNames.has(alt)){
            catalog.push({ type: "events", id: slug, name: alt, url: "detail.html?t=events&id=" + encodeURIComponent(slug) });
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
          catalog.push({ type: "places", id: slug, name: cleanName, url: "detail.html?t=places&id=" + encodeURIComponent(slug) });
          seenNames.add(cleanName);
        }
        if(rawName.includes("(") && rawName.includes(")")){
          const sub = rawName.slice(rawName.indexOf("(") + 1, rawName.indexOf(")")).trim();
          if(sub.length >= 3 && !/^(kuno)/i.test(sub) && !seenNames.has(sub)){
            catalog.push({ type: "places", id: slug, name: sub, url: "detail.html?t=places&id=" + encodeURIComponent(slug) });
            seenNames.add(sub);
          }
        }
        const alts = ALIASES[slug] || [];
        alts.forEach(alt => {
          if(!seenNames.has(alt)){
            catalog.push({ type: "places", id: slug, name: alt, url: "detail.html?t=places&id=" + encodeURIComponent(slug) });
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

  // Semantic search implementation
  function semanticSearch(rawQuery, currentLang){
    const lang = currentLang || LANG || "id";
    const q = String(rawQuery || "").trim().toLowerCase();
    if(!q) return { matchedIntent: null, results: [] };

    // 1. Check against predefined semantic intents
    let bestIntent = null;
    let highestScore = 0;

    for(const intent of HISTORICAL_GRAPH.semantic_intents){
      let score = 0;
      // All_match required check if present
      if(intent.all_match && intent.all_match.length){
        const allOk = intent.all_match.some(w => q.includes(w.toLowerCase()));
        if(!allOk) continue;
        score += 30;
      }
      for(const trig of intent.triggers){
        if(q.includes(trig.toLowerCase())) score += 10;
      }
      if(score > highestScore && score >= 20){
        highestScore = score;
        bestIntent = intent;
      }
    }

    const results = [];
    const seen = new Set();

    // If intent matches, add its primary entities first
    if(bestIntent){
      for(const ent of bestIntent.entities){
        const img = getEntityImg(ent.type, ent.id);
        const url = "detail.html?t=" + ent.type + "&id=" + encodeURIComponent(ent.id);
        const key = ent.type + ":" + ent.id;
        seen.add(key);
        results.push({
          type: ent.type,
          id: ent.id,
          title: ent.id,
          role: ent.role,
          badge: t(ent.type === "characters" ? "badgeChar" : ent.type === "events" ? "badgeEvent" : "badgePlace"),
          img: img,
          url: url,
          isIntentMatch: true
        });
      }
    }

    // 2. Keyword fallback search over all entities in defaults
    const D = window.__ALFA_DEFS;
    if(D){
      const tokens = q.split(/\s+/).filter(w => w.length >= 2);

      // Search characters
      (D.characters || []).forEach((c, idx) => {
        const idVal = c.id || "d" + idx;
        const key = "characters:" + idVal;
        if(seen.has(key)) return;
        const name = (c.name || "").toLowerCase();
        const role = (c.role || "").toLowerCase();
        const bio = (c.bio || c.description || "").toLowerCase();

        let s = 0;
        if(name.includes(q)) s += 50;
        else {
          for(const t of tokens){
            if(name.includes(t)) s += 15;
            if(role.includes(t)) s += 8;
            if(bio.includes(t)) s += 3;
          }
        }
        if(s >= 8){
          seen.add(key);
          results.push({
            type: "characters",
            id: idVal,
            title: c.name,
            role: c.role || "",
            badge: t("badgeChar"),
            img: c.img || "",
            url: "detail.html?t=characters&id=" + encodeURIComponent(idVal),
            score: s
          });
        }
      });

      // Search events
      (D.events || []).forEach(e => {
        const slug = e.slug || e.id;
        const key = "events:" + slug;
        if(seen.has(key)) return;
        const title = (e.title || "").toLowerCase();
        const summary = (e.summary || "").toLowerCase();

        let s = 0;
        if(title.includes(q)) s += 50;
        else {
          for(const t of tokens){
            if(title.includes(t)) s += 15;
            if(summary.includes(t)) s += 6;
          }
        }
        if(s >= 6){
          seen.add(key);
          const img = (Array.isArray(e.slides) && e.slides[0]) || (Array.isArray(e.gallery) && e.gallery[0]) || "";
          results.push({
            type: "events",
            id: slug,
            title: e.title,
            role: e.year + " " + t("eraSuffix") + (e.summary ? " — " + e.summary.slice(0, 80) + "..." : ""),
            badge: t("badgeEvent"),
            img: img,
            url: "detail.html?t=events&id=" + encodeURIComponent(slug),
            score: s
          });
        }
      });

      // Search places
      (D.places || []).forEach(p => {
        const slug = p.slug || p.id;
        const key = "places:" + slug;
        if(seen.has(key)) return;
        const name = (p.name || "").toLowerCase();
        const sub = (p.subtitle || "").toLowerCase();

        let s = 0;
        if(name.includes(q)) s += 50;
        else {
          for(const t of tokens){
            if(name.includes(t)) s += 15;
            if(sub.includes(t)) s += 6;
          }
        }
        if(s >= 6){
          seen.add(key);
          const img = (Array.isArray(p.slides) && p.slides[0]) || "";
          results.push({
            type: "places",
            id: slug,
            title: p.name,
            role: p.subtitle || "",
            badge: t("badgePlace"),
            img: img,
            url: "detail.html?t=places&id=" + encodeURIComponent(slug),
            score: s
          });
        }
      });
    }

    // Sort results by score if not intent match
    results.sort((a, b) => (b.score || 0) - (a.score || 0));

    let intentInfo = null;
    if(bestIntent){
      intentInfo = {
        title: lang === "ar" ? bestIntent.title_ar : (lang === "en" ? bestIntent.title_en : bestIntent.title_id),
        desc: lang === "ar" ? bestIntent.desc_ar : (lang === "en" ? bestIntent.desc_en : bestIntent.desc_id)
      };
    }

    return {
      matchedIntent: intentInfo,
      results: results.slice(0, 24)
    };
  }

  // Get characters for an event
  function getEventCharacters(eventSlug){
    const list = HISTORICAL_GRAPH.events_to_chars[eventSlug] || [];
    return list.map(item => {
      const img = getEntityImg("characters", item.name);
      return {
        name: item.name,
        role: item.role,
        img: img,
        url: "detail.html?t=characters&id=" + encodeURIComponent(item.name)
      };
    });
  }

  // Get events for a character
  function getCharacterEvents(charName){
    const res = [];
    const D = window.__ALFA_DEFS;
    const evMap = {};
    if(D && Array.isArray(D.events)){
      D.events.forEach(e => { evMap[e.slug] = e; });
    }

    for(const [slug, chars] of Object.entries(HISTORICAL_GRAPH.events_to_chars)){
      const found = chars.find(c => c.name.toLowerCase() === charName.toLowerCase());
      if(found){
        const ev = evMap[slug] || {};
        res.push({
          slug: slug,
          title: ev.title || slug,
          year: ev.year || "",
          role: found.role,
          img: (Array.isArray(ev.slides) && ev.slides[0]) || "",
          url: "detail.html?t=events&id=" + encodeURIComponent(slug)
        });
      }
    }
    return res;
  }

  window.ALFA_I18N = {
    HISTORICAL_GRAPH,
    semanticSearch,
    autoWikiLink,
    getEventCharacters,
    getCharacterEvents,
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
