import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import Review from "../Review/Review";

import css from "./CamperReviews.module.css";
import BookCamper from "../BookCamper/BookCamper";

const CamperReviews = () => {
  const { reviews = [] } = useSelector(selectCamper);

  return (
    <div className={css.features}>
      <div className={css.container}>
        <ul className={css.reviewList}>
          {reviews.map((review, index) => (
            <li key={index}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      </div>
      <BookCamper />
    </div>
  );
};
export default CamperReviews;
