import { useSelector } from "react-redux";
import css from "./CamperFeatures.module.css";
import { selectCamper } from "../../redux/campers/selectors";
import { EquipmentList } from "../EquipmentList/EquipmentList";
import VehicleDetails from "../VehicleDetails/VehicleDetails";

const CamperFeatures = () => {
  const { transmission, engine, AC, kitchen, bathroom, TV, radio } =
    useSelector(selectCamper);

  const equipmentProps = {
    transmission,
    engine,
    AC,
    kitchen,
    bathroom,
    TV,
    radio,
  };
  return (
    <div className={css.card}>
      <EquipmentList {...equipmentProps} />
      <VehicleDetails />
    </div>
  );
};

export default CamperFeatures;
