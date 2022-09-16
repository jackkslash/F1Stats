import { useQuery } from '@tanstack/react-query';
import { fetchCurrentSeason } from '../api';
import CountdownTimer from './CountdownTimer';

const CurrentSeason = () => {

  const { data, error, isLoading }: any = useQuery(["currentSeason"], fetchCurrentSeason);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  const finalRaces:any = [];
  const season = data.MRData.RaceTable.season;
  const races = data.MRData.RaceTable.Races.map((data: any) => {

    const dateCheck = new Date().getTime();
    const trackDate = new Date(data.date + "T" + data.time).getTime();

    if (dateCheck <= trackDate) {
      const race = {
        name: data.raceName,
        date: data.date,
        time: data.time,
        trackDate: trackDate
      }
      finalRaces.push(race);
    }
    
    return (
      <tr key={data.round}>
        <th>{data.round}</th>
        <th>{data.raceName}</th>
        <th>{data.date} </th>
        <th>{data.time.replace("Z", "")}</th>
      </tr>
    )
  })




  return (

    <div>
      <div>
        <CountdownTimer race={finalRaces[0]} ></CountdownTimer>
      </div>
      <div>
      <h2>{season} Season Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Track</th>
            <th>Date</th>
            <th>Time</th>
            
          </tr>
        </thead>
        {races}
      </table>
      </div>
    </div>
  )
}

export default CurrentSeason

