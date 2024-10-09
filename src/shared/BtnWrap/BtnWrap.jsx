import { Link } from "react-router-dom";
import css from "./BtnWrap.module.css";

const BtnWrap = ({
  type = "button",
  onClick,
  children,
  disabled,
  className,
  isBtn,
  where,
}) => {
  return isBtn ? (
    <button
      type={type}
      className={`${css.btnWrap} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <Link className={css.btnWrap} to={where}>
      {children}
    </Link>
  );
};

export default BtnWrap;
