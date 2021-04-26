import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { postsSelector } from "../redux/selectors";

const List = () => {
  const items = useSelector(postsSelector);

  /* let render = null;

  if (JSON.stringify(items[0] == "{}")) {
    console.log("no");
    console.log(items);
    return <div className="no-forecast">PLEASE CHOOSE FORECAST</div>;
  }

  if (items[0].length) {
    render = items[0].map((item) => <Item item={item} key={item.time} />);
    console.log(render);
  } else {
    render = items.map((item) => <Item item={item} key={item.time} />);
    console.log(render);
  }

  return render; */
  let forecast = [];

  if (JSON.stringify(items[0]) === "{}") {
    return <div className="no-forecast">PLEASE CHOOSE FORECAST</div>;
  }
  if (items[0].length) {
    return (
      <div>
        {items[0].map((item, i) => {
          if (i % 8 !== 7) {
            forecast.push(item);
          }
          if (i % 8 === 7) {
            const currentForecast = forecast;
            forecast = [];
            return (
              <Item item={item} key={item.time} forecast={currentForecast} />
            );
          }
        })}
      </div>
    );
  }
  return (
    <div>
      {items.map((item) => (
        <Item item={item} forecast={null} key={item.time} />
      ))}
    </div>
  );
};

export default List;
