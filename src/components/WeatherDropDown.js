import React from "react";
import { DropdownButton } from "react-bootstrap";
import {
  changeCurrentCityAction,
  changeForecastTimeAction,
} from "../redux/actions";
import "../styles/components.css";

const WeatherDropDown = ({
  city,
  time,
  cities,
  days,
  createDropDownItems,
  onSubmit,
}) => {
  return (
    <form className="dropdown-wrapper" onSubmit={onSubmit}>
      <DropdownButton id="dropdown-basic-button" title={city} size="lg">
        {createDropDownItems(cities, changeCurrentCityAction)}
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" title={time} size="lg">
        {createDropDownItems(days, changeForecastTimeAction)}
      </DropdownButton>
    </form>
  );
};

export default WeatherDropDown;
