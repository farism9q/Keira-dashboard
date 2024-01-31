import { useTodayBookings } from "./useTodayBookings";

import Box from "../../ui/Box";
import CustomSkeleton from "../../ui/CustomSkeleton";
import Empty from "../../ui/Empty";
import DashboardTable from "./DashboardTable";
import TodayBookingRow from "./TodayBookingRow";

const TodaysBookings = () => {
  const { todayBookings, isLoading } = useTodayBookings();

  if (isLoading) return <CustomSkeleton />;

  return (
    <Box header={"Today bookings"}>
      {!isLoading && todayBookings.length > 0 ? (
        <DashboardTable>
          {todayBookings.map(booking => (
            <TodayBookingRow booking={booking} />
          ))}
        </DashboardTable>
      ) : (
        <Empty>{!isLoading && <p>No bookings for today</p>}</Empty>
      )}
    </Box>
  );
};

export default TodaysBookings;
