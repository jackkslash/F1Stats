import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchSeason } from '../api';

const Season = () => {
  const year: any = useParams();
  const curSeason = year.year;

  const { data, error, isLoading }: any = useQuery(["allSeasons", curSeason], () => fetchSeason(curSeason));

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  const season = data.MRData.RaceTable.season;

  const races = data.MRData.RaceTable.Races.map((data: any) => {
    return (
      <tr key={data.round} className="hover:bg-slate-100">
        <th>{data.round}</th>
        <th>{data.raceName}</th>
        <th>{data.date} </th>
        <th>{data.time?.replace("Z", "")}</th>
      </tr>
    )
  })

  return (
    <div className='flex flex-col items-center justify-center pt-6'>
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
        {races}
      </table>
      </div>
  )
}

export default Season