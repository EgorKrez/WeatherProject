import React from "react";
import Item from "./Item";

const ThreeDaysForecast = ({ weather, getWeather }) => {
  let forecast = [];

  return (
    <div className="list">
      {weather[0].map((item, i) => {
        //We are pushing items to forecast array where store forecast for 5 days. if (i % 8) === 7 then this element is current forecast and we push it like activeForecast
        if (i % 8 !== 7) {
          forecast.push(item);
        } else {
          const currentForecast = forecast;
          forecast = [];
          return (
            <Item
              weather={{ activeForecast: item, forecast: currentForecast }}
              key={item.time}
              getWeather={getWeather}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ThreeDaysForecast;
