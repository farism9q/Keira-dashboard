import { TableCell, TableRow } from "../../components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import Tag from "../../ui/Tag";
import { HiEllipsisVertical, HiOutlineEye } from "react-icons/hi2";
import PopoverItem from "../../ui/PopoverItem";
import { useNavigate } from "react-router-dom";

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
        : "bg-blue-500",
    color:
      bookingStatus === "تم تسليم السيارة للعميل"
        ? "text-green-50"
        : "text-blue-50",
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
