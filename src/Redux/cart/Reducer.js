import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name: 'cart',
    initialState:{
        itemsInCart: []
    } ,
    reducers:{
        setItemInCart:(state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteitemInCart:(state, action) => {
            state.itemsInCart=state.itemsInCart.filter(game => game.id !== action.payload)
        } 
    }
});

export const {setItemInCart, deleteitemInCart} =cartSlice.actions
export default cartSlice.reducer