import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/apiCars";
import { useSearchParams } from "react-router-dom";

export function useCars() {
  const [searchParams] = useSearchParams();
  const sortRaw = searchParams.get("sortBy")?.split("-") || [
    "carRating",
    "desc",
  ];

  const sortBy = {
    field: sortRaw.at(0),
    direction: sortRaw.at(1),
  };

  const { data: cars, isLoading } = useQuery({
    queryFn: () => getCars({ sortBy }),
    queryKey: ["cars", sortBy],
  });

  return { cars, isLoading };
}
