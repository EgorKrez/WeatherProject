import { put, call, all, takeLeading } from "redux-saga/effects";
import * as actions from "./actions";

export function* watchSaga() {
  yield all([
    takeLeading(
      actions.showForNowRequestAction().type,
      sagaWorkerForNowForecast
    ),
    takeLeading(
      actions.showFor5DaysRequestAction().type,
      sagaWorkerForFiveDaysForecast
    ),
  ]);
}

function* sagaWorkerForNowForecast() {
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

function* sagaWorkerForFiveDaysForecast() {
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
