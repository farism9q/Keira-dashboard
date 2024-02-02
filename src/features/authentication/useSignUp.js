import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isLoading: isCreating } = useMutation({
    mutationFn: admin =>
      toast.promise(signUpApi(admin), {
        loading: "Creating a new admin...",
        success: () => `Created successfully`,
        error: err => `${err}`,
      }),
  });

  return { signUp, isCreating };
}
