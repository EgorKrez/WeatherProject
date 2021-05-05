import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { loadingSelector } from "../redux/selectors";
import "../styles/components.css";

const Loader = () => {
  let loading = useSelector(loadingSelector);

  return (
    <div className="loading-container">
      {loading ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <div className="loading-container"></div>
      )}
    </div>
  );
};

export default Loader;
