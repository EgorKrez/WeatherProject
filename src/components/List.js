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
    setActive(true);
    setModalData({ startForecast: item, forecast: forecast });
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
        startForecast={modalData?.startForecast}
        forecast={modalData?.forecast}
      />
    </div>
  );
};

export default List;
