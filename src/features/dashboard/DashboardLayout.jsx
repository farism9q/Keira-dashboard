import TodaysBookings from "./TodaysBookings";
import BookingsChart from "./BookingsChart";
import InitiatedReportCountsChart from "./InitiatedReportCountsBy";
import RecentReports from "./RecentReports";
import RecentUsers from "./RecentUsers";
import UsersTypeChart from "./UsersTypeChart";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <RecentReports />
        <RecentUsers />
        <TodaysBookings />

        <InitiatedReportCountsChart />
        <UsersTypeChart />
      </div>

      <BookingsChart />
    </div>
  );
};

export default DashboardLayout;
