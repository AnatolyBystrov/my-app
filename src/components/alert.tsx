import React from "react";
type Props = {
    message: string
}
export const Alert: React.FC<Props> =({message}) =>
{
    return <div style={{border:"solid 1px red", color: "black", background: "red"}}>{message}</div>;
}