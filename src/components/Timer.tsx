import React from "react";
import timeZones from "../time-zones";
type Props ={
    cityCountry:string;
  }
  export const Timer:React.FC<Props>=({cityCountry})=>
  {
     
      const styles: React.CSSProperties= {backgroundColor:"lightblue", fontSize:"2em", color: "red",
      textAlign:"center"}
      let stylesH2: React.CSSProperties= {fontSize:"2em",color: "red",textAlign:"center"}
      let stylesH2New: React.CSSProperties= {fontSize:"2em",color: "blue",textAlign:"center"}
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
     
        const findIndex = timeZones.findIndex((element)=>
        {
         return element.name.split("/")[1] == cityCountry || element.countryName == cityCountry;
        });
  
        function checking (indexForChecking:number)
        {
        const res = indexForChecking === -1 ? indexForChecking = 195 : indexForChecking;
        return  res;
        }
        
        const json = JSON.stringify(timeZones[checking(findIndex)])
        const jsonObj = JSON.parse(json);
  
      return <div>
      <h2 style ={changer}> Current time {cityCountry}</h2>
      <p style={styles}>{time.toLocaleTimeString(undefined,{timeZone:jsonObj.name})}</p>
      </div>
      }
