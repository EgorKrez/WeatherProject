import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "../redux/actions";
import { fetchWeather } from "../apiCalls/fetchWeather";

function* sagaWorker(action) {
  console.log(action);
  try {
    const data = yield fetchWeather(action.payload);
    yield put(actions.showWeatherSuccessAction(data));
  } catch (e) {
    yield put(actions.showWeatherFailureAction());
  }
}

export function* watchSaga() {
  yield takeEvery(actions.showWeatherRequestAction().type, sagaWorker);
}
