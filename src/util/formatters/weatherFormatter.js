export const getWeatherForNowObject = (data) => {
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
  return result.list.map((data) => ({
    cityName: result.city.name,
    citySys: data.sys,
    cityMain: data.main,
    cityWind: data.wind,
    time: data.dt_txt.toString().slice(5, 16),
    weather: data.weather[0].main,
  }));
};

export const getWeatherByCurrentGeolocation = (data) => {
  return {
    cityName: data[0].name,
    citySys: data[0].sys.country,
    cityMain: data[0].main,
    cityWind: data[0].wind,
    time: new Date().toISOString().slice(5, 16).replace("T", " "),
    weather: data[0].weather[0].main,
  };
};

export const getWeatherForAnyDays = (data) => {
  console.log(data);
  /* return {
    cityName: data[0].name,
    citySys: data[0].sys.country,
    cityMain: data[0].main,
    cityWind: data[0].wind,
    time: new Date().toISOString().slice(5, 16).replace("T", " "),
    weather: data[0].weather[0].main,
  }; */
};
