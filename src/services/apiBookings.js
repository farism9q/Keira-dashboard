import {
  Timestamp,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase_configure";
import { format } from "date-fns";

const bookingsRef = collection(db, "bookings");

export async function getBookings({ sortBy }) {
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

export async function getBookingsAfterDate(date) {
  const FBDate = Timestamp.fromDate(date);

  const q = query(bookingsRef, where("bookingDate", ">=", FBDate));
  const bookings = [];

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(booking => {
    bookings.push({
      id: booking.id,
      ...booking.data(),
    });
  });

  console.log(bookings);

  return bookings;
}
