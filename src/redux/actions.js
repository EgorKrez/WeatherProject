import { createAction } from "redux-actions";

export const showForNowAction = createAction("SHOW_FOR_NOW");
export const showFor5DaysAction = createAction("SHOW_FOR_5_DAYS");
export const clearAllForecastAction = createAction("CLEAR_ALL_FORECAST");
export const changeLoadingAction = createAction("CHANGE_LOADING");
