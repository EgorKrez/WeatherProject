import React from "react";

const ModalWindow = ({
  active,
  setActive,
  firstForecast,
  forecast,
  curForecast,
  showForecast,
  modalClass,
}) => {
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
