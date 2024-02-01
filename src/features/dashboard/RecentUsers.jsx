import { DASHBOARD_TOTAL_RESULTS } from "../../utils/constants";

import { useSearchParams } from "react-router-dom";
import { useRecentUsers } from "./useRecentUsers";

import Box from "../../ui/Box";
import CustomSkeleton from "../../ui/CustomSkeleton";
import DashboardTable from "../../ui/DashboardTable";
import DashboardUserRow from "./DashboardUserRow";
import Empty from "../../ui/Empty";

const RecentUsers = () => {
  const [searchParams] = useSearchParams();
  const { recentUsers, isLoading } = useRecentUsers();

  if (isLoading) return <CustomSkeleton />;

  const totalPages = Math.ceil(recentUsers.length / DASHBOARD_TOTAL_RESULTS);
  const currentPage = +searchParams.get("usersPage") || 1;

  const paginatedUsers = recentUsers.slice(
    currentPage * DASHBOARD_TOTAL_RESULTS - DASHBOARD_TOTAL_RESULTS,
    currentPage * DASHBOARD_TOTAL_RESULTS
  );

  return (
    <Box header={"Recent Registered Users"}>
      {paginatedUsers.length > 0 ? (
        <DashboardTable
          headers={["Image", "user name", "type", "Joined on"]}
          totalPages={totalPages}
          currentPage={currentPage}
          pageQueryName={"usersPage"}
          render={paginatedUsers.map(user => (
            <DashboardUserRow user={user} />
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

export default RecentUsers;
