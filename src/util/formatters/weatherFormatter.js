export const getWeatherForNowObject = (data) => {
  console.log({
    cityName: data.name,
    citySys: data.sys,
    cityMain: data.main,
    cityWind: data.wind,
    time: new Date().toISOString().slice(5, 16).replace("T", " "),
    weather: data.weather[0].main,
  });
  return {
    cityName: data.name,
    citySys: data.sys,
    cityMain: data.main,
    cityWind: data.wind,
    time: new Date().toISOString().slice(5, 16).replace("T", " "),
    weather: data.weather[0].main,
  };
};

export const getWeatherFor5DaysObject = (result) => {
  console.log(
    result.list.map((data) => ({
      cityName: result.city.name,
      citySys: data.sys,
      cityMain: data.main,
      cityWind: data.wind,
      time: data.dt_txt.toString().slice(5, 16),
      weather: data.weather[0].main,
    }))
  );
  return result.list.map((data) => ({
    cityName: result.city.name,
    citySys: data.sys,
    cityMain: data.main,
    cityWind: data.wind,
    time: data.dt_txt.toString().slice(5, 16),
    weather: data.weather[0].main,
  }));
};
