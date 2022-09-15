import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchCurrentDriverStandings } from '../api';

const DriverStandings = () => {
  const { data, error, isLoading }: any = useQuery(["currentDriverStandings"], fetchCurrentDriverStandings);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName)

  const season = data.MRData.StandingsTable.season;

  const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((data: any) => {
    return (
      <tr key={data.position}>
          <th>{data.position}</th>
          <th>{data.points}</th>
          <th>{data.wins}</th>
          <th>{data.Driver.givenName}</th>
      </tr>
    )
  })



  return (
    <div>
      <h1>{season} Driver Standings</h1>
      <table>
        <thead>
          <tr>
            <th>Postion</th>
            <th>Points</th>
            <th>Wins</th>
            <th>Name</th>
          </tr>
        </thead>
        {standings}
      </table>
    </div>
  )
}

export default DriverStandings