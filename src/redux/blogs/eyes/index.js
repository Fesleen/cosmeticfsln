import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const EyesGet = createAsyncThunk(
    "eyes/get", async () => {
        return await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner')
            .then(res => res.data)
    })
  
  const EyesSlice = createSlice({
    name: "eyes",
    initialState: {
        eyesGet: {
            loading: false,
            data: [],
            error: false,
            success: false,
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(EyesGet.pending, (state, action) => {
                state.eyesGet.loading = true
            })
            .addCase(EyesGet.fulfilled, (state, action) => {
                state.eyesGet.loading = false;
                state.eyesGet.success = true;
                state.eyesGet.data = action.payload;
                state.eyesGet.error = false;
            })
            .addCase(EyesGet.rejected, (state, action) => {
                state.eyesGet.loading = false;
                state.eyesGet.error = true;
                state.eyesGet.success = false;
            })
    }
  })
  
  export const {} = EyesSlice.actions;
  export default EyesSlice.reducer;
  