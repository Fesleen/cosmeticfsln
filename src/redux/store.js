import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from './contact/index';
import FaceGet from "./blogs/face";
import EyesGet from "./blogs/eyes";
import CanadianGet from "./cosmetics/canadian";
import VeganGet from "./cosmetics/vegan";
import productsReducer from './products/index';

const store = configureStore({
    reducer: {
        face: FaceGet,
        eyes: EyesGet,
        canadian: CanadianGet,
        vegan: VeganGet,
        contact: ContactSlice,
        products: productsReducer,
    }
});

export default store;
