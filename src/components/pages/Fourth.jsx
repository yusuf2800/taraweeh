import "./Style.css";
import { Link } from "react-router-dom";

const Fourth = () => {
  const parts = [
    "1.4",
    "3.1",
    "4.2",
    "5.3",
    "6.4",
    "7.5",
    "9.2",
    "10.3",
    "11.4",
    "12.5",
    "14.2",
    "15.3",
    "16.4",
    "17.5",
    "19.2",
    "20.3",
    "21.4",
    "23.1",
    "24.2",
    "25.3",
    "26.4",
    "28.1",
    "29.2",
    "30.3",
  ];
  const files = [
    "http://janathimessage.co.uk/quran/para1.pdf#page=22",
    "http://janathimessage.co.uk/quran/para3.pdf",
    "http://janathimessage.co.uk/quran/para4.pdf#page=7",
    "http://janathimessage.co.uk/quran/para5.pdf#page=15",
    "http://janathimessage.co.uk/quran/para6.pdf#page=22",
    "http://janathimessage.co.uk/quran/para8.pdf",
    "http://janathimessage.co.uk/quran/para9.pdf#page=8",
    "http://janathimessage.co.uk/quran/para10.pdf#page=16",
    "http://janathimessage.co.uk/quran/para11.pdf#page=21",
    "http://janathimessage.co.uk/quran/para13.pdf",
    "http://janathimessage.co.uk/quran/para14.pdf#page=8",
    "http://janathimessage.co.uk/quran/para15.pdf#page=15",
    "http://janathimessage.co.uk/quran/para16.pdf#page=21",
    "http://janathimessage.co.uk/quran/para18.pdf",
    "http://janathimessage.co.uk/quran/para19.pdf#page=7",
    "http://janathimessage.co.uk/quran/para20.pdf#page=15",
    "http://janathimessage.co.uk/quran/para21.pdf#page=23",
    "http://janathimessage.co.uk/quran/para23.pdf",
    "http://janathimessage.co.uk/quran/para24.pdf#page=7",
    "http://janathimessage.co.uk/quran/para25.pdf#page=14",
    "http://janathimessage.co.uk/quran/para26.pdf#page=22",
    "http://janathimessage.co.uk/quran/para28.pdf",
    "http://janathimessage.co.uk/quran/para29.pdf#page=8",
    "http://janathimessage.co.uk/quran/para30.pdf#page=15",
  ];
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

export default Fourth;
