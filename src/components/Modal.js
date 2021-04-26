import React, { useEffect } from "react";
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

  if (!forecast) {
    return (
      <div
        className={active ? "modal-window active" : "modal-window"}
        onClick={() => setActive(false)}
      >
        <div
          className={
            weather === "Clear"
              ? "modal-item sunny"
              : weather === "Clouds"
              ? "modal-item cloud"
              : weather === "Rain"
              ? "modal-item rain"
              : "modal-item"
          }
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
        </div>
        {!forecast ? <h1>Egor</h1> : <h1>say</h1>}
      </div>
    );
  }

  return (
    <div
      className={active ? "modal-window active" : "modal-window"}
      onClick={() => setActive(false)}
    >
      <div
        className={
          weather === "Clear"
            ? "modal-item sunny"
            : weather === "Clouds"
            ? "modal-item cloud"
            : weather === "Rain"
            ? "modal-item rain"
            : "modal-item"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="item-time">{time}</div>
        <div className="item-city">{cityName}</div>
        <div className="item-temp">{temp}</div>
        <div className="item-temp">{weather}</div>
        <div className="item-feel-like">Feels like: {feelsLike}</div>
        <div className="item-wind">
          Speed: {speed}; Deg: {deg};
        </div>

        <div className="modal-menu">
          <div
            className={
              forecast[0].weather === "Clear"
                ? "modal-menu-item sunny"
                : forecast[0].weather === "Clouds"
                ? "modal-menu-item cloud"
                : forecast[0].weather === "Rain"
                ? "modal-menu-item rain"
                : "modal-menu-item"
            }
            onClick={() => showForecast(forecast[0])}
          >
            {JSON.stringify(forecast[0].time)}
          </div>
          <div
            className={
              forecast[1].weather === "Clear"
                ? "modal-menu-item sunny"
                : forecast[1].weather === "Clouds"
                ? "modal-menu-item cloud"
                : forecast[1].weather === "Rain"
                ? "modal-menu-item rain"
                : "modal-menu-item"
            }
            onClick={() => showForecast(forecast[1])}
          >
            {JSON.stringify(forecast[1].time)}
          </div>
          <div
            className={
              forecast[2].weather === "Clear"
                ? "modal-menu-item sunny"
                : forecast[2].weather === "Clouds"
                ? "modal-menu-item cloud"
                : forecast[2].weather === "Rain"
                ? "modal-menu-item rain"
                : "modal-menu-item"
            }
            onClick={() => showForecast(forecast[2])}
          >
            {JSON.stringify(forecast[2].time)}
          </div>
          <div
            className={
              forecast[3].weather === "Clear"
                ? "modal-menu-item sunny"
                : forecast[3].weather === "Clouds"
                ? "modal-menu-item cloud"
                : forecast[3].weather === "Rain"
                ? "modal-menu-item rain"
                : "modal-menu-item"
            }
            onClick={() => showForecast(forecast[3])}
          >
            {JSON.stringify(forecast[3].time)}
          </div>
          <div
            className={
              forecast[4].weather === "Clear"
                ? "modal-menu-item sunny"
                : forecast[4].weather === "Clouds"
                ? "modal-menu-item cloud"
                : forecast[4].weather === "Rain"
                ? "modal-menu-item rain"
                : "modal-menu-item"
            }
            onClick={() => showForecast(forecast[4])}
          >
            {JSON.stringify(forecast[4].time)}
          </div>
          <div
            className={
              forecast[5].weather === "Clear"
                ? "modal-menu-item sunny"
                : forecast[5].weather === "Clouds"
                ? "modal-menu-item cloud"
                : forecast[5].weather === "Rain"
                ? "modal-menu-item rain"
                : "modal-menu-item"
            }
            onClick={() => showForecast(forecast[5])}
          >
            {JSON.stringify(forecast[5].time)}
          </div>
          <div
            className={
              forecast[6].weather === "Clear"
                ? "modal-menu-item sunny"
                : forecast[6].weather === "Clouds"
                ? "modal-menu-item cloud"
                : forecast[6].weather === "Rain"
                ? "modal-menu-item rain"
                : "modal-menu-item"
            }
            onClick={() => showForecast(forecast[6])}
          >
            {JSON.stringify(forecast[6].time)}
          </div>
          <div
            className={
              weather === "Clear"
                ? "modal-menu-item sunny"
                : weather === "Clouds"
                ? "modal-menu-item cloud"
                : weather === "Rain"
                ? "modal-menu-item rain"
                : "modal-menu-item"
            }
            onClick={() => showForecast(currentItem)}
          >
            "{currentItem.time}"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
