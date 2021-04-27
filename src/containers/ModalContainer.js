import React, { useCallback, useState } from "react";
import ModalWindow from "../components/ModalWindow";
import classNames from "classnames";

import "../styles/components.css";
import "../styles/item.css";
import "../styles/modal.css";

const ModalContainer = ({ active, setActive, firstForecast, forecast }) => {
  const [curForecast, setCurForecast] = useState(firstForecast);

  const showForecast = useCallback((forecast) => {
    setCurForecast(forecast);
  }, []);

  const modalClass = (weather, itemcClass) =>
    classNames(itemcClass, {
      sunny: weather === "Clear",
      cloud: weather === "Clouds",
      rain: weather === "Rain",
    });

  return (
    <ModalWindow
      active={active}
      setActive={setActive}
      firstForecast={firstForecast}
      forecast={forecast}
      curForecast={curForecast || firstForecast}
      showForecast={showForecast}
      modalClass={modalClass}
    />
  );
};

export default ModalContainer;
