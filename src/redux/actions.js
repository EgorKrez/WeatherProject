import { createAction } from "redux-actions";

export const showForNowAction = createAction("SHOW_FOR_NOW");
export const showFor3DaysAction = createAction("SHOW_FOR_3_DAYS");
export const clearAllForecastAction = createAction("CLEAR_ALL_FORECAST");
export const changeLoadingAction = createAction("CHANGE_LOADING");
