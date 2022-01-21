import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from './auth'

//add this slice to the .configureStore method
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});


export default store;