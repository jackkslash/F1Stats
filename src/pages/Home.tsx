import { useQuery } from "@tanstack/react-query";
import CurrentSeason from "../components/CurrentSeason";
import DriverStandings from "../components/DriverStandings";

const Home = () => {



  return (
    <div><CurrentSeason></CurrentSeason>
    <DriverStandings></DriverStandings></div>
  )
}

export default Home