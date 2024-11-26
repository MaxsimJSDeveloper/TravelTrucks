import { ErrorMessage } from "formik";
import styles from "../../css/formsGeneralStyles.module.css";

const StyledFormErrorMessage = ({ children, ...props }) => {
  return (
    <div className={styles.wrap}>
      <ErrorMessage className={styles.errorMessage} {...props} component="div">
        {children}
      </ErrorMessage>
    </div>
  );
};

export default StyledFormErrorMessage;
