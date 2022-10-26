import { configureStore } from '@reduxjs/toolkit';
import coffeeListSlice from '../features/coffeeList/coffeeListSlice';
import cartSlice from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    coffeeList: coffeeListSlice,
    cart: cartSlice
  },
});
