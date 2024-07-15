import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  // Existing action to get all data
  export const CanadianGet = createAsyncThunk(
    "canadian/get", async () => {
      return await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer')
        .then(res => res.data)
  })
  
  // New action to get data by ID
  export const CanadianGetById = createAsyncThunk(
    "canadian/getById", async (id) => {
      return await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
        .then(res => res.data)
  })
  
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
      }
    },
  
    extraReducers: (builder) => {
      builder
        // Existing reducers for getting all data
        .addCase(CanadianGet.pending, (state, action) => {
          state.canadianGet.loading = true
        })
        .addCase(CanadianGet.fulfilled, (state, action) => {
          state.canadianGet.loading = false;
          state.canadianGet.success = true;
          state.canadianGet.data = action.payload;
          state.canadianGet.error = false;
        })
        .addCase(CanadianGet.rejected, (state, action) => {
          state.canadianGet.loading = false;
          state.canadianGet.error = true;
          state.canadianGet.success = false;
        })
        // New reducers for getting data by ID
        .addCase(CanadianGetById.pending, (state, action) => {
          state.canadianGetById.loading = true
        })
        .addCase(CanadianGetById.fulfilled, (state, action) => {
          state.canadianGetById.loading = false;
          state.canadianGetById.success = true;
          state.canadianGetById.data = action.payload;
          state.canadianGetById.error = false;
        })
        .addCase(CanadianGetById.rejected, (state, action) => {
          state.canadianGetById.loading = false;
          state.canadianGetById.error = true;
          state.canadianGetById.success = false;
        })
    }
  })
  
  export const {} = CanadianSlice.actions;
  export default CanadianSlice.reducer;
  