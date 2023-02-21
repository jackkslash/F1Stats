import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchCurrentSeason } from '../api';
import CountdownTimer from './CountdownTimer';

const CurrentSeason = () => {

  const currentYear = new Date().getFullYear();
  console.log(currentYear)
  const { data, error, isLoading }: any = useQuery(["currentSeason", currentYear], () => fetchCurrentSeason(currentYear));

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  const finalRaces: any = [];
  const season = data.MRData.RaceTable.season;
  const races = data.MRData.RaceTable.Races.map((data: any) => {

    const dateCheck = new Date().getTime();
    const trackDate = new Date(data.date + "T" + data.time).getTime();

    if (dateCheck <= trackDate) {
      const race = {
        round: data.round,
        name: data.raceName,
        date: data.date,
        time: data.time,
        trackDate: trackDate
      }
      finalRaces.push(race);
    }
  })

  const finalRace = finalRaces.map((data:any)=>{
    return(
          <tr key={data.round} className="hover:bg-slate-100">
          <th>{data.round}</th>
          <th>{data.name}</th>
          <th>{data.date} </th>
          <th>{data.time.replace("Z", "")}</th>
        </tr>
    )
  })


  //map trought remaining dates null if 0

  return (

    <div className='flex flex-row justify-center gap-20 pt-6'>
      <div>
        <h1 className='text-lg font-bold'>{season} Season Calendar</h1>
        <table className='table-primary  [&_th]:table-primary [&_th]:p-2 text-sm'>
          <thead className='table-primary bg-slate-200' >
            <tr>
              <th>Round</th>
              <th>Track</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tr>
            <th>...</th>
            <th>...</th>
            <th>...</th>
            <th>...</th>
          </tr>
          {finalRace}
        </table>
        <Link to={"/Seasons/"+season}><p className='underline text-end pt-2'>Full season</p></Link>
      </div>
      <div className='flex items-center justify-center'>
        <CountdownTimer race={finalRaces[0]} ></CountdownTimer>
      </div>
    </div>
  )
}

export default CurrentSeason

