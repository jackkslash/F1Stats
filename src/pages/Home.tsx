import { useQuery } from "@tanstack/react-query";
import ConstructorStandings from "../components/ConstructorStandings";
import CountdownTimer from "../components/CountdownTimer";
import CurrentSeason from "../components/CurrentSeason";
import DriverStandings from "../components/DriverStandings";
import Navigation from "../components/Navigation";
// import { test } from "../api";

const Home = () => {

    // const {data, error, isLoading}:any = useQuery(["test"], test);

    // console.log(data);
    return (
        <div>
            <div className="flex flex-col items-center justify-center pt-6">
            <CurrentSeason></CurrentSeason>
            <DriverStandings></DriverStandings>
            <ConstructorStandings></ConstructorStandings>
        </div></div>

    )
}

export default Home