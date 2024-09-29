import BookCamper from "../../components/BookCamper/BookCamper";
import css from "./CamperDetailsWrapper.module.css";

const CamperDetailsWrapper = ({ children }) => {
  return (
    <div className={css.features}>
      {children}
      <BookCamper />
    </div>
  );
};

export default CamperDetailsWrapper;
