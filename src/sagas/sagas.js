import { all, takeLeading, put, call } from "redux-saga/effects";
import * as actions from "../redux/actions";
import { fetchForecastForNow } from "../apiCalls/forNowForecastFetch";
import { fetchForecastForFiveDays } from "../apiCalls/forFiveDaysForecastFetch";

function* sagaWorkerForNowForecast() {
  try {
    const data = yield call(fetchForecastForNow);
    yield put(actions.showForNowSuccessAction(data));
  } catch (e) {
    yield put(actions.showForNowFailureAction());
  }
}

function* sagaWorkerForFiveDaysForecast() {
  try {
    const data = yield call(fetchForecastForFiveDays);
    yield put(actions.showFor5DaysSuccessAction(data));
  } catch (e) {
    yield put(actions.showFor5DaysFailureAction());
  }
}

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
