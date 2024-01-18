import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCaption,
} from "../../components/ui/table";
import TablePagination from "../../ui/TablePagination";
import { useSearchParams } from "react-router-dom";
import { TOTAL_RESULTS } from "../../utils/constants";
import TableSkeleton from "../../ui/skeleton/TableSkeleton";
import { useBookings } from "./useBookings";
import BookingRow from "./BookingRow";

const headers = [
  "booking id",
  "car ID",
  "user ID",
  "Status",
  "start date",
  "end date",
  "",
];

const BookingsTable = () => {
  const { bookings, isLoading } = useBookings();
  const [searchParams] = useSearchParams();

  if (isLoading)
    return <TableSkeleton headersLength={headers.length} rowsLength={7} />;

  const totalPages = Math.ceil(bookings.length / TOTAL_RESULTS);
  const currentPage = +searchParams.get("page") || 1;

  const paginatedBookings = bookings.slice(
    currentPage * TOTAL_RESULTS - TOTAL_RESULTS,
    currentPage * TOTAL_RESULTS
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map(header => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {paginatedBookings.map(booking => (
          <BookingRow booking={booking} key={booking.id} />
        ))}
      </TableBody>
      <TableCaption>
        <TablePagination
          currentPage={currentPage}
          next={currentPage < totalPages}
          previous={currentPage > 1}
        />
      </TableCaption>
    </Table>
  );
};

export default BookingsTable;
