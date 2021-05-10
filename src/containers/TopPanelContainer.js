import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TopPanel from "../components/TopPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import { citySelector, timeSelector } from "../redux/selectors";
import { showWeatherForNowFromCurrentLocationRequestAction, 
  showWeatherFor5DaysFromCurrentLocationRequestAction, 
  showWeatherForNowFromSelectedLocationRequestAction, 
  showWeatherFor5DaysFromSelectedLocationRequestAction } from "../redux/actions"

const TopPanelContainer = () => {
  const dispatch = useDispatch();
  const city = useSelector(citySelector);
  const time = useSelector(timeSelector);

  const chooseAction = () => {
    if (city === "Current Location" && time === "For Now") {
      console.log('cur loc for now');
      console.log(city);
      console.log(time); 
      dispatch(showWeatherForNowFromCurrentLocationRequestAction([city, time]))
    } 
    if (city === "Current Location" && time === "For 5 Days") {
      console.log('cur loc for 5');
      console.log(city);
    console.log(time);
      dispatch(showWeatherFor5DaysFromCurrentLocationRequestAction([city, time]))
    } 
    if (city !== "Current Location" && city && time === "For Now") {
      console.log('sel loc for now');
      console.log(city);
    console.log(time);
      dispatch(showWeatherForNowFromSelectedLocationRequestAction([city, time]))
    } 
    if (city !== "Current Location" && city && time === "For 5 Days") {
      console.log('sel loc for 5');
      console.log(city);
    console.log(time);
      dispatch(showWeatherFor5DaysFromSelectedLocationRequestAction([city, time]))
    } 
  }

  return <TopPanel dispatch={dispatch} city={city} time={time} chooseAction={chooseAction}/>;
};

export default TopPanelContainer;
