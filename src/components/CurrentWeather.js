import React from "react";
import Item from "./Item";

const CurrentWeather = ({ items }) => {
  return (
    <div className="list">
      {items.map((item) => (
        <Item item={item} forecast={null} key={item.time} />
      ))}
    </div>
  );
};

export default CurrentWeather;
