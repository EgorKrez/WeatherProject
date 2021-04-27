import React from "react";

const ModalWindow = ({
  active,
  startForecast,
  forecast,
  activeForecast,
  showForecast,
  closeModal,
  modalClass,
}) => {
  return startForecast ? (
    <div
      className={active ? "modal-window active" : "modal-window"}
      onClick={() => closeModal()}
    >
      <div
        className={modalClass(activeForecast?.weather, "modal-item")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="item-time">{activeForecast?.time}</div>
        <div className="item-city">{activeForecast?.cityName}</div>
        <div className="item-temp">{activeForecast?.cityMain.temp}</div>
        <div className="item-temp">{activeForecast?.weather}</div>
        <div className="item-feel-like">
          Feels like: {activeForecast?.cityMain?.feels_like}
        </div>
        <div className="item-wind">
          Speed: {activeForecast?.cityWind?.speed}; Deg:{" "}
          {activeForecast?.cityWind?.deg};
        </div>
        {forecast && (
          <div className="modal-menu">
            {forecast.map((item) => (
              <div
                key={item?.time}
                className={modalClass(item?.weather, "modal-menu-item")}
                onClick={() => showForecast(item)}
              >
                {item.time}
              </div>
            ))}
            <div
              className={modalClass(startForecast.weather, "modal-menu-item")}
              onClick={() => showForecast(startForecast)}
            >
              {startForecast.time}
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
