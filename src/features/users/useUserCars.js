import { useQuery } from "@tanstack/react-query";
import { getUserCars } from "../../services/apiCars";

export function useUserCars(userId) {
  const { data: userCars, isLoading } = useQuery({
    queryFn: () => getUserCars(userId),
    queryKey: [`${userId}-cars`],
  });

  return { userCars, isLoading };
}
