import {  createSlice } from '@reduxjs/toolkit';
import spiderman from "../assets/spiderman.jpg"
import stangerThings from "../assets/stangerThings.jpg"
import profile from "../assets/profile.jpg"
import { ProfileReducer } from '../types/typeProfilesReducer';
const initialState:ProfileReducer={
    profiles:[{ nombrePerfil:"Jorge", caratula:spiderman}, { nombrePerfil:"Felipe", caratula:stangerThings}, { nombrePerfil:"Valentina", caratula:profile}], 
    profileSelected:{ nombrePerfil:"", caratula:""}
}
const ProfileReducer=createSlice({
    name:"Profiles",
    initialState, 
    reducers:{
        changeProfileSelected(state, {payload}){
            state.profileSelected=payload
        }
    }
})
export const {changeProfileSelected}=ProfileReducer.actions
export default ProfileReducer