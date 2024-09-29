import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters, thunkAPI) => {
    try {
      const params = new URLSearchParams();

      if (filters.location) params.append("location", filters.location);
      if (filters.vehicleType) params.append("form", filters.vehicleType);
      if (filters.equipment.transmission) {
        params.append("transmission", filters.equipment.transmission);
      }

      Object.entries(filters.equipment).forEach(([key, value]) => {
        if (key !== "transmission" && value) {
          params.append(key, "true");
        }
      });

      params.append("page", filters.page || 1);
      params.append("limit", filters.limit || 4);

      const response = await axios.get(`/campers?${params.toString()}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
