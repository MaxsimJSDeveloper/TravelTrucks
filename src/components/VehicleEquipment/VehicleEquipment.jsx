import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./VehicleEquipment.module.css";

const VehicleEquipment = () => {
  return (
    <div>
      <p className={css.vehicleEquipmentTitle}>Vehicle equipment</p>
      <ul className={css.vehicleEquipmentList}>
        <EquipmentItem
          iconId="icon-wind"
          text="AC"
          className={css.vehicleEquipment}
          iconClassName={css.vehicleAddInfoIcon}
        />
        <EquipmentItem
          iconId="icon-diagram"
          text="Automatic"
          className={css.vehicleEquipment}
          iconClassName={css.vehicleAddInfoIcon}
        />
        <EquipmentItem
          iconId="icon-cup-hot"
          text="Kitchen"
          className={css.vehicleEquipment}
          iconClassName={css.vehicleAddInfoIcon}
        />
        <EquipmentItem
          iconId="icon-tv"
          text="TV"
          className={css.vehicleEquipment}
          iconClassName={css.vehicleAddInfoIcon}
        />
        <EquipmentItem
          iconId="icon-bath"
          text="Bathroom"
          className={css.vehicleEquipment}
          iconClassName={css.vehicleAddInfoIcon}
        />
      </ul>
    </div>
  );
};

export default VehicleEquipment;
