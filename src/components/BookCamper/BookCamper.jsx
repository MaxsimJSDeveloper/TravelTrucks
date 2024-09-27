import BookingForm from "../BookingForm/BookingForm";
import css from "./BookCamper.module.css";

const BookCamper = () => {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.title}>Book your campervan now</p>
        <p className={css.decr}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <BookingForm />
    </div>
  );
};

export default BookCamper;
