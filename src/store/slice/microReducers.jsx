import { createSlice } from "@reduxjs/toolkit";


const microReducers=createSlice({
    name:"Harshit",
    initialState:[],
    reducers:{

        // reducer to save LoginInfo 
        saveLoginInfo(state,action){
            state.push(action.payload);
        },
    }
})


export default microReducers.reducer;
export const {saveLoginInfo}=microReducers.actions;