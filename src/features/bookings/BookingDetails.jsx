import { useBooking } from "./useBooking";
import CustomSkeleton from "../../ui/CustomSkeleton";
import BookingHeader from "./BookingHeader";
import BookingDetailsBox from "./BookingDetailsBox";

const BookingDetails = () => {
  const { booking, isLoading } = useBooking();

  if (isLoading) return <CustomSkeleton rounded={false} />;

  const { bookingID, bookingTimeSD, bookingTimeED, bookingStatus } = booking;

  return (
    <>
      <BookingHeader
        bookingID={bookingID}
        bookingStatus={bookingStatus}
        strDate={bookingTimeSD}
        endDate={bookingTimeED}
      />
      <BookingDetailsBox booking={booking} />
    </>
  );
};

export default BookingDetails;
