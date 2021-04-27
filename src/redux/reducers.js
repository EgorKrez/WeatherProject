export const showWeatherForNowReducer = (payload) => {
  return { forecasts: [payload] };
};

export const showWeatherFor3DaysReducer = (payload) => {
  return { forecasts: [payload] };
};

export const clearAllForecastReducer = () => {
  return { forecasts: [] };
};
