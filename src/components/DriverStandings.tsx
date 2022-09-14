import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchCurrentDriverStandings } from '../api';

const DriverStandings = () => {
    const {data, error, isLoading}:any = useQuery(["currentDriverStandings"], fetchCurrentDriverStandings);

	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
    
    console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName)

    const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((data:any)=> { return (
        <li key={data.position}> {data.position} {data.points} {data.wins} {data.Driver.givenName + " " + data.Driver.familyName	}</li>
    )})



  return (
    <div>{standings}</div>
  )
}

export default DriverStandings