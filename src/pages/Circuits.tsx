import { useQuery } from '@tanstack/react-query';
import { fetchAllCircuits } from '../api';

const Circuits = () => {
  
  const { data, error, isLoading }: any = useQuery(["currentCurcuits"], fetchAllCircuits);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  
  console.log(data)
  const circuits = data.MRData.CircuitTable.Circuits.map((data:any)=>{
    return(
      <li>{data.circuitName}, {data.Location.country}, {data.Location.locality}</li>
    )
  })
  
  return (
    <div>{circuits}</div>
  )
}

export default Circuits