import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchCurrentDriverStandings } from '../api';

const DriverStandings = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear)
  const { data, error, isLoading }: any = useQuery(["currentDriverStandings", currentYear], () => fetchCurrentDriverStandings(currentYear));

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName)

  const season = data.MRData.StandingsTable.season;

  const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((data: any) => {
    return (
      <tr key={data.position} className="hover:bg-slate-100">
        <th>{data.position}</th>
        <th>{data.Driver.givenName}</th>
        <th>{data.Driver.code}</th>
        <th>{data.points}</th>
        <th>{data.wins}</th>
        {
          data.Constructors.map((data: any) => {
            return (
              <th>{data.name}</th>
            )
          })
        }
      </tr>
    )
  })



  return (
    <div>
      <h1>{season} Driver Standings</h1>
      <table className='table-primary  [&_th]:table-primary [&_th]:p-2 text-sm'>
        <thead className='table-primary bg-slate-200' >
          <tr>
            <th>Postion</th>
            <th>Name</th>
            <th>Code</th>
            <th>Points</th>
            <th>Pole</th>
            <th>Constructor</th>
          </tr>
        </thead>
        {standings}
      </table>
    </div>
  )
}

export default DriverStandings