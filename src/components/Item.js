import React from "react";
import "../styles/item.css";
import classNames from "classnames";

const Item = ({ weather, getWeather }) => {
  const itemClass = classNames("item", {
    sunny: weather.activeForecast.weather === "Clear",
    cloud: weather.activeForecast.weather === "Clouds",
    rain: weather.activeForecast.weather === "Rain",
  });

  const openWindow = () => {
    getWeather(weather.activeForecast, weather.forecast);
  };

  return (
    <div>
      <div className={itemClass} onClick={() => openWindow()}>
        <div className="item-time">{weather.activeForecast.time}</div>
        <div className="item-city">{weather.activeForecast.cityName}</div>
        <div className="item-temp">{weather.activeForecast.cityMain.temp}</div>
        <div className="item-temp">{weather.activeForecast.weather}</div>
        <div className="item-feel-like">
          Feels like: {weather.activeForecast.cityMain.feels_like}
        </div>
        <div className="item-wind">
          Speed: {weather.activeForecast.cityWind.speed}; Deg:{" "}
          {weather.activeForecast.cityWind.deg};
        </div>
      </div>
    </div>
  );
};

export default Item;
