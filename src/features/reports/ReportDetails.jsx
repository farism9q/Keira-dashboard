import ReportDetailsBox from "./ReportDetailsBox";
import { Button } from "../../components/ui/button";
import {
  HiOutlineArrowLeftCircle,
  HiOutlineEnvelopeOpen,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import ReportResponseTemplate from "./ReportResponseTemplate";
import { useReport } from "./useReport";
import CustomSkeleton from "../../ui/CustomSkeleton";
import AdminReportResponse from "./AdminReportResponse";

const ReportDetails = () => {
  const navigate = useNavigate();
  const { report, isLoading } = useReport();

  if (isLoading) return <CustomSkeleton />;

  const { response, responseDate } = report;

  return (
    <>
      <ReportDetailsBox report={report} />
      {report.isAnswered && (
        <AdminReportResponse response={response} responseDate={responseDate} />
      )}

      <div className="flex justify-end gap-4">
        <Button
          variant={"ghost"}
          className="text-base"
          onClick={() => navigate(-1)}
        >
          <HiOutlineArrowLeftCircle className="mr-2 h-4 w-4" /> Back
        </Button>

        {!report.isAnswered && (
          <ReportResponseTemplate reporterId={report.userID}>
            <Button className="bg-green-400 font-light text-black dark:text-slate-50 text-base hover:bg-green-500">
              <HiOutlineEnvelopeOpen className="mr-2 h-4 w-4" /> Send A response
              via Email
            </Button>
          </ReportResponseTemplate>
        )}
      </div>
    </>
  );
};

export default ReportDetails;
