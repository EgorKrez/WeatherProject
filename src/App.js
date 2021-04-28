import React from "react";
import List from "./components/List";
import Title from "./components/Title";
import "./styles/components.css";
import "./styles/components.css";
import TopPanelContainer from "./containers/TopPanelContainer";
import Loader from "./components/Loader";

function App() {
  return (
    <div>
      <Title />
      <div className="content">
        <TopPanelContainer />
        <Loader />
        <List />
      </div>
    </div>
  );
}

export default App;
