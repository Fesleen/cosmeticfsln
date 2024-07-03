import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from './contact/index';
import  FaceGet  from "./blogs/face";
import  EyesGet  from "./blogs/eyes";

export const store = configureStore({
    reducer : {
        face : FaceGet,
        eyes : EyesGet,
        contact: ContactSlice
    } 
})
