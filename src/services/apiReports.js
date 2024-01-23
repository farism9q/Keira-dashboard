import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  or,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase_configure";
import { format } from "date-fns";

import { formateFBDate } from "../utils/helper";

const reportsRef = collection(db, "Reports");

export async function getReports({ filter, sortBy }) {
  let q;
  const reports = [];

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

export async function sendReportResponse({ email, name, comment }) {
  const { token } = JSON.parse(localStorage.getItem("user"));

  const res = await fetch(`http://localhost:3000/api/v1/admin/sendEmail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email,
      name,
      comment,
    }),
  });

  const body = await res.json();

  if (res.status === 401 || body.status === "fail") {
    throw new Error(body.message || "Something went wrong");
  }

  return { comment };
}

export async function updateReportStatus({ reportId, comment }) {
  const docRef = doc(reportsRef, reportId);

  setDoc(
    docRef,
    {
      isAnswered: true,
      response: comment,
      responseDate: new Date(Date.now()),
    },
    { merge: true }
  );
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
