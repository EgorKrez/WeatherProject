import classNames from "classnames";
import React, { useCallback, useState } from "react";
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
  const [curForecast, setCurForecast] = useState(currentItem);
  const [curTime, setCurTime] = useState(time);
  const [curCityName, setCurCityName] = useState(cityName);
  const [curTemp, setCurTemp] = useState(temp);
  const [curWeather, setCurWeather] = useState(weather);
  const [curFeelsLike, setCurFeelsLike] = useState(feelsLike);
  const [curSpeed, setCurSpeed] = useState(speed);
  const [curDeg, setCurDeg] = useState(deg);

  const showForecast = useCallback(
    (forecast) => {
      setCurForecast(forecast);
    },
    [forecast]
  );

  const modalClass = (weather, itemcClass) =>
    classNames(itemcClass, {
      sunny: weather === "Clear",
      cloud: weather === "Clouds",
      rain: weather === "Rain",
    });

  return (
    <div
      className={active ? "modal-window active" : "modal-window"}
      onClick={() => setActive(false)}
    >
      <div
        className={modalClass(curWeather, "modal-item")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="item-time">{JSON.stringify(curForecast)}</div>
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
                className={modalClass(item.weather, "modal-menu-item")}
                onClick={() => showForecast(item)}
              >
                {item.time}
              </div>
            ))}
            <div
              className={modalClass(currentItem.weather, "modal-menu-item")}
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
