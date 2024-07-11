// libs
import useSWR from "swr";

// services
import PlanetService from "@/services/PlanetService";

// types
import { GetPlanetDetailInterface } from "@/@types/PlanetInterface";

interface useGetPlanetsDetailsReturn {
  planetDetail: GetPlanetDetailInterface;
  isValidating: boolean;
}

interface useGetPlanetsDetailsProps {
  url: string;
}

export function useGetPlanetsDetails({ url }: useGetPlanetsDetailsProps): useGetPlanetsDetailsReturn {
  const { data: planetDetail, isValidating } = useSWR(`${url}`, PlanetService.getPlanetDetail, {
    revalidateOnFocus: false,
    fallbackData: {
      name: '',
      rotation_period: '',
      orbital_period: '',
      diameter: '',
      climate: '',
      gravity: '',
      terrain: '',
      surface_water: '',
      population: '',
      residents: [],
      films: []
    }
  });

  return {
    planetDetail,
    isValidating
  }
}