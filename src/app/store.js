import { configureStore } from '@reduxjs/toolkit';
import coffeeListSlice from '../Components/wholesale/slice/coffeeListSlice';
import cartSlice from '../Components/wholesale/slice/cartSlice';

export const store = configureStore({
  reducer: {
    coffeeList: coffeeListSlice,
    cart: cartSlice
  },
});
