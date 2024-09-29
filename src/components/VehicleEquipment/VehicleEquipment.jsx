import { useState, useEffect } from "react";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "../../css/filtersCardsStyles.module.css";

const VehicleEquipment = ({ currentEquipment, onUpdateFilters }) => {
  const [selectedEquipment, setSelectedEquipment] = useState(currentEquipment);

  useEffect(() => {
    setSelectedEquipment(currentEquipment);
  }, [currentEquipment]);

  const handleEquipmentClick = (equipment) => {
    let newValue;

    if (equipment === "transmission") {
      newValue =
        selectedEquipment[equipment] === "automatic" ? "" : "automatic";
    } else {
      newValue = !selectedEquipment[equipment];
    }

    const newSelected = {
      ...selectedEquipment,
      [equipment]: newValue,
    };

    setSelectedEquipment(newSelected);
    onUpdateFilters("equipment", newSelected);
  };

  return (
    <div>
      <p className={css.vehicleEquipmentTitle}>Vehicle equipment</p>
      <ul className={css.vehicleEquipmentList}>
        {["AC", "transmission", "kitchen", "TV", "bathroom"].map((item) => (
          <EquipmentItem
            key={item}
            iconId={`icon-${item}`}
            text={item === "transmission" ? "Automatic" : item}
            className={`${css.vehicleEquipment} ${
              selectedEquipment[item] ? css.selected : ""
            }`}
            iconClassName={css.vehicleAddInfoIcon}
            onClick={() => handleEquipmentClick(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default VehicleEquipment;
