import { useState } from "react";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./VehicleType.module.css";

const VehicleType = ({ onTypeSelect }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleTypeClick = (type) => {
    // Преобразуем тип в нужное значение
    let transformedType;
    if (type === "fully-integrated") {
      transformedType = "fullyIntegrated";
    } else if (type === "van") {
      transformedType = "panelTruck";
    } else {
      transformedType = type; // для "alcove"
    }

    // Если тип уже выбран, сбрасываем выбор
    if (selectedType === transformedType) {
      setSelectedType(""); // Сбрасываем выбранный тип
      onTypeSelect(""); // Вызываем колбэк с пустым значением
    } else {
      setSelectedType(transformedType);
      onTypeSelect(transformedType); // Вызываем колбэк с выбранным типом
    }
  };

  return (
    <div>
      <p className={css.vehicleEquipmentTitle}>Vehicle type</p>
      <ul className={css.vehicleEquipmentList}>
        {["alcove", "fully-integrated", "van"].map((type) => {
          // Преобразуем type для сравнения
          const displayType =
            type === "van"
              ? "panelTruck"
              : type === "fully-integrated"
              ? "fullyIntegrated"
              : type;

          return (
            <EquipmentItem
              key={type}
              iconId={`icon-${type}`}
              text={type
                .replace("-", " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())} // Форматирование текста
              className={`${css.vehicleEquipment} ${
                selectedType === displayType ? css.selected : ""
              }`} // Условное добавление класса
              iconClassName={css.vehicleAddInfoIcon}
              onClick={() => handleTypeClick(type)} // Обработчик клика
            />
          );
        })}
      </ul>
    </div>
  );
};

export default VehicleType;
