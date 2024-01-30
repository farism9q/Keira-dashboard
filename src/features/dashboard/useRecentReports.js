import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getReports } from "../../services/apiReports";

export function useRecentReports() {
  const [searchParams] = useSearchParams();

  const numDays = +searchParams.get("last") || 30;
  const sortRaw = searchParams.get("sortBy")?.split("-") || ["date", "desc"];

  // 1) SORT
  const sortBy = {
    field: sortRaw.at(0) || "date",
    direction: sortRaw.at(1) || "desc",
  };

  // 2) FILTER
  const filter = {
    date: subDays(Date.now(), numDays),
    opStr: ">=",
  };

  const { data: recentReports, isLoading } = useQuery({
    queryFn: () =>
      getReports({
        filter,
        sortBy,
      }),
    queryKey: ["reports", `last-${numDays}`],
  });

  return { recentReports, isLoading };
}
