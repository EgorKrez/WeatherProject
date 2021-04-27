import React, { useState } from "react";
import { useSelector } from "react-redux";
import { forecastSelector } from "../redux/selectors";
import isEmpty from "lodash/isEmpty";
import EmptyList from "./EmptyLIst";
import ThreeDaysForecast from "./ThreeDaysForecast";
import CurrentWeather from "./CurrentWeather";
import ModalContainer from "../containers/ModalContainer";

const List = () => {
  const [active, setActive] = useState(false);
  const [modalData, setModalData] = useState(null);

  const getItem = (item, forecast) => {
    console.log(item);
    console.log(forecast);
    setActive(true);
    setModalData({ firstForecast: item, forecast: forecast });
  };

  let items = useSelector(forecastSelector);

  return (
    <div>
      {isEmpty(items) ? (
        <EmptyList />
      ) : items[0].length ? (
        <ThreeDaysForecast items={items} getItem={getItem} />
      ) : (
        <CurrentWeather items={items} getItem={getItem} />
      )}
      <ModalContainer
        active={active}
        setActive={setActive}
        firstForecast={modalData?.firstForecast}
        forecast={modalData?.forecast}
      />
    </div>
  );
};

export default List;
