import { createSlice } from "@reduxjs/toolkit";
const initialState={
    data:[],
    showMovie:[],
    error:"",
    loading:false
}
export const ValuesMovieReducer=createSlice({
    name:"ValueMovies",
    initialState, reducers:{
        setData:(state, {payload})=>{
            state.data=payload
            state.showMovie=payload[0]
        }
    }
})