import { TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
  HiEllipsisVertical,
} from "react-icons/hi2";
import Status from "../../ui/Status";

const ReportRow = ({ report }) => {
  const { userID, carID, isAnswered, date } = report;

  return (
    <TableRow>
      <TableCell>#{userID}</TableCell>
      <TableCell>#{carID}</TableCell>
      <TableCell>
        <Status color={isAnswered ? "green" : "red"}>
          {isAnswered ? "Responded" : "Waiting..."}
        </Status>
      </TableCell>
      <TableCell>{"11/11/2022"}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger>
            {<HiEllipsisVertical size={28} />}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              {<HiEye />}
              <span>View details</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {<HiArrowUpOnSquare />}
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {<HiTrash />}
              <span>Team</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default ReportRow;
