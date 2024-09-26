import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/filters/slice";

import sprite from "../../img/symbol-defs.svg";
import css from "./Location.module.css";

const Location = () => {
  const dispatch = useDispatch();

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  return (
    <div className={css.locationContainer}>
      <p className={css.locationTitle}>Location</p>
      <div className={css.inputContainer}>
        <input
          type="text"
          className={css.inputField}
          onChange={handleLocationChange}
        />
        <svg className={css.icon}>
          <use xlinkHref={`${sprite}#icon-map`} />
        </svg>
      </div>
    </div>
  );
};

export default Location;
