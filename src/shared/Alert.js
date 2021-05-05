import React from "react";
import { useSelector } from "react-redux";
import { alertSelector } from "../redux/selectors";

const Alert = () => {
  let isShowAlert = useSelector(alertSelector);

  return (
    <div>
      {isShowAlert && (
        <div className="alert alert-danger custom-alert" role="alert">
          Something went wrong!!
        </div>
      )}
    </div>
  );
};

export default Alert;
