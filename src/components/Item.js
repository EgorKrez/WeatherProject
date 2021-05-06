import React from "react";
import "../styles/item.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { unitSelector } from "../redux/selectors";
import { translateNumbers } from "../util/formatters/unitFormatter";

const Item = ({ weather, getWeather }) => {
  const unit = useSelector(unitSelector);

  const itemClass = classNames("item", {
    sunny: weather.activeForecast.weather === "Clear",
    cloud: weather.activeForecast.weather === "Clouds",
    rain: weather.activeForecast.weather === "Rain",
    mist: weather.activeForecast.weather === "Mist",
    snow: weather.activeForecast.weather === "Snow",
  });

  const openWindow = () => {
    getWeather(weather.activeForecast, weather.forecast);
  };

  return (
    <div>
      <div className={itemClass} onClick={() => openWindow()}>
        <p className="item-time">{weather.activeForecast.time}</p>
        <p className="item-city">{weather.activeForecast.cityName}</p>
        <p className="item-temp">
          {translateNumbers(weather.activeForecast.cityMain.temp, unit)}
        </p>
        <p className="item-temp">{weather.activeForecast.weather}</p>
        <p className="item-feel-like">
          Feels like: {weather.activeForecast.cityMain.feels_like}
        </p>
        <p className="item-wind">
          Speed: {weather.activeForecast.cityWind.speed}; Deg:{" "}
          {weather.activeForecast.cityWind.deg};
        </p>
      </div>
    </div>
  );
};

export default Item;
