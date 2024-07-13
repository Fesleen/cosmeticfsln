import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const VeganGet = createAsyncThunk(
    "vegan/get", async () => {
        return await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow')
            .then(res => res.data)
    })
  
  const VeganSlice = createSlice({
    name: "vegan",
    initialState: {
        veganGet: {
            loading: false,
            data: [],
            error: false,
            success: false,
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(VeganGet.pending, (state, action) => {
                state.veganGet.loading = true
            })
            .addCase(VeganGet.fulfilled, (state, action) => {
                state.veganGet.loading = false;
                state.veganGet.success = true;
                state.veganGet.data = action.payload;
                state.veganGet.error = false;
            })
            .addCase(VeganGet.rejected, (state, action) => {
                state.veganGet.loading = false;
                state.veganGet.error = true;
                state.veganGet.success = false;
            })
    }
  })
  
  export const {} = VeganSlice.actions;
  export default VeganSlice.reducer;
  