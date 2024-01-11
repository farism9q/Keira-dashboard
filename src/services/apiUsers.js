import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "./firebase_configure";
import { format } from "date-fns";

export async function getUsers({ sortBy }) {
  const usersRef = collection(db, "users");
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
  console.log(users);
  return users;
}
