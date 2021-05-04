import { all, takeLeading } from "redux-saga/effects";
import * as actions from "../redux/actions";
import { sagaWorkerForNowForecast } from "./ForNowForecastSaga";
import { sagaWorkerForFiveDaysForecast } from "./ForFiveDaysForecastSaga";

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
