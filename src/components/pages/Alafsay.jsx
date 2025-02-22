import "./Alafsay.css";
import { Link } from "react-router-dom";

const Alafsay = () => {
  const audios = [];
  let count = 1.0;

  for (let i = 1; i < 22; i++) {
    if (count + 0.6 === Math.floor(count) + 1) {
      count += 0.7;
    } else {
      count += 0.1;
    }
    count = parseFloat(count.toFixed(1));
    audios.push({
      id: i,
      name: count,
      audio_path: `/audio/juz${Math.floor(count)}/${String(count)}.mp3`,
      file_path: `/quran pdfs/juz${Math.floor(count)}/${String(count)}.pdf`,
    });

  }

  const audioElements = document.querySelectorAll(".inner-audios");

  audioElements.forEach((audio) => {
    audio.addEventListener("play", () => {
      audioElements.forEach((other) => {
        if (other !== audio) {
          other.pause();
        }
      });
    });
  });

  return (
    <div className="parent-container">
      <div className="child-container">
        {audios.map((audio) => (
          <div className="q1-wrapper" key={audio.id}>
            <label className="q-label">{audio.name}</label>
            <audio src={audio.audio_path} controls className="inner-audios"></audio>
            <a href={audio.file_path} target="_blank">
              <button className="child-btn">Learn</button>
            </a>
          </div>
        ))}
      </div>
      <Link key={Math.random()} to="/audios">
        <button className="home">
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
