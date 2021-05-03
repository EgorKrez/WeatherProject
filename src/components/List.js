import React, { useState } from "react";
import { useSelector } from "react-redux";
import { forecastSelector } from "../redux/selectors";
import isEmpty from "lodash/isEmpty";
import EmptyList from "./EmptyLIst";
import FiveDaysForecast from "./FiveDaysForecast";
import CurrentWeather from "./CurrentWeather";
import ModalContainer from "../containers/ModalContainer";

const List = () => {
  const [active, setActive] = useState(false);
  const [modalData, setModalData] = useState(null);

  const getWeather = (startForecast, forecast) => {
    setActive(true);
    setModalData({ startForecast: startForecast, forecast: forecast });
  };

  let weather = useSelector(forecastSelector);

  return (
    <div>
      {isEmpty(weather) ? (
        <EmptyList />
      ) : weather[0].length ? (
        <FiveDaysForecast weather={weather} getWeather={getWeather} />
      ) : (
        <CurrentWeather weather={weather} getWeather={getWeather} />
      )}
      <ModalContainer
        active={active}
        setActive={setActive}
        weather={{
          startForecast: modalData?.startForecast,
          forecast: modalData?.forecast,
        }}
      />
    </div>
  );
};

export default List;
