import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { fetchAllDrivers } from '../api';

const Drivers = () => {
  // const [search, setSearch] = useState<String>('');

  // const handleSearch = (event: any) => {
  //   setSearch(event.target.value);
  // };

  const { data, error, isLoading }: any = useQuery(["currentDrivers"], fetchAllDrivers);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data)
  const drivers = data.MRData.DriverTable.Drivers.map((data: any) => {
    return (
      
      <tr>
          <th>{data.givenName}</th>
          <th>{data.familyName}</th>
          <th>{data.dateOfBirth}</th>
          <th>{data.nationality}</th>
      </tr>
    )
  })

  return (
    <div className='flex flex-col items-center justify-center pt-6'>
      <label htmlFor="search">
        Search by Task:
        {/* <input id="search" type="text" onChange={handleSearch} /> */}
      </label>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Family Name</th>
            <th>D.O.B</th>
            <th>Nationality</th>
          </tr>
        </thead>
        {drivers}
      </table>
    </div>
  )
}

export default Drivers