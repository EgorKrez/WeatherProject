import { takeEvery, put, call } from "redux-saga/effects";
import {
  changeLoadingAction,
  requestShowForNowAction,
  successShowForNowAction,
  failureShowForNowAction,
  requestShowFor5DaysAction,
  successShowFor5DaysAction,
  failureShowFor5DaysAction,
} from "../redux/actions";

export function* watchForNowForecast() {
  console.log(1488);
  yield takeEvery("REQUEST_SHOW_FOR_NOW", sagaWorkerForNowForecast);
}

function* sagaWorkerForNowForecast() {
  try {
    yield put(changeLoadingAction());
    yield put(requestShowForNowAction());
    const data = yield call(fetchForecastForNow);
    yield put(successShowForNowAction(data));
  } catch (e) {
    yield put(failureShowForNowAction());
  }
}

async function fetchForecastForNow() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk,DE&appid=6546d6953b78180b0268e32337fadb90"
  ).then((res) => getWeatherForNowObject(res.data));
  return await response;
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

export function* watchForFiveDaysForecast() {
  yield takeEvery("REQUEST_SHOW_FOR_5_DAYS", sagaWorkerForFiveDaysForecast);
}

function* sagaWorkerForFiveDaysForecast() {
  try {
    yield put(changeLoadingAction());
    yield put(requestShowFor5DaysAction());
    const data = yield call(fetchForecastForFiveDays);
    yield put(successShowFor5DaysAction(data));
  } catch (e) {
    yield put(failureShowFor5DaysAction());
  }
}

async function fetchForecastForFiveDays() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=6546d6953b78180b0268e32337fadb90"
  ).then((res) => getWeatherFor5DaysObject(res.data));
  return await response;
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
