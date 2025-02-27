import Header from "./components/Header";
import Body from "./components/Body";
import useGoogleAnalytics from "./components/GoogleAnalytics";
import "./App.css";

const App = () => {
  useGoogleAnalytics("G-3QJJ2L7MVD");

  return (
    <div>
      <Header className="daysHeader" />
      <Body className="main-body" />
    </div>
  );
};

export default App;
