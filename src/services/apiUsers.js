import {
  collection,
  getDocs,
  orderBy,
  getCountFromServer,
  query,
  where,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase_configure";
import { formateFBDate } from "../utils/helper";
import { deleteUser as deleteUserApi } from "./apiAuth";
const usersRef = collection(db, "users");

export async function getUsers({ filter, sortBy }) {
  let q;
  const users = [];

  if (!sortBy) {
    sortBy = {
      field: "createdAt",
      direction: "asc",
    };
  }

  q = query(usersRef, orderBy(sortBy.field, sortBy.direction));

  if (Object.keys(filter).length > 0) {
    q = query(
      usersRef,
      where(Object.keys(filter)[0], filter.opStr, Object.values(filter)[0])
    );
  }

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(user => {
    users.push({
      id: user.id,
      ...user.data(),
      memberSince: formateFBDate({
        dates: [user.data().memberSince],
      })[0],
    });
  });
  return users;
}

export async function getUser(id) {
  const docRef = doc(usersRef, id);

  const data = await getDoc(docRef);

  return data.data();
}

export async function deleteUser(id) {
  await deleteUserApi(id);

  const document = doc(usersRef, id);
  await deleteDoc(document);

  // To get user id in toast success function
  return id;
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
