import React from "react";
import ModalWindow from "../components/Modal";

const ModalContainer = ({ active, setActive, firstForecast, forecast }) => {
  return (
    <ModalWindow
      active={active}
      setActive={setActive}
      firstForecast={firstForecast}
      forecast={forecast}
    />
  );
};

export default ModalContainer;
