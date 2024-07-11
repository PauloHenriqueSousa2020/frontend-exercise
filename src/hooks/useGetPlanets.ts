// libs
import useSWR from "swr";

// services
import PlanetService from "@/services/PlanetService";

// types
import { PlanetInterface } from "@/@types/PlanetInterface";

interface useGetPlanetsReturn {
  planets: PlanetInterface[];
  isValidating: boolean;
  totalElements: number;
}

interface useGetPlanetsProps {
  search: string;
  page: number;
}

export function useGetPlanets({ search, page }: useGetPlanetsProps): useGetPlanetsReturn {
  const { data: planets, isValidating } = useSWR(`/planets?search=${search ?? ""}&page=${page}`, PlanetService.getPlanets, {
    revalidateOnFocus: false,
    fallbackData: {
      results: [],
      count: 0,
      next: "",
      previous: ""
    }
  });

  useSWR(`/planets?search=${search ?? ""}&page=${page + 1}`, PlanetService.getPlanets, {
    revalidateOnFocus: false,
  });

  return {
    planets: planets.results,
    isValidating: isValidating && !planets.results.length,
    totalElements: planets.count
  }
}