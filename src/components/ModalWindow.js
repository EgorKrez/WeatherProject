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
        <p className="item-time">{weather.activeForecast?.time}</p>
        <p className="item-city">{weather.activeForecast?.cityName}</p>
        <p className="item-temp">{weather.activeForecast?.cityMain.temp}</p>
        <p className="item-temp">{weather.activeForecast?.weather}</p>
        <p className="item-feel-like">
          Feels like: {weather.activeForecast?.cityMain?.feels_like}
        </p>
        <p className="item-wind">
          Speed: {weather.activeForecast?.cityWind?.speed}; Deg:{" "}
          {weather.activeForecast?.cityWind?.deg};
        </p>
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
