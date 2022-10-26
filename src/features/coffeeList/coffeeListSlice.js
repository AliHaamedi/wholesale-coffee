import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [{
    id: 1,
    name: "دانه روبوستا ۳۰٪ دارک",
    price: 130000,
    description: "دانه قهوه روبوستا ویژگی های منحصربفردی دارد ",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg"
  },
  {
    id: 2,
    name: "دانه عربیکا ۳۰٪ دارک",
    price: 221000,
    description: "دانه قهوه عربیکا ویژگی های منحصربفردی دارد ",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg"
  },
  {
    id: 3,
    name: "دانه میکس ۳۰٪ دارک",
    price: 450000,
    description: "دانه قهوه میکس ویژگی های منحصربفردی دارد ",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg"
  }
],
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