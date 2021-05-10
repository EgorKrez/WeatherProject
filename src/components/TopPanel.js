import React from "react";

const TopPanel = ({ chooseAction }) => {
  return (
    <div className="top-panel">
      <button
        className="btn btn-primary btn-lg"
        onClick={() => {chooseAction()}}
      >
        Show Weather
      </button>
    </div>
  );
};

export default TopPanel;
