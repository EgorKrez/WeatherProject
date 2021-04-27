import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/item.css";
import classNames from "classnames";
import ModalContainer from "../containers/ModalContainer";

const Item = ({ item, forecast }) => {
  const [active, setActive] = useState(false);

  const itemClass = classNames("item", {
    sunny: item.weather === "Clear",
    cloud: item.weather === "Clouds",
    rain: item.weather === "Rain",
  });

  return (
    <div>
      <div className={itemClass} onClick={() => setActive(true)}>
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

      {/* <Modal
        active={active}
        setActive={setActive}
        firstForecast={item}
        forecast={forecast}
      /> */}
      <ModalContainer
        active={active}
        setActive={setActive}
        firstForecast={item}
        forecast={forecast}
      />
    </div>
  );
};

export default Item;
