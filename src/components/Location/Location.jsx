import { toast } from "react-hot-toast";
import { Field, Form, Formik, ErrorMessage } from "formik";

import sprite from "../../img/symbol-defs.svg";
import { LocationSchema } from "../../js/validation";

import styles from "../../css/formsGeneralStyles.module.css";
import css from "./Location.module.css";

const Location = ({ onLocationChange }) => {
  return (
    <>
      <div className={css.locationContainer}>
        <p className={css.locationTitle}>Location</p>
        <Formik
          initialValues={{ location: "" }}
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
                placeholder="Ukraine, Lviv"
                className={css.inputField}
                onBlur={handleSubmit}
              />
              <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-map`} />
              </svg>
              <div className={styles.wrap}>
                <ErrorMessage
                  name="location"
                  component="span"
                  className={styles.errorMessage}
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
