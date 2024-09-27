import * as Yup from "yup";

export const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(14, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  bookingDate: Yup.date().typeError("Invalid date format").required("Required"),
  comment: Yup.string().min(10, "Too Short!").max(50, "Too Long!"),
});
