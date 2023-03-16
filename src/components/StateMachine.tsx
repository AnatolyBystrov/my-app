import React from "react";
import { Login } from "./login";
import { Logout } from "./logout";
import { CounterUpdater } from "./counterUpdater";
import { CounterMultiply } from "./CounterMultiply";
import { CounterSquare } from "./counterSquare";
import { useSelector } from "react-redux";

export const StateMachine: React.FC = () => {   
    const authUser = useSelector<any, string>(state=>state.auth.authUser)
    
   return <>
    {!authUser && <Login/>}
    {authUser && !authUser.includes('admin') && 
    (<><CounterUpdater operand={2}/><CounterSquare/><Logout/></>)}
    {authUser && authUser.includes('admin') && 
    (<><CounterUpdater operand={2} reset={true}/><CounterMultiply factor={2}/><CounterSquare/><Logout/></>)}
     </>
    
    
}