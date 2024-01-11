import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase_configure";
import { format } from "date-fns";

export async function getReports({ sortBy }) {
  const reportsRef = collection(db, "Reports");
  let q;
  const reports = [];

  if (!sortBy) {
    sortBy.field = "date";
    sortBy.direction = "desc";
  }

  q = query(reportsRef, orderBy(sortBy.field, sortBy.direction));

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
