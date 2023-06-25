import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchDriverConstructors } from '../api';
import ConstructorStandings from './ConstructorStandings';

const DriverConstructors = (driver: any) => {

  console.log(driver.driver);
  const selectedDriver = driver.driver;

  const { data, error, isLoading }: any = useQuery(["driverConstructors", selectedDriver], () => fetchDriverConstructors(selectedDriver));


  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;


  const cons = data.MRData.ConstructorTable.Constructors.map((data: any) => {
    return (

      <div className='mt-2'>
        <div>{data.name}, {data.nationality}</div>
      </div>
    )
  })
  return (
    <div>
      <table className='table-primary  [&_th]:table-primary [&_th]:p-2 text-sm mt-2'>
        <thead className='table-primary bg-slate-200' >
          <tr>
            <th>Constructors</th>
          </tr>
        </thead>
        {cons}
      </table>

    </div>
  )
}

export default DriverConstructors;