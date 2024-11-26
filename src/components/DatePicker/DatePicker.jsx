import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.css";
import FormField from "../FormField/FormField";

const Datepicker = ({ selected, setFieldValue }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <FormField
      name="bookingDate"
      value={value}
      onClick={onClick}
      placeholder="Booking date*"
    />
  ));

  return (
    <DatePicker
      selected={selected}
      onChange={(date) => {
        setFieldValue("bookingDate", date);
      }}
      customInput={<CustomInput />}
    />
  );
};

export default Datepicker;
