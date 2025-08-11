import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slice/cartSlice";
import searchReducer from "../redux/slice/searchSlice";
import authReducer from "../redux/slice/authSlice";
import errorReducer from "../redux/slice/errorSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    auth: authReducer,
    error: errorReducer,
  },
});

export default store;
