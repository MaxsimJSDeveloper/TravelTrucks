import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";

import Review from "../Review/Review";
import CamperDetailsWrapper from "../../shared/CamperDetailsWrapper/CamperDetailsWrapper";

import css from "./CamperReviews.module.css";

const CamperReviews = () => {
  const { reviews = [] } = useSelector(selectCamper);

  return (
    <CamperDetailsWrapper>
      <ul className={css.reviewList}>
        {reviews.map((review, index) => (
          <li key={index}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </CamperDetailsWrapper>
  );
};
export default CamperReviews;
