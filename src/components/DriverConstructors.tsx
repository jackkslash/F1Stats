import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchDriverConstructors } from '../api';
import ConstructorStandings from './ConstructorStandings';

const DriverConstructors = (driver:any) => {
    
    console.log(driver.driver);
    const selectedDriver = driver.driver;

    const { data, error, isLoading }: any = useQuery(["driverConstructors", selectedDriver], () => fetchDriverConstructors(selectedDriver));
  

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;
  

    const cons = data.MRData.ConstructorTable.Constructors.map((data:any)=>{
      return(<div>
          <li>{data.name}, {data.nationality}</li>
        </div>
      )
    })
    return (
    <div>{cons}</div>
  )
}

export default DriverConstructors;