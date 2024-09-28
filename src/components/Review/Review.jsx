import sprite from "../../img/symbol-defs.svg";
import css from "./Review.module.css";

const Review = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;

  const initial = reviewer_name[0].toUpperCase();

  const stars = Array.from(
    { length: 5 },
    (_, index) => index < reviewer_rating
  );

  return (
    <div className={css.reviewContainer}>
      <div className={css.user}>
        <div className={css.avatar}>
          <span>{initial}</span>
        </div>
        <div className={css.infoContainer}>
          <p>{reviewer_name}</p>
          <ul className={css.stars}>
            {stars.map((filled, index) => (
              <li key={index}>
                <svg className={css.star}>
                  <use
                    xlinkHref={`${sprite}#${
                      filled ? "icon-star-active" : "icon-star"
                    }`}
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className={css.comment}>{comment}</p>
      </div>
    </div>
  );
};

export default Review;
