import { HiTrash } from "react-icons/hi2";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import ConfirmModal from "../ui/ConfirmModal";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  return (
    <>
      <Row>
        <Heading header={"Dashboard"} />
        <h4>Sort/Filter</h4>
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
