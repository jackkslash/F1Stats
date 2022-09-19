import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchAllConstructors } from '../api';

const Constructors = () => {
  const { data, error, isLoading }: any = useQuery(["currentConstructors"], fetchAllConstructors);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data)
  const constructors = data.MRData.ConstructorTable.Constructors.map((data: any) => {
    return (
      <tr>
          <th>{data.name}</th>
          <th>{data.nationality}</th>
          <th>{data.url}</th>
      </tr>
      
    )
  })

  return (
    <div className='flex flex-col items-center justify-center pt-6'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nationality</th>
            <th>URL</th>
          </tr>
        </thead>
        {constructors}
      </table>
    </div>
  )
}

export default Constructors