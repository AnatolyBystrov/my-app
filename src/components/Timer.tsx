import React from "react"
export const Timer:React.FC = () =>{
const styles: React.CSSProperties ={backgroundColor:"lightblue",fontSize:"2em"};
    return <div>
        <p style={styles}>{new Date().toTimeString()}</p>
    </div>
}