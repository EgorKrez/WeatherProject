import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeCurrentCityAction } from "../redux/actions";
import "../styles/components.css";

const WeatherDropDown = () => {
  const dispatch = useDispatch();
  const cities = ["London", "Manchester", "Newcastle", "Newport"];
  const days = ["For Now", "For 5 Days", "For 16 Days"];

  const createDropDownItems = (array, method) =>
    array.map((item, i) => (
      <Dropdown.Item key={i} onClick={() => dispatch(method(item))}>
        {item}
      </Dropdown.Item>
    ));

  return (
    <div className="dropdown-wrapper">
      <DropdownButton id="dropdown-basic-button" title="Select city" size="lg">
        {createDropDownItems(cities, changeCurrentCityAction)}
      </DropdownButton>
      <DropdownButton
        id="dropdown-basic-button"
        title="Select forecast"
        size="lg"
      >
        {createDropDownItems(days, changeCurrentCityAction)}
      </DropdownButton>
    </div>
  );
};

export default WeatherDropDown;
