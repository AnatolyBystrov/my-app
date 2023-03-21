import {configureStore} from "@reduxjs/toolkit";
import { gameReducer } from "./gameSlice";

export const store:any = configureStore({
    reducer:{
        gameRow: gameReducer
    }

})
