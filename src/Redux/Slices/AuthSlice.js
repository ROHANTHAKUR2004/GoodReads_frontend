//import { createSlice } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=d93b4fd2";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";


const initialState = {

    isloggedIn : localStorage.getItem('isLoggedIn') || false,
    username : localStorage.getItem('username') || '',
    token : localStorage.getItem('token') || ''

};

 export const signup = createAsyncThunk("auth/signup" , async (data) =>{
    try {
        const response = axiosInstance.post("signup", data);
        toast.promise(response, {
            loading : 'submitting form',
            success : 'Successfully signed up!! ',
            error : 'something went wrong '
        });


        return await response;
    } catch (error) {
        console.log(error);
        toast.error("Cann't signup,something went wrong")
    }
 });

 export const signin = createAsyncThunk("auth/signin" , async (data) =>{
    try {
        const response = axiosInstance.post("signin", data);
        toast.promise(response, {
            loading : 'submitting form',
            success : 'Successfully signed In!! ',
            error : 'something went wrong '
        });


        return await response;
    } catch (error) {
        console.log(error);
        if(error?.response?.data?.err){
            toast.error(error?.response?.data?.err);
        }
        else{
        toast.error("Cann't signIn,something went wrong")
        }
    }
 });

const authSlice = createSlice({
    name: 'auth',
   initialState,
    reducers : {},
    extraReducers:(builder) =>{
        builder.addCase(signin.fulfilled, (state, action) =>{
          if(action?.payload?.data){
             state.isloggedIn = (action?.payload?.data?.data != undefined);
             state.username = action?.payload?.data?.data?.username;
             state.token = action?.payload?.data?.data?.token;
             localStorage.setItem("isloggedIn" , (action?.payload?.data?.data != undefined));
             localStorage.setItem("username" , action?.payload?.data?.data?.username);
             localStorage.setItem("token" , action?.payload?.data?.data?.token);
          }
        });

    }
});

export default authSlice.reducer;