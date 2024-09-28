import React from "react";
import sprite from "../../img/symbol-defs.svg";
import css from "./EquipmentItem.module.css";

const EquipmentItem = React.memo(
  ({ iconId, text, className, iconClassName, onClick, isSelected }) => {
    const equipmentClass = `${css.equipment} ${className} ${
      isSelected ? css.selected : ""
    }`.trim();
    const iconClass = `${css.addInfoIcon} ${iconClassName}`.trim();

    return (
      <li className={equipmentClass} onClick={onClick}>
        <svg className={iconClass}>
          <use xlinkHref={`${sprite}#${iconId}`} />
        </svg>
        <p className={css.text}>{text}</p>
      </li>
    );
  }
);

export default EquipmentItem;
