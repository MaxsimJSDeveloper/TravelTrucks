import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/campers/selectors";

import CamperImg from "../CamperImg/CamperImg";
import CamperInfo from "../CamperInfo/CamperInfo";
import Loader from "../Loader/Loader";

import css from "./CamperDetails.module.css";

const CamperDetails = ({ camper = {} }) => {
  const {
    name,
    price = 0,
    rating,
    location,
    description,
    gallery,
    reviews = [],
  } = camper;

  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.cardContainer}>
          <div className={css.mainInfo}>
            <p>{name}</p>
            <CamperInfo rating={rating} location={location} reviews={reviews} />
            <div className={css.stats}>
              <p>&euro;{price.toFixed(2)}</p>
            </div>
          </div>

          <CamperImg gallery={gallery || []} showSingle={false} />

          <p className={css.description}>{description}</p>
        </div>
      )}
    </>
  );
};

export default CamperDetails;
