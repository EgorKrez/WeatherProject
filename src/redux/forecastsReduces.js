import * as actions from "./actions";
import { handleActions } from "redux-actions";

export const initialState = {
  forecasts: [],
  loading: false,
  isShowAlert: false,
};

export const forecastReducer = handleActions(
  {
    [actions.showForNowRequestAction]: (state = initialState) => {
      return { forecasts: state.forecasts, loading: true, isShowAlert: false };
    },

    [actions.showForNowSuccessAction]: (state = initialState, { payload }) => {
      return { forecasts: [payload], loading: false, isShowAlert: false };
    },

    [actions.showForNowFailureAction]: (state = initialState) => {
      return { forecasts: [], loading: false, isShowAlert: true };
    },

    [actions.showFor5DaysRequestAction]: (state = initialState) => {
      return { forecasts: state.forecasts, loading: true, isShowAlert: false };
    },

    [actions.showFor5DaysSuccessAction]: (
      state = initialState,
      { payload }
    ) => {
      return { forecasts: [payload], loading: false, isShowAlert: false };
    },

    [actions.showFor5DaysFailureAction]: (state = initialState) => {
      return { forecasts: [], loading: false, isShowAlert: true };
    },

    [actions.clearAllForecastAction]: (state = initialState) => {
      return { forecasts: [], loading: false, isShowAlert: false };
    },
  },
  initialState
);
