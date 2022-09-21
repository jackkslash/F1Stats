import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchSeason } from '../api';

const Season = () => {
    const year:any = useParams();
    const curSeason = year.year;

    const { data, error, isLoading }: any = useQuery(["allSeasons", curSeason],()=>fetchSeason(curSeason));

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;

    console.log(data)

  return (
    <div>{curSeason}</div>
  )
}

export default Season