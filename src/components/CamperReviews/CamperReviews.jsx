import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import Review from "../Review/Review";

import css from "./CamperReviews.module.css";
import BookCamper from "../BookCamper/BookCamper";

const CamperReviews = () => {
  const { reviews = [] } = useSelector(selectCamper);

  return (
    <div className={css.features}>
      <ul className={css.reviewList}>
        {reviews.map((review, index) => (
          <li key={index}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      <BookCamper />
    </div>
  );
};
export default CamperReviews;
