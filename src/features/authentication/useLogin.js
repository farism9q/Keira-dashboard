import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: data => {
      queryClient.setQueryData(["user"], data.admin); // Adding user data immediately onSuccess
      navigate("/dashboard", { replace: true });
    },
  });

  return { login, isLogging };
}
