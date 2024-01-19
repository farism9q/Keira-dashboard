import { useQuery } from "@tanstack/react-query";
import { getReports } from "../../services/apiReports";
import { useSearchParams } from "react-router-dom";

export function useReports() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("isAnswered");
  const sortRaw = searchParams.get("sortBy")?.split("-") || ["date", "desc"];

  const sortBy = {
    field: sortRaw.at(0),
    direction: sortRaw.at(1),
  };

  const filter =
    filterValue && filterValue !== "all"
      ? {
          isAnswered: filterValue === "true",
        }
      : undefined;

  const { data: reports, isLoading } = useQuery({
    queryFn: () => getReports({ filter, sortBy }),
    queryKey: ["reports", filter, sortBy],
  });

  return { reports, isLoading };
}
