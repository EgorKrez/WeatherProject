import React from "react";
import "../styles/components.css";
import "../styles/item.css";
import "../styles/modal.css";

const Modal = ({
  active,
  setActive,
  time,
  cityName,
  temp,
  weather,
  feelsLike,
  speed,
  deg,
  currentItem,
  forecast,
}) => {
  const showForecast = (forecast) => {
    time = forecast.time;
    cityName = forecast.cityName;
    temp = forecast.cityMain.temp;
    weather = forecast.weather;
    feelsLike = forecast.cityMain.feels_like;
    speed = forecast.cityWind.speed;
    deg = forecast.cityWind.deg;
  };

  const getItemClass = (forecast) => {
    return forecast.weather === "Clear"
      ? "modal-menu-item sunny"
      : forecast.weather === "Clouds"
      ? "modal-menu-item cloud"
      : forecast.weather === "Rain"
      ? "modal-menu-item rain"
      : "modal-menu-item";
  };

  const getModalClass = (forecast) => {
    return forecast === "Clear"
      ? "modal-item sunny"
      : forecast === "Clouds"
      ? "modal-item cloud"
      : forecast === "Rain"
      ? "modal-item rain"
      : "modal-item";
  };

  return (
    <div
      className={active ? "modal-window active" : "modal-window"}
      onClick={() => setActive(false)}
    >
      <div
        className={getModalClass(weather)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="item-time">{time}</div>
        <div className="item-time">{cityName}</div>
        <div className="item-city">{temp}</div>
        <div className="item-temp">{weather}</div>
        <div className="item-feel-like">Feels like: {feelsLike}</div>
        <div className="item-wind">
          Speed: {speed}; Deg: {deg};
        </div>
        {forecast ? (
          <div className="modal-menu">
            <div
              className={getItemClass(forecast[0])}
              onClick={() => showForecast(forecast[0])}
            >
              {JSON.stringify(forecast[0].time)}
            </div>
            <div
              className={getItemClass(forecast[1])}
              onClick={() => showForecast(forecast[1])}
            >
              {JSON.stringify(forecast[1].time)}
            </div>
            <div
              className={getItemClass(forecast[2])}
              onClick={() => showForecast(forecast[2])}
            >
              {JSON.stringify(forecast[2].time)}
            </div>
            <div
              className={getItemClass(forecast[3])}
              onClick={() => showForecast(forecast[3])}
            >
              {JSON.stringify(forecast[3].time)}
            </div>
            <div
              className={getItemClass(forecast[4])}
              onClick={() => showForecast(forecast[4])}
            >
              {JSON.stringify(forecast[4].time)}
            </div>
            <div
              className={getItemClass(forecast[5])}
              onClick={() => showForecast(forecast[5])}
            >
              {JSON.stringify(forecast[5].time)}
            </div>
            <div
              className={getItemClass(forecast[6])}
              onClick={() => showForecast(forecast[6])}
            >
              {JSON.stringify(forecast[6].time)}
            </div>
            <div
              className={getItemClass(currentItem)}
              onClick={() => showForecast(currentItem)}
            >
              "{currentItem.time}"
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Modal;
