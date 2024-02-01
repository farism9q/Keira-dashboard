import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiUsers";
import { toast } from "react-hot-toast";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isDeleting } = useMutation({
    mutationFn: userId =>
      toast.promise(deleteUserApi(userId), {
        loading: "Deleting the user...",
        success: () => `Deleted successfully`,
        error: err => `${err}`,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users", `user-${userId}`],
      });
    },
  });

  return { deleteUser, isDeleting };
}
