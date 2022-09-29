import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchDriver } from '../api';

const DriverInfo = (driver:any) => {
    console.log(driver.driver);
    const selectedDriver = driver.driver;
    
    const { data, error, isLoading }: any = useQuery(["driverInfo", selectedDriver], () => fetchDriver(selectedDriver));
  

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;
  
    const driverInfo = data.MRData.DriverTable.Drivers[0];
    console.log(data.MRData.DriverTable.Drivers[0].driverId);
    
    return (
    <div>
      <h1 className='text-lg pb-2'>Driver Information</h1>
      <li>{driverInfo.driverId} </li>
      <li>{driverInfo.permanentNumber}</li>
      <li>{driverInfo.code}</li>
      <li> {driverInfo.givenName}</li>
      <li>{driverInfo.familyName}</li>
      <li>{driverInfo.dateOfBirth}</li>
      <li>{driverInfo.nationality}</li>
    </div>
  )
}

export default DriverInfo