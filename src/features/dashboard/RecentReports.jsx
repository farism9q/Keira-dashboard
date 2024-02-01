import { DASHBOARD_TOTAL_RESULTS } from "../../utils/constants";

import { useNavigate, useSearchParams } from "react-router-dom";

import { useRecentReports } from "./useRecentReports";

import { TableCell, TableRow } from "../../components/ui/table";
import DashboardTable from "../../ui/DashboardTable";
import Box from "../../ui/Box";
import CustomSkeleton from "../../ui/CustomSkeleton";
import Status from "../../ui/Status";

const TOTAL_TEXT_LENGTH = 8;

function truncate(text) {
  if (text.length >= TOTAL_TEXT_LENGTH) {
    return text.slice(0, TOTAL_TEXT_LENGTH) + "...";
  } else {
    return text;
  }
}
const RecentReports = () => {
  const [searchParams] = useSearchParams();
  const { recentReports, isLoading } = useRecentReports();
  const navigate = useNavigate();

  if (isLoading) return <CustomSkeleton />;

  const totalPages = Math.ceil(recentReports.length / DASHBOARD_TOTAL_RESULTS);
  const currentPage = +searchParams.get("reportsPage") || 1;

  const paginatedReports = recentReports.slice(
    currentPage * DASHBOARD_TOTAL_RESULTS - DASHBOARD_TOTAL_RESULTS,
    currentPage * DASHBOARD_TOTAL_RESULTS
  );

  return (
    <Box header={"Recent Reports"}>
      {paginatedReports.length > 0 ? (
        <DashboardTable
          headers={["User id", "Car id", "Status", "Initiated on"]}
          totalPages={totalPages}
          currentPage={currentPage}
          pageQueryName={"reportsPage"}
          render={paginatedReports.map(report => (
            <TableRow
              role="button"
              onClick={() => navigate(`/reports/${report.id}`)}
            >
              <TableCell>{truncate(report.userID)}</TableCell>
              <TableCell>{truncate(report.carID)}</TableCell>
              <TableCell>
                <Status color={report.isAnswered ? "green" : "red"}>
                  {report.isAnswered ? "Responded" : "Waiting..."}
                </Status>{" "}
              </TableCell>

              <TableCell>{report.date}</TableCell>
            </TableRow>
          ))}
        />
      ) : (
        <Empty>
          <p>No users</p>
        </Empty>
      )}
    </Box>
  );
};

export default RecentReports;
