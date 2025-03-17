import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../App.css";

const Alafsay = ({ name }) => {
  useEffect(() => {
    document.title = name;
  }, [name]);

  const audios = [];
  const juzs = [];
  const names = [
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
  const ayahs = [
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

  for (let i = 1; i < 31; i++) {
    juzs.push({ juz: i, name: names[i], ayah: ayahs[i] });
  }

  return (
    <div className="flex min-h-screen justify-center overflow-y-auto bg-(--bg-color) bg-[image:var(--bg-img)] text-(--color)">
      <div className="animate-slideUp mx-[10px] my-[25px] grid w-screen auto-rows-fr  place-items-center gap-[10px] md:grid-cols-2 lg:grid-cols-3">
        {juzs.map(({ juz, name, ayah }, i) => (
          <Link
            key={i}
            className="relative flex h-[70px] w-[100%] rounded-[6px] border-[2px] bg-transparent p-[8px] font-[700]"
            to={"/juz" + juz}
          >
            <div className="relative flex w-full ">
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
    </div>
  );
};

export default Alafsay;
