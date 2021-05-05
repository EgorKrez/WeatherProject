import React from "react";
import Title from "./components/Title";
import "./styles/components.css";
import "./styles/components.css";
import TopPanelContainer from "./containers/TopPanelContainer";
import Loader from "./shared/Loader";
import Alert from "./shared/Alert";
import ListContainer from "./containers/ListContainer";
import WeatherDropDownContainer from "./containers/WeatherDropDownContainer";

function App() {
  return (
    <div>
      <Alert />
      <Title />
      <div className="content">
        <WeatherDropDownContainer />
        <TopPanelContainer />
        <Loader />
        <ListContainer />
      </div>
    </div>
  );
}

export default App;
