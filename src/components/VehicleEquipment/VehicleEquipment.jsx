import { useState } from "react";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./VehicleEquipment.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/campers/slice";

const VehicleEquipment = () => {
  const dispatch = useDispatch();
  const [selectedEquipment, setSelectedEquipment] = useState({});

  const handleEquipmentClick = (equipment) => {
    const newSelected = {
      ...selectedEquipment,
      [equipment]: !selectedEquipment[equipment],
    };

    setSelectedEquipment(newSelected);

    dispatch(setFilters(newSelected));
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
