import { useSelector } from "react-redux";
import css from "./CamperFeatures.module.css";
import { selectCamper } from "../../redux/campers/selectors";
import { EquipmentList } from "../EquipmentList/EquipmentList";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import BookingForm from "../BookingForm/BookingForm";
import BookCamper from "../BookCamper/BookCamper";

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
    <>
      <div className={css.features}>
        <div className={css.card}>
          <EquipmentList {...equipmentProps} />
          <VehicleDetails />
        </div>
        <BookCamper />
      </div>
    </>
  );
};

export default CamperFeatures;
