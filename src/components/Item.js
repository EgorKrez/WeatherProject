import React from "react";
import "../styles/item.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { unitSelector } from "../redux/selectors";

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

  const translateNumbers = (temp) => {
    if (unit === "C") return Math.floor(temp - 273) + " °С";
    if (unit === "F") return Math.floor((temp - 273) * 1.8 + 32) + " °F";
  };

  return (
    <div>
      <div className={itemClass} onClick={() => openWindow()}>
        <p className="item-time">{weather.activeForecast.time}</p>
        <p className="item-city">{weather.activeForecast.cityName}</p>
        <p className="item-temp">
          {translateNumbers(weather.activeForecast.cityMain.temp)}
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
