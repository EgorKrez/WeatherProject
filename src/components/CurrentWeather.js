import React from "react";
import Item from "./Item";

const CurrentWeather = ({ weather, getWeather }) => {
  return (
    <div className="list">
      {weather.map((item) => (
        <Item
          weather={{ activeForecast: item, forecast: null }}
          getWeather={getWeather}
          key={item.time}
        />
      ))}
    </div>
  );
};

export default CurrentWeather;
