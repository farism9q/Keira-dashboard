import BookingsChart from "./BookingsChart";
import InitiatedReportCountsChart from "./InitiatedReportCountsBy";
import UsersTypeChart from "./UsersTypeChart";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col gap-5">
      <BookingsChart />

      <div className="grid grid-cols-2 gap-4">
        <InitiatedReportCountsChart />
        <UsersTypeChart />
      </div>
    </div>
  );
};

export default DashboardLayout;
