import "./Style.css";
import { Link } from "react-router-dom";

const Third = () => {
  const files = [
    "http://janathimessage.co.uk/quran/para1.pdf#page=15",
    "http://janathimessage.co.uk/quran/para2.pdf#page=22",
    "http://janathimessage.co.uk/quran/para4.pdf#page=7",
    "http://janathimessage.co.uk/quran/para5.pdf#page=9",
    "http://janathimessage.co.uk/quran/para6.pdf#page=16",
    "http://janathimessage.co.uk/quran/para7.pdf#page=23",
    "http://janathimessage.co.uk/quran/para9.pdf",
    "http://janathimessage.co.uk/quran/para10.pdf#page=8",
    "http://janathimessage.co.uk/quran/para11.pdf#page=15",
    "http://janathimessage.co.uk/quran/para12.pdf#page=23",
    "http://janathimessage.co.uk/quran/para14.pdf",
    "http://janathimessage.co.uk/quran/para15.pdf#page=8",
    "http://janathimessage.co.uk/quran/para16.pdf#page=15",
    "http://janathimessage.co.uk/quran/para17.pdf#page=21",
    "http://janathimessage.co.uk/quran/para19.pdf",
    "http://janathimessage.co.uk/quran/para20.pdf#page=6",
    "http://janathimessage.co.uk/quran/para21.pdf#page=16",
    "http://janathimessage.co.uk/quran/para22.pdf#page=20",
    "http://janathimessage.co.uk/quran/para24.pdf",
    "http://janathimessage.co.uk/quran/para25.pdf#page=8",
    "http://janathimessage.co.uk/quran/para26.pdf#page=17",
    "http://janathimessage.co.uk/quran/para27.pdf#page=22",
    "http://janathimessage.co.uk/quran/para29.pdf",
    "http://janathimessage.co.uk/quran/para30.pdf#page=8",
  ];
  let days = [];
  let date = new Date("2025-02-28");

  for (let i = 1; i <= 30; i++) {
    days.push([i, date.toDateString()]);
    date.setDate(date.getDate() + 1);
  }

  let count = 1.3;
  const parts = [1.3]

  for (let i = 0; i < 23; i++) {
    if (count + 0.6 < Math.floor(count) + 1) {
      count += 1.1;
    } else {
      count += 1.7;
    }
    count = parseFloat(count.toFixed(1));
    parts.push(count);
  }

  return (
    <div>
      <div className="parent-container">
        <div className="child-container">
          <table>
            <tr>
              <th>Day</th>
              <th>Part</th>
              <th>Sides</th>
              <th>File</th>
            </tr>
            {parts.map((part, i) => (
              <tr key={i}>
                <td>{days[i][0]}</td>
                <td>{part}</td>
                <td></td>
                <td>
                  <a href={files[i]} target="_blank">
                    <button className="child-btn">View</button>
                  </a>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <Link key={Math.random()} to="/taraweeh">
        <button className="home">
          <svg
            className="back"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="rgb(22, 60, 94)"
          >
            <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default Third;
