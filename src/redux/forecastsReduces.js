import * as actions from "./actions";
import { handleActions } from "redux-actions";

export const initialState = {
  forecasts: [],
  loading: false,
};

export const forecastReducer = handleActions(
  {
    [actions.showForNowAction]: (state = initialState, { payload }) => {
      return { forecasts: [payload], loading: false };
    },

    [actions.showFor5DaysAction]: (state = initialState, { payload }) => {
      return { forecasts: [payload], loading: false };
    },

    [actions.clearAllForecastAction]: (state = initialState) => {
      return { forecasts: [], loading: false };
    },

    [actions.changeLoadingAction]: (state = initialState) => {
      return { forecasts: state.forecasts, loading: true };
    },
  },
  initialState
);
