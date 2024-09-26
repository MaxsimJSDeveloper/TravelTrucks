import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";

import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={css.sidebarContainer}>
        <Location />
        <VehicleEquipment />
      </div>
    </>
  );
};

export default Sidebar;
