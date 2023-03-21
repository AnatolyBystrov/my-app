import { createSlice } from "@reduxjs/toolkit";
import { game } from "../config/game-service-config";
import { CellType } from "../model/CellType";
import GameRow from "../service/GameRow";
const initialState:{cells: CellType[] | string} =
{
cells: game.getInitialRow()
}
const gameSlice = createSlice({
    initialState:initialState,
    reducers:
    {
        move: (state, data) =>
        {state.cells = game.move(data.payload);},
        reset: (state)=>
        {state.cells= initialState.cells}
    },
    name: "gameRow"  
})
export const gameActions = gameSlice.actions;
export const gameReducer = gameSlice.reducer;