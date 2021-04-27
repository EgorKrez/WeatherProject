import React from "react";

const TopPanel = ({
  fetchWeatherForNow,
  fetchWeatherFor3Days,
  clearAllWeather,
}) => {
  return (
    <div className="top-panel">
      <button className="btn btn-primary btn-lg" onClick={fetchWeatherForNow}>
        Now
      </button>
      <button className="btn btn-primary btn-lg" onClick={fetchWeatherFor3Days}>
        3 Days
      </button>
      <button className="btn btn-primary btn-lg" onClick={clearAllWeather}>
        Clear
      </button>
    </div>
  );
};

export default TopPanel;
