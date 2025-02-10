import "./Style.css";
import { Link } from "react-router-dom";

const First = () => {
  const parts = [
    "1.1",
    "2.2",
    "3.3",
    "4.4",
    "6.1",
    "7.2",
    "8.3",
    "9.4",
    "11.1",
    "12.2",
    "13.3",
    "14.4",
    "15.5",
    "17.2",
    "18.3",
    "19.4",
    "21.1",
    "22.2",
    "23.3",
    "24.4",
    "26.1",
    "27.2",
    "28.3",
    "29.4",
  ];

  const files = [
    "http://janathimessage.co.uk/quran/para1.pdf",
    "http://janathimessage.co.uk/quran/para2.pdf#page=7",
    "http://janathimessage.co.uk/quran/para3.pdf#page=15",
    "http://janathimessage.co.uk/quran/para4.pdf#page=22",
    "http://janathimessage.co.uk/quran/para6.pdf",
    "http://janathimessage.co.uk/quran/para7.pdf#page=8",
    "http://janathimessage.co.uk/quran/para8.pdf#page=12",
    "http://janathimessage.co.uk/quran/para9.pdf#page=22",
    "http://janathimessage.co.uk/quran/para11.pdf",
    "http://janathimessage.co.uk/quran/para12.pdf#page=8",
    "http://janathimessage.co.uk/quran/para13.pdf#page=15",
    "http://janathimessage.co.uk/quran/para14.pdf#page=22",
    "http://janathimessage.co.uk/quran/para16.pdf",
    "http://janathimessage.co.uk/quran/para17.pdf#page=7",
    "http://janathimessage.co.uk/quran/para18.pdf#page=14",
    "http://janathimessage.co.uk/quran/para19.pdf#page=22",
    "http://janathimessage.co.uk/quran/para21.pdf",
    "http://janathimessage.co.uk/quran/para22.pdf#page=9",
    "http://janathimessage.co.uk/quran/para23.pdf#page=16",
    "http://janathimessage.co.uk/quran/para24.pdf#page=20",
    "http://janathimessage.co.uk/quran/para26.pdf",
    "http://janathimessage.co.uk/quran/para27.pdf#page=9",
    "http://janathimessage.co.uk/quran/para28.pdf#page=14",
    "http://janathimessage.co.uk/quran/para29.pdf#page=25",
  ];

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

export default First;
