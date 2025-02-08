import "./Body.css";
import { Link } from "react-router-dom";

const Body = () => {
  const names = [
    { name: "Hamzah/Yusuf", path: "/hb-yp" },
    { name: "Aasim", path: "/aasim" },
    { name: "Wasim", path: "/wasim" },
    { name: "Yoosuf", path: "/yoosuf" },
    { name: "Shameer", path: "/shameer" },
  ];

  return (
    <div className="parent-container">
      {names.map((person, i) => (
        <Link key={i} to={person.path} className="child-link">
          {person.name}
        </Link>
      ))}
    </div>
  );
};

export default Body;
