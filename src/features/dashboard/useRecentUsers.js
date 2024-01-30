import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getUsers } from "../../services/apiUsers";

export function useRecentUsers() {
  const [searchParams] = useSearchParams();

  const numDays = +searchParams.get("last") || 30;

  // 1) FILTER
  const filter = {
    createdAt: subDays(Date.now(), numDays),
    opStr: ">=",
  };

  const { data: recentUsers, isLoading } = useQuery({
    queryFn: () =>
      getUsers({
        filter,
      }),
    queryKey: ["users", `last-${numDays}`],
  });

  return { recentUsers, isLoading };
}
