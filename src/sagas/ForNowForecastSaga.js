import { put, call } from "redux-saga/effects";
import * as actions from "../redux/actions";

export function* sagaWorkerForNowForecast() {
  try {
    const data = yield call(fetchForecastForNow);
    yield put(actions.showForNowSuccessAction(data));
  } catch (e) {
    yield put(actions.showForNowFailureAction());
  }
}

async function fetchForecastForNow() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk,DE&appid=ba399a9e6afed074fb6983419e6bfbcc"
  );
  return getWeatherForNowObject(await response.json());
}

const getWeatherForNowObject = (data) => {
  return {
    cityName: data.name,
    citySys: data.sys,
    cityMain: data.main,
    cityWind: data.wind,
    time: new Date().toISOString().slice(5, 16).replace("T", " "),
    weather: data.weather[0].main,
  };
};
