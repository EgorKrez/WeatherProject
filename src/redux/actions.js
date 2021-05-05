import { createAction } from "redux-actions";

export const changeCurrentCityAction = createAction("CHANGE_CURRENT_CITY");
export const changeForecastTimeAction = createAction("CHANGE_FORECAST_TIME");
export const clearAllForecastAction = createAction("CLEAR_ALL_FORECAST");
export const showForNowRequestAction = createAction("REQUEST_SHOW_FOR_NOW");
export const showForNowSuccessAction = createAction("SUCCESS_SHOW_FOR_NOW");
export const showForNowFailureAction = createAction("FAILURE_SHOW_FOR_NOW");
export const showFor5DaysRequestAction = createAction(
  "REQUEST_SHOW_FOR_5_DAYS"
);
export const showFor5DaysSuccessAction = createAction(
  "SUCCESS_SHOW_FOR_5_DAYS"
);
export const showFor5DaysFailureAction = createAction(
  "FAILURE_SHOW_FOR_5_DAYS"
);
export const showWeatherRequestAction = createAction("REQUEST_SHOW_WEATHER");
export const showWeatherSuccessAction = createAction("SUCCESS_SHOW_WEATHER");
export const showWeatherFailureAction = createAction("FAILURE_SHOW_WEATHER");
