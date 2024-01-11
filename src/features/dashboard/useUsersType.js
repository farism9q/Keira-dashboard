import { useQuery } from "@tanstack/react-query";
import { getUsersTypeCount } from "../../services/apiUsers";

export function useUsersType() {
  const { data: usersType, isLoading } = useQuery({
    queryFn: getUsersTypeCount,
    queryKey: ["users-type"],
  });

  return { usersType, isLoading };
}
