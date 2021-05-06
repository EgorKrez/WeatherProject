import { createAction } from "redux-actions";

export const changeCurrentCityAction = createAction("CHANGE_CURRENT_CITY");
export const changeForecastTimeAction = createAction("CHANGE_FORECAST_TIME");
export const changeUnit = createAction("CHANGE_UNIT");
export const clearAllForecastAction = createAction("CLEAR_ALL_FORECAST");
export const showWeatherRequestAction = createAction("REQUEST_SHOW_WEATHER");
export const showWeatherSuccessAction = createAction("SUCCESS_SHOW_WEATHER");
export const showWeatherFailureAction = createAction("FAILURE_SHOW_WEATHER");
