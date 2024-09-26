import React from "react";
import classNames from "classnames";
import sprite from "../../img/symbol-defs.svg";
import css from "./EquipmentItem.module.css";

const EquipmentItem = React.memo(
  ({ iconId, text, className, iconClassName, onClick, isSelected }) => {
    return (
      <li
        className={classNames(css.equipment, className, {
          [css.selected]: isSelected,
        })}
        onClick={onClick}
      >
        <svg className={classNames(css.addInfoIcon, iconClassName)}>
          <use xlinkHref={`${sprite}#${iconId}`} />
        </svg>
        <p className={css.text}>{text}</p>
      </li>
    );
  }
);

export default EquipmentItem;
