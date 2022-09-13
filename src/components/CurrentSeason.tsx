import { useQuery } from '@tanstack/react-query';
import { fetchCurrentSeason } from '../api';

const CurrentSeason = () => {

    const {data, error, isLoading}:any = useQuery(["currentSeason"], fetchCurrentSeason);

	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;

    console.log(data.MRData.RaceTable)

    const races = data.MRData.RaceTable.Races.map((data:any)=> { return (
        <li key={data.round}>{data.round} {data.season} {data.date} {data.time} {data.raceName}</li>
    )})

  return (
    <div>{races}</div>
  )
}

export default CurrentSeason

