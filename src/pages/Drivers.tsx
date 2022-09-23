import { LinkIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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

    const driver = data.familyName;
    return (
      
      <tr>
          <th>{data.givenName}</th>
          <th>{data.familyName}</th>
          <th>{data.dateOfBirth}</th>
          <th>{data.nationality}</th>
          <th className='flex justify-center'><Link to={"/Drivers/"+ driver}><LinkIcon width={20} height={20}></LinkIcon></Link></th>
      </tr>
    )
  })

  return (
    <div className='flex flex-col items-center justify-center pt-6'>
      <label htmlFor="search">
        Search:
        {/* <input id="search" type="text" onChange={handleSearch} /> */}
      </label>
      <table className='table-primary  [&_th]:table-primary [&_th]:p-2 text-sm'>
          <thead className='table-primary bg-slate-200' >
          <tr>
            <th>Name</th>
            <th>Family Name</th>
            <th>D.O.B</th>
            <th>Nationality</th>
            <th>Link</th>
          </tr>
        </thead>
        {drivers}
      </table>
    </div>
  )
}

export default Drivers