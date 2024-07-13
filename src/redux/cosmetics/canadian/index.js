import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const CanadianGet = createAsyncThunk(
    "canadian/get", async () => {
        return await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer')
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
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(CanadianGet.pending, (state, action) => {
                state.canadianGet.loading = true
            })
            .addCase(CanadianGet.fulfilled, (state, action) => {
                state.canadianGet.loading = false;
                state.canadianGet.success = true;
                state.canadianGet.data = action.payload;
                state.canadianGet.error = false;
            })
            .addCase(   CanadianGet.rejected, (state, action) => {
                state.canadianGet.loading = false;
                state.canadianGet.error = true;
                state.canadianGet.success = false;
            })
    }
  })
  
  export const {} = CanadianSlice.actions;
  export default CanadianSlice.reducer;
  