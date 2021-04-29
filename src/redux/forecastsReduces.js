import * as actions from "./actions";
import {
  showWeatherForNowReducer,
  showWeatherFor5DaysReducer,
  clearAllForecastReducer,
  changeLoadingReducer,
} from "./reducers";
import { handleActions } from "redux-actions";

export const initialState = {
  forecasts: [],
  loading: false,
};

export const forecastReducer = handleActions(
  {
    [actions.showForNowAction]: (state = initialState, action) => {
      return showWeatherForNowReducer(action.payload);
    },

    [actions.showFor5DaysAction]: (state = initialState, action) => {
      return showWeatherFor5DaysReducer(action.payload);
    },

    [actions.clearAllForecastAction]: (state = initialState) => {
      return clearAllForecastReducer();
    },

    [actions.changeLoadingAction]: (state = initialState) => {
      return changeLoadingReducer(state);
    },
  },
  initialState
);
