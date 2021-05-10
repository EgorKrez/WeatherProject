import React, { useRef } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { timeSelector, unitSelector } from "../redux/selectors";
import { showWeatherRequestAction } from "../redux/actions";
import WeatherDropDown from "../components/WeatherDropDown";
import "../styles/components.css";

const WeatherDropDownContainer = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const time = useSelector(timeSelector);
  const unit = useSelector(unitSelector);
  const days = ["For Now", "For 5 Days"];
  const units = ["C", "F"];

  const createDropDownItems = (dropDownItems, dropDownClick) =>
    dropDownItems.map((item, i) => (
      <Dropdown.Item key={i} onClick={() => dispatch(dropDownClick(item))}>
        {item}
      </Dropdown.Item>
    ));

  const checkWeather = () => {
    const value = document.querySelector("input").value;
    dispatch(showWeatherRequestAction([value, time]));
  };

  return (
    <WeatherDropDown
      inputRef={inputRef}
      time={time}
      unit={unit}
      days={days}
      units={units}
      createDropDownItems={createDropDownItems}
      checkWeather={checkWeather}
      dispatch={dispatch}
    />
  );
};

export default WeatherDropDownContainer;
