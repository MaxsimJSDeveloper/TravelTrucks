import sprite from "../../img/symbol-defs.svg";
import css from "./EquipmentItem.module.css";
import classNames from "classnames"; // для объединения классов

const EquipmentItem = ({ iconId, text, className, iconClassName }) => (
  <li className={classNames(css.equipment, className)}>
    <svg className={classNames(css.addInfoIcon, iconClassName)}>
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
    <p className={css.text}>{text}</p>
  </li>
);

export default EquipmentItem;
