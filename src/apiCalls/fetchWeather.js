import axios from "../apiSetup/axiosSetup";
import { getWeatherForNowObject } from "../util/formatters/weatherFormatter";
import { getWeatherFor5DaysObject } from "../util/formatters/weatherFormatter";

export function fetchWeather(payload) {
  if (payload[1] === "For Now" && payload[0] === "Current Location") {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=53.89&lon=27.56&appid=ba399a9e6afed074fb6983419e6bfbcc`
      )
      .then((response) => getWeatherForNowObject(response.data));
  }
  if (payload[1] === "For Now" && payload[0] !== "Current Location") {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload[0]}&appid=ba399a9e6afed074fb6983419e6bfbcc`
      )
      .then((response) => getWeatherForNowObject(response.data));
  }
  if (payload[1] === "For 5 Days" && payload[0] === "Current Location") {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=53.89&lon=27.56&appid=ba399a9e6afed074fb6983419e6bfbcc`
      )
      .then((response) => getWeatherFor5DaysObject(response.data));
  }
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${payload[0]}&appid=ba399a9e6afed074fb6983419e6bfbcc`
    )
    .then((response) => getWeatherFor5DaysObject(response.data));
}
