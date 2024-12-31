import { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";

import { fetchCampers } from "../../redux/campers/operations";
import { resetCurrentPage, setFilters } from "../../redux/campers/slice";

import BtnWrap from "../../shared/BtnWrap/BtnWrap";
import toast from "react-hot-toast";

import css from "./Sidebar.module.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { filters, currentPage } = useSelector((state) => state.campers);

  const limit = 4;
  const previousFilters = useRef(filters);

  const handleSearch = useCallback(async () => {
    dispatch(resetCurrentPage());

    const filter = { ...filters, page: currentPage || 1, limit };

    try {
      const result = await dispatch(fetchCampers(filter)).unwrap();
      if (result) {
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
      const newFilters = { ...filters, [key]: value };
      dispatch(setFilters(newFilters));
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
      <VehicleType
        onTypeSelect={handleVehicleTypeChange}
        currentFilters={filters}
      />
      <div>
        <BtnWrap type="button" onClick={handleSearch} isBtn={true}>
          Search
        </BtnWrap>
      </div>
    </div>
  );
};

export default Sidebar;
