import * as actions from "./actions";
import { handleActions } from "redux-actions";

export const initialState = {
  forecasts: [],
  loading: false,
};

export const forecastReducer = handleActions(
  {
    [actions.requestShowForNowAction]: (state = initialState) => {
      return { forecasts: state.forecasts, loading: false };
    },

    [actions.successShowForNowAction]: (state = initialState, { payload }) => {
      return { forecasts: [payload], loading: false };
    },

    [actions.failureShowForNowAction]: (state = initialState) => {
      return { forecasts: [], loading: false };
    },

    [actions.requestShowFor5DaysAction]: (state = initialState) => {
      return { forecasts: state.forecasts, loading: false };
    },

    [actions.successShowFor5DaysAction]: (
      state = initialState,
      { payload }
    ) => {
      return { forecasts: [payload], loading: false };
    },

    [actions.failureShowFor5DaysAction]: (state = initialState) => {
      return { forecasts: [], loading: false };
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
