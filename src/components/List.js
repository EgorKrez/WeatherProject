import React from "react";
import isEmpty from "lodash/isEmpty";
import EmptyList from "./EmptyLIst";
import FiveDaysForecast from "./FiveDaysForecast";
import CurrentWeather from "./CurrentWeather";
import ModalContainer from "../containers/ModalContainer";

const List = ({
  active,
  setActive,
  weather,
  getWeather,
  modalData,
  changeModalData,
}) => {
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
          startForecast: changeModalData(modalData?.startForecast),
          forecast: changeModalData(modalData?.forecast),
        }}
      />
    </div>
  );
};

export default List;
