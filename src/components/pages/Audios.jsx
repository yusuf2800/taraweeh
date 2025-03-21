import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "../../App.css";

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
    // {
    //   name: "Abdul Rahman Al Soudais",
    //   arabicName: "عبد الرحمن السديس",
    //   url: "https://api2.quran-pro.com/images/abdul-rahman-al-soudais/abdul-rahman-al-soudais-medium.webp?version=1686737500276",
    //   goto: "",
    // },
    // {
    //   name: "Maher Al Mueaqly",
    //   arabicName: "ماهر المعيقلي",
    //   url: "https://api2.quran-pro.com/images/maher-al-mueaqly/maher-al-mueaqly-medium.webp?version=1686738190628",
    //   goto: "",
    // },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-[15px] overflow-y-auto bg-[var(--bg-color)] bg-[image:var(--bg-img)]">
      <div className="animate-slideUp my-[25px] flex h-auto flex-wrap items-center justify-center gap-[30px] text-center">
        {reciters.map((reciter, i) => (
          <Link key={i} className="decoration-none" to={reciter.goto}>
            <div className="relative flex h-[280px] w-[250px] flex-col items-center justify-center overflow-hidden rounded-[8px] shadow-[2px_2px_15px_rgba(0,0,0,0.3)]">
              <img
                src={reciter.url}
                className="absolute z-0 h-[350px] w-[320px] rounded-[8px] blur-[90px]"
              />

              <div className="z-10 mt-[10px] text-center hover:text-red-500/50 active:scale-[0.95]">
                <img
                  src={reciter.url}
                  className="z-10 mx-auto h-[150px] w-[150px] rounded-[50%] shadow-[2px_2px_15px_rgba(0,0,0,0.3)] active:scale-[0.95]"
                />
                <p className="mt-[5px] text-[17px] font-[500] text-(--color) hover:text-red-500/70">
                  {reciter.name}
                  <br />
                  {reciter.arabicName}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link key="100" to="/">
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

      <button
        className="animate-slideLeft bg-[rgba(253, 240, 220, 0.3)] fixed bottom-[20px] left-[20px] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[5px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]"
        onClick={openModal}
      >
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

      <dialog
        ref={modalRef}
        className="backdrop:[rgba(0,0,0,0.9)] overlay top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[7px] bg-[var(--bg-color)] p-[20px] text-(--color)"
      >
        <button
          className="fixed top-[10px] right-[10px] cursor-pointer"
          onClick={closeModal}
        >
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
          السلام عليكم ورحمة الله وبركاته
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
          Email me for suggestions/improvements:{" "}
          <a
            href="mailto:yusufpatel2800@gmail.com"
            className="font-[600] text-red-500"
          >
            yusufpatel2800@gmail.com
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
