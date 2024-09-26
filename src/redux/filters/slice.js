import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleType: "",
  equipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    toggleEquipment(state, action) {
      const equipmentIndex = state.equipment.indexOf(action.payload);
      if (equipmentIndex === -1) {
        state.equipment.push(action.payload);
      } else {
        state.equipment.splice(equipmentIndex, 1);
      }
    },
    resetFilters(state) {
      state.location = "";
      state.vehicleType = "";
      state.equipment = [];
    },
  },
});

export const { setLocation, setVehicleType, toggleEquipment, resetFilters } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
