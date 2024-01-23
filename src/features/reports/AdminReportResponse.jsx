import Box from "../../ui/Box";
import { formateFBDate } from "../../utils/helper";
import ReportDetailsItem from "./ReportDetailsItem";

const AdminReportResponse = ({ response, responseDate }) => {
  return (
    <Box>
      <ReportDetailsItem
        field={"ADMIN RESPONSE"}
        value={response}
        colors={{ text: "text-white", bgColor: "bg-green-500" }}
      />
      <footer className="flex justify-end gap-1">
        <span className="font-bold tracking-wider">Responded on</span>{" "}
        {
          formateFBDate({
            showDay: true,
            showTime: true,
            dates: [responseDate],
          })[0]
        }
      </footer>
    </Box>
  );
};

export default AdminReportResponse;
