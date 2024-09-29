import { useMemo } from "react";
import { formatCamperForm } from "../../js/formatCamperForm";
import { formatValueWithUnit } from "../../js/formatValueWithUnit";

import css from "./VehicleDetails.module.css";

const VehicleDetails = ({ form, length, width, height, tank, consumption }) => {
  const formattedForm = useMemo(() => formatCamperForm(form), [form]);
  const formattedLength = useMemo(() => formatValueWithUnit(length), [length]);
  const formattedWidth = useMemo(() => formatValueWithUnit(width), [width]);
  const formattedHeight = useMemo(() => formatValueWithUnit(height), [height]);
  const formattedTank = useMemo(() => formatValueWithUnit(tank), [tank]);
  const formattedConsumption = useMemo(
    () => formatValueWithUnit(consumption),
    [consumption]
  );

  return (
    <>
      <p className={css.title}>Vehicle details</p>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Form</p> <p>{formattedForm}</p>
        </li>
        <li className={css.item}>
          <p>Length</p> <p>{formattedLength}</p>
        </li>
        <li className={css.item}>
          <p>Width</p> <p>{formattedWidth}</p>
        </li>
        <li className={css.item}>
          <p>Height</p> <p>{formattedHeight}</p>
        </li>
        <li className={css.item}>
          <p>Tank</p> <p>{formattedTank}</p>
        </li>
        <li className={css.item}>
          <p>Consumption</p> <p>{formattedConsumption}</p>
        </li>
      </ul>
    </>
  );
};

export default VehicleDetails;
