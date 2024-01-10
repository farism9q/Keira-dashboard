import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "@/components/ui/table";

import ReportRow from "./ReportRow";
import { useReports } from "./useReports";
import TableSkeleton from "../../ui/skeleton/TableSkeleton";

const ReportsTable = () => {
  const { reports, isLoading } = useReports();

  if (isLoading) return <TableSkeleton headersLength={5} rowsLength={10} />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {["User ID", "Car ID", "Status", "Date", ""].map(header => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map(report => (
          <ReportRow report={report} key={report.id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ReportsTable;
