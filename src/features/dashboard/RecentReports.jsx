import { useNavigate } from "react-router-dom";

import { useRecentReports } from "./useRecentReports";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

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
  const { recentReports, isLoading } = useRecentReports();
  const navigate = useNavigate();

  if (isLoading) return <CustomSkeleton />;

  return (
    <Box header={"Recent reports"}>
      <Table>
        <TableHeader>
          <TableRow>
            {["User ID", "Car ID", "Status", "Date"].map(header => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentReports.map(report => (
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
        </TableBody>
      </Table>
    </Box>
  );
};

export default RecentReports;
