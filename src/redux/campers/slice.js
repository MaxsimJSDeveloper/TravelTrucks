import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

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
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementPage(state) {
      state.currentPage += 1;
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

export const { incrementPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
