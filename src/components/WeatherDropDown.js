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
  time,
  unit,
  days,
  units,
  createDropDownItems,
  checkWeather,
  dispatch
}) => {
  return (
    <form className="dropdown-wrapper">
      <div className="input-panel">
        <input ref={inputRef} />
        <button
          className="btn btn-primary btn-lg"
          onClick={() => checkWeather()}
        >
          Enter city
        </button>
      </div>
      <div className="dropdown-panel">
        <button
        className="btn btn-primary btn-lg"
        onClick={() => dispatch(changeCurrentCityAction('Current Location'))}
       >
        Current Location
      </button>
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
