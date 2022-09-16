import { useEffect, useState } from "react";
import getDuration from "../util/ultis";

const CountdownTimer = ({race}:any) => {
  
	    let d2:any = new Date().getTime();
	    const diff = (race.trackDate-d2);

      const [timeLeft, setTimeLeft] = useState(getDuration(diff));

      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(getDuration(diff));
        }, 1000);
        return () => clearTimeout(timer);
      });
   

  return (
    <div>
      
      <div>Days: {timeLeft.days} Hours: {timeLeft.hours} Mins: {timeLeft.minutes} Seconds: {timeLeft.seconds}</div>
      <div>Until -&gt; {race.name}</div>
    </div>
    
  )
}

export default CountdownTimer