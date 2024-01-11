import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "./firebase_configure";
import { format } from "date-fns";

export async function getBookings({ sortBy }) {
  const bookingsRef = collection(db, "bookings");
  console.log(bookingsRef);
  let q;
  const bookings = [];

  if (!sortBy) {
    sortBy.field = "bookingTimeSD";
    sortBy.direction = "desc";
  }

  q = query(bookingsRef, orderBy(sortBy.field, sortBy.direction));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(booking => {
    const formattedDates = {
      bookingTimeSD: format(
        booking.data().bookingTimeSD.toDate(),
        "MM/dd/yyyy p"
      ),
      bookingTimeED: format(
        booking.data().bookingTimeED.toDate(),
        "MM/dd/yyyy p"
      ),
      bookingDate: format(booking.data().bookingDate.toDate(), "MM/dd/yyyy p"),
    };

    bookings.push({ id: booking.id, ...booking.data(), ...formattedDates });
  });
  return bookings;
}
