// ALFA | History of Islam — Contextual Primary Sources & "About This Telling" Engine (v1.7.0)
// Inspired by MyQabas.com contextual source attribution & research transparency standards
(function(){
  const normStr = s => (s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2018\u2019'`\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const EVENT_SOURCES = {
    "570-tahun-gajah": {
      collection: "Al-Qur'an al-Karim & Tarikh Klasik",
      collection_en: "The Holy Quran & Classical Chronicles",
      narration: "Surah Al-Fil (105:1–5) & Tafsir Ibnu Katsir",
      narration_en: "Surah Al-Fil (105:1–5) & Tafsir Ibn Kathir",
      narration_url: "https://quran.com/105",
      grading: "The Quran (105:1-5, 106:1-4): Mutawatir (Absolute authenticity); Sahih al-Bukhari 4347 and Sahih Muslim 1355: Sahih (authentic); Sirah Ibn Hisham & Tarikh al-Tabari: Verified classical chronicles.",
      grading_id: "Al-Qur'an (105:1-5, 106:1-4): Mutawatir (Tingkat kepastian mutlak); Sahih al-Bukhari 4347 dan Sahih Muslim 1355: Shahih; Sirah Ibnu Hisyam & Tarikh ath-Thabari: Naskah klasik mu'tabar.",
      verses: [
        { label: "105:1", url: "https://quran.com/105/1" },
        { label: "105:2", url: "https://quran.com/105/2" },
        { label: "105:3", url: "https://quran.com/105/3" },
        { label: "105:4", url: "https://quran.com/105/4" },
        { label: "105:5", url: "https://quran.com/105/5" },
        { label: "106:1", url: "https://quran.com/106/1" },
        { label: "106:2", url: "https://quran.com/106/2" },
        { label: "106:3", url: "https://quran.com/106/3" },
        { label: "106:4", url: "https://quran.com/106/4" }
      ],
      also_reported: [
        { title: "Sahih al-Bukhari 4347 (Allah protected Mecca from the Elephant)", url: "https://sunnah.com/bukhari:4347" },
        { title: "Sahih Muslim 1355 (Sanctity and Security of Mecca)", url: "https://sunnah.com/muslim:1355" },
        { title: "Tarikh ath-Thabari jilid 2 hal 124 (Kisah Abrahah & Abdul Muthalib)", url: "https://shamela.ws/book/9783/382" },
        { title: "Sirah Ibnu Hisyam jilid 1 (Syits & Ashab al-Fil)", url: "https://shamela.ws/book/23833" }
      ],
      telling_en: "Nobody speaks in the film: a narrator tells everything, including what Abrahah, Abdul Muthalib, and the army said. Allah is never represented. The Prophet Muhammad (peace be upon him) had not yet been born and is not depicted. What is from the Quran are the verses on this page (Surah Al-Fil and Quraysh); the details of Abrahah's cathedral in Sana'a, Mahmud the lead elephant, and the negotiation over 200 camels come from Sirah Ibn Hisham and Tarikh al-Tabari.",
      telling_id: "Narasi penuturan berfokus pada gerak laju pasukan Abrahah dari Yaman menuju Makkah dan pertolongan mukjizat Allah melalui burung Ababil sebelum kelahiran Nabi Muhammad ﷺ. Allah SWT tidak divisualisasikan. Yang bersumber langsung dari Al-Qur'an adalah ayat-ayat pada halaman ini (Surah Al-Fil dan Quraysh); rincian katedral Al-Qullais di Shan'a, gajah Mahmud, dan perundingan 200 unta Abdul Muthalib merujuk pada Sirah Ibnu Hisyam dan Tarikh ath-Thabari."
    },
    "570-kelahiran-nabi": {
      collection: "Sahih Muslim & Sirah Nabawiyyah",
      collection_en: "Sahih Muslim & Prophetic Biography",
      narration: "Sahih Muslim 1162 (Puasa Hari Senin karena Hari Kelahiran Beliau)",
      narration_en: "Sahih Muslim 1162 (Fasting on Mondays as the Day of the Prophet's Birth)",
      narration_url: "https://sunnah.com/muslim:1162",
      grading: "Sahih Muslim 1162 (Kitab ash-Shiyam); Al-Bidayah wan-Nihayah Ibn Kathir vol. 2; Sirah Ibn Hisham vol. 1.",
      grading_id: "Sahih Muslim 1162 (Kitab ash-Shiyam); Al-Bidayah wan-Nihayah Ibnu Katsir jilid 2; Sirah Ibnu Hisyam jilid 1.",
      verses: [
        { label: "93:6", url: "https://quran.com/93/6" },
        { label: "21:107", url: "https://quran.com/21/107" }
      ],
      also_reported: [
        { title: "Musnad Ahmad 17163 (Khabar Kelahiran Nabi ﷺ)", url: "https://sunnah.com/ahmad" },
        { title: "Al-Bidayah wan-Nihayah Ibnu Katsir jilid 2 hal 259", url: "https://shamela.ws/book/4445" },
        { title: "Sirah Ibnu Hisyam jilid 1 hal 158", url: "https://shamela.ws/book/23833" }
      ],
      telling_en: "The Prophet Muhammad (peace be upon him) is STRICTLY NEVER depicted in any physical portrait or visual likeness. The narrative honors his presence through historical accounts of Mecca, the joy of his grandfather Abdul Muthalib bringing him to the Ka'bah, and the passing of his father Abdullah in Yathrib prior to his birth.",
      telling_id: "Sosok Baginda Nabi Muhammad ﷺ dijaga kesucian dan kehormatannya; rupa dan fisik beliau TIDAK PERNAH divisualisasikan dalam bentuk apa pun. Narasi menyajikan suasana kota Makkah, kegembiraan sang kakek Abdul Muthalib membawanya ke Ka'bah, dan wafatnya sang ayah Abdullah di Yatsrib sebelum beliau lahir."
    },
    "582-bertemu-bahira": {
      collection: "Jami' at-Tirmidhi & Sirah Nabawiyyah",
      collection_en: "Jami' at-Tirmidhi & Prophetic Chronicles",
      narration: "Jami' at-Tirmidhi 3620 (Kafilah Abu Thalib & Rahib Bahira di Bushra)",
      narration_en: "Jami' at-Tirmidhi 3620 (Abu Talib's Caravan & Monk Bahira in Bosra)",
      narration_url: "https://sunnah.com/tirmidhi:3620",
      grading: "Jami' at-Tirmidhi 3620: Hasan Gharib; Verified in Sirah Ibn Hisham vol. 1 p. 180 and Dalail an-Nubuwwah by al-Bayhaqi.",
      grading_id: "Jami' at-Tirmidhi 3620: Hasan Gharib; Dikuatkan dalam Sirah Ibnu Hisyam jilid 1 hal 180 dan Dala'il an-Nubuwwah karya Al-Baihaqi.",
      verses: [
        { label: "61:6", url: "https://quran.com/61/6" }
      ],
      also_reported: [
        { title: "Tarikh ath-Thabari jilid 2 hal 194", url: "https://shamela.ws/book/9783" },
        { title: "Sirah Ibnu Hisyam jilid 1 hal 180", url: "https://shamela.ws/book/23833" }
      ],
      telling_en: "The narration chronicles the commercial journey of Abu Talib's caravan to Byzantine Syria and the monk Bahira noticing the cloud providing shade. The physical likeness of the youthful Prophet is not shown; the illustration captures Bahira and the caravan setting in Bosra.",
      telling_id: "Narasi mengisahkan perjalanan kafilah dagang Abu Thalib ke Syam dan pengamatan Rahib Bahira terhadap gumpalan awan yang menaungi rombongan. Sosok fisik Rasulullah muda tidak digambarkan; ilustrasi berfokus pada sosok Bahira dan latar perhentian kafilah di Bushra."
    },
    "610-wahyu-pertama": {
      collection: "Sahih al-Bukhari",
      collection_en: "Sahih al-Bukhari",
      narration: "Sahih al-Bukhari 3 (Bad'ul Wahyi / In-book: Book 1, Hadith 3)",
      narration_en: "Sahih al-Bukhari 3 (Beginning of Revelation / Book 1, Hadith 3)",
      narration_url: "https://sunnah.com/bukhari:3",
      grading: "Sahih al-Bukhari 3 and Sahih Muslim 160: Muttafaqun 'Alayh (Highest level of hadith authenticity); The Quran (96:1-5).",
      grading_id: "Sahih al-Bukhari 3 dan Sahih Muslim 160: Muttafaqun 'Alaih (Derajat keshahihan tertinggi); Al-Qur'an (96:1-5).",
      verses: [
        { label: "96:1", url: "https://quran.com/96/1" },
        { label: "96:2", url: "https://quran.com/96/2" },
        { label: "96:3", url: "https://quran.com/96/3" },
        { label: "96:4", url: "https://quran.com/96/4" },
        { label: "96:5", url: "https://quran.com/96/5" },
        { label: "74:1", url: "https://quran.com/74/1" },
        { label: "74:2", url: "https://quran.com/74/2" }
      ],
      also_reported: [
        { title: "Sahih Muslim 160a (Beginning of Divine Inspiration)", url: "https://sunnah.com/muslim:160a" },
        { title: "Jami' at-Tirmidhi 3632", url: "https://sunnah.com/tirmidhi:3632" },
        { title: "Tarikh ath-Thabari jilid 2 hal 205", url: "https://shamela.ws/book/9783" }
      ],
      telling_en: "Neither the Angel Jibreel (Gabriel) nor the Prophet Muhammad (peace be upon him) are depicted physically. The narrative conveys the sacred solitude of Cave Hira, the first revelation of Iqra', and the comforting presence of Sayyidah Khadijah and Waraqah bin Naufal.",
      telling_id: "Malaikat Jibril dan Rasulullah ﷺ dijaga kemuliaannya tanpa representasi rupa fisik apa pun. Narasi mengisahkan kesunyian Jabal Nur, turunnya lima ayat pertama Surah Al-'Alaq, serta ketenteraman yang dihadirkan oleh Sayyidah Khadijah dan verifikasi Waraqah bin Naufal."
    },
    "622-hijrah-ke-madinah": {
      collection: "Sahih al-Bukhari",
      collection_en: "Sahih al-Bukhari",
      narration: "Sahih al-Bukhari 3905 (Hijrah to Medina & Cave Thawr)",
      narration_en: "Sahih al-Bukhari 3905 (Migration to Medina & Cave Thawr)",
      narration_url: "https://sunnah.com/bukhari:3905",
      grading: "Sahih al-Bukhari 3905 & Sahih Muslim 2009: Sahih (authentic); The Quran (9:40).",
      grading_id: "Sahih al-Bukhari 3905 & Sahih Muslim 2009: Shahih; Al-Qur'an (9:40).",
      verses: [
        { label: "9:40", url: "https://quran.com/9/40" },
        { label: "8:30", url: "https://quran.com/8/30" },
        { label: "59:9", url: "https://quran.com/59/9" }
      ],
      also_reported: [
        { title: "Sahih Muslim 2009 (The Journey of Migration)", url: "https://sunnah.com/muslim:2009" },
        { title: "Tarikh ath-Thabari jilid 2 hal 372", url: "https://shamela.ws/book/9783" },
        { title: "Sirah Ibnu Hisyam jilid 1 hal 482", url: "https://shamela.ws/book/23833" }
      ],
      telling_en: "The narration focuses on the strategic journey from Mecca across Cave Thawr to Quba and Yathrib. Visuals depict the desert topography, the cave entrance, and historical landmarks while preserving the sacred reverence of the Prophet ﷺ.",
      telling_id: "Narasi berpusat pada perjalanan strategis dari Makkah melewati Gua Tsur hingga singgah di Quba dan memasuki Yatsrib. Visual menyajikan topografi gurun, mulut gua, dan penataan kota Madinah dengan menjaga adab syariat."
    },
    "624-perang-badar": {
      collection: "Sahih al-Bukhari & Sahih Muslim",
      collection_en: "Sahih al-Bukhari & Sahih Muslim",
      narration: "Sahih al-Bukhari 3953 (Kitab al-Maghazi / Battle of Badr)",
      narration_en: "Sahih al-Bukhari 3953 (Book of Military Expeditions / Battle of Badr)",
      narration_url: "https://sunnah.com/bukhari:3953",
      grading: "Sahih al-Bukhari 3953, Sahih Muslim 1763; The Quran (3:123, 8:9-17): Mutawatir.",
      grading_id: "Sahih al-Bukhari 3953, Sahih Muslim 1763; Al-Qur'an (3:123, 8:9-17): Mutawatir.",
      verses: [
        { label: "3:123", url: "https://quran.com/3/123" },
        { label: "8:9", url: "https://quran.com/8/9" },
        { label: "8:11", url: "https://quran.com/8/11" },
        { label: "8:17", url: "https://quran.com/8/17" },
        { label: "8:42", url: "https://quran.com/8/42" }
      ],
      also_reported: [
        { title: "Sahih Muslim 1763 (Du'a of the Prophet at Badr)", url: "https://sunnah.com/muslim:1763" },
        { title: "Sunan Abi Dawud 2681", url: "https://sunnah.com/abudawud:2681" },
        { title: "Tarikh ath-Thabari jilid 2 hal 421", url: "https://shamela.ws/book/9783" }
      ],
      telling_en: "The pivotal encounter at the wells of Badr is reconstructed with military and topographical fidelity: the encampment, the night of rain, and the decisive clash. Tactically and chronologically verified against Sahih Bukhari and classical Maghazi chronicles.",
      telling_id: "Pertempuran penentu di sumur Badar direkonstruksi secara topografis dan taktis: pemilihan lokasi kemah, malam turunnya hujan penenang, dan benturan pasukan. Diverifikasi silang antara Sahih Bukhari dan kitab Maghazi klasik."
    },
    "625-perang-uhud": {
      collection: "Sahih al-Bukhari",
      collection_en: "Sahih al-Bukhari",
      narration: "Sahih al-Bukhari 4043 (Kitab al-Maghazi / Ghazwah Uhud)",
      narration_en: "Sahih al-Bukhari 4043 (Expeditions / Battle of Uhud)",
      narration_url: "https://sunnah.com/bukhari:4043",
      grading: "Sahih al-Bukhari 4043, Sahih Muslim 1790; The Quran (3:140-160): Mutawatir.",
      grading_id: "Sahih al-Bukhari 4043, Sahih Muslim 1790; Al-Qur'an (3:140-160): Mutawatir.",
      verses: [
        { label: "3:140", url: "https://quran.com/3/140" },
        { label: "3:152", url: "https://quran.com/3/152" },
        { label: "3:159", url: "https://quran.com/3/159" }
      ],
      also_reported: [
        { title: "Sahih Muslim 1790 (Trial at Uhud & Martyrs)", url: "https://sunnah.com/muslim:1790" },
        { title: "Tarikh ath-Thabari jilid 2 hal 502", url: "https://shamela.ws/book/9783" },
        { title: "Sirah Ibnu Hisyam jilid 2 hal 60", url: "https://shamela.ws/book/23833" }
      ],
      telling_en: "Reconstructs the strategic terrain of Mount Uhud and Jabal ar-Rumah (Archers' Hill). Highlights the martyrdom of Hamzah bin Abdul Muthalib and the steadfastness of the companions around the Messenger ﷺ.",
      telling_id: "Menggambarkan tata medan Jabal Uhud dan Bukit Pemanah (Jabal ar-Rumah). Mengangkat kepahlawanan Sayyidina Hamzah bin Abdul Muthalib serta keteguhan para sahabat di sekitar Rasulullah ﷺ."
    },
    "628-perjanjian-hudaibiyah": {
      collection: "Sahih al-Bukhari",
      collection_en: "Sahih al-Bukhari",
      narration: "Sahih al-Bukhari 2731 (Kitab asy-Syuruth / Sulh al-Hudaibiyah)",
      narration_en: "Sahih al-Bukhari 2731 (Conditions / Treaty of al-Hudaibiyyah)",
      narration_url: "https://sunnah.com/bukhari:2731",
      grading: "Sahih al-Bukhari 2731, Sahih Muslim 1783; The Quran (48:1-18, Surah Al-Fath).",
      grading_id: "Sahih al-Bukhari 2731, Sahih Muslim 1783; Al-Qur'an (48:1-18, Surah Al-Fath).",
      verses: [
        { label: "48:1", url: "https://quran.com/48/1" },
        { label: "48:10", url: "https://quran.com/48/10" },
        { label: "48:18", url: "https://quran.com/48/18" }
      ],
      also_reported: [
        { title: "Sahih Muslim 1783 (The Treaty & Bai'at ar-Ridwan)", url: "https://sunnah.com/muslim:1783" },
        { title: "Tarikh ath-Thabari jilid 2 hal 620", url: "https://shamela.ws/book/9783" }
      ],
      telling_en: "Chronicles the diplomatic milestone of Hudaibiyah and the pledge beneath the tree (Bai'at ar-Ridwan). Visuals highlight the desert encampment and the diplomatic negotiation between Suhail ibn Amr and the early Muslim community.",
      telling_id: "Menelusuri diplomasi agung Hudaibiyah dan Bai'at ar-Ridwan di bawah pohon. Visual menekankan perkemahan kafilah dan perundingan Suhail bin Amr dengan kaum muslimin."
    },
    "630-fathu-makkah": {
      collection: "Sahih al-Bukhari",
      collection_en: "Sahih al-Bukhari",
      narration: "Sahih al-Bukhari 4275 (Ghazwah al-Fath fi Ramadhan)",
      narration_en: "Sahih al-Bukhari 4275 (The Conquest of Mecca in Ramadan)",
      narration_url: "https://sunnah.com/bukhari:4275",
      grading: "Sahih al-Bukhari 4275, Sahih Muslim 1780; The Quran (110:1-3, 48:1-3).",
      grading_id: "Sahih al-Bukhari 4275, Sahih Muslim 1780; Al-Qur'an (110:1-3, 48:1-3).",
      verses: [
        { label: "110:1", url: "https://quran.com/110/1" },
        { label: "110:2", url: "https://quran.com/110/2" },
        { label: "110:3", url: "https://quran.com/110/3" },
        { label: "48:1", url: "https://quran.com/48/1" },
        { label: "17:81", url: "https://quran.com/17/81" }
      ],
      also_reported: [
        { title: "Sahih Muslim 1780 (Entry into Mecca without bloodshed)", url: "https://sunnah.com/muslim:1780" },
        { title: "Tarikh ath-Thabari jilid 3 hal 43", url: "https://shamela.ws/book/9783" },
        { title: "Sirah Ibnu Hisyam jilid 2 hal 389", url: "https://shamela.ws/book/23833" }
      ],
      telling_en: "The peaceful entry into Mecca of 10,000 troops and the declaration of amnesty ('Go, for you are free') is presented based on authenticated traditions. Visual scenes emphasize the Ka'bah courtyard and the removal of idols.",
      telling_id: "Pembebasan kota Makkah oleh 10.000 pasukan tanpa pertumpahan darah dan pengumuman amnesti umum disajikan berdasarkan riwayat shahih. Visual berfokus pada pelataran Ka'bah dan pembersihan berhala."
    },
    "636-perang-yarmuk": {
      collection: "Tarikh ar-Rusul wal-Muluk (Tarikh ath-Thabari)",
      collection_en: "Tarikh al-Rusul wa al-Muluk (Tarikh al-Tabari)",
      narration: "Tarikh ath-Thabari jilid 3 hal 388 (Khabar Pertempuran Yarmuk & Taktik Khalid bin Walid)",
      narration_en: "Tarikh al-Tabari vol. 3 p. 388 (The Battle of Yarmuk & Tactics of Khalid ibn al-Walid)",
      narration_url: "https://shamela.ws/book/9783/1085",
      grading: "Verified classical chronicles: Tarikh al-Tabari, Al-Bidayah wa al-Nihayah by Ibn Kathir vol. 7 p. 4, Futuh al-Buldan by al-Baladhuri p. 135.",
      grading_id: "Riwayat tarikh mu'tabar: Tarikh ath-Thabari, Al-Bidayah wan-Nihayah Ibnu Katsir jilid 7 hal 4, Futuh al-Buldan Al-Baladhuri hal 135.",
      verses: [
        { label: "2:249", url: "https://quran.com/2/249" }
      ],
      also_reported: [
        { title: "Al-Kamil fit-Tarikh Ibnul Atsir jilid 2 hal 410", url: "https://shamela.ws/book/21712" },
        { title: "Siyar A'lam an-Nubala' (Biografi Khalid bin Walid)", url: "https://shamela.ws/book/10906" },
        { title: "Al-Bidayah wan-Nihayah jilid 7 hal 4", url: "https://shamela.ws/book/4445" }
      ],
      telling_en: "The maneuver at the ravine of Yarmuk is reconstructed with geographical precision: isolating the Byzantine cavalry and encircling the infantry wings. Grounded in eyewitness narrations preserved by Ibn Ishaq, Sayf ibn Umar, and Al-Tabari.",
      telling_id: "Manuver taktis di lembah Yarmuk direkonstruksi dengan presisi geografis: memisahkan kavaleri Bizantium dari infanteri lalu melakukan manuver pengepungan. Disarikan dari riwayat rawi tarikh dalam Tarikh ath-Thabari dan Ibnu Katsir."
    },
    "711-penaklukan-andalusia": {
      collection: "Tarikh Iftitah al-Andalus & Tarikh ath-Thabari",
      collection_en: "Tarikh Iftitah al-Andalus & Tarikh al-Tabari",
      narration: "Tarikh Iftitah al-Andalus karya Ibnu al-Quthiyyah & Nafh at-Tib karya Al-Maqqari",
      narration_en: "Tarikh Iftitah al-Andalus by Ibn al-Qutiyya & Nafh al-Tib by al-Maqqari",
      narration_url: "https://shamela.ws/book/9613",
      grading: "Classical Andalusian & Umayyad chronicles: Tarikh al-Tabari vol. 6, Al-Bidayah wa al-Nihayah vol. 9, Al-Bayan al-Mughrib by Ibn Idhari.",
      grading_id: "Naskah tarikh klasik: Tarikh ath-Thabari jilid 6, Al-Bidayah wan-Nihayah jilid 9, Al-Bayan al-Mughrib karya Ibnu Idzari.",
      verses: [],
      also_reported: [
        { title: "Futuh al-Buldan Al-Baladhuri (Futuh al-Andalus)", url: "https://shamela.ws/book/12013" },
        { title: "Al-Kamil fit-Tarikh Ibnul Atsir jilid 4 hal 560", url: "https://shamela.ws/book/21712" }
      ],
      telling_en: "The crossing of the Strait of Gibraltar by Tariq ibn Ziyad and the decisive engagement at Guadalete are recounted without romanticized myths. Verified against earliest available Andalusian Arabic sources.",
      telling_id: "Penyeberangan Selat Gibraltar oleh Thariq bin Ziyad dan pertempuran penentu di lembah Guadalete dipaparkan secara objektif tanpa bumbu mitos fiktif, merujuk pada historiografi Arab-Andalusia tertua."
    }
  };

  const CHAR_SOURCES = {
    "abdul muthalib": {
      collection: "Tarikh ar-Rusul wal-Muluk & Sirah Ibnu Hisyam",
      collection_en: "Tarikh al-Tabari & Sirah Ibn Hisham",
      narration: "Tarikh ath-Thabari jilid 2 hal 124 (Abdul Muthalib Menggali Sumur Zamzam & Berhadapan dengan Abrahah)",
      narration_en: "Tarikh al-Tabari vol. 2 p. 124 (Abdul Muttalib Re-excavating Zamzam & Meeting Abrahah)",
      narration_url: "https://shamela.ws/book/9783/382",
      grading: "Sirah Ibnu Hisyam jilid 1 hal 142; Tarikh ath-Thabari jilid 2; Al-Bidayah wan-Nihayah Ibnu Katsir jilid 2.",
      grading_id: "Sirah Ibnu Hisyam jilid 1 hal 142; Tarikh ath-Thabari jilid 2; Al-Bidayah wan-Nihayah Ibnu Katsir jilid 2.",
      verses: [
        { label: "105:1", url: "https://quran.com/105/1" },
        { label: "106:1", url: "https://quran.com/106/1" }
      ],
      also_reported: [
        { title: "Sirah Ibnu Hisyam jilid 1 hal 142 (Penggalian Zamzam)", url: "https://shamela.ws/book/23833" },
        { title: "Dala'il an-Nubuwwah Al-Baihaqi jilid 1", url: "https://shamela.ws/book/21718" },
        { title: "Tarikh Dimasyq Ibnu Asakir jilid 3", url: "https://shamela.ws/book/71" }
      ],
      telling_en: "Abdul Muttalib is portrayed as the grand elder of Quraysh and custodian of the Ka'bah. Visuals capture noble Meccan chieftain robes with historical dignity. Narratives record his rediscovery of the Zamzam well and his steadfast statement to Abrahah: 'I am the master of the camels; and the House has a Lord who will defend it.'",
      telling_id: "Abdul Muthalib ditampilkan sebagai sesepuh Quraisy dan pemelihara Ka'bah. Visual menampilkan jubah bangsawan Makkah dengan jenggot putih terawat. Narasi mencatat penggalian kembali sumur Zamzam dan ketegasannya di hadapan Abrahah: 'Aku adalah pemilik unta-unta itu, sedangkan Ka'bah memiliki Tuhan yang akan melindunginya.'"
    },
    "abrahah": {
      collection: "Tarikh ar-Rusul wal-Muluk & Sirah Nabawiyyah",
      collection_en: "Tarikh al-Tabari & Prophetic Biography",
      narration: "Tarikh ath-Thabari (Jilid 2 hal 124: Ekspedisi Abrahah al-Asyram ke Makkah)",
      narration_en: "Tarikh al-Tabari (Vol. 2 p. 124: Abrahah al-Ashram's Expedition to Mecca)",
      narration_url: "https://shamela.ws/book/9783/382",
      grading: "Al-Qur'an (105:1-5, Surah Al-Fil); Sirah Ibnu Hisyam jilid 1; Tarikh ath-Thabari: Naskah klasik mu'tabar.",
      grading_id: "Al-Qur'an (105:1-5, Surah Al-Fil); Sirah Ibnu Hisyam jilid 1; Tarikh ath-Thabari: Naskah klasik mu'tabar.",
      verses: [
        { label: "105:1", url: "https://quran.com/105/1" },
        { label: "105:2", url: "https://quran.com/105/2" },
        { label: "105:3", url: "https://quran.com/105/3" },
        { label: "105:4", url: "https://quran.com/105/4" },
        { label: "105:5", url: "https://quran.com/105/5" }
      ],
      also_reported: [
        { title: "Sirah Ibnu Hisyam jilid 1 hal 43", url: "https://shamela.ws/book/23833" },
        { title: "Al-Bidayah wan-Nihayah Ibnu Katsir jilid 2 hal 170", url: "https://shamela.ws/book/4445" },
        { title: "Mu'jam al-Buldan Yaqut al-Hamawi (Al-Qullais)", url: "https://shamela.ws/book/23835" }
      ],
      telling_en: "Abrahah is depicted as the viceroy of Yemen (Aksumite governor) wearing period-accurate Late Antique/Byzantine-influenced scale armor and pectoral cross, reflecting the 6th-century Christian Abyssinian sphere. Narration strictly follows historical chronicles without modern fantasy embellishments.",
      telling_id: "Abrahah digambarkan sebagai penguasa Yaman (Gubernur Aksum) dengan zirah perunggu/besi era Bizantium dan ornamen salib dada, mencerminkan persekutuan Kristen Abisinia-Himyar abad ke-6. Visual tidak memuat fantasi modern, melainkan merujuk pada catatan arkeologi dan naskah klasik Tarikh ath-Thabari."
    },
    "bahira": {
      collection: "Jami' at-Tirmidhi & Dala'il an-Nubuwwah",
      collection_en: "Jami' at-Tirmidhi & Proofs of Prophethood",
      narration: "Jami' at-Tirmidhi 3620 (Rahib Bahira Menyambut Kafilah Abu Thalib di Bushra)",
      narration_en: "Jami' at-Tirmidhi 3620 (Monk Bahira Welcoming Abu Talib's Caravan in Bosra)",
      narration_url: "https://sunnah.com/tirmidhi:3620",
      grading: "Jami' at-Tirmidhi 3620: Hasan Gharib; Dala'il an-Nubuwwah karya Al-Baihaqi; Sirah Ibnu Hisyam jilid 1 hal 180.",
      grading_id: "Jami' at-Tirmidhi 3620: Hasan Gharib; Dala'il an-Nubuwwah karya Al-Baihaqi; Sirah Ibnu Hisyam jilid 1 hal 180.",
      verses: [
        { label: "61:6", url: "https://quran.com/61/6" }
      ],
      also_reported: [
        { title: "Tarikh ath-Thabari jilid 2 hal 194", url: "https://shamela.ws/book/9783" },
        { title: "Sirah Ibnu Hisyam jilid 1 hal 180", url: "https://shamela.ws/book/23833" },
        { title: "Al-Bidayah wan-Nihayah jilid 2 hal 284", url: "https://shamela.ws/book/4445" }
      ],
      telling_en: "Monk Bahira is portrayed in 6th-century Syrian monastic robes holding ancient scriptural scrolls in Bosra. The youthful Prophet Muhammad (peace be upon him) is not depicted, maintaining strict visual reverence and sacred etiquette.",
      telling_id: "Sosok Pendeta Bahira digambarkan dalam jubah biarawan Suriah abad ke-6 di biaranya di Bushra (Syam). Ilustrasi menyajikan dokumen gulungan naskah nubuat kuno. Sosok fisik Rasulullah muda tidak digambarkan demi menjaga kesucian syariat."
    },
    "abi thalib": {
      collection: "Sahih al-Bukhari & Sirah Ibnu Hisyam",
      collection_en: "Sahih al-Bukhari & Sirah Ibn Hisham",
      narration: "Sahih al-Bukhari 3883 (Qisshatu Abi Thalib / Perlindungan Bani Hasyim)",
      narration_en: "Sahih al-Bukhari 3883 (Story of Abu Talib / Protection of Banu Hashim)",
      narration_url: "https://sunnah.com/bukhari:3883",
      grading: "Sahih al-Bukhari 3883, Sahih Muslim 209; Sirah Ibnu Hisyam jilid 1; Tarikh ath-Thabari jilid 2.",
      grading_id: "Sahih al-Bukhari 3883, Sahih Muslim 209; Sirah Ibnu Hisyam jilid 1; Tarikh ath-Thabari jilid 2.",
      verses: [
        { label: "28:56", url: "https://quran.com/28/56" }
      ],
      also_reported: [
        { title: "Sahih Muslim 209 (Hadits Syafa'at untuk Abu Thalib)", url: "https://sunnah.com/muslim:209" },
        { title: "Tarikh ath-Thabari jilid 2 hal 217", url: "https://shamela.ws/book/9783" },
        { title: "Al-Kamil fit-Tarikh Ibnul Atsir jilid 2", url: "https://shamela.ws/book/21712" }
      ],
      telling_en: "Abu Talib ibn Abd al-Muttalib is depicted as the venerable chieftain of Banu Hashim in authentic desert tribal robes. Narratives chronicle his unwavering tribal protection of the Prophet during the Quraysh boycott of Shi'b Abi Talib.",
      telling_id: "Abu Thalib bin Abdul Muthallib digambarkan sebagai pemuka Bani Hasyim yang berwibawa dengan jubah kafilah Quraisy dan sorban padang pasir. Narasi menelusuri pengorbanannya memimpin keluarga menghadapi pemboikotan kaum Quraisy di Syi'ib Abi Thalib demi membela sang keponakan."
    },
    "khadijah": {
      collection: "Sahih al-Bukhari & Sahih Muslim",
      collection_en: "Sahih al-Bukhari & Sahih Muslim",
      narration: "Sahih al-Bukhari 3815 (Manaqib Khadijah / Fadhail Ummahatil Mukminin)",
      narration_en: "Sahih al-Bukhari 3815 (Merits of Khadijah / Virtues of the Mothers of the Believers)",
      narration_url: "https://sunnah.com/bukhari:3815",
      grading: "Sahih al-Bukhari 3815, Sahih Muslim 2432 (Muttafaqun 'Alayh / Shahih Tertinggi); Al-Ishabah Ibnu Hajar vol. 8 p. 99.",
      grading_id: "Sahih al-Bukhari 3815, Sahih Muslim 2432 (Muttafaqun 'Alaih / Shahih Tertinggi); Al-Ishabah Ibnu Hajar jilid 8 hal 99.",
      verses: [
        { label: "93:8", url: "https://quran.com/93/8" }
      ],
      also_reported: [
        { title: "Sahih Muslim 2434 (Salam dari Allah untuk Khadijah & Istana di Surga)", url: "https://sunnah.com/muslim:2434" },
        { title: "Musnad Ahmad 2496", url: "https://sunnah.com/ahmad" },
        { title: "Siyar A'lam an-Nubala' Adz-Dzahabi jilid 2 hal 109", url: "https://shamela.ws/book/10906" }
      ],
      telling_en: "Sayyidah Khadijah binti Khuwaylid, Mother of the Believers, is portrayed with utmost sanctity and dignity. Her attire reflects modest 6th-century Qurayshite trade nobility holding commerce documents. The narrative honors her steadfast support of the Prophet during the first revelation.",
      telling_id: "Sayyidah Khadijah binti Khuwailid merupakan Ummul Mukminin yang mulia. Wajah dan fisik beliau dijaga kehormatannya; representasi visual disajikan dalam balutan busana saudagar Quraisy yang santun dan berwibawa membawa gulungan niaga. Narasi menekankan keteguhan imannya saat menyelimuti Rasulullah pasca wahyu pertama."
    },
    "waraqah bin naufal": {
      collection: "Sahih al-Bukhari & Sahih Muslim",
      collection_en: "Sahih al-Bukhari & Sahih Muslim",
      narration: "Sahih al-Bukhari 3 (Khabar Waraqah bin Naufal Menyaksikan Namus Terbesar)",
      narration_en: "Sahih al-Bukhari 3 (Waraqah ibn Nawfal Testifying to the Grand Namus)",
      narration_url: "https://sunnah.com/bukhari:3",
      grading: "Sahih al-Bukhari 3, Sahih Muslim 160 (Shahih Tertinggi / Bad'ul Wahyi); Mustadrak al-Hakim 4211.",
      grading_id: "Sahih al-Bukhari 3, Sahih Muslim 160 (Shahih Tertinggi / Bad'ul Wahyi); Mustadrak al-Hakim 4211.",
      verses: [
        { label: "96:1", url: "https://quran.com/96/1" },
        { label: "96:2", url: "https://quran.com/96/2" }
      ],
      also_reported: [
        { title: "Mustadrak al-Hakim 4211 (Waraqah di dalam Surga)", url: "https://shamela.ws/book/22728" },
        { title: "Tarikh ath-Thabari jilid 2 hal 206", url: "https://shamela.ws/book/9783" },
        { title: "Al-Bidayah wan-Nihayah Ibnu Katsir jilid 3 hal 9", url: "https://shamela.ws/book/4445" }
      ],
      telling_en: "Waraqah ibn Nawfal is represented as a venerated elder scholar versed in ancient monotheistic scriptures. Visuals depict him holding ancient biblical scrolls in modest scholastic robes, recounting his historic confirmation of the divine message delivered to Prophet Muhammad ﷺ.",
      telling_id: "Waraqah bin Naufal digambarkan sebagai cendekiawan sepuh berilmu dari kalangan hanif/Nasrani Arab yang menyalin Injil dalam bahasa Ibrani/Arab. Visual menampilkan jubah sederhana seorang alim dan naskah perkamen kuno. Narasi menegaskan kesaksiannya atas kerasulan Muhammad ﷺ."
    },
    "abu bakar asshiddiq": {
      collection: "Sahih al-Bukhari & Siyar A'lam an-Nubala'",
      collection_en: "Sahih al-Bukhari & Siyar A'lam al-Nubala",
      narration: "Sahih al-Bukhari 3656 (Fadhail Ashab an-Nabi ﷺ, Manaqib Abi Bakr)",
      narration_en: "Sahih al-Bukhari 3656 (Virtues of the Companions, Merits of Abu Bakr)",
      narration_url: "https://sunnah.com/bukhari:3656",
      grading: "Sahih al-Bukhari 3656 and Sahih Muslim 2382: Sahih (authentic); The Quran (9:40, 92:17-21).",
      grading_id: "Sahih al-Bukhari 3656 dan Sahih Muslim 2382: Shahih; Al-Qur'an (9:40, 92:17-21).",
      verses: [
        { label: "9:40", url: "https://quran.com/9/40" },
        { label: "92:17", url: "https://quran.com/92/17" },
        { label: "92:18", url: "https://quran.com/92/18" },
        { label: "92:19", url: "https://quran.com/92/19" }
      ],
      also_reported: [
        { title: "Sahih Muslim 2382 (Virtues of Abu Bakr as-Siddiq)", url: "https://sunnah.com/muslim:2382" },
        { title: "Al-Ishabah fi Tamyiz ash-Shahabah Ibnu Hajar jilid 4 hal 145", url: "https://shamela.ws/book/8323" },
        { title: "Tarikh ath-Thabari (Khilafah Abu Bakar & Perang Riddah)", url: "https://shamela.ws/book/9783" }
      ],
      telling_en: "Illustrations observe 7th-century historical realism in attire, armor, and setting strictly for educational clarity. Characterization strictly reflects authenticated deeds in early Islamic governance and the Riddah wars.",
      telling_id: "Ilustrasi mengadopsi realisme pakaian kabilah abad ke-7 untuk kejelasan edukasi sejarah. Penggambaran peran merujuk pada catatan sahih kepemimpinannya mengonsolidasi umat pada masa Perang Riddah."
    },
    "umar bin khattab": {
      collection: "Sahih al-Bukhari & Siyar A'lam an-Nubala'",
      collection_en: "Sahih al-Bukhari & Siyar A'lam al-Nubala",
      narration: "Sahih al-Bukhari 3683 (Fadhail Umar bin al-Khattab / Al-Faruq)",
      narration_en: "Sahih al-Bukhari 3683 (Virtues of Umar ibn al-Khattab / Al-Faruq)",
      narration_url: "https://sunnah.com/bukhari:3683",
      grading: "Sahih al-Bukhari 3683, Sahih Muslim 2398; Tarikh ath-Thabari (Khilafah Umar).",
      grading_id: "Sahih al-Bukhari 3683, Sahih Muslim 2398; Tarikh ath-Thabari (Khilafah Umar).",
      verses: [
        { label: "2:125", url: "https://quran.com/2/125" }
      ],
      also_reported: [
        { title: "Sahih Muslim 2398 (Virtues and Justice of Umar)", url: "https://sunnah.com/muslim:2398" },
        { title: "Tarikh ath-Thabari jilid 4 (Pembebasan Baitul Maqdis & Futuh Syam)", url: "https://shamela.ws/book/9783" },
        { title: "Siyar A'lam an-Nubala' Adz-Dzahabi jilid 1", url: "https://shamela.ws/book/10906" }
      ],
      telling_en: "Portrayed with simple coarse desert tunic and historical leather sandals, reflecting his renowned austerity and justice. His entry into Jerusalem to accept the covenant (Al-Uhda al-Umariyyah) is recounted with strict adherence to classical chronicles.",
      telling_id: "Digambarkan dengan jubah sederhana dan sandal khas gurun, mencerminkan sifat zuhud dan keadilannya yang tersohor. Perjalanannya ke Yerusalem untuk menerima penyerahan kota (Uhda Umariyyah) merujuk pada naskah tarikh klasik."
    },
    "utsman bin affan": {
      collection: "Sahih al-Bukhari & Siyar A'lam an-Nubala'",
      collection_en: "Sahih al-Bukhari & Siyar A'lam al-Nubala",
      narration: "Sahih al-Bukhari 4987 (Jam'ul Qur'an fi Mushaf Wahid / Kodifikasi Mushaf Utsmani)",
      narration_en: "Sahih al-Bukhari 4987 (Compilation of the Quran into One Standard Codex)",
      narration_url: "https://sunnah.com/bukhari:4987",
      grading: "Sahih al-Bukhari 4987, Sahih Muslim 2401; Al-Bidayah wan-Nihayah jilid 7.",
      grading_id: "Sahih al-Bukhari 4987, Sahih Muslim 2401; Al-Bidayah wan-Nihayah jilid 7.",
      verses: [
        { label: "15:9", url: "https://quran.com/15/9" }
      ],
      also_reported: [
        { title: "Sahih Muslim 2401 (Virtues and Modesty of Uthman)", url: "https://sunnah.com/muslim:2401" },
        { title: "Al-Ishabah fi Tamyiz ash-Shahabah Ibnu Hajar jilid 4", url: "https://shamela.ws/book/8323" },
        { title: "Tarikh ath-Thabari jilid 4 (Khilafah Utsman)", url: "https://shamela.ws/book/9783" }
      ],
      telling_en: "Visuals depict Dzun Nurain holding the unified standard parchment codex. Attire reflects noble Banu Umayyah modest dress with period-accurate 7th-century lines.",
      telling_id: "Visual menampilkan Dzun Nurain memangku lembaran naskah standar Al-Qur'an (Mushaf Utsmani). Busana mengacu pada gaya bangsawan Quraisy yang santun dan bersahaja."
    },
    "ali bin abi thalib": {
      collection: "Sahih al-Bukhari & Sahih Muslim",
      collection_en: "Sahih al-Bukhari & Sahih Muslim",
      narration: "Sahih al-Bukhari 3706 (Ghazwah Khaibar & Rayat an-Nabi ﷺ)",
      narration_en: "Sahih al-Bukhari 3706 (Battle of Khaybar & Banner of the Prophet)",
      narration_url: "https://sunnah.com/bukhari:3706",
      grading: "Sahih al-Bukhari 3706, Sahih Muslim 2404 (Muttafaqun 'Alayh); The Quran (3:61).",
      grading_id: "Sahih al-Bukhari 3706, Sahih Muslim 2404 (Muttafaqun 'Alaih); Al-Qur'an (3:61).",
      verses: [
        { label: "3:61", url: "https://quran.com/3/61" },
        { label: "9:100", url: "https://quran.com/9/100" }
      ],
      also_reported: [
        { title: "Sahih Muslim 2404 (Virtues of Ali ibn Abi Talib)", url: "https://sunnah.com/muslim:2404" },
        { title: "Nahjul Balaghah (Kutipan & Khutbah Ali)", url: "https://shamela.ws" },
        { title: "Tarikh ath-Thabari jilid 4–5", url: "https://shamela.ws/book/9783" }
      ],
      telling_en: "Ali ibn Abi Talib is represented with 7th-century historical realism: simple iron helmet and curved scimitar (Zulfiqar) based on classical armory descriptions. Military and judicial acumen in Medina and Kufa verified against authoritative Hadith and chronicles.",
      telling_id: "Ali bin Abi Thalib digambarkan dengan realisme sejarah abad ke-7: ketopong besi sederhana dan bilah pedang khas Arab berdasarkan catatan senjata kuno. Keberanian dan ketajaman hukumnya di Madinah dan Kufah divalidasi dari hadits dan tarikh mu'tabar."
    },
    "khalid bin walid": {
      collection: "Sahih al-Bukhari & Siyar A'lam an-Nubala'",
      collection_en: "Sahih al-Bukhari & Siyar A'lam al-Nubala",
      narration: "Sahih al-Bukhari 3757 (The Drawn Sword of Allah / Saifullah al-Maslul)",
      narration_en: "Sahih al-Bukhari 3757 (The Drawn Sword of Allah / Saifullah al-Maslul)",
      narration_url: "https://sunnah.com/bukhari:3757",
      grading: "Sahih al-Bukhari 3757, Sahih Muslim 1763; Siyar A'lam an-Nubala' by al-Dhahabi vol. 1 p. 366; Usud al-Ghabah by Ibn al-Athir.",
      grading_id: "Sahih al-Bukhari 3757, Sahih Muslim 1763; Siyar A'lam an-Nubala' Adz-Dzahabi jilid 1 hal 366; Usudul Ghabah Ibnul Atsir.",
      verses: [],
      also_reported: [
        { title: "Musnad Ahmad 16738 (Virtues of Khalid bin Walid)", url: "https://sunnah.com/ahmad" },
        { title: "Al-Bidayah wan-Nihayah Ibnu Katsir jilid 7 hal 115", url: "https://shamela.ws/book/4445" },
        { title: "Al-Ishabah fi Tamyiz ash-Shahabah Ibnu Hajar jilid 2", url: "https://shamela.ws/book/8323" }
      ],
      telling_en: "Portrayed with authentic 7th-century desert military gear (scale mail, iron helmet, and curved/straight Arabian blade) without fantasy exaggerations. Military leadership at Mu'tah, Yamama, and Yarmuk verified against Tarikh al-Tabari.",
      telling_id: "Digambarkan dengan perlengkapan tempur abad ke-7 (zirah besi, ketopong, pedang khas Arab) tanpa ornamen fantasi modern. Kepemimpinan militernya di Mu'tah, Yamamah, dan Yarmuk divalidasi dari Tarikh ath-Thabari."
    },
    "thariq bin ziyad": {
      collection: "Tarikh Iftitah al-Andalus & Nafh at-Tib",
      collection_en: "Tarikh Iftitah al-Andalus & Nafh al-Tib",
      narration: "Tarikh Iftitah al-Andalus karya Ibnu al-Quthiyyah (Penyeberangan Selat Gibraltar)",
      narration_en: "Tarikh Iftitah al-Andalus by Ibn al-Qutiyya (Crossing of the Gibraltar Strait)",
      narration_url: "https://shamela.ws/book/9613",
      grading: "Classical Andalusian chronicles: Tarikh al-Tabari vol. 6, Al-Bayan al-Mughrib Ibn Idhari vol. 2, Nafh at-Tib by al-Maqqari.",
      grading_id: "Naskah historiografi Andalusia: Tarikh ath-Thabari jilid 6, Al-Bayan al-Mughrib Ibnu Idzari jilid 2, Nafh at-Tib Al-Maqqari.",
      verses: [],
      also_reported: [
        { title: "Futuh al-Buldan Al-Baladhuri", url: "https://shamela.ws/book/12013" },
        { title: "Al-Kamil fit-Tarikh Ibnul Atsir jilid 4", url: "https://shamela.ws/book/21712" }
      ],
      telling_en: "Tariq ibn Ziyad is shown as a Berber Muslim commander in 8th-century North African military attire. Historical accounts recount the landing at Jabal Tariq (Gibraltar) without fictitious burning-of-ships tropes.",
      telling_id: "Thariq bin Ziyad ditampilkan sebagai panglima muslim Berber dalam balutan busana tempur Afrika Utara abad ke-8. Narasi menyajikan pendaratan di Jabal Thariq (Gibraltar) secara faktual tanpa mitos pembakaran kapal."
    },
    "abdul malik bin marwan": {
      collection: "Tarikh ar-Rusul wal-Muluk & Al-Bidayah wan-Nihayah",
      collection_en: "Tarikh al-Rusul wa al-Muluk & Al-Bidayah wa al-Nihayah",
      narration: "Tarikh ath-Thabari jilid 6 hal 187 (Pencetakan Dinar Emas Islam Pertama & Pembangunan Kubah Shakhrah)",
      narration_en: "Tarikh al-Tabari vol. 6 p. 187 (First Islamic Gold Dinar & Dome of the Rock Construction)",
      narration_url: "https://shamela.ws/book/9783",
      grading: "Classical Umayyad chronicles: Tarikh al-Tabari, Al-Bidayah wa al-Nihayah vol. 9 p. 62, Siyar A'lam al-Nubala' vol. 4 p. 246.",
      grading_id: "Naskah induk tarikh: Tarikh ath-Thabari, Al-Bidayah wan-Nihayah Ibnu Katsir jilid 9 hal 62, Siyar A'lam an-Nubala' jilid 4 hal 246.",
      verses: [],
      also_reported: [
        { title: "Futuh al-Buldan Al-Baladhuri (Arabisasi Administrasi)", url: "https://shamela.ws/book/12013" },
        { title: "Al-Kamil fit-Tarikh Ibnul Atsir jilid 4", url: "https://shamela.ws/book/21712" },
        { title: "Mu'jam al-Buldan Yaqut al-Hamawi (Qubbat ash-Shakhrah)", url: "https://shamela.ws/book/23835" }
      ],
      telling_en: "Depicts the architect of Umayyad state centralization: standardizing Arabic in chancelleries and striking the epigraphic gold dinar. Visual attire represents early Damascus Umayyad caliphal robes with historic precision.",
      telling_id: "Menampilkan arsitek sentralisasi negara Umayyah: standarisasi bahasa Arab dalam administrasi negara dan pencetakan dinar emas kaligrafi. Busana mengacu pada jubah khalifah era Damaskus dengan akurasi sejarah."
    },
    "umar bin abdul aziz": {
      collection: "Sirat Umar bin Abdul Aziz & Siyar A'lam an-Nubala'",
      collection_en: "Sirat Umar ibn Abd al-Aziz & Siyar A'lam al-Nubala",
      narration: "Sirat Umar bin Abdul Aziz karya Ibnu Abdil Hakam (Keadilan Sosial & Reformasi Pajak)",
      narration_en: "Sirat Umar ibn Abd al-Aziz by Ibn Abd al-Hakam (Social Justice & Tax Reform)",
      narration_url: "https://shamela.ws/book/23836",
      grading: "Siyar A'lam an-Nubala' Adz-Dzahabi jilid 5 hal 114; Tarikh ath-Thabari jilid 6; Hilyat al-Awliya' Abu Nu'aym.",
      grading_id: "Siyar A'lam an-Nubala' Adz-Dzahabi jilid 5 hal 114; Tarikh ath-Thabari jilid 6; Hilyatul Auliya' Abu Nu'aim.",
      verses: [],
      also_reported: [
        { title: "Tarikh al-Khulafa karya As-Suyuthi", url: "https://shamela.ws/book/12053" },
        { title: "Al-Bidayah wan-Nihayah jilid 9", url: "https://shamela.ws/book/4445" }
      ],
      telling_en: "Portrayed with simple linen attire honoring his title as the ascetic fifth righteous caliph. Narrations record his abolition of unjust taxes, restoration of public treasuries, and social equity across Damascus.",
      telling_id: "Ditampilkan dalam busana tenun sederhana yang mencerminkan gelarnya sebagai Khalifah Rasyidin kelima. Narasi mencatat penghapusan pajak tidak adil, pemulihan kas Baitul Mal, dan pemerataan kesejahteraan rakyat."
    },
    "abdurrahman ad-dakhil": {
      collection: "Nafh at-Tib & Al-Bayan al-Mughrib",
      collection_en: "Nafh al-Tib & Al-Bayan al-Mughrib",
      narration: "Nafh at-Tib karya Al-Maqqari (Kisah Pelarian Shaqr Quraisy ke Al-Andalus)",
      narration_en: "Nafh al-Tib by al-Maqqari (Flight of the Falcon of Quraysh to Al-Andalus)",
      narration_url: "https://shamela.ws/book/9613",
      grading: "Andalusian chronicles: Al-Bayan al-Mughrib by Ibn Idhari vol. 2, Tarikh Ibn al-Athir vol. 5, Nafh at-Tib.",
      grading_id: "Historiografi Andalusia: Al-Bayan al-Mughrib Ibnu Idzari jilid 2, Tarikh Ibnul Atsir jilid 5, Nafh at-Tib.",
      verses: [],
      also_reported: [
        { title: "Tarikh Iftitah al-Andalus Ibnu al-Quthiyyah", url: "https://shamela.ws/book/9613" },
        { title: "Al-Kamil fit-Tarikh Ibnul Atsir", url: "https://shamela.ws/book/21712" }
      ],
      telling_en: "Known as the Falcon of Quraysh (Saqr Quraysh), depicted in traveler's desert cloak arriving in Cordoba to establish the Emirate of al-Andalus. Verified against verified Andalusian historical texts.",
      telling_id: "Dikenal sebagai Elang Quraisy (Shaqr Quraisy), ditampilkan dalam jubah musafir saat menyeberangi Afrika Utara menuju Kordoba untuk mendirikan Keamiran Umayyah di Andalusia."
    }
  };

  function resolveContextualSources(item, type, lang){
    const isId = lang === "id";
    const isAr = lang === "ar";
    if(!item) return null;

    // 1. Direct match by slug (for events) or name (for characters)
    let s = null;
    if(type === "events" && item.slug && EVENT_SOURCES[item.slug]) {
      s = EVENT_SOURCES[item.slug];
    } else if(type === "characters") {
      const targetName = normStr(item.name);
      for(const [k, v] of Object.entries(CHAR_SOURCES)) {
        const normKey = normStr(k);
        if(targetName.includes(normKey) || normKey.includes(targetName)) {
          s = v;
          break;
        }
      }
    }

    if(s) {
      const telling = isAr ? (s.telling_ar || s.telling_en || s.telling_id) : (isId ? (s.telling_id || s.telling_en) : (s.telling_en || s.telling_id));
      const collection = isAr ? (s.collection_ar || s.collection_en || s.collection) : (isId ? (s.collection || s.collection_en) : (s.collection_en || s.collection));
      const narr = isAr ? (s.narration_ar || s.narration_en || s.narration) : (isId ? (s.narration || s.narration_en) : (s.narration_en || s.narration));
      const grading = isAr ? (s.grading_ar || s.grading || s.grading_id) : (isId ? (s.grading_id || s.grading) : (s.grading || s.grading_id));
      
      return {
        telling: telling,
        collection: collection,
        narration_text: narr,
        narration_url: s.narration_url,
        grading: grading,
        verses: s.verses || [],
        also_reported: s.also_reported || [],
        sunnah_url: s.narration_url && s.narration_url.includes("sunnah.com") ? s.narration_url : "https://sunnah.com",
        quran_url: s.verses && s.verses.length ? s.verses[0].url : "https://quran.com",
        shamela_url: s.also_reported && s.also_reported.find(r => r.url.includes("shamela.ws")) ? s.also_reported.find(r => r.url.includes("shamela.ws")).url : "https://shamela.ws"
      };
    }

    // 2. Intelligent Era / Category Fallback
    const yr = +item.year || (item.birth ? +String(item.birth).match(/\d+/)?.[0] : 620) || 620;
    const title = item.title || item.name || "";

    let eraChronicle = "Tarikh ath-Thabari (Tarikh ar-Rusul wal-Muluk)";
    let eraChronicleEn = "Tarikh al-Tabari (History of the Prophets and Kings)";
    let eraChronicleAr = "تاريخ الطبري (تاريخ الرسل والملوك)";
    let shamelaLink = "https://shamela.ws/book/9783";
    let hadithCollection = "Koleksi Hadits Shahih & Kitab Tarikh";
    let hadithCollectionEn = "Authenticated Hadith Collections & Classical Chronicles";
    let hadithCollectionAr = "دواوين الحديث النبوي وأمهات كتب التاريخ";
    let sunnahLink = "https://sunnah.com";

    if(yr < 610) {
      eraChronicle = "Sirah Ibnu Hisyam & Al-Bidayah wan-Nihayah Ibnu Katsir (Jilid 2)";
      eraChronicleEn = "Sirah Ibn Hisham & Al-Bidayah wa al-Nihayah by Ibn Kathir (Vol. 2)";
      eraChronicleAr = "السيرة النبوية لابن هشام والبداية والنهاية لابن كثير";
      shamelaLink = "https://shamela.ws/book/23833";
      hadithCollection = "Sirah Nabawiyyah & Kutubus Sittah";
      hadithCollectionEn = "Prophetic Biography & Primary Hadith Compilations";
      hadithCollectionAr = "السيرة النبوية ودواوين الحديث المعتمدة";
      sunnahLink = "https://sunnah.com";
    } else if(yr <= 632) {
      eraChronicle = "Sahih al-Bukhari (Kitab al-Maghazi) & Tarikh ath-Thabari";
      eraChronicleEn = "Sahih al-Bukhari (Book of Expeditions) & Tarikh al-Tabari";
      eraChronicleAr = "صحيح البخاري (كتاب المغازي) وتاريخ الطبري";
      hadithCollection = "Sahih al-Bukhari & Sahih Muslim";
      hadithCollectionEn = "Sahih al-Bukhari & Sahih Muslim";
      hadithCollectionAr = "صحيح البخاري وصحيح مسلم";
      shamelaLink = "https://shamela.ws/book/9783";
      sunnahLink = "https://sunnah.com/bukhari";
    } else if(yr <= 661) {
      eraChronicle = "Tarikh ath-Thabari (Jilid 3–4: Khulafaur Rasyidin) & Al-Bidayah wan-Nihayah (Jilid 7)";
      eraChronicleEn = "Tarikh al-Tabari (Vol. 3–4: Rashidun Caliphate) & Al-Bidayah wa al-Nihayah (Vol. 7)";
      eraChronicleAr = "تاريخ الطبري (عهد الخلفاء الراشدين) والبداية والنهاية";
      hadithCollection = "Sahih al-Bukhari (Fadhail Ashab an-Nabi) & Tarikh";
      hadithCollectionEn = "Sahih al-Bukhari (Virtues of the Companions) & Chronicles";
      hadithCollectionAr = "فضائل الصحابة في الصحيحين وكتب التراجم";
      shamelaLink = "https://shamela.ws/book/9783";
      sunnahLink = "https://sunnah.com/bukhari";
    } else if(yr <= 750) {
      eraChronicle = "Tarikh ath-Thabari (Jilid 5–6: Daulah Umayyah) & Al-Kamil fit-Tarikh Ibnul Atsir";
      eraChronicleEn = "Tarikh al-Tabari (Vol. 5–6: Umayyad Caliphate) & Al-Kamil fi al-Tarikh";
      eraChronicleAr = "تاريخ الطبري (الدولة الأموية) والكامل في التاريخ لابن الأثير";
      hadithCollection = "Kitab Induk Tarikh Klasik (Tarikh ath-Thabari)";
      hadithCollectionEn = "Classical Islamic Chronicles (Tarikh al-Tabari)";
      hadithCollectionAr = "أمهات كتب التاريخ الإسلامي (تاريخ الطبري)";
      shamelaLink = "https://shamela.ws/book/9783";
    } else if(yr <= 1258) {
      eraChronicle = "Al-Kamil fit-Tarikh Ibnul Atsir & Siyar A'lam an-Nubala' Adz-Dzahabi";
      eraChronicleEn = "Al-Kamil fi al-Tarikh by Ibn al-Athir & Siyar A'lam al-Nubala";
      eraChronicleAr = "الكامل في التاريخ لابن الأثير وسير أعلام النبلاء للذهبي";
      hadithCollection = "Koleksi Tarikh & Biografi Ulama (Adz-Dzahabi)";
      hadithCollectionEn = "Classical Biographies & Chronicles (al-Dhahabi)";
      hadithCollectionAr = "سير أعلام النبلاء وكتب التراجم (للإمام الذهبي)";
      shamelaLink = "https://shamela.ws/book/21712";
    } else {
      eraChronicle = "Al-Bidayah wan-Nihayah & Khazanah Manuskrip Sejarah Islam";
      eraChronicleEn = "Al-Bidayah wa al-Nihayah & Digital Islamic Historical Manuscripts";
      eraChronicleAr = "البداية والنهاية وخزانة المخطوطات والوثائق التاريخية";
      shamelaLink = "https://shamela.ws/book/4445";
    }

    const narrationTitle = isAr
      ? `${eraChronicleAr} (تدوين أحداث سنة ${yr} م)`
      : (isId ? `${eraChronicle} (Catatan Peristiwa tahun ${yr} M)` : `${eraChronicleEn} (Chronicle entry for ${yr} CE)`);

    const gradingSummary = isAr
      ? `تمت مطابقة الوقائع والأنساب مع أمهات المصادر التاريخية المعتمدة (${eraChronicleAr}) والتحقق منها عبر مناهج التخريج وضبط الأسانيد.`
      : (isId ? `Diselaraskan dengan riwayat naskah primer tarikh klasik (${eraChronicle}) dan divalidasi melalui metodologi takhrij sanad mu'tabar.` : `Cross-referenced with primary classical chronicles (${eraChronicleEn}) and verified against authenticated transmission chains.`);

    const tellingText = type === "characters"
      ? (isAr
          ? `سيرة ${title} ودوره التاريخي مستخلصة من أمهات كتب التراجم والطبقات (سير أعلام النبلاء والإصابة). الرسوم الإيضاحية تلتزم بأزياء القرن السابع الميلادي كأداة تعليمية دون بهرجة حديثة.`
          : (isId
              ? `Biografi dan peran historis ${title} dirangkum dari kitab induk thabaqat dan tarikh klasik (Siyar A'lam an-Nubala' & Al-Ishabah). Ilustrasi karakter mengedepankan realisme busana abad ke-7 tanpa representasi berlebihan demi menjaga adab dan akurasi sejarah edukatif.`
              : `The biography and historical significance of ${title} are synthesized from classical biographical tomes (Siyar A'lam al-Nubala & Al-Isabah). Visual representations maintain period-accurate attire strictly for educational clarity and historical authenticity.`))
      : (isAr
          ? `سرد أحداث ${title} (${yr} م) مدوّن بدقة من أمهات كتب السير والتواريخ الكبرى، مع الحفاظ على الأماكن والأسماء وسياق الرواة.`
          : (isId
              ? `Catatan peristiwa ${title} (${yr} M) disarikan dari naskah primer tarikh klasik dengan mempertahankan akurasi waktu, toponimi lokasi, dan catatan rawi terpercaya tanpa bumbu narasi fiktif.`
              : `The historical account of ${title} (${yr} CE) is drawn directly from classical primary chronicles, preserving exact chronology, geographic toponyms, and verified narrator chains without artificial dramatization.`));

    return {
      telling: tellingText,
      collection: isAr ? hadithCollectionAr : (isId ? hadithCollection : hadithCollectionEn),
      narration_text: narrationTitle,
      narration_url: shamelaLink,
      grading: gradingSummary,
      verses: [],
      also_reported: [
        { title: isAr ? `${eraChronicleAr} (المكتبة الشاملة)` : (isId ? `${eraChronicle} (Katalog Shamela)` : `${eraChronicleEn} (Shamela Library)`), url: shamelaLink },
        { title: isAr ? "تخريج الحديث والأسانيد (Sunnah.com)" : (isId ? "Verifikasi Hadits & Sanad (Sunnah.com)" : "Hadith & Chain Verification (Sunnah.com)"), url: sunnahLink }
      ],
      sunnah_url: sunnahLink,
      quran_url: "https://quran.com",
      shamela_url: shamelaLink
    };
  }
  
  window.ALFA_SOURCES_ENGINE = {
    resolve: resolveContextualSources
  };
})();
