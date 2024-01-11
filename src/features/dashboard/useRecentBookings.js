import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = +searchParams.get("last") || 30;

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(subDays(Date.now(), numDays)),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { bookings, isLoading };
}
