import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/item.css";

const Item = ({ item, forecast }) => {
  const [active, setActive] = useState(false);

  const getClass = (weather) => {
    return weather === "Clear"
      ? "item sunny"
      : weather === "Clouds"
      ? "item cloud"
      : weather === "Rain"
      ? "item rain"
      : "item";
  };

  return (
    <div>
      <div className={getClass(item.weather)} onClick={() => setActive(true)}>
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

      <Modal
        active={active}
        setActive={setActive}
        time={item.time}
        cityName={item.cityName}
        temp={item.cityMain.temp}
        weather={item.weather}
        feelsLike={item.cityMain.feels_like}
        speed={item.cityWind.speed}
        deg={item.cityWind.deg}
        currentItem={item}
        forecast={forecast}
      />
    </div>
  );
};

export default Item;
