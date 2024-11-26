import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import BtnWrap from "../../shared/BtnWrap/BtnWrap";
import { BookingSchema } from "../../js/validation";
import styles from "../../css/formsGeneralStyles.module.css";
import css from "./BookingForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import Datepicker from "../DatePicker/DatePicker";

const BookingForm = () => {
  const handleSubmit = (values) => {
    console.log("Form values: ", values);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
      validationSchema={BookingSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        toast.success("Booking successfully completed!");
        resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
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

          <Datepicker
            selected={values.bookingDate}
            setFieldValue={setFieldValue}
          />

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
            <BtnWrap isBtn type="submit">
              Send
            </BtnWrap>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
