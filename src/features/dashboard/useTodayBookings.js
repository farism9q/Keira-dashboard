import { useQuery } from "@tanstack/react-query";
import { getTodayBookings } from "../../services/apiBookings";

export function useTodayBookings() {
  const { data: todayBookings, isLoading } = useQuery({
    queryFn: getTodayBookings,
    queryKey: ["today-bookings"],
  });

  return { todayBookings, isLoading };
}
