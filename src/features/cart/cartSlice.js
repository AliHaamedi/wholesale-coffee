import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inOrdering : [{
        name: "روبوستا",
        weight: 220,
        cartPrice: 45000,
        },
        {
            name: "نییمی",
            weight: 899,
            cartPrice: 87300,
            },
            {
                name: "سیمنسکشنی",
                weight: 656,
                cartPrice: 98292,
                }]
    
}


const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers:{
            addItem: (state , actions) => {state.inOrdering = [ ...state.inOrdering , actions.payload ]}
        }
    }
)


export default cartSlice.reducer

export const {addItem} = cartSlice.actions