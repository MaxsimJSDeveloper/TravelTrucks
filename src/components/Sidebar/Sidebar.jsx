import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useCallback } from "react";

import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";

import {
  resetCurrentPage,
  resetFilters,
  setFilters,
} from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";

import BtnWrap from "../../shared/BtnWrap/BtnWrap";
import toast from "react-hot-toast";

import css from "./Sidebar.module.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { filters, currentPage } = useSelector((state) => state.campers);

  const limit = 4;
  const previousFilters = useRef(filters);

  const handleSearch = useCallback(async () => {
    const filter = { ...filters, page: currentPage || 1, limit };
    console.log(filter);

    dispatch(resetCurrentPage());

    try {
      const result = await dispatch(fetchCampers(filter)).unwrap();
      if (result.length > 0) {
        toast.success("Campers fetched successfully!");
      }
    } catch (error) {
      if (error.status === 404) {
        toast.error("No campers found. Please try different filters.");
      } else {
        toast.error("Failed to fetch campers.");
      }
    }
  }, [dispatch, filters, currentPage, limit]);

  const updateFilters = useCallback(
    (key, value) => {
      const newFilters = { ...filters, [key]: value }; // Объединяем новые фильтры с предыдущими
      dispatch(setFilters(newFilters)); // Обновляем фильтры
    },
    [dispatch, filters]
  );

  const handleLocationChange = useCallback(
    (location) => updateFilters("location", location),
    [updateFilters]
  );

  const handleVehicleTypeChange = useCallback(
    (vehicleType) => updateFilters("vehicleType", vehicleType),
    [updateFilters]
  );

  useEffect(() => {
    previousFilters.current = filters;
  }, [filters]);

  return (
    <div className={css.sidebarContainer}>
      <Location onLocationChange={handleLocationChange} />
      <p className={css.title}>Filters</p>
      <VehicleEquipment
        currentEquipment={filters.equipment}
        onUpdateFilters={updateFilters}
      />
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
