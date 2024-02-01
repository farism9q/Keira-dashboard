import { useQuery } from "@tanstack/react-query";
import { getReport } from "../../services/apiReports";
import { useParams } from "react-router-dom";

export function useReport() {
  const { reportId } = useParams();

  const { data: report, isLoading } = useQuery({
    queryFn: () => getReport(reportId),
    queryKey: [`report-${reportId}`],
  });

  return { report, isLoading };
}
