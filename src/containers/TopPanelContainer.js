import React, { useCallback } from "react";
import { clearAllForecastAction } from "../redux/actions";
import { useDispatch } from "react-redux";
import TopPanel from "../components/TopPanel";
import "bootstrap/dist/css/bootstrap.min.css";

const TopPanelContainer = () => {
  const dispatch = useDispatch();

  const clearAllWeather = useCallback(() => {
    dispatch(clearAllForecastAction());
  }, [dispatch]);

  return <TopPanel clearAllWeather={clearAllWeather} dispatch={dispatch} />;
};

export default TopPanelContainer;
