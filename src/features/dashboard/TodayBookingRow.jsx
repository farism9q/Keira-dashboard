import { useNavigate } from "react-router-dom";

import { differenceInDays, format } from "date-fns";

import { TableCell, TableRow } from "../../components/ui/table";
import Status from "../../ui/Status";
import Tag from "../../ui/Tag";

const TodayBookingRow = ({ booking }) => {
  const navigate = useNavigate();

  const {
    bookingID,
    deliveryOption,
    bookingTimeSD,
    bookingTimeED,
    bookingStatus,
    bookingDate,
  } = booking;

  const numBookingDays = differenceInDays(bookingTimeED, bookingTimeSD);
  const bookingTime = format(bookingDate, "p");

  return (
    <TableRow role="button" onClick={() => navigate(`/bookings/${bookingID}`)}>
      <TableCell>
        <Tag
          text={deliveryOption}
          bgColor={deliveryOption === "استلام" ? "bg-red-600" : "bg-blue-600"}
          textColor={
            deliveryOption === "استلام" ? "text-red-50" : "text-blue-50"
          }
        />
      </TableCell>
      <TableCell>For {numBookingDays} days</TableCell>
      <TableCell>
        <Status color={"green"}>{bookingStatus}</Status>
      </TableCell>
      <TableCell>{bookingTime}</TableCell>
    </TableRow>
  );
};

export default TodayBookingRow;
