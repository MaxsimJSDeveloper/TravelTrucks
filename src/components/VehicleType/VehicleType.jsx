import { useDispatch, useSelector } from "react-redux";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./VehicleType.module.css";
import { setVehicleType } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";
import { useEffect } from "react";

const VehicleType = () => {
  const dispatch = useDispatch();
  const { vehicleType } = useSelector(selectFilters);

  const handleSelectVehicleType = (type) => {
    dispatch(setVehicleType(type));
  };

  useEffect(() => {
    console.log("Current equipment:", vehicleType);
  }, [vehicleType]);

  return (
    <div>
      <p className={css.vehicleEquipmentTitle}>Vehicle type</p>
      <ul className={css.vehicleEquipmentList}>
        {["alcove", "fully-integrated", "van"].map((type) => (
          <EquipmentItem
            key={type}
            iconId={`icon-${type}`}
            text={type}
            className={css.vehicleEquipment}
            iconClassName={css.vehicleAddInfoIcon}
            onClick={() => handleSelectVehicleType(type)}
            isSelected={vehicleType === type}
          />
        ))}
      </ul>
    </div>
  );
};

export default VehicleType;
