import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import TablePagination from "./TablePagination";

const UsersTable = ({ headers, render, currentPage, totalPages }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header, i) => (
            <TableHead className={`${i === 0 && "text-left"}`} key={header}>
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
        />
      </TableCaption>
    </Table>
  );
};

export default UsersTable;
