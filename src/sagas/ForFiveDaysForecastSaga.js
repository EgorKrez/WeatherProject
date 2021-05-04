import axios from "axios";

export async function fetchForecastForFiveDays() {
  await axios
    .get(
      "https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=ba399a9e6afed074fb6983419e6bfbcc"
    )
    .then((response) => getWeatherFor5DaysObject(response.data));
}

const getWeatherFor5DaysObject = (result) => {
  return result.list.map((data) => ({
    cityName: result.city.name,
    citySys: data.sys,
    cityMain: data.main,
    cityWind: data.wind,
    time: data.dt_txt.toString().slice(5, 16),
    weather: data.weather[0].main,
  }));
};

/*

const resp = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=ba399a9e6afed074fb6983419e6bfbcc"
  );

  return getWeatherFor5DaysObject(await resp.data);

*/

/* .interceptors.request.use(
      async (requestInf) => await console.log(requestInf)
    ); */
