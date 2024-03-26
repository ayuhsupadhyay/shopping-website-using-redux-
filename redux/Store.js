import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from @reduxjs/toolkit
import cartSlice from "./slices/cartSlice";


// Correct the function name to configureStore
export const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default store;
