import { useQuery } from "@tanstack/react-query";
import ConstructorStandings from "../components/ConstructorStandings";
import CountdownTimer from "../components/CountdownTimer";
import CurrentSeason from "../components/CurrentSeason";
import DriverStandings from "../components/DriverStandings";
// import { test } from "../api";

const Home = () => {

    // const {data, error, isLoading}:any = useQuery(["test"], test);

    // console.log(data);
    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <CurrentSeason></CurrentSeason>
            <DriverStandings></DriverStandings>
            <ConstructorStandings></ConstructorStandings>
        </div>
    )
}

export default Home