export async function fetchCurrentSeason() {

    const res = await fetch('https://ergast.com/api/f1/2022.json')

    return res.json();

}


export async function fetchCurrentDriverStandings() {

    const res = await fetch('http://ergast.com/api/f1/2022/driverStandings.json')

    return res.json();

}

