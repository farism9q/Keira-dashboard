import { useNavigate } from "react-router-dom";

import { TableCell, TableRow } from "../../components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import PopoverItem from "../../ui/PopoverItem";
import { HiEllipsisVertical, HiOutlineEye } from "react-icons/hi2";
import Tag from "../../ui/Tag";

const BookingRow = ({ booking }) => {
  const navigate = useNavigate();

  const {
    bookingID,
    bookingStatus,
    bookingTimeED,
    bookingTimeSD,
    carID,
    userID,
  } = booking;

  const tagColors = {
    bgColor:
      bookingStatus === "تم تسليم السيارة للعميل"
        ? "bg-green-500"
        : "bg-red-600",
    color:
      bookingStatus === "تم تسليم السيارة للعميل"
        ? "text-green-50"
        : "text-red-50",
  };

  return (
    <TableRow className="group" onClick={e => e.stopPropagation()}>
      <TableCell>#{bookingID}</TableCell>
      <TableCell>#{carID}</TableCell>
      <TableCell>#{userID}</TableCell>
      <TableCell>
        <Tag
          text={bookingStatus}
          textColor={tagColors["color"]}
          bgColor={tagColors["bgColor"]}
        />
      </TableCell>
      <TableCell>{bookingTimeSD}</TableCell>
      <TableCell>{bookingTimeED}</TableCell>
      <TableCell>
        {
          <Popover>
            <PopoverTrigger>
              <HiEllipsisVertical />
            </PopoverTrigger>

            <PopoverContent className="w-40">
              <PopoverItem onClick={() => navigate(`${bookingID}`)}>
                <HiOutlineEye />
                Show details
              </PopoverItem>
            </PopoverContent>
          </Popover>
        }
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
