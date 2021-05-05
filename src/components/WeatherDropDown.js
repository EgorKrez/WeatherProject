import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentCityAction,
  changeForecastTimeAction,
} from "../redux/actions";
import { citySelector, timeSelector } from "../redux/selectors";

import "../styles/components.css";

const WeatherDropDown = () => {
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

  return (
    <div className="dropdown-wrapper">
      <DropdownButton id="dropdown-basic-button" title={city} size="lg">
        {createDropDownItems(cities, changeCurrentCityAction)}
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" title={time} size="lg">
        {createDropDownItems(days, changeForecastTimeAction)}
      </DropdownButton>
    </div>
  );
};

export default WeatherDropDown;
