import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";

import css from "./VehicleDetails.module.css";

const VehicleDetails = () => {
  const { form, length, width, height, tank, consumption } =
    useSelector(selectCamper);

  return (
    <>
      <p className={css.title}>Vehicle details</p>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Form:</p> <p>{form}</p>
        </li>
        <li className={css.item}>
          <p>Length:</p> <p>{length}</p>
        </li>
        <li className={css.item}>
          <p>Width:</p> <p>{width}</p>
        </li>
        <li className={css.item}>
          <p>Height:</p> <p>{height}</p>
        </li>
        <li className={css.item}>
          <p>Tank:</p> <p>{tank}</p>
        </li>
        <li className={css.item}>
          <p>Consumption:</p> <p>{consumption}</p>
        </li>
      </ul>
    </>
  );
};

export default VehicleDetails;
