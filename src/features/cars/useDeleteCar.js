import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCar as deleteCarApi } from "../../services/apiCars";
import { toast } from "react-hot-toast";

export function useDeleteCar() {
  const queryClient = useQueryClient();

  const { mutate: deleteCar, isDeleting } = useMutation({
    mutationFn: carId =>
      toast.promise(deleteCarApi(carId), {
        loading: "Deleting the car...",
        success: () => `Deleted successfully`,
        error: err => `${err}`,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars", `car-${carId}`],
      });
    },
  });

  return { deleteCar, isDeleting };
}
