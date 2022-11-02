import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    inOrdering : [],
    totalPrice: 0,
    totalWeight: 0
}


const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers:{
            addItem: (state , actions) => { state.inOrdering = [ ...state.inOrdering , actions.payload ];
            state.totalPrice += actions.payload.cartPrice;
            state.totalWeight += actions.payload.weight
            }
        }
    }
)


export default cartSlice.reducer

export const {addItem} = cartSlice.actions