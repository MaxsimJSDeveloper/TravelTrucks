import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./EquipmentList.module.css";

const EquipmentList = ({
  transmission,
  engine,
  AC,
  kitchen,
  bathroom,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
}) => {
  return (
    <ul className={css.equipmentList}>
      {transmission && (
        <EquipmentItem iconId="icon-transmission" text={transmission} />
      )}
      {engine && <EquipmentItem iconId="icon-fuel-pump" text={engine} />}
      {AC && <EquipmentItem iconId="icon-AC" text="AC" />}
      {kitchen && <EquipmentItem iconId="icon-kitchen" text="Kitchen" />}
      {bathroom && <EquipmentItem iconId="icon-bathroom" text="Bathroom" />}
      {TV && <EquipmentItem iconId="icon-TV" text="TV" />}
      {radio && <EquipmentItem iconId="icon-radio" text="Radio" />}
      {refrigerator && (
        <EquipmentItem iconId="icon-refrigerator" text="Refrigerator" />
      )}
      {microwave && <EquipmentItem iconId="icon-microwave" text="Microwave" />}
      {gas && <EquipmentItem iconId="icon-gas" text="Gas" />}
      {water && <EquipmentItem iconId="icon-water" text="Water" />}
    </ul>
  );
};

export default EquipmentList;
