import { useQuery } from "@tanstack/react-query";
import { isValidToken as isValidTokenApi } from "../../services/apiAuth";

export function useIsValidToken() {
  const { data: isValidToken, isLoading } = useQuery({
    queryFn: isValidTokenApi,
    queryKey: ["is-valid-token"],
  });

  return { isValidToken, isLoading };
}
