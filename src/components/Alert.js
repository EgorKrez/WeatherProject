import React from "react";
import { useSelector } from "react-redux";
import { alertSelector } from "../redux/selectors";

const Alert = () => {
  let isShowAlert = useSelector(alertSelector);

  return isShowAlert ? (
    <div className="alert-wrapper">
      <div className="alert alert-danger" role="alert">
        Something went wrong!!
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Alert;
