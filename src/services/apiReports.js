import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase_configure";
import { format } from "date-fns";

import { formateFBDate } from "../utils/helper";

const reportsRef = collection(db, "Reports");

export async function getReports({ filter, sortBy }) {
  let q;
  const reports = [];

  if (!sortBy) {
    sortBy.field = "date";
    sortBy.direction = "desc";
  }

  q = query(reportsRef, orderBy(sortBy.field, sortBy.direction));

  if (filter) {
    q = query(q, where("isAnswered", "==", filter.isAnswered));
  }

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(report => {
    const date = format(report.data().date.toDate(), "MM/dd/yyyy");
    reports.push({
      id: report.id,
      ...report.data(),
      date: date,
    });
  });

  return reports;
}

export async function getReport(id) {
  const docRef = doc(reportsRef, id);

  const data = await getDoc(docRef);

  const report = {
    ...data.data(),
    date: formateFBDate({ showDay: true, dates: [data.data().date] })[0],
  };

  return report;
}

export async function getInitiatedReportsCountByUserType() {
  const individuals = query(reportsRef, where("userType", "==", "عميل"));
  const carRentals = query(reportsRef, where("userType", "==", "مكتب تأجير"));

  const querySnapshot = await Promise.all([
    getCountFromServer(individuals),
    getCountFromServer(carRentals),
  ]);

  const initiatedReportsCountsBy = [
    {
      type: "individuals",
      count: querySnapshot[0].data().count,
    },

    {
      type: "carRentals",
      count: querySnapshot[1].data().count,
    },
  ];

  return initiatedReportsCountsBy;
}
