import React from "react";
import Item from "./Item";

const CurrentWeather = ({ items, getItem }) => {
  return (
    <div className="list">
      {items.map((item) => (
        <Item item={item} forecast={null} getItem={getItem} key={item.time} />
      ))}
    </div>
  );
};

export default CurrentWeather;
