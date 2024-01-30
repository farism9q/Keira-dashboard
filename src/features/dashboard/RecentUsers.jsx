import { DASHBOARD_TOTAL_RESULTS } from "../../utils/constants";

import { useSearchParams } from "react-router-dom";
import { useRecentUsers } from "./useRecentUsers";

import Box from "../../ui/Box";
import CustomSkeleton from "../../ui/CustomSkeleton";
import UsersTableComp from "../../ui/UsersTable";
import DashboardUserRow from "./DashboardUserRow";

const RecentUsers = () => {
  const [searchParams] = useSearchParams();
  const { recentUsers, isLoading } = useRecentUsers();

  if (isLoading) return <CustomSkeleton />;

  const totalPages = Math.ceil(recentUsers.length / DASHBOARD_TOTAL_RESULTS);
  const currentPage = +searchParams.get("page") || 1;

  const paginatedUsers = recentUsers.slice(
    currentPage * DASHBOARD_TOTAL_RESULTS - DASHBOARD_TOTAL_RESULTS,
    currentPage * DASHBOARD_TOTAL_RESULTS
  );

  return (
    <Box header={"Recent Registered Users"}>
      <UsersTableComp
        headers={["Image", "user name", "type", "Joined on"]}
        totalPages={totalPages}
        currentPage={currentPage}
        render={paginatedUsers.map(user => (
          <DashboardUserRow user={user} />
        ))}
      />
    </Box>
  );
};

export default RecentUsers;
