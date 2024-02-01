import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiUsers";

export function useUser(id) {
  const { data: user, isLoading } = useQuery({
    queryFn: () => getUser(id),
    queryKey: [`user-${id}`],
  });

  return { user, isLoading };
}
