import { useField, Field } from "formik";
import css from "./FormField.module.css";
import StyledFormErrorMessage from "../../shared/StyledFormErrorMessage/StyledFormErrorMessage";

const FormField = ({ extraClass, icon, ...props }) => {
  const [field, helpers] = useField(props);

  const handleChange = (event) => {
    const { value } = event.target;
    helpers.setValue(value);
  };

  return (
    <div className={css.container}>
      <Field
        className={css.input}
        name={props.name}
        placeholder={props.placeholder}
        {...field}
        {...props}
        onChange={handleChange}
        as={props.as}
      />
      {icon && icon}
      <StyledFormErrorMessage name={props.name} />
    </div>
  );
};

export default FormField;
