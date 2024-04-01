import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from 'Redux/Slices/AuthSlice';

import BookSliceReducer from "./Slices/BookSlice";


export default configureStore({
    reducer: {
        auth: authSliceReducer,
        book : BookSliceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})
});