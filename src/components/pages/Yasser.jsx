import "../../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Yasser = ({ name }) => {
  useEffect(() => {
    document.title = name;
  }, [name]);

  const audios = [];
  const juzs = [];

  for (let i = 1; i < 31; i++) {
    juzs.push({ juz: i });
  }

  return (
    <div className="flex h-screen items-center justify-center bg-(--bg-color) bg-[image:var(--bg-img)] text-(--color) overflow-y-hidden">
      <div className="animate-slideUp grid w-[100%] max-w-[800px] grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] place-items-center gap-[12px]">
        {juzs.map(({ juz }, i) => (
          <Link
            key={i}
            className="w-[90px] rounded-[6px] border-[2px] bg-transparent p-[8px] text-center font-[700] tracking-[2px] uppercase"
            to={"/juzY" + juz}
          >
            <div className="index">
              <label>{juz}</label>
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

export default Yasser;
