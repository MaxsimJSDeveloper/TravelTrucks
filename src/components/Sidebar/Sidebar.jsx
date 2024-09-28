import { useDispatch, useSelector } from "react-redux";

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

import BtnWrap from "../../shared/BtnWrap/BtnWrap";
import toast from "react-hot-toast";

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.campers.filters);
  const currentPage = useSelector((state) => state.campers.currentPage);
  const limit = 4;
  const previousFilters = useRef(filters);

  const handleSearch = async () => {
    const filter = { ...filters, page: currentPage || 1, limit: limit || 4 };

    dispatch(resetCurrentPage());

    try {
      await dispatch(fetchCampers(filter));
      toast.success("Campers fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch campers.");
    }
  };

  const handleLocationChange = (location) => {
    if (previousFilters.current.location !== location) {
      dispatch(resetFilters());
    }
    dispatch(setFilters({ location }));
  };

  const handleVehicleTypeChange = (vehicleType) => {
    if (previousFilters.current.vehicleType !== vehicleType) {
      dispatch(resetFilters());
    }
    dispatch(setFilters({ vehicleType }));
  };

  useEffect(() => {
    previousFilters.current = filters;
  }, [filters]);

  return (
    <div className={css.sidebarContainer}>
      <Location onLocationChange={handleLocationChange} />
      <p className={css.title}>Filters</p>
      <VehicleEquipment />
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
