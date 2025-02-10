import "./Style.css";
import { Link } from "react-router-dom";

const Second = () => {
  const parts = [
    "1.2",
    "2.3",
    "3.4",
    "5.1",
    "6.2",
    "7.3",
    "8.4",
    "9.5",
    "11.2",
    "12.3",
    "13.4",
    "14.5",
    "16.2",
    "17.3",
    "18.4",
    "20.1",
    "21.2",
    "22.3",
    "23.4",
    "25.1",
    "26.2",
    "27.3",
    "28.4",
    "30.1",
  ];

  const files = [
    "http://janathimessage.co.uk/quran/para1.pdf#page=9",
    "http://janathimessage.co.uk/quran/para2.pdf#page=16",
    "http://janathimessage.co.uk/quran/para3.pdf#page=22",
    "http://janathimessage.co.uk/quran/para5.pdf",
    "http://janathimessage.co.uk/quran/para6.pdf#page=9",
    "http://janathimessage.co.uk/quran/para7.pdf#page=16",
    "http://janathimessage.co.uk/quran/para8.pdf#page=21",
    "http://janathimessage.co.uk/quran/para10.pdf",
    "http://janathimessage.co.uk/quran/para11.pdf#page=8",
    "http://janathimessage.co.uk/quran/para12.pdf#page=14",
    "http://janathimessage.co.uk/quran/para13.pdf#page=22",
    "http://janathimessage.co.uk/quran/para15.pdf",
    "http://janathimessage.co.uk/quran/para16.pdf#page=9",
    "http://janathimessage.co.uk/quran/para17.pdf#page=14",
    "http://janathimessage.co.uk/quran/para18.pdf#page=21",
    "http://janathimessage.co.uk/quran/para20.pdf",
    "http://janathimessage.co.uk/quran/para21.pdf#page=8",
    "http://janathimessage.co.uk/quran/para22.pdf#page=13",
    "http://janathimessage.co.uk/quran/para23.pdf#page=22",
    "http://janathimessage.co.uk/quran/para25.pdf",
    "http://janathimessage.co.uk/quran/para26.pdf#page=8",
    "http://janathimessage.co.uk/quran/para27.pdf#page=15",
    "http://janathimessage.co.uk/quran/para28.pdf#page=22",
    "http://janathimessage.co.uk/quran/para30.pdf",
  ];

  const sides = ["7", "6.5", "7", "6.5", "7.5", "8", "5", "7", "6.5", "9"];

  let days = [];
  let date = new Date("2025-02-28");

  for (let i = 1; i <= 30; i++) {
    days.push([i, date.toDateString()]);
    date.setDate(date.getDate() + 1);
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
                <td>{sides[i]}</td>
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

export default Second;
