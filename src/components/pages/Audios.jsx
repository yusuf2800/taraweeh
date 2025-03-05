import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./Audios.css";

const Audios = () => {
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!isModalOpen) {
      modalRef.current?.showModal();
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    modalRef.current?.close();
    setIsModalOpen(false);
  };

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
      goto: "/yasser",
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

      <Link key="100" to="/">
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

      <button className="open-modal" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="27px"
          height="27px"
          fill="rgb(22, 60, 94)"
        >
          <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
        </svg>
      </button>

      <dialog ref={modalRef} className="modal">
        <button className="close" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width="15px"
            fill="rgb(22, 60, 94)"
          >
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </button>
        <p>
          <span className="arabic">السلام عليكم ورحمة الله وبركاته</span>
          <br />
          <br />
          This website consists of the quarters per juz with the audios
          <br />
          The audios are still being added
          <br />
          <br />
          More reciters will be added soon
          <br />
          Please make sure to share this website for more hasanat
          <br />
          <br />
          <a href="mailto:yusufpatel2800@gmail.com" className="email">
            Email me for suggestions/improvements: yusufpatel2800@gmail.com
          </a>
          <br />
          <br />
          <span className="arabic">جزاك الله خيرا</span>
        </p>
      </dialog>
    </div>
  );
};

export default Audios;
