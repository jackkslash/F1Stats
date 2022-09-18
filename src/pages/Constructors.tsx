import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchAllConstructors } from '../api';

const Constructors = () => {
  const { data, error, isLoading }: any = useQuery(["currentConstructors"], fetchAllConstructors);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  
  console.log(data)
  const circuits = data.MRData.ConstructorTable.Constructors.map((data:any)=>{
    return(
      <li>{data.name}, {data.nationality}, {data.url}</li>
    )
  })
  
  return (
    <div>{circuits}</div>
  )
}

export default Constructors