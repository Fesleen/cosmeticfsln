import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FaceGet = createAsyncThunk(
  "face/get",
  async () => {
    try {
      const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush');
      return response.data;
    } catch (error) {
      console.error("Error fetching blush products:", error);
      throw error;
    }
  }
);

const FaceSlice = createSlice({
  name: "face",
  initialState: {
    faceGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FaceGet.pending, (state) => {
        state.faceGet.loading = true;
        state.faceGet.success = false;
        state.faceGet.error = false;
      })
      .addCase(FaceGet.fulfilled, (state, action) => {
        state.faceGet.loading = false;
        state.faceGet.success = true;
        state.faceGet.data = action.payload;
        state.faceGet.error = false;
      })
      .addCase(FaceGet.rejected, (state) => {
        state.faceGet.loading = false;
        state.faceGet.success = false;
        state.faceGet.error = true;
      });
  },
});

export default FaceSlice.reducer;
