import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase_configure";
import { formateFBDate } from "../utils/helper";

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
    const dates = formateFBDate(
      booking.data().bookingTimeSD,
      booking.data().bookingTimeED,
      booking.data().bookingDate
    );

    const formattedDates = {
      bookingTimeSD: dates[0],
      bookingTimeED: dates[1],
      bookingDate: dates[2],
    };

    bookings.push({ id: booking.id, ...booking.data(), ...formattedDates });
  });
  return bookings;
}

export async function getBooking(id) {
  const docRef = doc(bookingsRef, id);

  const data = await getDoc(docRef);

  const dates = formateFBDate(
    data.data().bookingTimeSD,
    data.data().bookingTimeED,
    data.data().bookingDate
  );

  const formattedDates = {
    bookingTimeSD: dates[0],
    bookingTimeED: dates[1],
    bookingDate: dates[2],
  };

  const booking = {
    ...data.data(),
    ...formattedDates,
  };

  return booking;
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
