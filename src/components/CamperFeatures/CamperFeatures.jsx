import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";

import VehicleDetails from "../VehicleDetails/VehicleDetails";
import EquipmentList from "../EquipmentList/EquipmentList";
import CamperDetailsWrapper from "../../shared/CamperDetailsWrapper/CamperDetailsWrapper";

import css from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const {
    transmission,
    engine,
    AC,
    kitchen,
    bathroom,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
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
    refrigerator,
    microwave,
    gas,
    water,
  };

  const vehicleProps = { form, length, width, height, tank, consumption };

  return (
    <>
      <CamperDetailsWrapper>
        <div className={css.card}>
          <EquipmentList {...equipmentProps} />
          <VehicleDetails {...vehicleProps} />
        </div>
      </CamperDetailsWrapper>
    </>
  );
};

export default CamperFeatures;
