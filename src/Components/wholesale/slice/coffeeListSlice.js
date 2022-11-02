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
    image: "https://homecoffee.ir/wp-content/uploads/2019/08/Arabica-Coffee-Beans-768x512.jpg"
  },
  {
    id: 3,
    name: "دانه لیبریکا ۳۰٪ دارک",
    price: 450000,
    description: "دانه قهوه لیبریکا ویژگی های منحصربفردی دارد ",
    image: "https://homecoffee.ir/wp-content/uploads/2019/08/Peaberry_coffee_beans_close_up-1024x682.jpg"
  }
],
  remainingWeight: 1000
};

export const coffeeListSlice = createSlice({
  name: 'coffeeList',
  initialState,
  reducers: {
    toggle : (state) =>{ state.ordering = !state.ordering},
    reduceReminingWeight : (state,actions) => {state.remainingWeight -= actions.payload}
  },
});

export const {toggle , reduceReminingWeight} = coffeeListSlice.actions
export default coffeeListSlice.reducer;