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
      <div>{driverInfo.driverId}, 
      {driverInfo.permanentNumber}, 
      {driverInfo.code}, 
      {driverInfo.givenName}, 
      {driverInfo.familyName}, 
      {driverInfo.dateOfBirth}, 
      {driverInfo.nationality}
      </div>
    </div>
  )
}

export default DriverInfo