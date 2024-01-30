import { TableCell, TableRow } from "../../components/ui/table";

import Status from "../../ui/Status";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { HiEllipsisVertical, HiEye } from "react-icons/hi2";
import PopoverItem from "../../ui/PopoverItem";
import { useNavigate } from "react-router-dom";

const ReportRow = ({ report }) => {
  const navigate = useNavigate();
  const { id, userID, carID, isAnswered, date } = report;

  return (
    <TableRow role="button" onClick={() => navigate(id)}>
      <TableCell>#{userID}</TableCell>
      <TableCell>#{carID}</TableCell>
      <TableCell>
        <Status color={isAnswered ? "green" : "red"}>
          {isAnswered ? "Responded" : "Waiting..."}
        </Status>
      </TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>
        <Popover>
          <PopoverTrigger>
            <HiEllipsisVertical />
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <PopoverItem onClick={() => navigate(`${id}`)}>
              <HiEye /> Show details
            </PopoverItem>
          </PopoverContent>
        </Popover>
      </TableCell>
    </TableRow>
  );
};

export default ReportRow;
