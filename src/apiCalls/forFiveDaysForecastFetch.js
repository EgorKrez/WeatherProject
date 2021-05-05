import axios from "../apiSetup/axiosSetup";
import { getWeatherFor5DaysObject } from "../util/formatters/weatherFormatter";

export function fetchForecastForFiveDays() {
  return axios
    .get(
      "https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=ba399a9e6afed074fb6983419e6bfbcc"
    )
    .then((response) => getWeatherFor5DaysObject(response.data));
}
