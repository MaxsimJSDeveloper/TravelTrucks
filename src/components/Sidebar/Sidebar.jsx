import { useDispatch, useSelector } from "react-redux";
import BtnWrap from "../BtnWrap/BtnWrap";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";

import css from "./Sidebar.module.css";
import { selectFilters } from "../../redux/filters/selectors";
import { fetchCampers } from "../../redux/campers/operations";

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSearch = () => {
    console.log("Search button clicked");
    console.log("Current filters:", filters);
    dispatch(fetchCampers(filters));
  };

  return (
    <>
      <div className={css.sidebarContainer}>
        <Location />
        <p className={css.title}>Filters</p>
        <VehicleEquipment />
        <VehicleType />
        <div>
          <BtnWrap navigate={handleSearch}>Search</BtnWrap>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
