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

  const getClass = (weather, itemClass) => {
    return weather === "Clear"
      ? `${itemClass} sunny`
      : weather === "Clouds"
      ? `${itemClass} cloud`
      : weather === "Rain"
      ? `${itemClass} rain`
      : `${itemClass}`;
  };

  return (
    <div
      className={active ? "modal-window active" : "modal-window"}
      onClick={() => setActive(false)}
    >
      <div
        className={getClass(weather, "modal-item")}
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
            {forecast.map((item) => (
              <div
                key={item.time}
                className={getClass(item.weather, "modal-menu-item")}
                onClick={() => showForecast(item)}
              >
                {item.time}
              </div>
            ))}
            <div
              className={getClass(currentItem.weather, "modal-menu-item")}
              onClick={() => showForecast(currentItem)}
            >
              {currentItem.time}
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
