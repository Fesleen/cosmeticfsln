import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EyesGet = createAsyncThunk(
  "eyes/get",
  async () => {
    try {
      const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner');
      return response.data;
    } catch (error) {
      console.error("Error fetching eyeliner products:", error);
      throw error;
    }
  }
);

const EyesSlice = createSlice({
  name: "eyes",
  initialState: {
    eyesGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(EyesGet.pending, (state) => {
        state.eyesGet.loading = true;
        state.eyesGet.success = false;
        state.eyesGet.error = false;
      })
      .addCase(EyesGet.fulfilled, (state, action) => {
        state.eyesGet.loading = false;
        state.eyesGet.success = true;
        state.eyesGet.data = action.payload;
        state.eyesGet.error = false;
      })
      .addCase(EyesGet.rejected, (state) => {
        state.eyesGet.loading = false;
        state.eyesGet.success = false;
        state.eyesGet.error = true;
      });
  },
});

export default EyesSlice.reducer;
