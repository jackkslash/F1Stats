import { useQuery } from '@tanstack/react-query';
import { fetchCurrentConstructorStandings } from '../api';


const ConstructorStandings = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear)
  const { data, error, isLoading }: any = useQuery(["currentConstuctorStandings", currentYear], () => fetchCurrentConstructorStandings(currentYear));

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;


  const mapOne = data.MRData.StandingsTable.StandingsLists.map((dataOne: any) => {

    console.log(dataOne)
    return (
      <div>
        <h1>{dataOne.season} Constructor Standings</h1>
        <table className='table-primary  [&_th]:table-primary [&_th]:p-2 text-sm'>
          <thead className='table-primary bg-slate-200'>
            <tr>
              <th>Position</th>
              <th>Constructor</th>
              <th>Points</th>
              <th>Wins</th>
            </tr>
          </thead>
          {
            dataOne.ConstructorStandings.map((dataTwo: any) => {
              return (
                <tr className="hover:bg-slate-100">
                  <th>{dataTwo.position}</th>
                  <th>{dataTwo.Constructor.name}</th>
                  <th>{dataTwo.points}</th>
                  <th>{dataTwo.wins}</th>
                </tr>
              )
            })
          }
        </table>
      </div>

    )
  })


  return (
    <div>{mapOne}</div>

  )
}

export default ConstructorStandings