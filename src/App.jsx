import Body from "./components/Body";
import useGoogleAnalytics from "./components/GoogleAnalytics";
import "./App.css";

const App = () => {
  useGoogleAnalytics("G-3QJJ2L7MVD");

  return (
    <>
      <Body className="bg-(--bg-color)" name="Home"/>
    </>
  );
};

export default App;
