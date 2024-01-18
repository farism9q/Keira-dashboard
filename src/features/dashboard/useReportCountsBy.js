import { useQuery } from "@tanstack/react-query";
import { getInitiatedReportsCountByUserType } from "../../services/apiReports";

export function useReportCountsBy() {
  const { data: initiatedReportCountsBy, isLoading } = useQuery({
    queryFn: getInitiatedReportsCountByUserType,
    queryKey: ["init-reports-by"],
  });

  return { initiatedReportCountsBy, isLoading };
}
