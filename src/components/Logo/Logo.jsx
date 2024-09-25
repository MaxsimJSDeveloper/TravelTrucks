import css from "./Logo.module.css";
import sprite from "../../img/symbol-defs.svg";

const Logo = () => {
  return (
    <svg className={css.logoIcon}>
      <use xlinkHref={`${sprite}#${"icon-logo"}`} />
    </svg>
  );
};

export default Logo;
