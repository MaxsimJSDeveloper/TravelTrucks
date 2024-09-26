import { useDispatch, useSelector } from "react-redux";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./VehicleEquipment.module.css";
import { selectFilters } from "../../redux/filters/selectors";
import { toggleEquipment } from "../../redux/filters/slice";
import { useEffect } from "react";

const VehicleEquipment = () => {
  const dispatch = useDispatch();
  const { equipment } = useSelector(selectFilters);

  const handleToggleEquipment = (item) => {
    console.log("Toggled equipment:", item);
    dispatch(toggleEquipment(item));
  };

  useEffect(() => {
    console.log("Current equipment:", equipment);
  }, [equipment]);

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
            onClick={() => handleToggleEquipment(item)}
            isSelected={Array.isArray(equipment) && equipment.includes(item)} // Передаем состояние выбора
          />
        ))}
      </ul>
    </div>
  );
};

export default VehicleEquipment;
