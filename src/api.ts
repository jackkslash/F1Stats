export async function fetchCurrentSeason() {

    const res = await fetch('https://ergast.com/api/f1/2022.json')

    return res.json();

}


export async function fetchCurrentDriverStandings() {

    const res = await fetch('http://ergast.com/api/f1/2022/driverStandings.json')

    return res.json();

}

export async function fetchCurrentConstructorStandings() {

    const res = await fetch('http://ergast.com/api/f1/2022/constructorStandings.json')

    return res.json();

}

export async function fetchAllCircuits() {

    const res = await fetch('http://ergast.com/api/f1/circuits.json?limit=76');

    return res.json();

}

export async function fetchAllDrivers() {

    const res = await fetch('https://ergast.com/api/f1/drivers.json?limit=855');

    return res.json();

}

export async function fetchAllConstructors() {

    const res = await fetch('http://ergast.com/api/f1/constructors.json?limit=211');

    return res.json();

}