import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: ({ admin, token, tokenExpiresIn }) => {
      queryClient.setQueryData(["user"], admin); // Adding user data immediately onSuccess
      localStorage.setItem(
        "user",
        JSON.stringify({ ...admin, token, tokenExpiresIn })
      );
      toast.success("Welcome");

      navigate("/dashboard", { replace: true });
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { login, isLogging };
}
