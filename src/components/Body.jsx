import "./Body.css";

const Body = () => {
  const part1 = [
    1.1, 2.2, 3.3, 4.4, 6.1, 7.2, 8.3, 9.4, 11.1, 12.2, 13.3, 14.4, 16.1, 17.2,
    18.3, 19.4, 21.1, 22.2, 23.3, 24.4, 26.1, 27.2, 28.3, 30.4,
  ];

  const part2 = [
    1.2, 2.3, 3.4, 5.1, 6.2, 7.3, 8.4, 10.1, 11.2, 12.3, 13.4, 15.1, 16.2, 17.3,
    18.4, 20.1, 21.2, 22.3, 23.4, 25.1, 26.2, 27.3, 28.4, 30.1,
  ];

  const part3 = [
    1.3, 2.4, 3.3, 4.4, 6.1, 7.2, 8.3, 9.4, 11.1, 12.2, 13.3, 14.4, 16.1, 17.2,
    18.3, 19.4, 21.1, 22.2, 23.3, 24.4, 26.1, 27.2, 28.3, 30.4,
  ];

  const part4 = [
    1.4, 3.1, 4.2, 5.3, 6.4, 8.1, 9.2, 10.3, 11.3, 12.4, 14.1, 15.2, 16.3, 17.4,
    19.1, 20.2, 21.3, 22.4, 24.1, 25.2, 26.3, 27.4, 28.1, 29.2, 30.3,
  ];

  const part5 = [
    2.1, 3.2, 4.3, 5.4, 7.1, 8.2, 9.3, 10.4, 12.1, 13.2, 14.3, 15.4, 17.1, 18.2,
    19.3, 20.4, 22.1, 23.2, 24.3, 25.4, 27.1, 28.2, 29.3, 30.4,
  ];

  const names = ["Hamzah/Yusuf", "Aasim", "Wasim", "Yoosuf", "Shameer"];

  const parts = [part1, part2, part3, part4, part5];

  let days = [];
  let date = new Date("2025-02-28");

  for (let i = 1; i <= 30; i++) {
    days.push([i, date.toDateString()]);
    date.setDate(date.getDate() + 1);
  }

  return (
    <div>
      <div className="parent-container">
        <div className="child-block">
          {names.map((name, i) => (
            <div className="block-list-container" key={i}>
              <div className="title-container">
                <label className="title">{name}</label>
              </div>
              <ul className="block-list">
                {parts[i].map((part, j) => {
                  const isToday = days[j][1] === new Date().toDateString();
                  return (
                    <li key={part} className="block-list-child">
                      <label
                        style={{
                          color: isToday ? "green" : "rgb(22, 60, 94)",
                          marginRight: "20px",
                        }}
                      >
                        <span
                          className="list-element"
                          style={{
                            color: isToday ? "green" : "rgb(22, 60, 94)",
                            fontWeight: "600",
                          }}
                        >
                          Day:
                        </span>{" "}
                        {days[j][0]}
                      </label>{" "}
                      <label
                        style={{ color: isToday ? "green" : "rgb(22, 60, 94)" }}
                      >
                        <span
                          className="list-element"
                          style={{
                            color: isToday ? "green" : "rgb(22, 60, 94)",
                            fontWeight: "600",
                          }}
                        >
                          Part:{" "}
                        </span>
                        {part}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
