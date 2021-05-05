import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { citySelector, timeSelector } from "../redux/selectors";
import { showWeatherRequestAction } from "../redux/actions";
import "../styles/components.css";
import WeatherDropDown from "../components/WeatherDropDown";

const WeatherDropDownContainer = () => {
  const dispatch = useDispatch();
  const city = useSelector(citySelector);
  const time = useSelector(timeSelector);
  const cities = [
    "London",
    "Manchester",
    "Birmingham",
    "Newport",
    "Bristol",
    "Cambridge",
  ];
  const days = ["For Now", "For 5 Days"];

  const createDropDownItems = (dropDownItems, dropDownClick) =>
    dropDownItems.map((item, i) => (
      <Dropdown.Item key={i} onClick={() => dispatch(dropDownClick(item))}>
        {item}
      </Dropdown.Item>
    ));

  const onSubmit = (e) => dispatch(showWeatherRequestAction([city, time]));

  return (
    <WeatherDropDown
      city={city}
      time={time}
      cities={cities}
      days={days}
      createDropDownItems={createDropDownItems}
      onSubmit={onSubmit}
    />
  );
};

export default WeatherDropDownContainer;
