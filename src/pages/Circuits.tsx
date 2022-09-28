import { LinkIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchAllCircuits } from '../api';

const Circuits = () => {

  const { data, error, isLoading }: any = useQuery(["currentCurcuits"], fetchAllCircuits);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data)
  const circuits = data.MRData.CircuitTable.Circuits.map((data: any) => {
    
    const cir = data.circuitName;
    return (
      <tr>
        <th>{data.circuitName}</th>
        <th>{data.Location.country}</th>
        <th>{data.Location.locality}</th>
      </tr>
    )
  })

  return (
    <div className='flex flex-col items-center justify-center pt-6'>
      <table className='table-primary  [&_th]:table-primary [&_th]:p-2 text-sm'>
          <thead className='table-primary bg-slate-200' >
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Locality</th>
          </tr>
        </thead>
        {circuits}
      </table>
    </div>
  )
}

export default Circuits