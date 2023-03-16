import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { counterActions, counterReducer } from "./counterSlice";
export const store: any = configureStore({
    reducer: {
        count: counterReducer,
        auth: authReducer
    }
})