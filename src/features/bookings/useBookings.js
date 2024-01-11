import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const sortRaw = searchParams.get("sortBy")?.split("-") || [
    "bookingTimeSD",
    "desc",
  ];

  const sortBy = {
    field: sortRaw.at(0),
    direction: sortRaw.at(1),
  };

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookings({ sortBy }),
    queryKey: ["bookings", sortBy],
  });

  return { bookings, isLoading };
}
