import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { gameActions } from "../redux/gameSlice";


export const Reset: React.FC = ()=>
{
    const dispatch = useDispatch();
    const cells = useSelector<any,string>(state=>state.gameRow.cells)
    return <div> <button onClick={()=>dispatch(gameActions.reset())}>Start new game</button></div>
}