import React from "react";
import { showWeatherRequestAction } from "../redux/actions";

const TopPanel = ({ dispatch, city, time, chooseAction }) => {
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
