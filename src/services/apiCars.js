import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "./firebase_configure";

export async function getCars({ sortBy }) {
  const carsRef = collection(db, "cars");
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
