import React from "react";
import Item from "./Item";

const ThreeDaysForecast = ({ items, getItem }) => {
  let forecast = [];

  return (
    <div className="list">
      {items[0].map((item, i) => {
        if (i % 8 !== 7) {
          forecast.push(item);
        }
        if (i % 8 === 7) {
          const currentForecast = forecast;
          forecast = [];
          return (
            <Item
              item={item}
              forecast={currentForecast}
              key={item.time}
              getItem={getItem}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ThreeDaysForecast;
