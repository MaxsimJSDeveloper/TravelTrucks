import CamperImg from "../CamperImg/CamperImg";
import sprite from "../../img/symbol-defs.svg";

import css from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews = [],
  } = camper || {};

  return (
    <div className={css.cardContainer}>
      <div className={css.mainInfo}>
        <p>{name}</p>
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
        <div className={css.stats}>
          <p>&euro;{price}.00</p>
        </div>
      </div>
      <CamperImg gallery={gallery || []} showSingle={false} />

      <p className={css.description}>{description}</p>
    </div>
  );
};

export default CamperDetails;
