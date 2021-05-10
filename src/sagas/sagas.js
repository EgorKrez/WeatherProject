import { put, takeEvery/* , all, takeLeading */ } from "redux-saga/effects";
import * as actions from "../redux/actions";
import { fetchWeather } from "../apiCalls/fetchWeather";

function* sagaWorker(action) {
  try {
    const data = yield fetchWeather(action.payload);
    yield put(actions.showWeatherSuccessAction(data));
  } catch (e) {
    yield put(actions.showWeatherFailureAction());
  }
}

/* function* sagaWorker2(action) {
  try {
    const data = yield fetchWeather(action.payload);
    yield put(actions.showWeatherSuccessAction(data));
  } catch (e) {
    yield put(actions.showWeatherFailureAction());
  }
} */

export function* watchSaga() {
  /* yield all([
    takeLeading(actions.showWeatherRequestAction().type, sagaWorker),
    takeLeading(actions.showCurrentLocationWeather().type, sagaWorker2),
  ]) */
  yield takeEvery(actions.showWeatherRequestAction().type, sagaWorker);
}
