import React, { useState } from "react";
import { Input } from "./input";
import timeZones from "../time-zones"
type Props ={
  cityCountry:string;
}
export const Timer:React.FC<Props>=(props)=>
{
   
    const styles: React.CSSProperties= {backgroundColor:"lightblue", fontSize:"2em", color: "red",
    textAlign:"center"}
    let stylesH2: React.CSSProperties= {fontSize:"1.6em",color: "red",textAlign:"center"}
    let stylesH2New: React.CSSProperties= {fontSize:"1.6em",color: "blue",textAlign:"center"}
    setTimeout(tic, 1000);
    const [time, setTime] = React.useState(new Date());
    
    function tic()
    {
       setTime(new Date())
    } 
    const intervalDuration = 10000;

    React.useEffect(() => {
      const interval = setInterval(() => {
        setChanger((styleColor) => styleColor === stylesH2 ? stylesH2New : stylesH2);
      }, intervalDuration);
      return () => clearInterval(interval);
    }, []);
      
      let [changer,setChanger] = React.useState(stylesH2);

      //HW33
      const StartTimeZoneIndex = timeZones.findIndex(element => JSON.stringify(element).includes(props.cityCountry));

      const [timeZone, setTimeZone] = React.useState(timeZones[StartTimeZoneIndex].name);

      const [newtimeZone, NewsetTimeZone] = React.useState(props.cityCountry); 
     
      function submit(value: string):string
      { 
        value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        const index =  timeZones.findIndex(element => JSON.stringify(element).includes(value));
        let res = '';
        if (index === -1) {
            res = `${value} is wrong city / country, please type again 
            (The first letter of the city or country must be capitalized)`;
        } else {
            NewsetTimeZone(value);
            setTimeZone(timeZones[index].name);
        }
        return res;
      }
      
    return <div>  
    <Input submitFn={submit} placeHolder={"enter city or country"} buttonName = "Use new timezone"/>
    <h2 style ={changer}>Current Time in {newtimeZone}</h2>
    <p style={styles}>{time.toLocaleTimeString(undefined,{timeZone})}</p>
    </div>
    }
