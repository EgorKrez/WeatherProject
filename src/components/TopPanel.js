import React from "react";
import { showFor5DaysAction, showForNowAction } from "../redux/actions";

const TopPanel = ({
  /*   fetchWeatherForNow,
  fetchWeatherFor5Days, */
  clearAllWeather,
  dispatch,
}) => {
  return (
    <div className="top-panel">
      <button
        className="btn btn-primary btn-lg"
        onClick={() => dispatch(showForNowAction())}
      >
        Now
      </button>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => dispatch(showFor5DaysAction())}
      >
        5 Days
      </button>
      <button className="btn btn-primary btn-lg" onClick={clearAllWeather}>
        Clear
      </button>
    </div>
  );
};

export default TopPanel;
