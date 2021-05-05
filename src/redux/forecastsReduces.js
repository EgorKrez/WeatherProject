import * as actions from "./actions";
import { handleActions } from "redux-actions";

export const initialState = {
  forecasts: [],
  loading: false,
  isShowAlert: false,
  currentCity: "London",
  forecastTime: "For Now",
};

export const forecastReducer = handleActions(
  {
    [actions.showForNowRequestAction]: (state = initialState) => {
      return {
        forecasts: state.forecasts,
        loading: true,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
      };
    },

    [actions.showForNowSuccessAction]: (state = initialState, { payload }) => {
      return {
        forecasts: [payload],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
      };
    },

    [actions.showForNowFailureAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: true,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
      };
    },

    [actions.showFor5DaysRequestAction]: (state = initialState) => {
      return {
        forecasts: state.forecasts,
        loading: true,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
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
        forecastTime: state.forecastTime,
      };
    },

    [actions.showFor5DaysFailureAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: true,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
      };
    },

    [actions.clearAllForecastAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
      };
    },

    [actions.changeCurrentCityAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: false,
        isShowAlert: false,
        currentCity: payload,
        forecastTime: state.forecastTime,
      };
    },

    [actions.changeForecastTimeAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: payload,
      };
    },

    [actions.showWeatherRequestAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: true,
        isShowAlert: false,
        currentCity: payload[0],
        forecastTime: payload[1],
      };
    },

    [actions.showWeatherSuccessAction]: (state = initialState, { payload }) => {
      return {
        forecasts: [payload],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
      };
    },

    [actions.showWeatherFailureAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: true,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
      };
    },
  },
  initialState
);
