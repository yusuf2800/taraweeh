import "./Style.css";
import { Link } from "react-router-dom";

const Fifth = () => {
  const files = [
    "http://janathimessage.co.uk/quran/para2.pdf#page",
    "http://janathimessage.co.uk/quran/para3.pdf#page=7",
    "http://janathimessage.co.uk/quran/para4.pdf#page=16",
    "http://janathimessage.co.uk/quran/para5.pdf#page=15",
    "http://janathimessage.co.uk/quran/para7.pdf",
    "http://janathimessage.co.uk/quran/para8.pdf#page#page=6",
    "http://janathimessage.co.uk/quran/para9.pdf#page=15",
    "http://janathimessage.co.uk/quran/para10.pdf#page=22",
    "http://janathimessage.co.uk/quran/para12.pdf",
    "http://janathimessage.co.uk/quran/para13.pdf#page=9",
    "http://janathimessage.co.uk/quran/para14.pdf#page=15",
    "http://janathimessage.co.uk/quran/para15.pdf#page=22",
    "http://janathimessage.co.uk/quran/para17.pdf",
    "http://janathimessage.co.uk/quran/para18.pdf#page=8",
    "http://janathimessage.co.uk/quran/para19.pdf#page=14",
    "http://janathimessage.co.uk/quran/para20.pdf#page=19",
    "http://janathimessage.co.uk/quran/para22.pdf",
    "http://janathimessage.co.uk/quran/para23.pdf#page=6",
    "http://janathimessage.co.uk/quran/para24.pdf#page=14",
    "http://janathimessage.co.uk/quran/para25.pdf#page=22",
    "http://janathimessage.co.uk/quran/para27.pdf",
    "http://janathimessage.co.uk/quran/para28.pdf#page=8",
    "http://janathimessage.co.uk/quran/para29.pdf#page=17",
    "http://janathimessage.co.uk/quran/para30.pdf#page=22",
  ];

  let days = [];
  let date = new Date("2025-02-28");

  for (let i = 1; i <= 30; i++) {
    days.push([i, date.toDateString()]);
    date.setDate(date.getDate() + 1);
  }

  let count = 2.1;
  const parts = [2.1];

  for (let i = 0; i < 23; i++) {
    if (count + 0.6 < Math.floor(count) + 1) {
      count += 1.1;
    } else {
      count += 1.7;
    }
    count = parseFloat(count.toFixed(1));
    parts.push(count);
  }

  const sides = []

  return (
    <div>
      <div className="parent-container">
        <div className="child-container">
          <table>
            <thead>
              <tr>
                <th>Day</th>
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
                    <a href={files[i]} target="_blank">
                      <button className="child-btn">View</button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link key={Math.random()} to="/taraweeh">
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
      <button className="timer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="30px"
          height="30px"
          fill="rgb(22, 60, 94)"
        >
          <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
      </button>
    </div>
  );
};

export default Fifth;
