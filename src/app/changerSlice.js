import { createSlice } from '@reduxjs/toolkit';
export const changerSlice= createSlice({
    name: "changer",
    initialState:{
        detail: []
    },
    reducers:{
        changeName:(state, action)=>{
            state.detail.push(action.payload);
            console.log(state.detail[0])
        },
        changeAddress:(state, action)=>{
            state.address.push(action.payload);
        },
        deleteName: (state, action)=>{
            state.detail.slice(action.payload, action.payload)
            console.log(state.detail[1]);
            // console.log(state.detail.length);
        }
    }
});
export const {changeName, changeAddress ,deleteName}=changerSlice.actions;

export default changerSlice.reducer;