import css from "./VehicleDetails.module.css";

const VehicleDetails = ({ form, length, width, height, tank, consumption }) => {
  return (
    <>
      <p className={css.title}>Vehicle details</p>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Form:</p> <p>{form}</p>
        </li>
        <li className={css.item}>
          <p>Length:</p> <p>{length}</p>
        </li>
        <li className={css.item}>
          <p>Width:</p> <p>{width}</p>
        </li>
        <li className={css.item}>
          <p>Height:</p> <p>{height}</p>
        </li>
        <li className={css.item}>
          <p>Tank:</p> <p>{tank}</p>
        </li>
        <li className={css.item}>
          <p>Consumption:</p> <p>{consumption}</p>
        </li>
      </ul>
    </>
  );
};

export default VehicleDetails;
