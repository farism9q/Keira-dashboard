import { format } from "date-fns";

export function formateFBDate({ showTime = false, showDay = false, dates }) {
  const formats = {
    showDay: "EEE, MMM dd yyyy, p",
    showTime: "MM/dd/yyyy p",
    default: "MM/dd/yyyy",
  };

  // Choose the date format based on what is provided in the parameters.
  // The default is only the date, ex: 05/12/2023.
  const formatSrt =
    (showDay && formats["showDay"]) ||
    (showTime && formats["showTime"]) ||
    formats["default"];

  return dates.map(date => {
    const isFormatted = typeof date === "string";

    return format(isFormatted ? date : date.toDate(), formatSrt);
  });
}

export const formatCurrency = (value, currency = "SAR") =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  }).format(value);
