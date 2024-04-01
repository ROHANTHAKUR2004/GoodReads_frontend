//import { createSlice } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=d93b4fd2";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";


const initialState = {
           
     bookList : []

};

 export const getallbooks = createAsyncThunk("course/getallBooks" , async () =>{
    try {
        const response = axiosInstance.get("books");
        toast.promise(response, {
            loading : 'Loading Books',
            success : 'Successfully loaded Books! ',
            error : 'something went wrong '
        });
        return await response ;

    } catch (error) {
        console.log(error);
        toast.error("Cann't Download books ,something went wrong");
    }

 });

 

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers : {
     
    },
    extraReducers:(builder) =>{
        builder.addCase(getallbooks.fulfilled, (state, action) =>{
            if(action?.payload?.data?.data){
                state.bookList = action?.payload?.data?.data;
                
            }
        });

    }
});


export default bookSlice.reducer;