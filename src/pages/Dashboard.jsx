import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Filter from "../ui/Filter";

const Dashboard = () => {
  return (
    <>
      <Row>
        <Heading header={"Dashboard"} />
        <Filter
          field={"last"}
          values={[
            { label: "30 days ago", value: "30" },
            { label: "60 days ago", value: "60" },
            { label: "90 days ago", value: "90" },
          ]}
        />
      </Row>
      <DashboardLayout />
    </>
  );
};

export default Dashboard;
