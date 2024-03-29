import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase_configure";

import { formateFBDate } from "../utils/helper";
import { checkRole } from "./apiAuth";

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

export async function getUserCars(userId) {
  const q = query(carsRef, where("userID", "==", userId));
  const userCars = [];

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(car => {
    userCars.push({ id: car.id, ...car.data() });
  });

  return userCars;
}

export async function deleteCar(id) {
  const { status, message } = await checkRole();

  if (status !== "success") {
    throw new Error(message || "Something went worng");
  }

  const document = doc(carsRef, id);
  await deleteDoc(document);
}
