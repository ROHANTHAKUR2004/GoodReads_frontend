import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from 'Redux/Slices/AuthSlice';

import BookSliceReducer from "./Slices/BookSlice";
import shelfSliceReducer from "./Slices/ShelfSlice";


export default configureStore({
    reducer: {
        auth: authSliceReducer,
        book : BookSliceReducer,
        shelf : shelfSliceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})
});