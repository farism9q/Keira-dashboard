import { useQuery } from "@tanstack/react-query";
import { getReports } from "../../services/apiReports";
import { useSearchParams } from "react-router-dom";

export function useReports() {
  const [searchParams] = useSearchParams();
  const sortRaw = searchParams.get("sortBy")?.split("-") || ["date", "desc"];

  const sortBy = {
    field: sortRaw.at(0),
    direction: sortRaw.at(1),
  };

  const { data: reports, isLoading } = useQuery({
    queryFn: () => getReports({ sortBy }),
    queryKey: ["reports", sortBy],
  });

  return { reports, isLoading };
}