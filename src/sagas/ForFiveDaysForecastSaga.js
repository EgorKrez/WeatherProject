import { put, call } from "redux-saga/effects";
import * as actions from "../redux/actions";

export function* sagaWorkerForFiveDaysForecast() {
  try {
    const data = yield call(fetchForecastForFiveDays);
    yield put(actions.showFor5DaysSuccessAction(data));
  } catch (e) {
    yield put(actions.showFor5DaysFailureAction());
  }
}

async function fetchForecastForFiveDays() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=ba399a9e6afed074fb6983419e6bfbcc"
  );
  return getWeatherFor5DaysObject(await response.json());
}

const getWeatherFor5DaysObject = (result) => {
  return result.list.map((data) => ({
    cityName: result.city.name,
    citySys: data.sys,
    cityMain: data.main,
    cityWind: data.wind,
    time: data.dt_txt.toString().slice(5, 16),
    weather: data.weather[0].main,
  }));
};
