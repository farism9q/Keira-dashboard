import { TOTAL_RESULTS } from "../../utils/constants";

import { useSearchParams } from "react-router-dom";

import { useReports } from "./useReports";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "../../components/ui/table";
import { TableCaption } from "../../components/ui/table";
import ReportRow from "./ReportRow";
import TableSkeleton from "../../ui/skeleton/TableSkeleton";
import TablePagination from "../../ui/TablePagination";

const ReportsTable = () => {
  const { reports, isLoading } = useReports();
  const [searchParams] = useSearchParams();

  if (isLoading) return <TableSkeleton headersLength={5} rowsLength={10} />;

  const totalPages = Math.ceil(reports.length / TOTAL_RESULTS);
  const currentPage = +searchParams.get("page") || 1;

  const paginatedReports = reports.slice(
    currentPage * TOTAL_RESULTS - TOTAL_RESULTS,
    currentPage * TOTAL_RESULTS
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {["User ID", "Car ID", "Status", "Date"].map(header => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {paginatedReports.map(report => (
          <ReportRow report={report} key={report.id} />
        ))}
      </TableBody>
      <TableCaption>
        <TablePagination
          currentPage={currentPage}
          next={currentPage < totalPages}
          previous={currentPage > 1}
          pageQueryName={"page"}
        />
      </TableCaption>
    </Table>
  );
};

export default ReportsTable;
