import React from "react";
import { useSelector } from "react-redux";
import { forecastSelector } from "../redux/selectors";
import "../styles/components.css";
import _ from "lodash";
import EmptyList from "./EmptyLIst";
import ThreeDaysForecast from "./ThreeDaysForecast";
import CurrentWeather from "./CurrentWeather";

const List = () => {
  let items = useSelector(forecastSelector);

  return (
    <div>
      {_.isEmpty(items) ? (
        <EmptyList />
      ) : items[0].length ? (
        <ThreeDaysForecast items={items} />
      ) : (
        <CurrentWeather items={items} />
      )}
    </div>
  );
};

export default List;
