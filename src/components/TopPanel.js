import React from "react";
import { showWeatherRequestAction } from "../redux/actions";

const TopPanel = ({ dispatch, city, time }) => {
  return (
    <div className="top-panel">
      <button
        className="btn btn-primary btn-lg"
        onClick={() => dispatch(showWeatherRequestAction([city, time]))}
      >
        Show Weather
      </button>
    </div>
  );
};

export default TopPanel;
