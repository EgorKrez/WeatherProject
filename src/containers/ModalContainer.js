import React, { useCallback, useState } from "react";
import ModalWindow from "../components/ModalWindow";
import classNames from "classnames";
import "../styles/components.css";
import "../styles/item.css";
import "../styles/modal.css";
import { useSelector } from "react-redux";
import { unitSelector } from "../redux/selectors";
import { translateNumbers } from "../util/formatters/unitFormatter";

const ModalContainer = ({ active, setActive, weather }) => {
  const unit = useSelector(unitSelector);
  const [activeForecast, setActiveForecastFor5] = useState(
    weather.startForecast
  );

  const showForecast = useCallback((nextForecast, pastForecast) => {
    changeActiveStatus(nextForecast);
    changeActiveStatus(pastForecast);
    setActiveForecastFor5(nextForecast);
  }, []);

  const changeActiveStatus = (item) => {
    item.isActive = !item.isActive;
  };

  const getItemClass = (isActive, weather) =>
    isActive
      ? modalClass(weather, "modal-menu-item active-item")
      : modalClass(weather, "modal-menu-item");

  const closeModal = useCallback(() => {
    setActive(false);
    setActiveForecastFor5(null);
  }, [setActive]);

  const modalClass = (weather, itemClass) => {
    return classNames(itemClass, {
      sunny: weather === "Clear",
      cloud: weather === "Clouds",
      rain: weather === "Rain",
      mist: weather === "Mist",
      snow: weather === "Snow",
    });
  };

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
      getItemClass={getItemClass}
      translateNumbers={translateNumbers}
      unit={unit}
    />
  );
};

export default ModalContainer;
