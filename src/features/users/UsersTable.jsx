import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableFooter,
  TableCaption,
} from "@/components/ui/table";
import { useUsers } from "./useUsers";
import UserRow from "./UserRow";
import TablePagination from "../../ui/TablePagination";
import { useSearchParams } from "react-router-dom";
import { TOTAL_RESULTS } from "../../utils/constants";
import TableSkeleton from "../../ui/skeleton/TableSkeleton";

const UsersTable = () => {
  const { users, isLoading } = useUsers();
  const [searchParams] = useSearchParams();

  if (isLoading) return <TableSkeleton headersLength={5} rowsLength={7} />;

  const totalPages = Math.ceil(users.length / TOTAL_RESULTS);
  const currentPage = +searchParams.get("page") || 1;

  const paginatedUsers = users.slice(
    currentPage * TOTAL_RESULTS - TOTAL_RESULTS,
    currentPage * TOTAL_RESULTS
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {["image", "full name", "type", "average Rating", "Member since"].map(
            (header, i) => (
              <TableHead className={`${i === 0 && "text-left"}`} key={header}>
                {header}
              </TableHead>
            )
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {paginatedUsers.map(user => (
          <UserRow user={user} key={user.id} />
        ))}
      </TableBody>
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