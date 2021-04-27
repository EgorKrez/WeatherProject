import * as actions from "./actions";
import {
  showWeatherForNowReducer,
  showWeatherFor3DaysReducer,
  clearAllForecastReducer,
} from "./reducers";
import { handleActions } from "redux-actions";

export const initialState = {
  forecasts: [],
};

export const forecastReducer = handleActions(
  {
    [actions.showForNowAction]: (state = initialState, action) => {
      return showWeatherForNowReducer(action.payload);
    },

    [actions.showFor3DaysAction]: (state = initialState, action) => {
      return showWeatherFor3DaysReducer(action.payload);
    },

    [actions.clearAllForecastAction]: () => {
      return clearAllForecastReducer();
    },
  },
  initialState
);
