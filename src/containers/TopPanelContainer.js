import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TopPanel from "../components/TopPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import { citySelector, timeSelector } from "../redux/selectors";
const TopPanelContainer = () => {
  const dispatch = useDispatch();
  const city = useSelector(citySelector);
  const time = useSelector(timeSelector);

  return <TopPanel dispatch={dispatch} city={city} time={time} />;
};

export default TopPanelContainer;
