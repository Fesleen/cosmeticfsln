import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action to get all data
export const CanadianGet = createAsyncThunk(
  "canadian/get",
  async () => {
    try {
      const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer');
      return response.data;
    } catch (error) {
      console.error("Error fetching Canadian bronzer products:", error);
      throw error;
    }
  }
);

// Action to get data by ID
export const CanadianGetById = createAsyncThunk(
  "canadian/getById",
  async (id) => {
    try {
      const response = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching Canadian product with ID ${id}:`, error);
      throw error;
    }
  }
);

const CanadianSlice = createSlice({
  name: "canadian",
  initialState: {
    canadianGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    canadianGetById: {
      loading: false,
      data: null,
      error: false,
      success: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers for getting all data
      .addCase(CanadianGet.pending, (state) => {
        state.canadianGet.loading = true;
        state.canadianGet.success = false;
        state.canadianGet.error = false;
      })
      .addCase(CanadianGet.fulfilled, (state, action) => {
        state.canadianGet.loading = false;
        state.canadianGet.success = true;
        state.canadianGet.data = action.payload;
        state.canadianGet.error = false;
      })
      .addCase(CanadianGet.rejected, (state) => {
        state.canadianGet.loading = false;
        state.canadianGet.success = false;
        state.canadianGet.error = true;
      })
      // Reducers for getting data by ID
      .addCase(CanadianGetById.pending, (state) => {
        state.canadianGetById.loading = true;
        state.canadianGetById.success = false;
        state.canadianGetById.error = false;
      })
      .addCase(CanadianGetById.fulfilled, (state, action) => {
        state.canadianGetById.loading = false;
        state.canadianGetById.success = true;
        state.canadianGetById.data = action.payload;
        state.canadianGetById.error = false;
      })
      .addCase(CanadianGetById.rejected, (state) => {
        state.canadianGetById.loading = false;
        state.canadianGetById.success = false;
        state.canadianGetById.error = true;
      });
  },
});

export default CanadianSlice.reducer;
