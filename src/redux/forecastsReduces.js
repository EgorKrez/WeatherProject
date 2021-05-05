import * as actions from "./actions";
import { handleActions } from "redux-actions";

export const initialState = {
  forecasts: [],
  loading: false,
  isShowAlert: false,
  currentCity: "London",
};

export const forecastReducer = handleActions(
  {
    [actions.showForNowRequestAction]: (state = initialState) => {
      return {
        forecasts: state.forecasts,
        loading: true,
        isShowAlert: false,
        currentCity: state.currentCity,
      };
    },

    [actions.showForNowSuccessAction]: (state = initialState, { payload }) => {
      return {
        forecasts: [payload],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
      };
    },

    [actions.showForNowFailureAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: true,
        currentCity: state.currentCity,
      };
    },

    [actions.showFor5DaysRequestAction]: (state = initialState) => {
      return {
        forecasts: state.forecasts,
        loading: true,
        isShowAlert: false,
        currentCity: state.currentCity,
      };
    },

    [actions.showFor5DaysSuccessAction]: (
      state = initialState,
      { payload }
    ) => {
      return {
        forecasts: [payload],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
      };
    },

    [actions.showFor5DaysFailureAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: true,
        currentCity: state.currentCity,
      };
    },

    [actions.clearAllForecastAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
      };
    },

    [actions.changeCurrentCityAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: false,
        isShowAlert: false,
        currentCity: payload,
      };
    },
  },
  initialState
);
