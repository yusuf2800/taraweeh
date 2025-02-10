import "./Style.css";
import { Link } from "react-router-dom";

const Fifth = () => {
  const parts = [
    "2.1",
    "3.2",
    "4.3",
    "5.4",
    "7.1",
    "8.2",
    "9.3",
    "10.4",
    "12.1",
    "13.2",
    "14.3",
    "15.4",
    "16.5",
    "18.2",
    "19.3",
    "20.4",
    "22.1",
    "23.2",
    "24.3",
    "25.4",
    "27.1",
    "28.2",
    "29.3",
    "30.4",
  ];
  
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

export default Fifth;
