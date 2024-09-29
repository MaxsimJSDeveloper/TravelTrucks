import { useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/campers/selectors";

import Loader from "../Loader/Loader";
import Camper from "../Camper/Camper";

import css from "./CampersList.module.css";

const CampersList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectCampers);

  return (
    <div>
      {isLoading && !error && <Loader />}
      {campers.length > 0 ? (
        <ul className={css.camperList}>
          {campers.map((camper) => (
            <li className={css.camperItem} key={camper.id}>
              <Camper camper={camper} />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Campers not found !</h1>
      )}
    </div>
  );
};

export default CampersList;
