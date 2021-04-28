import React, { useCallback, useState } from "react";
import ModalWindow from "../components/ModalWindow";
import classNames from "classnames";

import "../styles/components.css";
import "../styles/item.css";
import "../styles/modal.css";

const ModalContainer = ({ active, setActive, weather }) => {
  const [activeForecast, setactiveForecast] = useState(weather.startForecast);

  const showForecast = useCallback((item) => {
    setactiveForecast(item);
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
      weather={{
        startForecast: weather.startForecast,
        forecast: weather.forecast,
        activeForecast: activeForecast || weather.startForecast,
      }}
      showForecast={showForecast}
      closeModal={closeModal}
      modalClass={modalClass}
    />
  );
};

export default ModalContainer;
