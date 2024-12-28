// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice
    cart: cartReducer,
  },
});

export default store;
