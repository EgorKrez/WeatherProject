import { put, all, takeLeading } from "redux-saga/effects";
import * as actions from "../redux/actions";
import { fetchWeather, fetchWeatherForFiveDaysFromCurrentLocation, fetchWeatherForFiveDaysFromSelectedLocation, fetchWeatherForNowFromCurrentLocation, fetchWeatherForNowFromSelectedLocation } from "../apiCalls/fetchWeather";

/* function* sagaWorker(action) {
  try {
    const data = yield fetchWeather(action.payload);
    yield put(actions.showWeatherSuccessAction(data));
  } catch (e) {
    yield put(actions.showWeatherFailureAction());
  }
}
 */
function* sagaWorkerForNowFromCurrentLocation(action) {
  try {
    const data = yield fetchWeatherForNowFromCurrentLocation(action.payload);
    yield put(actions.showWeatherForNowFromCurrentLocationSuccessAction(data));
  } catch (e) {
    yield put(actions.showWeatherForNowFromCurrentLocationFailureAction());
  }
}

function* sagaWorkerForNowFromSelectedLocation(action) {
  try {
    const data = yield fetchWeatherForNowFromSelectedLocation(action.payload);
    yield put(actions.showWeatherForNowFromSelectedLocationSuccessAction(data));
  } catch (e) {
    yield put(actions.showWeatherForNowFromSelectedLocationFailureAction());
  }
}

function* sagaWorkerFor5DaysFromCurrentLocation(action) {
  try {
    const data = yield fetchWeatherForFiveDaysFromCurrentLocation(action.payload);
    yield put(actions.showWeatherFor5DaysFromCurrentLocationSuccessAction(data));
  } catch (e) {
    yield put(actions.showWeatherFor5DaysFromCurrentLocationFailureAction());
  }
}

function* sagaWorkerFor5DaysFromSelectedLocation(action) {
  try {
    const data = yield fetchWeatherForFiveDaysFromSelectedLocation(action.payload);
    yield put(actions.showWeatherFor5DaysFromSelectedLocationSuccessAction(data));
  } catch (e) {
    yield put(actions.showWeatherFor5DaysFromSelectedLocationFailureAction());
  }
}

export function* watchSaga() {
  yield all([
    takeLeading(actions.showWeatherForNowFromCurrentLocationRequestAction().type, sagaWorkerForNowFromCurrentLocation),
    takeLeading(actions.showWeatherForNowFromSelectedLocationRequestAction().type, sagaWorkerForNowFromSelectedLocation),
    takeLeading(actions.showWeatherFor5DaysFromCurrentLocationRequestAction().type, sagaWorkerFor5DaysFromCurrentLocation),
    takeLeading(actions.showWeatherFor5DaysFromSelectedLocationRequestAction().type, sagaWorkerFor5DaysFromSelectedLocation),
  ]) 
  //yield takeEvery(actions.showWeatherRequestAction().type, sagaWorker);
}
