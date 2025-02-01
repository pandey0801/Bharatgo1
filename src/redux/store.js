import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import cart slice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Register cart reducer
  },
});

export default store;
