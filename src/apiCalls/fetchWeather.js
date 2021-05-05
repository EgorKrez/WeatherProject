import axios from "../apiSetup/axiosSetup";
import { getWeatherForNowObject } from "../util/formatters/weatherFormatter";
import { getWeatherFor5DaysObject } from "../util/formatters/weatherFormatter";

export function fetchWeather(payload) {
  if (payload[1] === "For Now") {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload[0]},uk,DE&appid=ba399a9e6afed074fb6983419e6bfbcc`
      )
      .then((response) => getWeatherForNowObject(response.data));
  }
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${payload[0]},uk&appid=ba399a9e6afed074fb6983419e6bfbcc`
    )
    .then((response) => getWeatherFor5DaysObject(response.data));
}
