import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

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

      navigate("/dashboard", { replace: true });
    },
  });

  return { login, isLogging };
}
