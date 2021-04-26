import React from "react";
import axios from "axios";
import {
  showFor3DaysAction,
  showForNowAction,
  clearAllForecastAction,
} from "../redux/actions";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const TopPanel = () => {
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

  const fetchWeatherForNow = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk,DE&appid=6546d6953b78180b0268e32337fadb90`
      )
      .then((result) => {
        getWeatherForNowObject(result.data);
        dispatch(showForNowAction(getWeatherForNowObject(result.data)));
      });
  };

  const fetchWeatherFor3Days = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=6546d6953b78180b0268e32337fadb90`
      )
      .then((result) => {
        dispatch(showFor3DaysAction(getWeatherFor3DaysObject(result.data)));
      });
  };

  const clearAllWeather = () => {
    dispatch(clearAllForecastAction());
  };

  return (
    <div className="top-panel">
      <button className="btn btn-primary btn-lg" onClick={fetchWeatherForNow}>
        Now
      </button>
      <button className="btn btn-primary btn-lg" onClick={fetchWeatherFor3Days}>
        3 Days
      </button>
      <button className="btn btn-primary btn-lg" onClick={clearAllWeather}>
        Clear
      </button>
    </div>
  );
};

export default TopPanel;
