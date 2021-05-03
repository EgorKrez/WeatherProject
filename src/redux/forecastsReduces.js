import * as actions from "./actions";
import { handleActions } from "redux-actions";

export const initialState = {
  forecasts: [],
  loading: false,
  isShowAlert: false,
};

export const forecastReducer = handleActions(
  {
    [actions.requestShowForNowAction]: (state = initialState) => {
      return { forecasts: state.forecasts, loading: false, isShowAlert: false };
    },

    [actions.successShowForNowAction]: (state = initialState, { payload }) => {
      return { forecasts: [payload], loading: false, isShowAlert: false };
    },

    [actions.failureShowForNowAction]: (state = initialState) => {
      return { forecasts: [], loading: false, isShowAlert: true };
    },

    [actions.requestShowFor5DaysAction]: (state = initialState) => {
      return { forecasts: state.forecasts, loading: false, isShowAlert: false };
    },

    [actions.successShowFor5DaysAction]: (
      state = initialState,
      { payload }
    ) => {
      return { forecasts: [payload], loading: false, isShowAlert: false };
    },

    [actions.failureShowFor5DaysAction]: (state = initialState) => {
      return { forecasts: [], loading: false, isShowAlert: true };
    },

    [actions.clearAllForecastAction]: (state = initialState) => {
      return { forecasts: [], loading: false, isShowAlert: false };
    },

    [actions.changeLoadingAction]: (state = initialState) => {
      return { forecasts: state.forecasts, loading: true, isShowAlert: false };
    },
  },
  initialState
);
