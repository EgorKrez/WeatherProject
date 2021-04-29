export const showWeatherForNowReducer = (payload) => {
  return { forecasts: [payload], loading: false };
};

export const showWeatherFor5DaysReducer = (payload) => {
  return { forecasts: [payload], loading: false };
};

export const clearAllForecastReducer = () => {
  return { forecasts: [], loading: false };
};

export const changeLoadingReducer = (state) => {
  return { forecasts: state.forecasts, loading: true };
};
