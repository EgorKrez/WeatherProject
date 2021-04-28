import React from "react";

const ModalWindow = ({
  active,
  weather,
  showForecast,
  closeModal,
  modalClass,
}) => {
  return weather.startForecast ? (
    <div
      className={active ? "modal-window active" : "modal-window"}
      onClick={() => closeModal()}
    >
      <div
        className={modalClass(weather.activeForecast?.weather, "modal-item")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="item-time">{weather.activeForecast?.time}</div>
        <div className="item-city">{weather.activeForecast?.cityName}</div>
        <div className="item-temp">{weather.activeForecast?.cityMain.temp}</div>
        <div className="item-temp">{weather.activeForecast?.weather}</div>
        <div className="item-feel-like">
          Feels like: {weather.activeForecast?.cityMain?.feels_like}
        </div>
        <div className="item-wind">
          Speed: {weather.activeForecast?.cityWind?.speed}; Deg:{" "}
          {weather.activeForecast?.cityWind?.deg};
        </div>
        {weather.forecast && (
          <div className="modal-menu">
            {weather.forecast.map((item) => (
              <div
                key={item?.time}
                className={modalClass(item?.weather, "modal-menu-item")}
                onClick={() => showForecast(item)}
              >
                {item.time}
              </div>
            ))}
            <div
              className={modalClass(
                weather.startForecast.weather,
                "modal-menu-item"
              )}
              onClick={() => showForecast(weather.startForecast)}
            >
              {weather.startForecast.time}
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default ModalWindow;
