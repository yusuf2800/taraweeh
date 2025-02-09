import "./Fifth.css";

const Fifth = () => {
  const parts = [
    2.1, 3.2, 4.3, 5.4, 7.1, 8.2, 9.3, 10.4, 12.1, 13.2, 14.3, 15.4, 17.1, 18.2,
    19.3, 20.4, 22.1, 23.2, 24.3, 25.4, 27.1, 28.2, 29.3, 30.4,
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
                  <a href={files} target="_blank">
                    View
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

export default Fifth;
