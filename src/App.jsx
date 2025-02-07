import Header from "./components/Header";
import "./App.css";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
      <Header className="daysHeader"/>
      <Body className="main-body"/>
    </div>
  );
};

export default App;
