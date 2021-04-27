import { Modal } from "bootstrap";
import React from "react";

const ModalContainer = ({ active, setActive, firstForecast, forecast }) => {
  const showInfo = () => "showInfo";

  return (
    <div>
      <Modal
        active={active}
        setActive={setActive}
        firstForecast={firstForecast}
        forecast={forecast}
        showInfo={showInfo}
      />
    </div>
  );
};

export default ModalContainer;
