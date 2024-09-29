import CamperImg from "../CamperImg/CamperImg";
import CamperInfo from "../CamperInfo/CamperInfo";

import css from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  const {
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
        <CamperInfo rating={rating} location={location} reviews={reviews} />
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
