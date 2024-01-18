import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();

  const { data: booking, isLoading } = useQuery({
    queryFn: () => getBooking(bookingId),
    queryKey: ["booking"],
  });

  return { booking, isLoading };
}
