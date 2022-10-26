import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inOrdering : [{
        cartID : 22
    }]
}


const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers:{
            addItem: (state , actions) => { state.inOrdering = [ ...state.inOrdering , actions.payload ];
            console.log("Add")
            },
            deleteItem : (state ,actions) => {
            state.
            console.log(state.inOrdering[0].cartID)
            console.log("Delete " + actions.payload) }
        }
    }
)


export default cartSlice.reducer

export const {addItem , deleteItem} = cartSlice.actions