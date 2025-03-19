import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "../App.css";

const Body = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const names = [
    { id: "hs", name: "hamzah/yusuf", path: "/hb-yp" },
    { id: "ap", name: "aasim", path: "/aasim" },
    { id: "wm", name: "wasim/yasin", path: "/wm-ya" },
    { id: "ys", name: "yoosuf", path: "/yoosuf" },
    { id: "sa", name: "shameer", path: "/shameer" },
  ];

  const modalRef = useRef(null);
  const searchInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [pdfURL, setPDFURL] = useState(null);

  const openModal = () => {
    if (!isModalOpen) {
      modalRef.current?.showModal();
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    modalRef.current?.close();
    setIsModalOpen(false);
    setIsInvalid(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setIsInvalid(false);
  };

  let count = 1.0;
  let files = [];
  for (let i = 1; i < 121; i++) {
    if (count + 0.6 === Math.floor(count) + 1) {
      count += 0.7;
    } else {
      count += 0.1;
    }
    count = parseFloat(count.toFixed(1));
    files.push(count);
  }

  const view = () => {
    if (searchQuery.trim() !== "" && files.includes(parseFloat(searchQuery))) {
      window.open(
        `quran pdfs/juz${Math.floor(searchQuery)}/${searchQuery}.pdf`,
        "_blank",
      );
      setSearchQuery("");
      setIsInvalid(false);
      setIsModalOpen(false);
      closeModal();
    } else {
      setIsInvalid(true);
    }
  };

  useEffect(() => {
    if (isModalOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-[15px] overflow-y-hidden bg-[var(--bg-color)] bg-[image:var(--bg-img)]">
      {names.map((person, i) => (
        <Link
          key={i}
          to={person.path}
          className={`w-[250px] rounded-[5px] border-2 border-(--color) p-[8px] text-center text-[16px] font-[700] tracking-[2px] text-(--color) uppercase decoration-[var(--color)] ${i === 0 ? "animate-slideDown" : ""} ${i === 1 ? "animate-slideRight" : ""} ${i === 2 ? "animate-slideLeft" : ""} ${i === 3 ? "animate-slideRight" : ""} ${i === 4 ? "animate-slideUp2" : ""} hover:bg-[rgba(22,60,94,0.159)]`}
        >
          {person.name}
        </Link>
      ))}
      <Link
        className="animate-slideUp2 absolute bottom-[30px] w-[200px] animate-bounce rounded-[5px] border-2 border-(--color) p-[10px] text-center text-[12px] font-[700] text-(--color) decoration-(--color) hover:bg-[rgba(22,60,94,0.159)]"
        key="1345"
        to="/audios"
      >
        Level Up Your Recitation
      </Link>
      <button
        className="bg-[rgba(253, 240, 220, 0.3)] animate-slideRight fixed top-[20px] right-[20px] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[5px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27px"
          fill="rgb(22, 60, 94)"
          viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
      </button>
      <dialog
        ref={modalRef}
        className="backdrop:[rgba(0,0,0,0.9)] overlay top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[7px] bg-[var(--bg-color)] p-[20px]"
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
        <input
          ref={searchInputRef}
          type="text"
          inputMode="decimal"
          pattern="([1-9](\.\d*)?|30(\.0*)?)"
          min="1"
          max="31"
          placeholder="What do you want to read?"
          className="mt-[20px] h-[35px] w-[300px] rounded-[5px] border-[2px] border-[var(--color)] p-[5px] text-[20px] text-[var(--color)]"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <br />
        {isInvalid && (
          <span className="text-red-600">
            You have entered an incorrect quarter!
          </span>
        )}
        <br />
        <button
          className="mt-[3px] cursor-pointer rounded-[5px] border-[2px] border-[var(--color)] p-[5px] text-[16px] font-[650] tracking-[1px] text-[var(--color)] uppercase"
          onClick={view}
        >
          View
        </button>
      </dialog>
    </div>
  );
};

export default Body;
