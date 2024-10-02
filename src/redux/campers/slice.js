import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const initialState = {
  items: [],
  camper: {},
  currentPage: 1,
  total: 0,
  isLoading: false,
  error: null,
  favorites: [],
  filters: {
    location: "",
    vehicleType: "",
    equipment: {
      AC: false,
      transmission: "",
      kitchen: false,
      TV: false,
      bathroom: false,
    },
  },
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementPage(state) {
      state.currentPage += 1;
    },
    resetCurrentPage(state) {
      state.currentPage = 1;
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
    setFilters(state, action) {
      const { location, vehicleType, equipment } = action.payload;

      state.filters = {
        ...state.filters,
        location,
        vehicleType,
        equipment: {
          ...state.filters.equipment,
          ...equipment,
        },
      };
    },
    addToFavorites(state, action) {
      const exists = state.favorites.some(
        (favorite) => favorite.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        if (state.currentPage === 1) {
          state.items = action.payload.items;
        } else {
          const uniqueCampers = action.payload.items.filter(
            (c) =>
              !state.items.some((existingCamper) => existingCamper.id === c.id)
          );
          state.items.push(...uniqueCampers);
        }

        state.total = action.payload.total;
      })
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.rejected, handleRejected)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      });
  },
});

export const {
  incrementPage,
  addToFavorites,
  removeFromFavorites,
  setFilters,
  resetFilters,
  resetCurrentPage,
} = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
