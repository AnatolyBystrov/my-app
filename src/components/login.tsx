import React from "react";
import { Input } from "./input";
import { useDispatch } from "react-redux";
import { authAction } from "../redux/authSlice";

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    
    const submitFn = (inputValue: string) => {
        let res: string = inputValue
        dispatch(authAction.login(res))
        return res;
    }

    return <div>
    <Input submitFn={submitFn} placeHolder={"Enter name"} buttonName={"Login"}/>
    
</div>
}