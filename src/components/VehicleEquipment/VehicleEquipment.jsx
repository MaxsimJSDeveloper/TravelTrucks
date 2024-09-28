import { useState } from "react";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./VehicleEquipment.module.css";

const VehicleEquipment = ({ onEquipmentSelect }) => {
  const [selectedEquipment, setSelectedEquipment] = useState({});

  const handleEquipmentClick = (equipment) => {
    const newSelection = {
      ...selectedEquipment,
      [equipment]: !selectedEquipment[equipment], // Переключаем состояние
    };

    setSelectedEquipment(newSelection);
    onEquipmentSelect(newSelection); // Обновляем родительский компонент с новыми фильтрами
  };

  return (
    <div>
      <p className={css.vehicleEquipmentTitle}>Vehicle equipment</p>
      <ul className={css.vehicleEquipmentList}>
        {["AC", "automatic", "kitchen", "TV", "bathroom"].map((item) => (
          <EquipmentItem
            key={item}
            iconId={`icon-${item}`}
            text={item}
            className={css.vehicleEquipment}
            iconClassName={css.vehicleAddInfoIcon}
            onClick={() => handleEquipmentClick(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default VehicleEquipment;
