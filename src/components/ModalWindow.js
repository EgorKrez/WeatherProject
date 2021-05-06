import React from "react";

const ModalWindow = ({
  active,
  weather,
  showForecast,
  closeModal,
  modalClass,
  getItemClass,
  translateNumbers,
  unit,
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
        <p className="item-temp">
          {translateNumbers(weather.activeForecast?.cityMain.temp, unit)}
        </p>
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
                className={getItemClass(item.isActive, item?.weather)}
                onClick={() => showForecast(item, weather.activeForecast)}
              >
                {item.time}
              </div>
            ))}
            <div
              className={getItemClass(
                weather.startForecast.isActive,
                weather.startForecast.weather
              )}
              onClick={() =>
                showForecast(weather.startForecast, weather.activeForecast)
              }
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
