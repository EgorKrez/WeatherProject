import React from "react";
import List from "./components/List";
import TopPanel from "./components/TopPanel";
import Title from "./components/Title";
import "./styles/components.css";
import "./styles/components.css";

function App() {
  return (
    <div>
      <Title />
      <div className="content">
        <TopPanel />
        <List />
      </div>
    </div>
  );
}

export default App;
