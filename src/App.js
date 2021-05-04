import React from "react";
import Title from "./components/Title";
import "./styles/components.css";
import "./styles/components.css";
import TopPanelContainer from "./containers/TopPanelContainer";
import Loader from "./components/Loader";
import Alert from "./components/Alert";
import ListContainer from "./containers/ListContainer";

function App() {
  return (
    <div>
      <Alert />
      <Title />
      <div className="content">
        <TopPanelContainer />
        <Loader />
        <ListContainer />
      </div>
    </div>
  );
}

export default App;
