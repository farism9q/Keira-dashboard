import { useNavigate } from "react-router-dom";

import { TableCell, TableRow } from "../../components/ui/table";

import Status from "../../ui/Status";

const ReportRow = ({ report }) => {
  const navigate = useNavigate();
  const { id, userID, carID, isAnswered, date } = report;

  return (
    <TableRow role="button" onClick={() => navigate(`/reports/${id}`)}>
      <TableCell className="text-ellipsis">#{userID}</TableCell>
      <TableCell>#{carID}</TableCell>
      <TableCell>
        <Status color={isAnswered ? "green" : "red"}>
          {isAnswered ? "Responded" : "Waiting..."}
        </Status>
      </TableCell>
      <TableCell>{date}</TableCell>
    </TableRow>
  );
};

export default ReportRow;
