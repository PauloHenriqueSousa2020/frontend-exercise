// libs
import axios from "axios";

// services
import { api } from "@/services";

// types
import { GetPlanetDetailInterface, GetPlanetsInterface } from "@/@types/PlanetInterface";

const getPlanets = async (url: string): Promise<GetPlanetsInterface> => {
  const { data } = await api.get<GetPlanetsInterface>(url)
  return data;
}

const getPlanetDetail = async (url: string): Promise<GetPlanetDetailInterface> => {
  const { data } = await axios.get<GetPlanetDetailInterface>(url)
  return data;
}

export default {
  getPlanets,
  getPlanetDetail
}