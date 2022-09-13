export async function fetchCurrentSeason() {

    const res = await fetch('https://ergast.com/api/f1/2022.json')

    return res.json();

}



