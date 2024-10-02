import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import BtnWrap from "../../shared/BtnWrap/BtnWrap";
import { BookingSchema } from "../../js/validation";
import styles from "../../css/formsGeneralStyles.module.css";
import css from "./BookingForm.module.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; // Важно не забыть стили

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Formik
      initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
      validationSchema={BookingSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted with values:", values);
        toast.success("Booking successfully completed!");
        resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <Field
          type="text"
          name="name"
          placeholder="Name*"
          className={css.inputField}
        />
        <div className={styles.wrap}>
          <ErrorMessage
            name="name"
            component="span"
            className={styles.errorMessage}
          />
        </div>

        <Field
          type="text"
          name="email"
          placeholder="Email*"
          className={css.inputField}
        />
        <div className={styles.wrap}>
          <ErrorMessage
            name="email"
            component="span"
            className={styles.errorMessage}
          />
        </div>

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className={css.inputField}
          placeholderText="Booking date*"
          dateFormat="yyyy-MM-dd"
          dayClassName={(date) => {
            const day = date.getDay(); // Получаем день недели (0 - воскресенье, 1 - понедельник и т.д.)
            return day === 0 || day === 6 ? "weekend" : "weekday"; // Выходные и будние дни
          }}
          renderDay={(day, date, selected, onClick) => (
            <CustomDay day={day} selected={selected} onClick={onClick} />
          )}
        />
        <div className={styles.wrap}>
          <ErrorMessage
            name="bookingDate"
            component="span"
            className={styles.errorMessage}
          />
        </div>

        <Field
          as="textarea"
          name="comment"
          placeholder="Comment"
          className={`${css.inputField} ${css.textAreaField}`}
        />
        <div className={styles.wrap}>
          <ErrorMessage
            name="comment"
            component="span"
            className={styles.errorMessage}
          />
        </div>

        <div>
          <BtnWrap type="submit">Send</BtnWrap>
        </div>
      </Form>
    </Formik>
  );
};

export default BookingForm;
