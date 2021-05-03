import { createAction } from "redux-actions";

export const requestShowForNowAction = createAction("REQUEST_SHOW_FOR_NOW");
export const successShowForNowAction = createAction("SUCCESS_SHOW_FOR_NOW");
export const failureShowForNowAction = createAction("FAILURE_SHOW_FOR_NOW");
export const clearAllForecastAction = createAction("CLEAR_ALL_FORECAST");
export const changeLoadingAction = createAction("CHANGE_LOADING");
export const requestShowFor5DaysAction = createAction(
  "REQUEST_SHOW_FOR_5_DAYS"
);
export const successShowFor5DaysAction = createAction(
  "SUCCESS_SHOW_FOR_5_DAYS"
);
export const failureShowFor5DaysAction = createAction(
  "FAILURE_SHOW_FOR_5_DAYS"
);
