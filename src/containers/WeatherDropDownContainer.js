import React, { useRef } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { citySelector, timeSelector, unitSelector } from "../redux/selectors";
import { showWeatherRequestAction } from "../redux/actions";
import WeatherDropDown from "../components/WeatherDropDown";
import "../styles/components.css";

const WeatherDropDownContainer = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const city = useSelector(citySelector);
  const time = useSelector(timeSelector);
  const unit = useSelector(unitSelector);
  const cities = [
    "Current Location",
    "London",
    "Manchester",
    "Birmingham",
    "Newport",
    "Bristol",
    "Cambridge",
  ];
  const days = ["For Now", "For 5 Days"];
  const units = ["C", "F"];

  const createDropDownItems = (dropDownItems, dropDownClick) =>
    dropDownItems.map((item, i) => (
      <Dropdown.Item key={i} onClick={() => dispatch(dropDownClick(item))}>
        {item}
      </Dropdown.Item>
    ));

  const onSubmit = (e) => dispatch(showWeatherRequestAction([city, time]));

  const checkWeather = () => {
    const value = document.querySelector("input").value;
    dispatch(showWeatherRequestAction([value, time]));
  };

  return (
    <WeatherDropDown
      inputRef={inputRef}
      city={city}
      time={time}
      unit={unit}
      cities={cities}
      days={days}
      units={units}
      createDropDownItems={createDropDownItems}
      onSubmit={onSubmit}
      checkWeather={checkWeather}
    />
  );
};

export default WeatherDropDownContainer;
