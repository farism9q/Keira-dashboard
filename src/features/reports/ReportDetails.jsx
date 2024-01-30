import { useNavigate } from "react-router-dom";

import { useReport } from "./useReport";

import { Button } from "../../components/ui/button";
import {
  HiOutlineArrowLeftCircle,
  HiOutlineEnvelopeOpen,
} from "react-icons/hi2";

import ReportDetailsBox from "./ReportDetailsBox";
import ReportResponseTemplate from "./ReportResponseTemplate";
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
          <ReportResponseTemplate
            reporterId={report.userID}
            userClaims={report.reportComments}
          >
            <Button className="bg-green-500 font-semibold text-gray-900 dark:text-slate-50 text-base hover:bg-green-400">
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
