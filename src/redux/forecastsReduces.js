import * as actions from "./actions";
import { handleActions } from "redux-actions";

export const initialState = {
  forecasts: [],
  loading: false,
  isShowAlert: false,
  currentCity: "London",
  forecastTime: "For Now",
  unit: "C",
};

export const forecastReducer = handleActions(
  {
    [actions.clearAllForecastAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.changeCurrentCityAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: false,
        isShowAlert: false,
        currentCity: payload,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.changeUnit]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: payload,
      };
    },

    [actions.changeForecastTimeAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: payload,
        unit: state.unit,
      };
    },

    [actions.showWeatherRequestAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: true,
        isShowAlert: false,
        currentCity: payload[0],
        forecastTime: payload[1],
        unit: state.unit,
      };
    },

    [actions.showWeatherSuccessAction]: (state = initialState, { payload }) => {
      return {
        forecasts: [payload],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.showWeatherFailureAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: true,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.showWeatherForNowFromCurrentLocationRequestAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: true,
        isShowAlert: false,
        currentCity: payload[0],
        forecastTime: payload[1],
        unit: state.unit,
      };
    },

    [actions.showWeatherForNowFromCurrentLocationSuccessAction]: (state = initialState, { payload }) => {
      return {
        forecasts: [payload],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.showWeatherForNowFromCurrentLocationFailureAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: true,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.showWeatherFor5DaysFromCurrentLocationRequestAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: true,
        isShowAlert: false,
        currentCity: payload[0],
        forecastTime: payload[1],
        unit: state.unit,
      };
    },

    [actions.showWeatherFor5DaysFromCurrentLocationSuccessAction]: (state = initialState, { payload }) => {
      return {
        forecasts: [payload],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.showWeatherFor5DaysFromCurrentLocationFailureAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: true,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.showWeatherForNowFromSelectedLocationRequestAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: true,
        isShowAlert: false,
        currentCity: payload[0],
        forecastTime: payload[1],
        unit: state.unit,
      };
    },

    [actions.showWeatherForNowFromSelectedLocationSuccessAction]: (state = initialState, { payload }) => {
      return {
        forecasts: [payload],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.showWeatherForNowFromSelectedLocationFailureAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: true,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.showWeatherFor5DaysFromSelectedLocationRequestAction]: (state = initialState, { payload }) => {
      return {
        forecasts: state.forecasts,
        loading: true,
        isShowAlert: false,
        currentCity: payload[0],
        forecastTime: payload[1],
        unit: state.unit,
      };
    },

    [actions.showWeatherFor5DaysFromSelectedLocationSuccessAction]: (state = initialState, { payload }) => {
      return {
        forecasts: [payload],
        loading: false,
        isShowAlert: false,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },

    [actions.showWeatherFor5DaysFromSelectedLocationFailureAction]: (state = initialState) => {
      return {
        forecasts: [],
        loading: false,
        isShowAlert: true,
        currentCity: state.currentCity,
        forecastTime: state.forecastTime,
        unit: state.unit,
      };
    },
  },
  initialState
);
