import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  camper: {},
  currentPage: 1,
  total: 0,
  isLoading: false,
  error: null,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  filters: {
    location: "",
    vehicleType: "",
    equipment: [],
  },
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementPage(state) {
      state.currentPage += 1;
    },
    resetFilters(state) {
      state.filters = {
        location: "",
        vehicleType: "",
        equipment: [],
      };
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    addToFavorites(state, action) {
      const exists = state.favorites.some(
        (favorite) => favorite.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const newCampers = action.payload.items;
        const uniqueCampers = newCampers.filter(
          (c) =>
            !state.items.some((existingCamper) => existingCamper.id === c.id)
        );

        state.items = [...state.items, ...uniqueCampers];
        state.total = action.payload.total;
      })
      .addCase(fetchCamperById.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
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
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
