import { useQuery } from "@tanstack/react-query";
import ConstructorStandings from "../components/ConstructorStandings";
import CurrentSeason from "../components/CurrentSeason";
import DriverStandings from "../components/DriverStandings";
// import { test } from "../api";

const Home = () => {

    // const {data, error, isLoading}:any = useQuery(["test"], test);

    // console.log(data);
    return (
        <div>
            <CurrentSeason></CurrentSeason>
            <DriverStandings></DriverStandings>
            <ConstructorStandings></ConstructorStandings>
        </div>
    )
}

export default Home