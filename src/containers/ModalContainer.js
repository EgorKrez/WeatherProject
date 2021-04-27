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

  const clearForecast = (e) => {
    console.log("eeee");
    console.log(e.stopPropagation());
  };

  const modalClass = (weather, itemcClass) =>
    classNames(itemcClass, {
      sunny: weather === "Clear",
      cloud: weather === "Clouds",
      rain: weather === "Rain",
    });

  console.log(firstForecast);

  return (
    <ModalWindow
      active={active}
      setActive={setActive}
      firstForecast={firstForecast}
      forecast={forecast}
      curForecast={curForecast || firstForecast}
      showForecast={showForecast}
      clearForecast={clearForecast}
      modalClass={modalClass}
    />
  );
};

export default ModalContainer;
