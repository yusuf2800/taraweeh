import "./Body.css";
import { Link } from "react-router-dom";

const Body = () => {
  const names = [
    { id: "hs", name: "hamzah/yusuf", path: "/hb-yp" },
    { id: "ap", name: "aasim", path: "/aasim" },
    { id: "wm", name: "wasim", path: "/wasim" },
    { id: "ys", name: "yoosuf", path: "/yoosuf" },
    { id: "sa", name: "shameer", path: "/shameer" },
  ];

  return (
    <div className="parent-container">
      {names.map((person, i) => (
        <Link key={i} to={"/taraweeh"+person.path} className={`child-link ${person.id}`}>
          {person.name}
        </Link>
      ))}
    </div>
  );
};

export default Body;
