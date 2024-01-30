import { useQuery } from "@tanstack/react-query";
import { getReports } from "../../services/apiReports";
import { useSearchParams } from "react-router-dom";

export function useReports() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("isAnswered");
  const sortRaw = searchParams.get("sortBy")?.split("-") || ["date", "desc"];

  // 1) SORT
  const sortBy = {
    field: sortRaw.at(0) || "date",
    direction: sortRaw.at(1) || "desc",
  };

  // 2) FILTER
  const filter =
    filterValue && filterValue !== "all"
      ? {
          isAnswered: filterValue === "true",
          opStr: "==",
        }
      : null;

  const { data: reports, isLoading } = useQuery({
    queryFn: () => getReports({ filter, sortBy }),
    queryKey: ["reports", filter || { isAnswered: "all" }, sortBy],
  });

  return { reports, isLoading };
}
