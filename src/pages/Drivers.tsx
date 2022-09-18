import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchAllDrivers } from '../api';

const Drivers = () => {
  const { data, error, isLoading }: any = useQuery(["currentDrivers"], fetchAllDrivers);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  
  console.log(data)
  const drivers = data.MRData.DriverTable.Drivers.map((data:any)=>{
    return(
      <li>{data.givenName}, {data.familyName}, {data.dateOfBirth}, {data.nationality}</li>
    )
  })
  
  return (
    <div>{drivers}</div>
  )
}

export default Drivers