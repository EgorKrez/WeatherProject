import React from "react";
import "../styles/componentsStyles.css"
import '../styles/item.css'

const Modal = ({ active, setActive, item }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="item" onClick={() => setActive(true)}>
                <div className="item-time">NOW</div>
                {/*<div className="item-time">{item}</div>
                <div className="item-city">{item.cityName}</div>
                <div className="item-temp">{item.cityMain.temp}</div>
                <div className="item-feel-like">Feels like: {item.cityMain.feels_like}</div>
                <div className="item-wind">Speed: {item.cityWind.speed}; Deg: {item.cityWind.deg};</div>*/}
            </div>
        </div>
    );
}

export default Modal