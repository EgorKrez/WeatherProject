import React from "react";
import { DropdownButton } from "react-bootstrap";
import {
  changeCurrentCityAction,
  changeForecastTimeAction,
  changeUnit,
} from "../redux/actions";
import "../styles/components.css";

const WeatherDropDown = ({
  inputRef,
  city,
  time,
  unit,
  cities,
  days,
  units,
  createDropDownItems,
  onSubmit,
  checkWeather,
}) => {
  return (
    <form className="dropdown-wrapper" onSubmit={onSubmit}>
      <div className="input-panel">
        <input ref={inputRef} />
        <button
          className="btn btn-primary btn-lg"
          onClick={() => checkWeather()}
        >
          Check weather
        </button>
      </div>
      <div className="dropdown-panel">
        <DropdownButton id="dropdown-basic-button" title={city} size="lg">
          {createDropDownItems(cities, changeCurrentCityAction)}
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title={unit} size="sm">
          {createDropDownItems(units, changeUnit)}
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title={time} size="lg">
          {createDropDownItems(days, changeForecastTimeAction)}
        </DropdownButton>
      </div>
    </form>
  );
};

export default WeatherDropDown;
