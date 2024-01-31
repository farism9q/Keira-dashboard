import { useNavigate } from "react-router-dom";

import { differenceInDays, format } from "date-fns";

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
    <div
      role="button"
      onClick={() => navigate(`/bookings/${bookingID}`)}
      className="flex items-center justify-around bg-gray-50 rounded-sm py-2 dark:bg-gray-800/70 shadow-md transition-all duration-300 hover:rounded-lg hover:bg-slate-200/70 hover:dark:bg-gray-900/20"
    >
      <Tag
        text={deliveryOption}
        bgColor={deliveryOption === "استلام" ? "bg-red-600" : "bg-blue-600"}
        textColor={deliveryOption === "استلام" ? "text-red-50" : "text-blue-50"}
      />
      <p>For {numBookingDays} days</p>
      <Status color={"green"}>{bookingStatus}</Status>
      <p>{bookingTime}</p>
    </div>
  );
};

export default TodayBookingRow;
