import classNames from "classnames";
import React, { useCallback, useState } from "react";

import "../styles/components.css";
import "../styles/item.css";
import "../styles/modal.css";

const ModalWindow = ({ active, setActive, firstForecast, forecast }) => {
  const [curForecast, setCurForecast] = useState(firstForecast);

  const showForecast = useCallback((forecast) => {
    setCurForecast(forecast);
  }, []);

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
        className={modalClass(curForecast.weather, "modal-item")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="item-time">{curForecast.time}</div>
        <div className="item-city">{curForecast.cityName}</div>
        <div className="item-temp">{curForecast.cityMain.temp}</div>
        <div className="item-temp">{curForecast.weather}</div>
        <div className="item-feel-like">
          Feels like: {curForecast.cityMain.feels_like}
        </div>
        <div className="item-wind">
          Speed: {curForecast.cityWind.speed}; Deg: {curForecast.cityWind.deg};
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
              className={modalClass(firstForecast.weather, "modal-menu-item")}
              onClick={() => showForecast(firstForecast)}
            >
              {firstForecast.time}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalWindow;
