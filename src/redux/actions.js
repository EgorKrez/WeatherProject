import { createAction } from "redux-actions";

export const showForNowRequestAction = createAction("REQUEST_SHOW_FOR_NOW");
export const showForNowSuccessAction = createAction("SUCCESS_SHOW_FOR_NOW");
export const showForNowFailureAction = createAction("FAILURE_SHOW_FOR_NOW");
export const clearAllForecastAction = createAction("CLEAR_ALL_FORECAST");
export const showFor5DaysRequestAction = createAction(
  "REQUEST_SHOW_FOR_5_DAYS"
);
export const showFor5DaysSuccessAction = createAction(
  "SUCCESS_SHOW_FOR_5_DAYS"
);
export const showFor5DaysFailureAction = createAction(
  "FAILURE_SHOW_FOR_5_DAYS"
);
