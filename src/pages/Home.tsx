import ConstructorStandings from "../components/ConstructorStandings";
import CurrentSeason from "../components/CurrentSeason";
import DriverStandings from "../components/DriverStandings";

const Home = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center pt-6">
                <CurrentSeason></CurrentSeason>
                <div className="flex flex-row justify-center gap-6 py-6" >
                    <DriverStandings></DriverStandings>
                    <ConstructorStandings></ConstructorStandings>
                </div>

            </div></div>

    )
}

export default Home