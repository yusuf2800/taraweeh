import "./Reciters.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Alafsay = ({ name }) => {
  useEffect(() => {
    document.title = name;
  }, [name]);

  const audios = [];
  const juzs = [];

  for (let i = 1; i < 31; i++) {
    juzs.push(i);
  }


  return (
    <div className="parent-container">
      <div className="wrapper">
        {juzs.map((juz) => (
          <Link key={juz} className="child-btn" to={"/juz" + juz}>
            {juz}
          </Link>
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
