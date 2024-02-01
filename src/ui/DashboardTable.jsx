import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import TablePagination from "./TablePagination";

const DashboardTable = ({
  headers,
  render,
  currentPage,
  totalPages,
  pageQueryName,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header, i) => (
            <TableHead
              className={`${
                i === 0 && header.toLowerCase() === "image" && "text-left"
              } ${header.length > 14 ? "text-[14px]" : ""}`}
              key={header}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{render}</TableBody>
      <TableCaption>
        <TablePagination
          currentPage={currentPage}
          next={currentPage < totalPages}
          previous={currentPage > 1}
          pageQueryName={pageQueryName}
        />
      </TableCaption>
    </Table>
  );
};

export default DashboardTable;
