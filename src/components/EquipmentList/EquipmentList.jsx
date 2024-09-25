import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./EquipmentList.module.css";

export const EquipmentList = ({
  transmission,
  engine,
  AC,
  kitchen,
  bathroom,
  TV,
  radio,
  //   refrigerator,
  //   microwave,
  //   gas,
  //   water,
}) => {
  return (
    <ul className={css.equipmentList}>
      {transmission && (
        <EquipmentItem iconId="icon-diagram" text={transmission} />
      )}
      {engine && <EquipmentItem iconId="icon-fuel-pump" text={engine} />}
      {AC && <EquipmentItem iconId="icon-wind" text="AC" />}
      {kitchen && <EquipmentItem iconId="icon-cup-hot" text="Kitchen" />}
      {bathroom && <EquipmentItem iconId="icon-bath" text="Bathroom" />}
      {TV && <EquipmentItem iconId="icon-tv" text="TV" />}
      {radio && <EquipmentItem iconId="icon-radio" text="Radio" />}
      {/* {refrigerator && (
        <EquipmentItem iconId="icon-fridge" text="Refrigerator" />
      )}
      {microwave && <EquipmentItem iconId="icon-microwave" text="Microwave" />}
      {gas && <EquipmentItem iconId="icon-gas" text="Gas" />}
      {water && <EquipmentItem iconId="icon-water" text="Water" />} */}
    </ul>
  );
};
