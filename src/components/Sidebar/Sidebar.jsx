import { useDispatch, useSelector } from "react-redux";

import BtnWrap from "../BtnWrap/BtnWrap";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import css from "./Sidebar.module.css";
import { setFilters } from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.campers.filters);

  const handleSearch = () => {
    dispatch(fetchCampers(filters));
  };

  const handleLocationChange = (location) => {
    dispatch(setFilters({ location }));
  };

  const handleVehicleTypeChange = (vehicleType) => {
    dispatch(setFilters({ vehicleType }));
  };

  const handleEquipmentChange = (equipment) => {
    dispatch(setFilters({ equipment }));
  };

  return (
    <div className={css.sidebarContainer}>
      <Location onLocationChange={handleLocationChange} />
      <p className={css.title}>Filters</p>
      <VehicleEquipment onEquipmentSelect={handleEquipmentChange} />
      <VehicleType onTypeSelect={handleVehicleTypeChange} />
      <div>
        <BtnWrap type="button" onClick={handleSearch}>
          Search
        </BtnWrap>
      </div>
    </div>
  );
};

export default Sidebar;
