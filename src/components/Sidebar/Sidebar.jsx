import { useDispatch, useSelector } from "react-redux";
import BtnWrap from "../BtnWrap/BtnWrap";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import css from "./Sidebar.module.css";
import {
  resetCurrentPage,
  resetFilters,
  setFilters,
} from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";
import { useEffect, useRef } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.campers.filters);
  const currentPage = useSelector((state) => state.campers.currentPage);
  const limit = 4;
  const previousFilters = useRef(filters);

  const handleSearch = () => {
    const filter = { ...filters, page: currentPage || 1, limit: limit || 4 };
    dispatch(resetCurrentPage());

    dispatch(fetchCampers(filter));
  };

  const handleLocationChange = (location) => {
    if (previousFilters.current.location !== location) {
      dispatch(resetFilters()); // Сброс фильтров, если они изменились
    }
    dispatch(setFilters({ location }));
  };

  const handleVehicleTypeChange = (vehicleType) => {
    if (previousFilters.current.vehicleType !== vehicleType) {
      dispatch(resetFilters());
    }
    dispatch(setFilters({ vehicleType }));
  };

  const handleEquipmentChange = (equipmentSelection) => {
    const equipmentArray = Object.keys(equipmentSelection).filter(
      (key) => equipmentSelection[key]
    );
    if (
      JSON.stringify(previousFilters.current.equipment) !==
      JSON.stringify(equipmentArray)
    ) {
      dispatch(resetFilters());
    }
    dispatch(setFilters({ equipment: equipmentArray }));
  };

  // Обновляем предыдущие фильтры
  useEffect(() => {
    previousFilters.current = filters;
  }, [filters]);

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
