import { getAudios } from "../../QuranApi.js";
import "./Audios.css";

const Audios = () => {
  getAudios(5, 10).then((res) => console.log(res));

  const reciters = [
    {
      name: "Mishary Rashid Alafasy",
      arabicName: "مشاري بن راشدالعفاسي",
      url: "https://api2.quran-pro.com/images/mishary-rashid-alafasy/mishary-rashid-alafasy-medium.webp?version=1686738242860",
    },
    {
      name: "Yasser Al-Dosari",
      arabicName: "ياسر الدوسري",
      url: "https://api2.quran-pro.com/images/yasser-al-dosari/yasser-al-dosari-medium.webp?version=1686734240565",
    },
    {
      name: "Abdul Rahman Al Soudais",
      arabicName: "عبد الرحمن السديس",
      url: "https://api2.quran-pro.com/images/abdul-rahman-al-soudais/abdul-rahman-al-soudais-medium.webp?version=1686737500276",
    },
  ];

  return (
    <div className="parent-container">
      {reciters.map((reciter) => (
        <div className="reciter-wrapper">
          <img src={reciter.url} className="img" />
          <p className="author">{reciter.name}</p>
          <p className="arabic">{reciter.arabicName}</p>
        </div>
      ))}
    </div>
  );
};

export default Audios;
