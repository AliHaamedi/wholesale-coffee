import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    id: 1,
    name: "دانه روبوستا ۳۰٪ دارک",
    price: 130000,
    description: "دانه قهوه روبوستا ویژگی های منحصربفردی دارد ",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg"
  },
  ordering: false,
  remainingWeight: 1000
};

export const coffeeListSlice = createSlice({
  name: 'coffeeList',
  initialState,
  reducers: {
    toggle : (state) =>{ state.ordering = !state.ordering}
  },
});

export const {toggle} = coffeeListSlice.actions
export default coffeeListSlice.reducer;