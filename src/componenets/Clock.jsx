import { useState } from "react";
import Style from "./Clock.module.css";

export default function Clock() {
 
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let cdate = date.toLocaleDateString();
  let session = hour<= 12 ? "AM" : "PM";
  hour = hour>12 ? hour-12 : hour;  
  const [value, setvalue] = useState({
    clockhour : hour,
    clockminute : minute,
    clocksecond : second,
    clocksession : session,
    currentdate : cdate,

  });
  //if  we want only time then use tolacaleTimeString() method

  setInterval(() => {

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let cdate = date.toDateString();
    second = second<10 ? "0"+second : second;
    let session = hour<= 12 ? "AM" : "PM";
    hour = hour>12 ? hour-12 : hour;  
    setvalue({
      clockhour : hour,
      clockminute : minute,
      clocksecond : second ,
      clocksession : session,
      currentdate : cdate,
    })
  }, 1000);

  return (
    <div id={Style.mainContainer}>
      <div id={Style.container}>
        <div id={Style.time}><span>{value.clockhour}</span>:<span>{value.clockminute}</span>:<span>{value.clocksecond}</span><span id={Style.session}>{value.clocksession}</span></div>
        <div id={Style.mydate}>{value.currentdate}</div>
      </div>
    </div>
  );
}