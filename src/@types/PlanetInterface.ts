export interface PlanetInterface {
  name: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
  url: string;
}

export interface GetPlanetsInterface {
  count: number;
  next: string;
  previous: string;
  results: PlanetInterface[];
}

export interface GetPlanetDetailInterface {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
}