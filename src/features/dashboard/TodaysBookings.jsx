import { DASHBOARD_TOTAL_RESULTS } from "../../utils/constants";

import { useSearchParams } from "react-router-dom";
import { useTodayBookings } from "./useTodayBookings";

import Box from "../../ui/Box";
import CustomSkeleton from "../../ui/CustomSkeleton";
import Empty from "../../ui/Empty";
import DashboardTable from "../../ui/DashboardTable";
import TodayBookingRow from "./TodayBookingRow";

const TodaysBookings = () => {
  const [searchParams] = useSearchParams();
  const { todayBookings, isLoading } = useTodayBookings();

  if (isLoading) return <CustomSkeleton />;

  const totalPages = Math.ceil(todayBookings.length / DASHBOARD_TOTAL_RESULTS);
  const currentPage = +searchParams.get("todayBookings") || 1;

  const paginatedTodayBookings = todayBookings.slice(
    currentPage * DASHBOARD_TOTAL_RESULTS - DASHBOARD_TOTAL_RESULTS,
    currentPage * DASHBOARD_TOTAL_RESULTS
  );

  return (
    <Box header={"Today bookings"}>
      {todayBookings.length > 0 ? (
        <DashboardTable
          currentPage={currentPage}
          headers={["delivery option", "days", "status", "time"]}
          totalPages={totalPages}
          pageQueryName={todayBookings}
          render={paginatedTodayBookings.map(booking => (
            <TodayBookingRow booking={booking} />
          ))}
        />
      ) : (
        <Empty>{<p>No bookings for today</p>}</Empty>
      )}
    </Box>
  );
};

export default TodaysBookings;
