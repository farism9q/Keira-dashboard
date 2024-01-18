import { format } from "date-fns";

export function formateFBDate(...dates) {
  return dates.map(date => format(date.toDate(), "MM/dd/yyyy p"));
}

export const formatCurrency = (value, currency = "SAR") =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  }).format(value);
