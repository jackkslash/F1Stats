import { useQuery } from '@tanstack/react-query';
import { fetchCurrentSeason } from '../api';

const CurrentSeason = () => {

  const { data, error, isLoading }: any = useQuery(["currentSeason"], fetchCurrentSeason);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data.MRData.RaceTable)

  const season = data.MRData.RaceTable.season;
  const races = data.MRData.RaceTable.Races.map((data: any) => {
    return (
      <tr key={data.round}>
        <th>{data.round}</th>
        <th>{data.date} </th>
        <th>{data.time}</th>
        <th>{data.raceName}</th>
      </tr>
    )
  })

  return (

    <div>
      <h2>Current Season Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Date</th>
            <th>Time</th>
            <th>Track</th>
          </tr>
        </thead>
        {races}
      </table>
    </div>
  )
}

export default CurrentSeason

