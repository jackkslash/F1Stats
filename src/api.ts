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

// export async function test() {

//     const res = await fetch('https://www.motorsport.com/rss/f1/news/',{
//         mode: 'cors'});

//     return res.json();

// }

