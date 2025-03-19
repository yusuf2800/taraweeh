import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Yasser = ({ name }) => {
  useEffect(() => {
    document.title = name;
  }, [name]);

  const audios = [];
  const juzs = [];
  const juz_names = [
    "",
    "آلم",
    "سَيَقُولُ",
    "تِلْكَ ٱلْرُّسُلُ",
    "لَنْ تَنَالُوْ الْبِرَّ",
    "وَٱلْمُحْصَنَاتُ",
    "لَا يُحِبُّ ٱللهُ",
    "وَإِذَا سَمِعُوا",
    "وَلَوْ أَنَّنَا",
    "قَالَ ٱلْمَلَأُ",
    "وَٱعْلَمُواْ",
    "يَعْتَذِرُونَ",
    "وَمَا مِنْ دَآبَّةٍ",
    "وَمَا أُبَرِّئُ",
    "رُبَمَا",
    "سُبْحَانَ ٱلَّذِى",
    "قَالَ أَلَمْ",
    "ٱقْتَرَبَ لِلْنَّاسِ",
    "قَدْ أَفْلَحَ",
    "وَقَالَ ٱلَّذِينَ",
    "أَمَّنْ خَلَقَ",
    "أُتْلُ مَاأُوْحِیَ",
    "وَمَنْ يَّقْنُتْ",
    "وَمَآ لي",
    "فَمَنْ أَظْلَمُ",
    "إِلَيْهِ يُرَدُّ",
    "حم",
    "قَالَ فَمَا خَطْبُكُم",
    "قَدْ سَمِعَ ٱللهُ",
    "تَبَارَكَ ٱلَّذِى",
    "عَمَّ",
  ];
  const quarter_ayahs = [
    "",
    141,
    141,
    200,
    135,
    120,
    165,
    119,
    121,
    113,
    109,
    123,
    111,
    118,
    142,
    121,
    131,
    111,
    131,
    118,
    130,
    125,
    112,
    117,
    121,
    133,
    126,
    130,
    141,
    118,
    37,
  ];

  const surah_names = [
    "",
    "الفَاتِحَة",
    "الْبَقَرَة",
    "آلُ عِمْرَانَ",
    "النِّسَاء",
    "الْمَائِدَة",
    "الْأَنْعَام",
    "الْأَعْرَاف",
    "الْأَنْفَال",
    "التَّوْبَة",
    "يُونُس",
    "هُود",
    "يُوسُف",
    "الرَّعْد",
    "إِبْرَاهِيم",
    "الْحِجْر",
    "النَّحْل",
    "الإِسْرَاء",
    "الكَهْف",
    "مَرْيَم",
    "طَه",
    "الْأَنْبِيَاء",
    "الحَج",
    "المُؤْمِنُون",
    "النُّور",
    "الفُرْقَان",
    "الشُّعَرَاء",
    "النَّمْل",
    "الْقَصَص",
    "العَنْكَبُوت",
    "الرُّوم",
    "لُقْمَان",
    "السَّجْدَة",
    "الأَحْزَاب",
    "سَبَأ",
    "فَاطِر",
    "يَس",
    "الصَّافَّات",
    "ص",
    "الزُّمَر",
    "غَافِر",
    "فُصِّلَت",
    "الشُّورَى",
    "الزُّخْرُف",
    "الدُّخَان",
    "الجَاثِيَة",
    "الأَحْقَاف",
    "مُحَمَّد",
    "الْفَتْح",
    "الحُجُرَات",
    "ق",
    "الذَّارِيَات",
    "الطُّور",
    "النَّجْم",
    "القَمَر",
    "الرَّحْمَٰن",
    "الْوَاقِعَة",
    "الْحَدِيد",
    "المُجَادَلَة",
    "الحَشْر",
    "المُمْتَحَنَة",
    "الصَّف",
    "الْجُمُعَة",
    "المُنَافِقُون",
    "التَّغَابُن",
    "الطَّلَاق",
    "التحْرِيم",
    "الْمُلْك",
    "القَلَم",
    "الحَاقَّة",
    "المَعَارِج",
    "نُوح",
    "الْجِن",
    "المُزَّمِّل",
    "الْمُدَّثِّر",
    "الْقِيَامَة",
    "الْإِنسَان",
    "الْمُرْسَلَات",
    "النَّبَأ",
    "النَّازِعَات",
    "عَبَسَ",
    "التَّكْوِير",
    "الْإِنْفِطَار",
    "الْمُطَفِّفِينَ",
    "الْإِنْشِقَاق",
    "البُرُوج",
    "الطَّارِق",
    "الْأَعْلَى",
    "الْغَاشِيَة",
    "الفَجْر",
    "الْبَلَد",
    "الشَّمس",
    "اللَّيْل",
    "الضُّحَى",
    "الْشَرْح",
    "التِّين",
    "الْعَلَق",
    "الْقَدَر",
    "الْبَيْنَة",
    "الزلزلة",
    "العَادِيَات",
    "القَارِعَة",
    "التَّكَاثُر",
    "الْعَصْر",
    "الْهُمَزَة",
    "الفِيل",
    "قُرَيْش",
    "الْمَاعُون",
    "الْكَوْثَر",
    "الكَافِرُون",
    "النَّصْر",
    "المَسَد",
    "الإِخْلَاص",
    "الفَلَق",
    "النَّاس",
  ];

  const surah_ayahs = [
    0, 7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 16,
    111, 110, 98, 135, 73, 54, 118, 64, 77, 227, 55, 88, 69, 60, 34, 30, 73, 54,
    45, 83, 182, 38, 75, 85, 54, 53, 89, 59, 37, 31, 47, 29, 18, 50, 60, 49, 62,
    55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 31, 43, 28, 9,
    20, 56, 40, 31, 50, 78, 46, 37, 29, 19, 34, 25, 22, 20, 11, 8, 30, 20, 15,
    11, 8, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 3, 7, 3, 6, 3, 6, 4,
  ];

  const surahs = [];

  const eng_names = [
    "",
    "Al-Fatiha",
    "Al-Baqarah",
    "Al-Imran",
    "An-Nisa",
    "Al-Ma'idah",
    "Al-An'am",
    "Al-A'raf",
    "Al-Anfal",
    "At-Taubah",
    "Yunus",
    "Hud",
    "Yusuf",
    "Ar-Ra'd",
    "Ibrahim",
    "Al-Hijr",
    "An-Nahl",
    "Al-Isra",
    "Al-Kahf",
    "Maryam",
    "Ta-Ha",
    "Al-Anbiya",
    "Al-Hajj",
    "Al-Mu’minun",
    "An-Nur",
    "Al-Furqan",
    "Ash-Shu'ara",
    "An-Naml",
    "Al-Qasas",
    "Al-Ankabut",
    "Ar-Rum",
    "Luqman",
    "As-Sajdah",
    "Al-Ahzab",
    "Saba",
    "Fatir",
    "Ya-Sin",
    "As-Saffat",
    "Sad",
    "Az-Zumar",
    "Ghafir",
    "Fussilat",
    "Ash-Shura",
    "Az-Zukhruf",
    "Ad-Dukhan",
    "Al-Jathiyah",
    "Al-Ahqaf",
    "Muhammad",
    "Al-Fath",
    "Al-Hujurat",
    "Qaf",
    "Adh-Dhariyat",
    "At-Tur",
    "An-Najm",
    "Al-Qamar",
    "Ar-Rahman",
    "Al-Waqi’ah",
    "Al-Hadid",
    "Al-Mujadila",
    "Al-Hashr",
    "Al-Mumtahanah",
    "As-Saff",
    "Al-Jumu'ah",
    "Al-Munafiqun",
    "At-Taghabun",
    "At-Talaq",
    "At-Tahrim",
    "Al-Mulk",
    "Al-Qalam",
    "Al-Haqqah",
    "Al-Ma'arij",
    "Nuh",
    "Al-Jinn",
    "Al-Muzzammil",
    "Al-Muddaththir",
    "Al-Qiyamah",
    "Al-Insan",
    "Al-Mursalat",
    "An-Naba",
    "An-Nazi'at",
    "Abasa",
    "At-Takwir",
    "Al-Infitar",
    "Al-Mutaffifin",
    "Al-Inshiqaq",
    "Al-Buruj",
    "At-Tariq",
    "Al-A'la",
    "Al-Ghashiyah",
    "Al-Fajr",
    "Al-Balad",
    "Ash-Shams",
    "Al-Lail",
    "Ad-Duha",
    "Ash-Sharh",
    "At-Tin",
    "Al-Alaq",
    "Al-Qadr",
    "Al-Bayyina",
    "Az-Zalzalah",
    "Al-Adiyat",
    "Al-Qari'ah",
    "At-Takathur",
    "Al-Asr",
    "Al-Humazah",
    "Al-Fil",
    "Quraysh",
    "Al-Ma'un",
    "Al-Kawthar",
    "Al-Kafirun",
    "An-Nasr",
    "Al-Masad",
    "Al-Ikhlas",
    "Al-Falaq",
    "An-Nas",
  ];

  const translations = [
    "",
    "The Opening",
    "The Cow",
    "The Family of Imran",
    "The Women",
    "The Table Spread",
    "The Cattle",
    "The Heights",
    "The Spoils of War",
    "The Repentance",
    "Jonah",
    "Hud",
    "Joseph",
    "The Thunder",
    "Abraham",
    "The Rocky Tract",
    "The Bee",
    "The Night Journey",
    "The Cave",
    "Mary",
    "Ta-Ha",
    "The Prophets",
    "The Pilgrimage",
    "The Believers",
    "The Light",
    "The Criterion",
    "The Poets",
    "The Ant",
    "The Stories",
    "The Spider",
    "The Romans",
    "Luqman",
    "The Prostration",
    "The Confederates",
    "Sheba",
    "The Originator",
    "Ya-Sin",
    "The Ranks",
    "The Letter Sad",
    "The Groups",
    "The Forgiver",
    "Explained in Detail",
    "The Consultation",
    "The Gold Adornments",
    "The Smoke",
    "The Crouching",
    "The Wind-Curved Sandhills",
    "Muhammad",
    "The Victory",
    "The Rooms",
    "The Letter Qaf",
    "The Winnowing Winds",
    "The Mount",
    "The Star",
    "The Moon",
    "The Beneficent",
    "The Inevitable",
    "The Iron",
    "The Pleading Woman",
    "The Exile",
    "She that is to be examined",
    "The Ranks",
    "The Congregation",
    "The Hypocrites",
    "The Mutual Disillusion",
    "The Divorce",
    "The Prohibition",
    "The Sovereignty",
    "The Pen",
    "The Reality",
    "The Ascending Stairways",
    "Noah",
    "The Jinn",
    "The Enshrouded One",
    "The Cloaked One",
    "The Resurrection",
    "Man",
    "The Emissaries",
    "The Tidings",
    "Those who drag forth",
    "He frowned",
    "The Overthrowing",
    "The Cleaving",
    "Defrauding",
    "The Splitting Open",
    "The Constellations",
    "The Morning Star",
    "The Most High",
    "The Overwhelming",
    "The Dawn",
    "The City",
    "The Sun",
    "The Night",
    "The Morning Hours",
    "The Relief",
    "The Fig",
    "The Clot",
    "The Power",
    "The Clear Proof",
    "The Earthquake",
    "The Courser",
    "The Calamity",
    "The Rivalry in world increase",
    "The Declining Day",
    "The Traducer",
    "The Elephant",
    "Quraysh",
    "The Small Kindnesses",
    "The Abundance",
    "The Disbelievers",
    "The Divine Support",
    "The Palm Fibre",
    "The Sincerity",
    "The Daybreak",
    "The Mankind",
  ];

  for (let i = 1; i < 31; i++) {
    juzs.push({ juz: i, name: juz_names[i], ayah: quarter_ayahs[i] });
  }

  for (let i = 1; i < 115; i++) {
    surahs.push({
      surah: i,
      name: surah_names[i],
      ayah: surah_ayahs[i],
      eng_name: eng_names[i],
      translation: translations[i],
    });
  }

  return (
    <Tabs
      defaultValue="quarters"
      className="flex min-h-screen justify-center overflow-x-hidden overflow-y-auto bg-(--bg-color) bg-[image:var(--bg-img)] text-(--color)"
    >
      <TabsList className="mx-auto w-screen bg-[rgb(253_236_211)] shadow-[2px_2px_15px_rgba(0,0,0,0.3)]">
        <TabsTrigger
          value="quarters"
          className="cursor-pointer text-[16px] font-[700] text-(--color)"
        >
          Quarter
        </TabsTrigger>
        <TabsTrigger
          value="surahs"
          className="cursor-pointer text-[16px] font-[700] text-(--color)"
        >
          Surah
        </TabsTrigger>
        <TabsTrigger
          value="juz"
          className="cursor-pointer text-[16px] font-[700] text-(--color) md:mr-[15px]"
        >
          Juz
        </TabsTrigger>
      </TabsList>
      <TabsContent value="quarters">
        <div className="animate-slideUp mx-[10px] my-[25px] grid max-w-screen auto-rows-fr place-items-center gap-[10px] md:grid-cols-2 lg:grid-cols-3">
          {juzs.map(({ juz, name, ayah }, i) => (
            <Link
              key={i}
              className="relative flex h-[70px] w-[100%] rounded-[6px] border-[2px] border-(--color) bg-transparent p-[8px] font-[700]"
              to={"/juzY" + juz}
            >
              <div className="relative flex w-full">
                <div className="my-auto ml-[5px] flex h-[42px] w-[50px] rotate-45 items-center justify-center rounded-[7px] bg-(--color) text-(--bg-color)">
                  <label className="-rotate-45 cursor-pointer">{juz}</label>
                </div>
                <div className="my-auto mr-[10px] flex w-full flex-col items-end justify-end">
                  <label className="cursor-pointer text-[19px] font-[500]">
                    {name}
                  </label>
                  <label className="cursor-pointer text-[11px] uppercase">
                    {ayah} Ayahs
                  </label>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link key={Math.random()} to="/audios">
          <button className="bg-[rgba(253, 240, 220, 0.3)] animate-slideRight fixed right-[20px] bottom-[20px] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[5px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]">
            <svg
              className="back"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="rgb(22, 60, 94)"
            >
              <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
            </svg>
          </button>
        </Link>
      </TabsContent>
      <TabsContent value="surahs">
        <div className="animate-slideUp mx-[10px] my-[25px] grid max-w-screen auto-rows-fr place-items-center gap-[10px] md:grid-cols-2 lg:grid-cols-3">
          {surahs.map(({ surah, name, ayah, eng_name, translation }, i) => (
            <Link
              key={i}
              className="relative flex h-[70px] w-[100%] rounded-[6px] border-[2px] border-(--color) bg-transparent p-[8px] font-[700]"
              to=""
            >
              <div className="relative flex w-full">
                <div className="grid w-[200px] grid-cols-2 grid-rows-1 gap-x-[10px]">
                  <div className="my-auto ml-[5px] flex h-[45px] w-[45px] rotate-45 items-center justify-center rounded-[7px] bg-(--color) text-(--bg-color)">
                    <label className="-rotate-45 cursor-pointer">{surah}</label>
                  </div>
                  <div className="flex w-[200px] flex-col justify-center">
                    <span className="">{eng_name}</span>
                    <span className="text-[12px]">{translation}</span>
                  </div>
                </div>
                <div className="my-auto mr-[10px] flex w-full flex-col items-end justify-end">
                  <label className="cursor-pointer text-[19px] font-[500]">
                    {name}
                  </label>
                  <label className="cursor-pointer text-[11px] uppercase">
                    {ayah} Ayahs
                  </label>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link key={Math.random()} to="/audios">
          <button className="bg-[rgba(253, 240, 220, 0.3)] animate-slideRight fixed right-[20px] bottom-[20px] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[5px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]">
            <svg
              className="back"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="rgb(22, 60, 94)"
            >
              <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
            </svg>
          </button>
        </Link>
      </TabsContent>
      <TabsContent value="juz">
        <div className="animate-slideUp mx-[10px] my-[25px] grid max-w-screen auto-rows-fr place-items-center gap-[10px] md:grid-cols-2 lg:grid-cols-3">
          {juzs.map(({ juz, name, ayah }, i) => (
            <Link
              key={i}
              className="relative flex h-[70px] w-[100%] rounded-[6px] border-[2px] border-(--color) bg-transparent p-[8px] font-[700]"
              to=""
            >
              <div className="relative flex w-full">
                <div className="my-auto ml-[5px] flex h-[42px] w-[50px] rotate-45 items-center justify-center rounded-[7px] bg-(--color) text-(--bg-color)">
                  <label className="-rotate-45 cursor-pointer">{juz}</label>
                </div>
                <div className="my-auto mr-[10px] flex w-full flex-col items-end justify-end">
                  <label className="cursor-pointer text-[19px] font-[500]">
                    {name}
                  </label>
                  <label className="cursor-pointer text-[11px] uppercase">
                    {ayah} Ayahs
                  </label>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link key={Math.random()} to="/audios">
          <button className="bg-[rgba(253, 240, 220, 0.3)] animate-slideRight fixed right-[20px] bottom-[20px] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[5px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]">
            <svg
              className="back"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="rgb(22, 60, 94)"
            >
              <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
            </svg>
          </button>
        </Link>
      </TabsContent>
    </Tabs>
  );
};

export default Yasser;
