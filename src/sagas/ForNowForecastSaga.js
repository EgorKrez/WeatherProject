import axios from "../api/axiosSetup";

export function fetchForecastForNow() {
  return axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk,DE&appid=ba399a9e6afed074fb6983419e6bfbcc"
    )
    .then((response) => getWeatherForNowObject(response.data));
}

const getWeatherForNowObject = (data) => {
  return {
    cityName: data.name,
    citySys: data.sys,
    cityMain: data.main,
    cityWind: data.wind,
    time: new Date().toISOString().slice(5, 16).replace("T", " "),
    weather: data.weather[0].main,
  };
};
