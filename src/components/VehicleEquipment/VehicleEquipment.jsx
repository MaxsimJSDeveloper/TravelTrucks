import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./VehicleEquipment.module.css";

const VehicleEquipment = ({ setEquipment }) => {
  // const handleChange = (e, item) => {
  //   setEquipment((prev) =>
  //     e.target.checked ? [...prev, item] : prev.filter((i) => i !== item)
  //   );
  // };

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
          />
        ))}
      </ul>
    </div>
  );
};

export default VehicleEquipment;
