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
    1.1, 2.2, 3.3, 4.4, 6.1, 7.2, 8.3, 9.4, 11.1, 12.2, 13.3, 14.4, 16.1, 17.2,
    18.3, 19.4, 21.1, 22.2, 23.3, 24.4, 26.1, 27.2, 28.3, 30.4,
  ];

  const part5 = [
    1.1, 2.2, 3.3, 4.4, 6.1, 7.2, 8.3, 9.4, 11.1, 12.2, 13.3, 14.4, 16.1, 17.2,
    18.3, 19.4, 21.1, 22.2, 23.3, 24.4, 26.1, 27.2, 28.3, 30.4,
  ];

  const part6 = [
    1.1, 2.2, 3.3, 4.4, 6.1, 7.2, 8.3, 9.4, 11.1, 12.2, 13.3, 14.4, 16.1, 17.2,
    18.3, 19.4, 21.1, 22.2, 23.3, 24.4, 26.1, 27.2, 28.3, 30.4,
  ];

  const names = ["Yusuf/Hamzah", "Aasim", "Wasim", "Yoosuf", "Shameer"];

  const parts = [part1, part2, part3, part4, part5, part6];

  let days = [];

  for (let i = 1; i < 30; i++) {
    days.push(i);
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
                {parts[i].map((part, j) => (
                  <li key={part} className="block-list-child">
                    Day: {days[j]} Part: {part}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
