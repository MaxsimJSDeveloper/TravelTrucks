import sprite from "../../img/symbol-defs.svg";
import css from "./CamperInfo.module.css";

const CamperInfo = ({ rating, location, reviews }) => {
  return (
    <div className={css.addInfo}>
      <div className={css.addInfoItem}>
        <svg className={css.addInfoIcon}>
          <use xlinkHref={`${sprite}#${"icon-star-active"}`} />
        </svg>
        <p className={css.reviews}>
          {rating}({reviews.length} Reviews)
        </p>
      </div>
      <div className={css.addInfoItem}>
        <svg className={css.addInfoIcon}>
          <use xlinkHref={`${sprite}#${"icon-map"}`} />
        </svg>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default CamperInfo;
