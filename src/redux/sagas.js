import { takeEvery, put, call } from "redux-saga/effects";
import {
  showForNowAction,
  showFor5DaysAction,
  changeLoadingAction,
} from "../redux/actions";

export function* watchForNowForecast() {
  yield takeEvery("SHOW_FOR_NOW", fetchForNowForecast);
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

function* fetchForNowForecast() {
  try {
    yield put(changeLoadingAction());
    const data = yield call(() => {
      return fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=London,uk,DE&appid=6546d6953b78180b0268e32337fadb90"
      ).then((res) => getWeatherForNowObject(res.data));
    });
    yield put(showForNowAction(data));
  } catch (e) {
    console.log(e);
  }
}

export function* watchForFiveDaysForecast() {
  yield takeEvery("SHOW_FOR_5_DAYS", fetchForFiveDaysForecast);
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

function* fetchForFiveDaysForecast() {
  try {
    yield put(changeLoadingAction());
    const data = yield call(() => {
      return fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=6546d6953b78180b0268e32337fadb90"
      ).then((res) => getWeatherFor5DaysObject(res.data));
    });
    yield put(showFor5DaysAction(data));
  } catch (e) {
    console.log(e);
  }
}
