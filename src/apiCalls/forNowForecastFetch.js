import axios from "../apiSetup/axiosSetup";
import { getWeatherForNowObject } from "../util/formatters/weatherFormatter";

export function fetchForecastForNow() {
  return axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk,DE&appid=ba399a9e6afed074fb6983419e6bfbcc"
    )
    .then((response) => getWeatherForNowObject(response.data));
}
