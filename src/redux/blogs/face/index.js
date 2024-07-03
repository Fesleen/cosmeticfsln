import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const FaceGet = createAsyncThunk(
    "face/get", async () => {
        return await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush')
            .then(res => res.data)
    })
  
  const FaceSlice = createSlice({
    name: "face",
    initialState: {
        faceGet: {
            loading: false,
            data: [],
            error: false,
            success: false,
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(FaceGet.pending, (state, action) => {
                state.faceGet.loading = true
            })
            .addCase(FaceGet.fulfilled, (state, action) => {
                state.faceGet.loading = false;
                state.faceGet.success = true;
                state.faceGet.data = action.payload;
                state.faceGet.error = false;
            })
            .addCase(FaceGet.rejected, (state, action) => {
                state.faceGet.loading = false;
                state.faceGet.error = true;
                state.faceGet.success = false;
            })
    }
  })
  
  export const {} = FaceSlice.actions;
  export default FaceSlice.reducer;
  