import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchDriver } from '../api';

const DriverInfo = (driver: any) => {
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
      <table className='table-primary  [&_th]:table-primary [&_th]:p-2 text-sm'>
        <thead className='table-primary bg-slate-200' >
          <tr>
            <th>Driver ID</th>
            <th>Driver Number</th>
            <th>Code</th>
            <th>Name</th>
            <th>Family Name</th>
            <th>DOB</th>
            <th>Nationality</th>
          </tr>
          <tr>
            <th>{driverInfo.driverId}</th>
            <th>{driverInfo.permanentNumber == null ? "N/A" : driverInfo.permanentNumber}</th>
            <th>{driverInfo.code == null ? "N/A" : driverInfo.code}</th>
            <th>{driverInfo.givenName == null ? "N/A" : driverInfo.givenName}</th>
            <th>{driverInfo.familyName == null ? "N/A" : driverInfo.familyName}</th>
            <th>{driverInfo.dateOfBirth == null ? "N/A" : driverInfo.dateOfBirth}</th>
            <th>{driverInfo.nationality == null ? "N/A" : driverInfo.nationality}</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default DriverInfo