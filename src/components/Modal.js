import React, { useState } from "react";
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
  const [curTime, setCurTime] = useState(time);
  const [curCityName, setCurCityName] = useState(cityName);
  const [curTemp, setCurTemp] = useState(temp);
  const [curWeather, setCurWeather] = useState(weather);
  const [curFeelsLike, setCurFeelsLike] = useState(feelsLike);
  const [curSpeed, setCurSpeed] = useState(speed);
  const [curDeg, setCurDeg] = useState(deg);

  const showForecast = (forecast) => {
    setCurTime(forecast.time);
    setCurCityName(forecast.cityName);
    setCurTemp(forecast.cityMain.temp);
    setCurWeather(forecast.weather);
    setCurFeelsLike(forecast.cityMain.feels_like);
    setCurSpeed(forecast.cityWind.speed);
    setCurDeg(forecast.cityWind.deg);
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
        className={getClass(curWeather, "modal-item")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="item-time">{curTime}</div>
        <div className="item-city">{curCityName}</div>
        <div className="item-temp">{curTemp}</div>
        <div className="item-temp">{curWeather}</div>
        <div className="item-feel-like">Feels like: {curFeelsLike}</div>
        <div className="item-wind">
          Speed: {curSpeed}; Deg: {curDeg};
        </div>
        {forecast && (
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
        )}
      </div>
    </div>
  );
};

export default Modal;
