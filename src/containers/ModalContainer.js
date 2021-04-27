import React, { useCallback, useState } from "react";
import ModalWindow from "../components/ModalWindow";
import classNames from "classnames";

import "../styles/components.css";
import "../styles/item.css";
import "../styles/modal.css";

const ModalContainer = ({ active, setActive, startForecast, forecast }) => {
  const [activeForecast, setactiveForecast] = useState(startForecast);

  const showForecast = useCallback((forecast) => {
    setactiveForecast(forecast);
  }, []);

  const closeModal = () => {
    setActive(false);
    setactiveForecast(null);
  };

  const modalClass = (weather, itemcClass) =>
    classNames(itemcClass, {
      sunny: weather === "Clear",
      cloud: weather === "Clouds",
      rain: weather === "Rain",
    });

  return (
    <ModalWindow
      active={active}
      startForecast={startForecast}
      forecast={forecast}
      activeForecast={activeForecast || startForecast}
      showForecast={showForecast}
      closeModal={closeModal}
      modalClass={modalClass}
    />
  );
};

export default ModalContainer;
