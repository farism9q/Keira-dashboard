import { TableCell, TableRow } from "../../components/ui/table";
import Image from "../../ui/Image";
import Tag from "../../ui/Tag";
import { useDarkMode } from "../../contexts/DarkModeProvider";
import Status from "../../ui/Status";

const BookingRow = ({ booking }) => {
  // const { darkMode } = useDarkMode();

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

  // const tagColors = darkMode
  //   ? {
  //       bgColor:
  //         bookingStatus === "تم تسليم السيارة للعميل"
  //           ? "bg-green-500"
  //           : "bg-blue-500",
  //       color:
  //         bookingStatus === "تم تسليم السيارة للعميل"
  //           ? "text-green-50"
  //           : "text-blue-50",
  //     }
  //   : {
  //       bgColor:
  //         bookingStatus === "تم تسليم السيارة للعميل"
  //           ? "bg-blue-600"
  //           : "bg-amber-500",
  //       color:
  //         bookingStatus === "تم تسليم السيارة للعميل"
  //           ? "text-blue-50"
  //           : "text-amber-50",
  //     };

  return (
    <TableRow>
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
    </TableRow>
  );
};

export default BookingRow;
