import {createSlice} from "@reduxjs/toolkit";
// import { logDatas } from "../../../utils/functions";

export const userSlice = createSlice({
    name : "user",
    initialState : JSON.parse(window.localStorage.getItem("user")),
    reducers : {
        login : (state,action)=>{
            // state = action.payload;
            // console.log("Heloooooooooo");
            // logDatas(action.payload,"utilisateur recu");
            window.localStorage.setItem("user",JSON.stringify(action.payload));
            return JSON.parse(window.localStorage.getItem("user"));
        },
        register : (state,action) =>{
            state = action.payload;
            return state;
        },
        logout : () =>{
            window.localStorage.removeItem("user");
            return null;
        }
    }
})

export const {login,logout,register} = userSlice.actions;