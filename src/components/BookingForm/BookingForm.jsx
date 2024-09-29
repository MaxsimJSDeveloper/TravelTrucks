import { BookingSchema } from "../../js/validation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import BtnWrap from "../../shared/BtnWrap/BtnWrap";
import { toast } from "react-hot-toast";

import styles from "../../css/formsGeneralStyles.module.css";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  return (
    <>
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

          <Field
            type="date"
            name="bookingDate"
            placeholder="Booking date*"
            className={css.inputField}
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
    </>
  );
};

export default BookingForm;
