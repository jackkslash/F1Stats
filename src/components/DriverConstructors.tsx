import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchDriverConstructors } from '../api';

const DriverConstructors = (driver:any) => {
    
    console.log(driver.driver);
    const selectedDriver = driver.driver;

    const { data, error, isLoading }: any = useQuery(["driverConstructors", selectedDriver], () => fetchDriverConstructors(selectedDriver));
  

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;
  
    console.log(data);
    return (
    <div>DriverConstructors</div>
  )
}

export default DriverConstructors;