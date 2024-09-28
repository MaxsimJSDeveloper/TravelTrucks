import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters, thunkAPI) => {
    try {
      const params = new URLSearchParams();

      if (filters.location) params.append("location", filters.location);
      if (filters.vehicleType)
        params.append("vehicleType", filters.vehicleType);
      if (filters.equipment && filters.equipment.length > 0) {
        filters.equipment.forEach((equipment) => {
          params.append(`equipment[]`, equipment);
        });
      }
      params.append("page", filters.page || 1);
      params.append("limit", filters.limit || 4);

      console.log("Final Params:", params.toString());

      const response = await axios.get(`/campers?${params.toString()}`);

      console.log(response.data);

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
