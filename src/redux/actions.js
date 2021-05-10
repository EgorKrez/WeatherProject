import { createAction } from "redux-actions";

export const changeCurrentCityAction = createAction("CHANGE_CURRENT_CITY");
export const changeForecastTimeAction = createAction("CHANGE_FORECAST_TIME");
export const changeUnit = createAction("CHANGE_UNIT");
export const clearAllForecastAction = createAction("CLEAR_ALL_FORECAST");
export const showWeatherRequestAction = createAction("REQUEST_SHOW_WEATHER");
export const showWeatherSuccessAction = createAction("SUCCESS_SHOW_WEATHER");
export const showWeatherFailureAction = createAction("FAILURE_SHOW_WEATHER");
export const showCurrentLocationWeather = createAction("SHOW_CURRENT_LOCATION_WEATHER");
export const showWeatherForNowFromCurrentLocationRequestAction = createAction("REQUEST_SHOW_FOR_NOW_FROM_CURRENT_LOCATION")
export const showWeatherForNowFromCurrentLocationSuccessAction = createAction("SUCCESS_SHOW_FOR_NOW_FROM_CURRENT_LOCATION")
export const showWeatherForNowFromCurrentLocationFailureAction = createAction("FAILURE_SHOW_FOR_NOW_FROM_CURRENT_LOCATION")
export const showWeatherFor5DaysFromCurrentLocationRequestAction = createAction("REQUEST_SHOW_FOR_5DAYS_FROM_CURRENT_LOCATION")
export const showWeatherFor5DaysFromCurrentLocationSuccessAction = createAction("SUCCESS_SHOW_FOR_5DAYS_FROM_CURRENT_LOCATION")
export const showWeatherFor5DaysFromCurrentLocationFailureAction = createAction("FAILURE_SHOW_FOR_5DAYS_FROM_CURRENT_LOCATION")
export const showWeatherForNowFromSelectedLocationRequestAction = createAction("REQUEST_SHOW_FOR_NOW_FROM_SELECTED_LOCATION")
export const showWeatherForNowFromSelectedLocationSuccessAction = createAction("SUCCESS_SHOW_FOR_NOW_FROM_SELECTED_LOCATION")
export const showWeatherForNowFromSelectedLocationFailureAction = createAction("FAILURE_SHOW_FOR_NOW_FROM_SELECTED_LOCATION")
export const showWeatherFor5DaysFromSelectedLocationRequestAction = createAction("REQUEST_SHOW_FOR_5DAYS_FROM_SELECTED_LOCATION")
export const showWeatherFor5DaysFromSelectedLocationSuccessAction = createAction("SUCCESS_SHOW_FOR_5DAYS_FROM_SELECTED_LOCATION")
export const showWeatherFor5DaysFromSelectedLocationFailureAction = createAction("FAILURE_SHOW_FOR_5DAYS_FROM_SELECTED_LOCATION")