import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";
import { useSearchParams } from "react-router-dom";

export function useUsers() {
  const [searchParams] = useSearchParams();
  const sortRaw = searchParams.get("sortBy")?.split("-") || [
    "createdAt",
    "asc",
  ];

  const type = searchParams.get("type") || "all";

  const sortBy = {
    field: sortRaw.at(0),
    direction: sortRaw.at(1),
  };

  const filter =
    type === "all"
      ? {}
      : {
          type: type === "individuals" ? "فرد" : "مكتب تأجير",
          opStr: "==",
        };

  const { data: users, isLoading } = useQuery({
    queryFn: () => getUsers({ filter, sortBy }),
    queryKey: ["users", sortBy, filter],
  });

  return { users, isLoading };
}
