import React from "react";
import axios from "axios";

const TopPanel = () => {

    const getWeatherForNowObject = (data) => {
        console.log({cityName: data.name, citySys: data.sys, cityMain: data.main, cityWind: data.wind})
    }

    const getWeatherFor3DaysObject = (result) => {
        console.log(result.city.name)
        console.log(result.list)
        result.list.map((data) => console.log({cityName: result.city.name, citySys: data.sys, cityMain: data.main, cityWind: data.wind, time: data.dt_txt}))
    }

    const fetchWeatherForNow = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk,DE&appid=6546d6953b78180b0268e32337fadb90`)
            .then((result) => {
                getWeatherForNowObject(result.data)
            });
    }

    const fetchWeatherFor3Days = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=6546d6953b78180b0268e32337fadb90`)
            .then((result) => {
                getWeatherFor3DaysObject(result.data)
            });
    }

    return (
        <div className="top-panel">
            <button onClick={fetchWeatherForNow}>Now</button>
            <button onClick={fetchWeatherFor3Days}>3 Days</button>
        </div>
    );
}

export default TopPanel