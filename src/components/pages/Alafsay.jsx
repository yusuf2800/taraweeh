import "./Alafsay.css";
import { Link } from "react-router-dom";

const Alafsay = () => {
  const audios = [
    {
      id: 1,
      name: "1.1",
      path: "/audio/1.1.mp3",
    },
  ];

  return (
    <div className="parent-container">
      <div className="child-wrapper">
        {audios.map((audio) => (
          <div className="q1-wrapper" key={audio.id}>
            <label className="q-label">{audio.name}</label>
            <audio
              src="/audio/1.1.mp3"
              controls
              className="inner-audios"
            ></audio>
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
