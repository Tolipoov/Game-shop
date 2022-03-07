import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/Reducer'
import gameReducer from './games/Reducer'

export const store=configureStore({
    reducer:{
        cart: cartReducer,
        game: gameReducer,
    },
})