import { Link } from "react-router-dom";

import sprite from "../../img/symbol-defs.svg";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={css.logoLink}>
      <svg className={css.logoIcon}>
        <use xlinkHref={`${sprite}#${"icon-logo"}`} />
      </svg>
    </Link>
  );
};

export default Logo;
