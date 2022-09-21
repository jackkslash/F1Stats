import { useQuery } from '@tanstack/react-query';
import { fetchAllSeasons } from '../api';
import { LinkIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';

const Seasons = () => {

  const { year }: any = useParams();

  console.log(year);

  const { data, error, isLoading }: any = useQuery(["allSeasons"],fetchAllSeasons);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);
  const allSeasons = data.MRData.SeasonTable.Seasons.map((data: any) => {
    return (
      <tr>
        <th>{data.season}</th>
        <th className='flex justify-center'><a href={data.url}><LinkIcon width={20} height={20}></LinkIcon></a></th>
      </tr>
    )
  })

  return (
    <div className='flex flex-col items-center justify-center pt-6'>
      <table className='table-primary  [&_th]:table-primary [&_th]:p-2 text-sm'>
        <thead className='table-primary bg-slate-200' >
          <tr>
            <th>Season</th>
            <th>Link</th>
          </tr>
        </thead>
        {allSeasons}
      </table>
    </div>

  )
}

export default Seasons