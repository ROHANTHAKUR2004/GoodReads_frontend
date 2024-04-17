//import { createSlice } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=d93b4fd2";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";


const initialState = {
           
     shelfList: []

};

 export const getallbookshelf = createAsyncThunk("course/getallBooks" , async () =>{
    try {
        const response = axiosInstance.get("bookshelves", {headers :{
            'x-access-token' : localStorage.getItem('token')
        }});
        toast.promise(response, {
            loading : 'Loading Bookshelfs',
            success : 'Successfully loaded Bookshles! ',
            error : 'something went wrong '
        });
        return await response ;

    } catch (error) {
        console.log(error);
        toast.error("Cann't Download bookshelf ,something went wrong");
    }

 });


 export const addtobookshelf = createAsyncThunk("course/addbooktshelf" , async (data) =>{
    try {
        const response = axiosInstance.patch(`/bookshelves/${data.shelfName}/add/${data.bookId}`,{}, 
        {headers :{
            'x-access-token' : localStorage.getItem('token')
        }});
        toast.promise(response, {
            loading : 'adding Book to shelfs',
            success : 'Successfully added Book to shlefs! ',
            error : 'something went wrong '
        });
        return await response ;

    } catch (error) {
        console.log(error);
        toast.error("Cann't Download bookshelf ,something went wrong");
    }

 });

 

const shelfSlice = createSlice({
    name: 'shelf',
    initialState,
    reducers : {
     
    },
    extraReducers:(builder) =>{
        builder.addCase(getallbookshelf.fulfilled, (state, action) =>{
            if(action?.payload?.data?.data){
                state.shelfList = action?.payload?.data?.data;   
            }
        });

    }
});


export default shelfSlice.reducer;