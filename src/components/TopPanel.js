import React from "react";
import {
  showFor5DaysRequestAction,
  showForNowRequestAction,
} from "../redux/actions";

const TopPanel = ({ clearAllWeather, dispatch }) => {
  return (
    <div className="top-panel">
      <button
        className="btn btn-primary btn-lg"
        onClick={() => dispatch(showForNowRequestAction())}
      >
        Now
      </button>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => dispatch(showFor5DaysRequestAction())}
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
