import { Link } from "react-router-dom";
import "./Audios.css";

const Audios = () => {
  const reciters = [
    {
      name: "Mishary Rashid Alafasy",
      arabicName: "مشاري بن راشدالعفاسي",
      url: "https://api2.quran-pro.com/images/mishary-rashid-alafasy/mishary-rashid-alafasy-medium.webp?version=1686738242860",
      goto: "/alafsay",
    },
    {
      name: "Yasser Al-Dosari",
      arabicName: "ياسر الدوسري",
      url: "https://api2.quran-pro.com/images/yasser-al-dosari/yasser-al-dosari-medium.webp?version=1686734240565",
      goto: "",
    },
  ];

  return (
    <div className="parent-container">
      <div className="reciter-container">
        {reciters.map((reciter, i) => (
          <Link key={i} className="goto-reciter" to={reciter.goto}>
            <div className="reciter-wrapper">
              <img src={reciter.url} className="img" />
              <div className="text-container">
                <p className="author">
                  {reciter.name}
                  <br />
                  <span className="author arabic">{reciter.arabicName}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link key={Math.random()} to="/">
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

export default Audios;
