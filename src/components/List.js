import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { postsSelector } from "../redux/selectors";
import "../styles/components.css";

const List = () => {
  const items = useSelector(postsSelector);

  const emptyItems = () => {
    return <div className="no-forecast">PLEASE CHOOSE FORECAST</div>;
  };

  const treeDaysForecast = () => {
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
              <Item item={item} forecast={currentForecast} key={item.time} />
            );
          }
          return null;
        })}
      </div>
    );
  };

  const currentWeather = () => {
    return (
      <div className="list">
        {items.map((item) => (
          <Item item={item} forecast={null} key={item.time} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {JSON.stringify(items[0]) === "{}"
        ? emptyItems()
        : items[0].length
        ? treeDaysForecast()
        : currentWeather()}
    </div>
  );
};

export default List;
