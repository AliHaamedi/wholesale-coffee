import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inOrdering : {
    item: 1,
    name: "kala1",
    darsad: 30,
    weight: 400,
    fee: 199000,
    }
    
}


const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers:{

        }
    }
)


export default cartSlice.reducer