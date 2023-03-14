import React from "react";
type Props = {
    message: string
}
export const Alert: React.FC<Props> =({message}) =>
{
    return <div style={{border:"solid 0.5px red", color: "black", background: "", fontSize: "0.5em"}}>{message}</div>;

}