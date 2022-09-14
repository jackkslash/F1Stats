import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchCurrentConstructorStandings } from '../api';
import DriverStandings from './DriverStandings';

const ConstructorStandings = () => {

    const {data, error, isLoading}:any = useQuery(["currentConstuctorStandings"], fetchCurrentConstructorStandings);

    if (error) return <div>Request Failed</div>;
	  if (isLoading) return <div>Loading...</div>;

    // console.log(data.MRData.StandingsTable)

    const mapOne = data.MRData.StandingsTable.StandingsLists.map((dataOne:any) =>{ return(
      <div>{dataOne.season} Constructor Standings
      {
        dataOne.ConstructorStandings.map((dataTwo:any) =>{ return(
          <li> {dataTwo.position + " " + dataTwo.Constructor.name}</li>
        ) 
        }) 
      }</div>
      
    )})

    
  return (
    <div>{mapOne}</div>
  )
}

export default ConstructorStandings