import React, { useCallback } from "react";
import { clearAllForecastAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TopPanel from "../components/TopPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import { citySelector, timeSelector } from "../redux/selectors";
const TopPanelContainer = () => {
  const dispatch = useDispatch();
  const city = useSelector(citySelector);
  const time = useSelector(timeSelector);

  const clearAllWeather = useCallback(() => {
    dispatch(clearAllForecastAction());
  }, [dispatch]);

  return (
    <TopPanel
      clearAllWeather={clearAllWeather}
      dispatch={dispatch}
      city={city}
      time={time}
    />
  );
};

export default TopPanelContainer;
