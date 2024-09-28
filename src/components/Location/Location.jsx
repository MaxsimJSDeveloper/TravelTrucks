import { toast } from "react-hot-toast";
import { Field, Form, Formik, ErrorMessage } from "formik";

import sprite from "../../img/symbol-defs.svg";
import { LocationSchema } from "../../js/validation";

import css from "./Location.module.css";

const Location = ({ onLocationChange }) => {
  return (
    <>
      <div className={css.locationContainer}>
        <p className={css.locationTitle}>Location</p>
        <Formik
          initialValues={{ location: "Ukraine, Lviv" }}
          validationSchema={LocationSchema}
          onSubmit={(values) => {
            onLocationChange(values.location);
            toast.success("Location changed!");
          }}
        >
          {({ handleSubmit }) => (
            <Form className={css.inputContainer} onSubmit={handleSubmit}>
              <Field
                type="text"
                name="location"
                placeholder="Location*"
                className={css.inputField}
                onBlur={handleSubmit}
              />
              <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-map`} />
              </svg>
              <div className={css.wrap}>
                <ErrorMessage
                  name="location"
                  component="span"
                  className={css.errorMessage}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Location;
