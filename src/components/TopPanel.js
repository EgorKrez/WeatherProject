import React from "react";
import {
  requestShowFor5DaysAction,
  requestShowForNowAction,
} from "../redux/actions";

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
        onClick={() => dispatch(requestShowForNowAction())}
      >
        Now
      </button>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => dispatch(requestShowFor5DaysAction())}
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
