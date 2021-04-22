import React from "react";
import List from "./components/List";
import Modal from "./components/Modal";
import Item from "./components/Item";
import TopPanel from  "./components/TopPanel"
import Title from "./components/Title";
import "./styles/componentsStyles.css"
import "./styles/componentsStyles.css"

function App() {
  return (
    <div>
        <Title />
        <div className="content">
        <TopPanel />
      <List />
        </div>
      <Modal />
    </div>
  );
}

export default App;
