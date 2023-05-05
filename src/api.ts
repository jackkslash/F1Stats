export async function fetchCurrentSeason(year: any) {
  const res = await fetch("https://ergast.com/api/f1/" + year + ".json");

  return res.json();
}

export async function fetchCurrentDriverStandings(year: any) {
  const res = await fetch(
    "http://ergast.com/api/f1/" + year + "/driverStandings.json"
  );
  return res.json();
}

export async function fetchCurrentConstructorStandings(year: any) {
  const res = await fetch(
    "http://ergast.com/api/f1/" + year + "/constructorStandings.json"
  );

  return res.json();
}

export async function fetchAllCircuits() {
  const res = await fetch("http://ergast.com/api/f1/circuits.json?limit=76");

  return res.json();
}

export async function fetchAllDrivers() {
  const res = await fetch("https://ergast.com/api/f1/drivers.json?limit=855");

  return res.json();
}

export async function fetchAllConstructors() {
  const res = await fetch(
    "http://ergast.com/api/f1/constructors.json?limit=211"
  );

  return res.json();
}

export async function fetchAllSeasons() {
  const res = await fetch("http://ergast.com/api/f1/seasons.json?limit=73");
  return res.json();
}

export async function fetchSeason(year: any) {
  const res = await fetch("https://ergast.com/api/f1/" + year + ".json");
  return res.json();
}

export async function fetchDriverConstructors(driver: any) {
  const res = await fetch(
    "http://ergast.com/api/f1/drivers/" + driver + "/constructors.json"
  );
  return res.json();
}
export async function fetchDriver(driver: any) {
  const res = await fetch(
    "http://ergast.com/api/f1/drivers/" + driver + ".json"
  );
  return res.json();
}

export async function fetchConstructorsDrivers(constructor: any) {
  const res = await fetch(
    "http://ergast.com/api/f1/constructors/" + constructor + "/drivers.json"
  );
  return res.json();
}
