import axios from "../apiSetup/axiosSetup";
import { getWeatherForNowObject } from "../util/formatters/weatherFormatter";
import { getWeatherFor5DaysObject } from "../util/formatters/weatherFormatter";
import { getCurrentLatitude, getCurrentLongitude } from "../util/location/location";

export async function fetchWeatherForNowFromCurrentLocation(payload) {
  let latitude, longitude;
  await getCurrentLatitude().then(data => latitude = data);
  await getCurrentLongitude().then(data => longitude = data);
  return await axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ba399a9e6afed074fb6983419e6bfbcc`
  )
  .then((response) => getWeatherForNowObject(response.data));
}

export async function fetchWeatherForFiveDaysFromCurrentLocation(payload) {
  let latitude, longitude;
  await getCurrentLatitude().then(data => latitude = data);
  await getCurrentLongitude().then(data => longitude = data);
  return axios
  .get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=ba399a9e6afed074fb6983419e6bfbcc`
  )
  .then((response) => getWeatherForNowObject(response.data));
}

export function fetchWeatherForNowFromSelectedLocation(payload) {
  return axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?q=${payload[0]}&appid=ba399a9e6afed074fb6983419e6bfbcc`
  )
  .then((response) => getWeatherFor5DaysObject(response.data));
}

export function fetchWeatherForFiveDaysFromSelectedLocation(payload) {
  return axios
  .get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${payload[0]}&appid=ba399a9e6afed074fb6983419e6bfbcc`
  )
  .then((response) => getWeatherFor5DaysObject(response.data));
}
