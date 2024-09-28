import { useSelector } from "react-redux";
import css from "./CamperFeatures.module.css";
import { selectCamper } from "../../redux/campers/selectors";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import BookCamper from "../BookCamper/BookCamper";
import EquipmentList from "../EquipmentList/EquipmentList";

const CamperFeatures = () => {
  const {
    transmission,
    engine,
    AC,
    kitchen,
    bathroom,
    TV,
    radio,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = useSelector(selectCamper);

  const equipmentProps = {
    transmission,
    engine,
    AC,
    kitchen,
    bathroom,
    TV,
    radio,
  };

  const vehicleProps = { form, length, width, height, tank, consumption };

  return (
    <>
      <div className={css.features}>
        <div className={css.card}>
          <EquipmentList {...equipmentProps} />
          <VehicleDetails {...vehicleProps} />
        </div>
        <BookCamper />
      </div>
    </>
  );
};

export default CamperFeatures;
