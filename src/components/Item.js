import React, {useState} from "react";
import Modal from "./Modal";
import '../styles/item.css'

const Item = ({ item }) => {
    const [active, setActive] = useState(false)

    return (
        <div>
        <div className="item" onClick={() => setActive(true)}>
           <div className="item-time">{item.time}</div>
            <div className="item-city">{item.cityName}</div>
            <div className="item-temp">{item.cityMain.temp}</div>
            <div className="item-temp">{item.weather}</div>
            <div className="item-feel-like">Feels like: {item.cityMain.feels_like}</div>
            <div className="item-wind">Speed: {item.cityWind.speed}; Deg: {item.cityWind.deg};</div>

        </div>

        <Modal active={active} setActive={setActive} item={item}/>
        </div>
    );
}

export default Item