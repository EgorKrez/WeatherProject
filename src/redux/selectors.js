export const forecastSelector = (state) => state.forecasts.forecasts;
export const loadingSelector = (state) => state.forecasts.loading;
export const alertSelector = (state) => state.forecasts.isShowAlert;
export const citySelector = (state) => state.forecasts.currentCity;
export const timeSelector = (state) => state.forecasts.forecastTime;
