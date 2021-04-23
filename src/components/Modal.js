import React from "react";
import "../styles/componentsStyles.css"
import '../styles/item.css'

const Modal = ({active, setActive, time, cityName, temp, weather, feelsLike, speed, deg}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={(weather === "Clear") ? "item sunny" : (weather === "Clouds") ? "item cloud" : (weather === "Rain") ? "item rain" : "item"}  onClick={(e) => e.stopPropagation()}>
                <div className="item-time">{time}</div>
                <div className="item-time">{cityName}</div>
                <div className="item-city">{temp}</div>
                <div className="item-temp">{weather}</div>
                <div className="item-feel-like">Feels like: {feelsLike}</div>
                <div className="item-wind">Speed: {speed}; Deg: {deg};</div>
            </div>
        </div>
    );
}

export default Modal