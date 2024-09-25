import sprite from "../../img/symbol-defs.svg";
import css from "./EquipmentItem.module.css";

const EquipmentItem = ({ iconId, text }) => (
  <li className={css.equipment}>
    <svg className={css.addInfoIcon}>
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
    <p className={css.text}>{text}</p>
  </li>
);

export default EquipmentItem;
