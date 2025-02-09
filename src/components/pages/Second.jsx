import "./Second.css";

const Second = () => {
  const parts = [
    1.2, 2.3, 3.4, 5.1, 6.2, 7.3, 8.4, 10.1, 11.2, 12.3, 13.4, 15.1, 16.2, 17.3,
    18.4, 20.1, 21.2, 22.3, 23.4, 25.1, 26.2, 27.3, 28.4, 30.1,
  ];

  const files = [
    "http://janathimessage.co.uk/quran/para1.pdf",
    "http://janathimessage.co.uk/quran/para2.pdf",
    "http://janathimessage.co.uk/quran/para3.pdf",
    "http://janathimessage.co.uk/quran/para4.pdf",
    "http://janathimessage.co.uk/quran/para5.pdf",
    "http://janathimessage.co.uk/quran/para6.pdf",
    "http://janathimessage.co.uk/quran/para7.pdf",
    "http://janathimessage.co.uk/quran/para8.pdf",
    "http://janathimessage.co.uk/quran/para9.pdf",
    "http://janathimessage.co.uk/quran/para10.pdf",
    "http://janathimessage.co.uk/quran/para11.pdf",
    "http://janathimessage.co.uk/quran/para12.pdf",
    "http://janathimessage.co.uk/quran/para13.pdf",
    "http://janathimessage.co.uk/quran/para14.pdf",
    "http://janathimessage.co.uk/quran/para15.pdf",
    "http://janathimessage.co.uk/quran/para16.pdf",
    "http://janathimessage.co.uk/quran/para17.pdf",
    "http://janathimessage.co.uk/quran/para18.pdf",
    "http://janathimessage.co.uk/quran/para19.pdf",
    "http://janathimessage.co.uk/quran/para20.pdf",
    "http://janathimessage.co.uk/quran/para21.pdf",
    "http://janathimessage.co.uk/quran/para22.pdf",
    "http://janathimessage.co.uk/quran/para23.pdf",
    "http://janathimessage.co.uk/quran/para24.pdf",
    "http://janathimessage.co.uk/quran/para25.pdf",
    "http://janathimessage.co.uk/quran/para26.pdf",
    "http://janathimessage.co.uk/quran/para27.pdf",
    "http://janathimessage.co.uk/quran/para28.pdf",
    "http://janathimessage.co.uk/quran/para29.pdf",
    "http://janathimessage.co.uk/quran/para30.pdf",
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
              <th>File</th>
            </tr>
            {parts.map((part, i) => (
              <tr key={i}>
                <td>{days[i][0]}</td>
                <td>{part}</td>
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
    </div>
  );
};

export default Second;
