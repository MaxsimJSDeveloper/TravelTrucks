import { useEffect, useState } from "react";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./VehicleType.module.css";

const VehicleType = ({ onTypeSelect, currentFilters }) => {
  const [selectedType, setSelectedType] = useState(
    currentFilters.vehicleType || ""
  );

  useEffect(() => {
    setSelectedType(currentFilters.vehicleType || "");
  }, [currentFilters]);

  const handleTypeClick = (type) => {
    let transformedType;
    if (type === "fully-integrated") {
      transformedType = "fullyIntegrated";
    } else if (type === "van") {
      transformedType = "panelTruck";
    } else {
      transformedType = type;
    }

    if (selectedType === transformedType) {
      setSelectedType("");
      onTypeSelect("");
    } else {
      setSelectedType(transformedType);
      onTypeSelect(transformedType);
    }
  };

  return (
    <div>
      <p className={css.vehicleEquipmentTitle}>Vehicle type</p>
      <ul className={css.vehicleEquipmentList}>
        {["alcove", "fully-integrated", "van"].map((type) => {
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
                .replace(/\b\w/g, (c) => c.toUpperCase())}
              className={`${css.vehicleEquipment} ${
                selectedType === displayType ? css.selected : ""
              }`}
              iconClassName={css.vehicleAddInfoIcon}
              onClick={() => handleTypeClick(type)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default VehicleType;
