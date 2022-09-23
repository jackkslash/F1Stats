import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchDriver } from '../api';

const DriverInfo = (driver:any) => {
    console.log(driver.driver);
    const selectedDriver = driver.driver;
    
    const { data, error, isLoading }: any = useQuery(["driverInfo", selectedDriver], () => fetchDriver(selectedDriver));
  

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;
  
    console.log(data);
    return (
    <div>DriverInfo</div>
  )
}

export default DriverInfo