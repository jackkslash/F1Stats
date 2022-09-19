import { useQuery } from '@tanstack/react-query';
import { fetchAllCircuits } from '../api';

const Circuits = () => {

  const { data, error, isLoading }: any = useQuery(["currentCurcuits"], fetchAllCircuits);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data)
  const circuits = data.MRData.CircuitTable.Circuits.map((data: any) => {
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
      <table>
        <thead>
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