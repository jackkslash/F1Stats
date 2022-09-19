import { useEffect, useState } from "react";
import getDuration from "../util/ultis";

const CountdownTimer = ({ race }: any) => {

  let d2: any = new Date().getTime();
  const diff = (race.trackDate - d2);

  const [timeLeft, setTimeLeft] = useState(getDuration(diff));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getDuration(diff));
    }, 1000);
    return () => clearTimeout(timer);
  });


  return (
    <div className="flex flex-col items-center justify-center pb-6">
      <h2>Time till the {race.name}</h2>
      <table className='[&_th]:p-2'>
        <thead className='' >
          <tr>
            <th>{timeLeft.days}</th>
            <th>{timeLeft.hours}</th>
            <th>{timeLeft.minutes}</th>
            <th>{timeLeft.seconds}</th>
          </tr>
        </thead>
        <tr>
          <th>Days</th>
          <th>Hours</th>
          <th>Mins</th>
          <th>Seconds</th>
        </tr>
      </table>


    </div>

  )
}

export default CountdownTimer