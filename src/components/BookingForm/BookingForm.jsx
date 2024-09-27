import { useId } from "react";
import { BookingSchema } from "../../js/validation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import BtnWrap from "../BtnWrap/BtnWrap";
import { Toaster, toast } from "react-hot-toast";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  const id = useId();

  return (
    <>
      <Toaster />
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
            id={`${id}-n`}
            className={css.inputField}
          />
          <div className={css.wrap}>
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessage}
            />
          </div>
          <Field
            type="text"
            name="email"
            placeholder="Email*"
            id={`${id}-p`}
            className={css.inputField}
          />
          <div className={css.wrap}>
            <ErrorMessage
              name="email"
              component="span"
              className={css.errorMessage}
            />
          </div>

          <Field
            type="date"
            name="bookingDate"
            placeholder="Booking date*"
            id={`${id}-p`}
            className={css.inputField}
          />
          <div className={css.wrap}>
            <ErrorMessage
              name="bookingDate"
              component="span"
              className={css.errorMessage}
            />
          </div>

          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            id={`${id}-comment`}
            className={`${css.inputField} ${css.textAreaField}`}
          />

          <div className={css.wrap}>
            <ErrorMessage
              name="comment"
              component="span"
              className={css.errorMessage}
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
