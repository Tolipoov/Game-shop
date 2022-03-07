import {createSlice} from '@reduxjs/toolkit'

const gameslice=createSlice({
    name: 'games',
    initialState:{
        currentGame: null
    } ,
    reducers:{
        setCurrentGame:(state, action) => {
           state.currentGame=action.payload; 
        } 
    }
});

export const {setCurrentGame} =gameslice.actions
export default gameslice.reducer