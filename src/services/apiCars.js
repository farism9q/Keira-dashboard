import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase_configure";

import { formateFBDate } from "../utils/helper";

const carsRef = collection(db, "cars");

export async function getCars({ sortBy }) {
  let q;
  const cars = [];

  if (!sortBy) {
    sortBy.field = "carRating";
    sortBy.direction = "asc";
  }

  q = query(carsRef, orderBy(sortBy.field, sortBy.direction));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(car => {
    cars.push({ id: car.id, ...car.data() });
  });
  console.log(cars);
  return cars;
}

export async function getCar(id) {
  const docRef = doc(carsRef, id);

  const data = await getDoc(docRef);

  const formattedDates = formateFBDate({
    showDay: true,
    showTime: true,
    dates: [
      data.data().CarDateNow,
      data.data().carDate_start,
      data.data().carDate_end,
    ],
  });

  const car = {
    ...data.data(),
    CarDateNow: formattedDates[0],
    carDate_start: formattedDates[1],
    carDate_end: formattedDates[2],
  };

  return car;
}
