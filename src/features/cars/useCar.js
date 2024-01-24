import { useQuery } from "@tanstack/react-query";
import { getCar } from "../../services/apiCars";
import { useParams } from "react-router-dom";

export function useCar() {
  const { carId } = useParams();

  const { data: car, isLoading } = useQuery({
    queryFn: () => getCar(carId),
    queryKey: ["car", carId],
  });

  return { car, isLoading };
}
