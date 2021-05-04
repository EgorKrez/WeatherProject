import React, { useState } from "react";
import { useSelector } from "react-redux";
import List from "../components/List";
import { forecastSelector } from "../redux/selectors";

const ListContainer = () => {
  const [active, setActive] = useState(false);
  const [modalData, setModalData] = useState(null);

  const getWeather = (startForecast, forecast) => {
    setActive(true);
    setModalData({ startForecast: startForecast, forecast: forecast });
  };

  let weather = useSelector(forecastSelector);

  const changeModalData = (data) => {
    if (data) {
      let resultArray = [];
      if (data?.length) {
        data.map((item) => {
          item.isActive = false;
          resultArray.push(item);
          return item;
        });
        return resultArray;
      } else {
        data.isActive = true;
        return data;
      }
    }
  };

  return (
    <List
      active={active}
      setActive={setActive}
      weather={weather}
      getWeather={getWeather}
      modalData={modalData}
      changeModalData={changeModalData}
    />
  );
};

export default ListContainer;
