import React, { useCallback } from "react";
import axios from "axios";
import {
  showFor3DaysAction,
  showForNowAction,
  clearAllForecastAction,
} from "../redux/actions";
import { useDispatch } from "react-redux";
import TopPanel from "../components/TopPanel";
import "bootstrap/dist/css/bootstrap.min.css";

const TopPanelContainer = () => {
  const dispatch = useDispatch(null);

  const getWeatherForNowObject = (data) => {
    return {
      cityName: data.name,
      citySys: data.sys,
      cityMain: data.main,
      cityWind: data.wind,
      time: new Date().toISOString().slice(0, 20),
      weather: data.weather[0].main,
    };
  };

  const getWeatherFor3DaysObject = (result) => {
    return result.list.map((data) => ({
      cityName: result.city.name,
      citySys: data.sys,
      cityMain: data.main,
      cityWind: data.wind,
      time: data.dt_txt,
      weather: data.weather[0].main,
    }));
  };

  const fetchWeatherForNow = useCallback(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk,DE&appid=6546d6953b78180b0268e32337fadb90`
      )
      .then((result) => {
        getWeatherForNowObject(result.data);
        dispatch(showForNowAction(getWeatherForNowObject(result.data)));
      });
  }, [dispatch]);

  const fetchWeatherFor3Days = useCallback(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=6546d6953b78180b0268e32337fadb90`
      )
      .then((result) => {
        dispatch(showFor3DaysAction(getWeatherFor3DaysObject(result.data)));
      });
  }, [dispatch]);

  const clearAllWeather = useCallback(() => {
    dispatch(clearAllForecastAction());
  }, [dispatch]);

  return (
    <TopPanel
      fetchWeatherForNow={fetchWeatherForNow}
      fetchWeatherFor3Days={fetchWeatherFor3Days}
      clearAllWeather={clearAllWeather}
    />
  );
};

export default TopPanelContainer;
