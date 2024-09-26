import sprite from "../../img/symbol-defs.svg";
import css from "./Location.module.css";

const Location = () => {
  return (
    <div className={css.locationContainer}>
      <p className={css.locationTitle}>Location</p>
      <div className={css.inputContainer}>
        <input type="text" className={css.inputField} />
        <svg className={css.icon}>
          <use xlinkHref={`${sprite}#icon-map`} />
        </svg>
      </div>
    </div>
  );
};

export default Location;
