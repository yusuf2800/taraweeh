import "../../../../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const YJuz29 = ({ name }) => {
  useEffect(() => {
    document.title = name;
    let metaTag = document.querySelector('meta[property="og:image"]');

    metaTag.setAttribute(
      "content",
      "https://api2.quran-pro.com/images/mishary-rashid-alafasy/mishary-rashid-alafasy-medium.webp?version=1686738242860",
    );
    const iconLink = document.querySelector('link[rel="apple-touch-icon"]');

    iconLink.setAttribute(
      "href",
      "https://api2.quran-pro.com/images/yasser-al-dosari/yasser-al-dosari-medium.webp?version=1686734240565",
    );
    return () => {
      if (iconLink) {
        iconLink.setAttribute("href", "images/mosquePreview.png");
      }
    };
  }, []);

  const audios = [];
  let count = 29.0;

  for (let i = 1; i < 5; i++) {
    if (count + 0.6 === Math.floor(count) + 1) {
      count += 0.7;
    } else {
      count += 0.1;
    }
    count = parseFloat(count.toFixed(1));
    audios.push({
      id: i,
      name: count,
      audio_path: `https://res.cloudinary.com/ddsiorkrx/video/upload/v1740422996/${count}A.mp3`,
      file_path: `/quran pdfs/juz${Math.floor(count)}/${String(count)}.pdf`,
    });
  }

  return (
    <div className="flex h-screen items-center justify-center bg-(--bg-color) bg-[image:var(--bg-img)]">
      <div className="animate-slideUp h-[250px] w-[350px] overflow-y-auto rounded-[10px] bg-[var(--bg-color)] p-[15px] text-center text-[var(--color)] shadow-[2px_2px_10px_rgba(0,0,0,0.4)]">
        {audios.map((audio) => (
          <div
            className="animation-slideUp my-[20px] w-[100%] rounded-[7px] px-[5px] py-[15px] text-[20px] shadow-[2px_2px_10px_rgba(0,0,0,0.4)]"
            key={audio.id}
          >
            <label className="font-[500]">{audio.name}</label>
            <audio
              src={audio.audio_path}
              controls
              className="mx-auto my-[10px] w-[285px] cursor-pointer"
            ></audio>
            <a href={audio.file_path} target="_blank">
              <button className="h-[40px] w-[80px] cursor-pointer rounded-[5px] border-[2px] text-[16px] font-[700] tracking-[.5px] uppercase hover:bg-[rgba(22,60,94,0.159)]">
                Learn
              </button>
            </a>
          </div>
        ))}
      </div>
      <Link key={Math.random()} to="/yasser">
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

export default YJuz29;
