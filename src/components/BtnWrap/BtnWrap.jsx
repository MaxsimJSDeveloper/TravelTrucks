import PropTypes from "prop-types";
import css from "./BtnWrap.module.css";

const BtnWrap = ({ navigate, children }) => {
  return (
    <button type="button" className={css.btnWrap} onClick={navigate}>
      {children}
    </button>
  );
};

BtnWrap.propTypes = {
  navigate: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BtnWrap;
