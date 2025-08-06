import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/slice/cartSlice';
import searchReducer from '../redux/slice/searchSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search : searchReducer,
  },
});

export default store;