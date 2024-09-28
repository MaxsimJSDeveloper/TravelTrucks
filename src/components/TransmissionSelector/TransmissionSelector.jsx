import { useState } from "react";
import css from "./TransmissionSelector.module.css";

const TransmissionSelector = ({ onTransmissionSelect }) => {
  const [selectedTransmission, setSelectedTransmission] = useState("");

  const handleTransmissionChange = (transmission) => {
    setSelectedTransmission(transmission);
    onTransmissionSelect(transmission); // передаем выбор в родительский компонент
  };

  return (
    <div>
      <p className={css.transmissionTitle}>Transmission</p>
      <div className={css.transmissionOptions}>
        <button
          className={selectedTransmission === "manual" ? css.selected : ""}
          onClick={() => handleTransmissionChange("manual")}
        >
          Manual
        </button>
        <button
          className={selectedTransmission === "automatic" ? css.selected : ""}
          onClick={() => handleTransmissionChange("automatic")}
        >
          Automatic
        </button>
      </div>
    </div>
  );
};

export default TransmissionSelector;
