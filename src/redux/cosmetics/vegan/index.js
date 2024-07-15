import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const VeganGet = createAsyncThunk(
  "vegan/get",
  async () => {
    try {
      const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow');
      return response.data;
    } catch (error) {
      console.error("Error fetching vegan eyebrow products:", error);
      throw error;
    }
  }
);

const VeganSlice = createSlice({
  name: "vegan",
  initialState: {
    veganGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(VeganGet.pending, (state) => {
        state.veganGet.loading = true;
        state.veganGet.success = false;
        state.veganGet.error = false;
      })
      .addCase(VeganGet.fulfilled, (state, action) => {
        state.veganGet.loading = false;
        state.veganGet.success = true;
        state.veganGet.data = action.payload;
        state.veganGet.error = false;
      })
      .addCase(VeganGet.rejected, (state) => {
        state.veganGet.loading = false;
        state.veganGet.success = false;
        state.veganGet.error = true;
      });
  },
});

export default VeganSlice.reducer;
