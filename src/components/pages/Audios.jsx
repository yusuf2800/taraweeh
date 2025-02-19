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
    </div>
  );
};

export default Audios;
