import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import {apiSlice} from "./slices/apiSlice"

const store = configureStore({
    reducer: {
        [apiSlice.reducePath] : apiSlice.reducer,
        auth:authReducer,
    },
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devtools: true,
});

export default store;
