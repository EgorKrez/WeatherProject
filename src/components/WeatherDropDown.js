import React from "react";
import { DropdownButton } from "react-bootstrap";
import {
  changeCurrentCityAction,
  changeForecastTimeAction,
  changeUnit,
} from "../redux/actions";
import "../styles/components.css";

const WeatherDropDown = ({
  city,
  time,
  unit,
  cities,
  days,
  units,
  createDropDownItems,
  onSubmit,
}) => {
  return (
    <form className="dropdown-wrapper" onSubmit={onSubmit}>
      <DropdownButton id="dropdown-basic-button" title={city} size="lg">
        {createDropDownItems(cities, changeCurrentCityAction)}
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" title={unit} size="sm">
        {createDropDownItems(units, changeUnit)}
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" title={time} size="lg">
        {createDropDownItems(days, changeForecastTimeAction)}
      </DropdownButton>
    </form>
  );
};

export default WeatherDropDown;
