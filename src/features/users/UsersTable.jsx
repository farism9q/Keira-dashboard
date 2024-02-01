import { TOTAL_RESULTS } from "../../utils/constants";

import { useSearchParams } from "react-router-dom";

import { useUsers } from "./useUsers";

import TableSkeleton from "../../ui/skeleton/TableSkeleton";
import UserRow from "./UserRow";
import DashboardTable from "../../ui/DashboardTable";

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
    <DashboardTable
      headers={[
        "image",
        "full name",
        "type",
        "average Rating",
        "Member since",
        "",
      ]}
      render={paginatedUsers.map(user => (
        <UserRow user={user} key={user.id} />
      ))}
      currentPage={currentPage}
      totalPages={totalPages}
      pageQueryName={"page"}
    />
  );
};

export default UsersTable;
