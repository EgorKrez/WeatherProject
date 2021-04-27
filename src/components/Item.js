import React from "react";
import "../styles/item.css";
import classNames from "classnames";

const Item = ({ item, forecast, getItem }) => {
  const itemClass = classNames("item", {
    sunny: item.weather === "Clear",
    cloud: item.weather === "Clouds",
    rain: item.weather === "Rain",
  });

  const openWindow = () => {
    getItem(item, forecast);
  };

  return (
    <div>
      <div className={itemClass} onClick={() => openWindow()}>
        <div className="item-time">{item.time}</div>
        <div className="item-city">{item.cityName}</div>
        <div className="item-temp">{item.cityMain.temp}</div>
        <div className="item-temp">{item.weather}</div>
        <div className="item-feel-like">
          Feels like: {item.cityMain.feels_like}
        </div>
        <div className="item-wind">
          Speed: {item.cityWind.speed}; Deg: {item.cityWind.deg};
        </div>
      </div>
    </div>
  );
};

export default Item;
