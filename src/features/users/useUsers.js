import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";
import { useSearchParams } from "react-router-dom";

export function useUsers() {
  const [searchParams] = useSearchParams();
  const sortRaw = searchParams.get("sortBy")?.split("-") || [
    "memberSince",
    "asc",
  ];

  const sortBy = {
    field: sortRaw.at(0),
    direction: sortRaw.at(1),
  };

  const { data: users, isLoading } = useQuery({
    queryFn: () => getUsers({ sortBy }),
    queryKey: ["users", sortBy],
  });

  return { users, isLoading };
}
