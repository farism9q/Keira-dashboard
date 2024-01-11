import { HiTrash } from "react-icons/hi2";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import ConfirmModal from "../ui/ConfirmModal";
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

      <ConfirmModal>
        <div role="button" className="h-8 w-8 bg-red-600">
          <HiTrash />
        </div>
      </ConfirmModal>
    </>
  );
};

export default Dashboard;
