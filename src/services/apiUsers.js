import {
  collection,
  getDocs,
  orderBy,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase_configure";
import { format } from "date-fns";

const usersRef = collection(db, "users");

export async function getUsers({ sortBy }) {
  let q;
  const users = [];

  if (!sortBy) {
    sortBy.field = "memberSince";
    sortBy.direction = "asc";
  }

  q = query(usersRef, orderBy(sortBy.field, sortBy.direction));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(user => {
    users.push({
      id: user.id,
      ...user.data(),
      memberSince: format(user.data().memberSince, "MM/dd/yyyy"),
    });
  });
  return users;
}

// Get the numbers of each users type in Keira
export async function getUsersTypeCount() {
  const individulas = query(usersRef, where("type", "==", "فرد"));
  const carRentals = query(usersRef, where("type", "==", "مكتب تأجير"));

  // Run asynchronous functions in parallel if they are not dependent on each other, as below:
  const querySnapshot = await Promise.all([
    getCountFromServer(individulas),
    getCountFromServer(carRentals),
  ]);

  const usersType = [
    {
      type: "individulas",
      count: querySnapshot[0].data().count,
    },

    {
      type: "carRentals",
      count: querySnapshot[1].data().count,
    },
  ];

  return usersType;
}
