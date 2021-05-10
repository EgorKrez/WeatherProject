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
      dispatch(showWeatherForNowFromCurrentLocationRequestAction([city, time]))
    } 
    if (city === "Current Location" && time === "For 5 Days") {
      dispatch(showWeatherFor5DaysFromCurrentLocationRequestAction([city, time]))
    } 
    if (city !== "Current Location" && city && time === "For Now") {
      dispatch(showWeatherForNowFromSelectedLocationRequestAction([city, time]))
    } 
    if (city !== "Current Location" && city && time === "For 5 Days") {
      dispatch(showWeatherFor5DaysFromSelectedLocationRequestAction([city, time]))
    } 
  }

  return <TopPanel chooseAction={chooseAction}/>;
};

export default TopPanelContainer;
