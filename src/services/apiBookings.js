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
import { subDays } from "date-fns";

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
    const dates = formateFBDate({
      showTime: true,
      dates: [
        booking.data().bookingTimeSD,
        booking.data().bookingTimeED,
        booking.data().bookingDate,
      ],
    });

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

  const dates = formateFBDate({
    dates: [
      data.data().bookingTimeSD,
      data.data().bookingTimeED,
      data.data().bookingDate,
    ],
  });

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

  return bookings;
}

export async function getTodayBookings() {
  const q = query(
    bookingsRef,
    where("bookingDate", ">=", subDays(new Date(Date.now()), 1))
  );

  const bookings = [];

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(booking => {
    const bookingDates = formateFBDate({
      dates: [booking.data().bookingTimeSD, booking.data().bookingTimeED],
    });
    const bookingCreatedAt = formateFBDate({
      showTime: true,
      dates: [booking.data().bookingDate],
    });

    const formattedDates = {
      bookingTimeSD: bookingDates[0],
      bookingTimeED: bookingDates[1],
      bookingDate: bookingCreatedAt[0],
    };
    bookings.push({ ...booking.data(), ...formattedDates });
  });

  return bookings;
}
