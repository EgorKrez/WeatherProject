import React from "react";
import { useSelector } from "react-redux";
import { citySelector, timeSelector } from "../redux/selectors";

const Title = () => {
  return (
    <div className="title">
      {useSelector(citySelector)} Weather {useSelector(timeSelector)}
    </div>
  );
};

export default Title;
