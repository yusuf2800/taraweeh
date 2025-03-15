import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const First = ({ name }) => {
  useEffect(() => {
    document.title = name;
  }, []);

  const sides = [
    "8",
    "8",
    "6.5",
    "7",
    "8.5",
    "8",
    "8",
    "7",
    "8",
    "5",
    "7.5",
    "6.5",
    "8.5",
    "7",
    "6.5",
    "7.5",
    "7",
    "5",
    "6",
    "6",
    "7",
    "7",
    "8.5",
    "7.5",
  ];

  let days = [];
  let date = new Date("2025-02-28");

  for (let i = 1; i <= 30; i++) {
    days.push([i, date.toDateString()]);
    date.setDate(date.getDate() + 1);
  }

  let count = 1.1;
  const parts = [1.1];
  const files = [];

  for (let i = 0; i < 23; i++) {
    if (count + 0.6 < Math.floor(count) + 1) {
      count += 1.1;
    } else {
      count += 1.7;
    }
    count = parseFloat(count.toFixed(1));
    parts.push(count);
  }

  parts.forEach((part) => {
    Number(part);
    files.push(`/quran pdfs/juz${Math.floor(part)}/${part}.pdf`);
  });

  return (
    <>
      <div className="flex h-screen items-center justify-center overflow-y-hidden bg-(--bg-color) bg-[image:var(--bg-img)]">
        <div className="animate-slideUp h-[250px] w-[350px] overflow-y-auto rounded-[10px] bg-[var(--bg-color)] p-[15px] text-center text-[var(--color)] shadow-[2px_2px_10px_rgba(0,0,0,0.4)]">
          <table className="mx-auto border-separate border-spacing-x-[16px] border-spacing-y-[16px] text-[18px]">
            <thead className="sticky top-0 z-10 h-[50px] w-[100%] rounded-[8px] px-7 backdrop-blur-[10px]">
              <tr>
                <th className="pl-[10px]">Night</th>
                <th>Part</th>
                <th>Sides</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, i) => (
                <tr key={i}>
                  <td>{days[i][0]}</td>
                  <td>{part}</td>
                  <td>{sides[i]}</td>
                  <td>
                    <a
                      href={encodeURI(files[i])}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="h-[40px] w-[80px] cursor-pointer rounded-[5px] border-[2px] text-[16px] font-[700] uppercase hover:bg-[rgba(22,60,94,0.159)]">
                        View
                      </button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link key={Math.random()} to="/">
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
    </>
  );
};

export default First;
