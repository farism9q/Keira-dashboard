import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
} from "recharts";
import { useRecentBookings } from "./useRecentBookings";
import { format } from "date-fns";
import { useDarkMode } from "../../contexts/DarkModeProvider";
import AreaChartSkeleton from "../../ui/skeleton/AreaChartSkeleton";
import Box from "../../ui/Box";

const fakeData = [
  { label: "Jan 09", totalSales: 480, extrasSales: 20 },
  { label: "Jan 10", totalSales: 580, extrasSales: 100 },
  { label: "Jan 11", totalSales: 550, extrasSales: 150 },
  { label: "Jan 12", totalSales: 600, extrasSales: 50 },
  { label: "Jan 13", totalSales: 700, extrasSales: 150 },
  { label: "Jan 14", totalSales: 800, extrasSales: 150 },
  { label: "Jan 15", totalSales: 700, extrasSales: 200 },
  { label: "Jan 16", totalSales: 650, extrasSales: 200 },
  { label: "Jan 17", totalSales: 600, extrasSales: 300 },
  { label: "Jan 18", totalSales: 550, extrasSales: 100 },
  { label: "Jan 19", totalSales: 700, extrasSales: 100 },
  { label: "Jan 20", totalSales: 800, extrasSales: 200 },
  { label: "Jan 21", totalSales: 700, extrasSales: 100 },
  { label: "Jan 22", totalSales: 810, extrasSales: 50 },
  { label: "Jan 23", totalSales: 950, extrasSales: 250 },
  { label: "Jan 24", totalSales: 970, extrasSales: 100 },
  { label: "Jan 25", totalSales: 900, extrasSales: 200 },
  { label: "Jan 26", totalSales: 950, extrasSales: 300 },
  { label: "Jan 27", totalSales: 850, extrasSales: 200 },
  { label: "Jan 28", totalSales: 900, extrasSales: 100 },
  { label: "Jan 29", totalSales: 800, extrasSales: 300 },
  { label: "Jan 30", totalSales: 950, extrasSales: 200 },
  { label: "Jan 31", totalSales: 1100, extrasSales: 300 },
  { label: "Feb 01", totalSales: 1200, extrasSales: 400 },
  { label: "Feb 02", totalSales: 1250, extrasSales: 300 },
  { label: "Feb 03", totalSales: 1400, extrasSales: 450 },
  { label: "Feb 04", totalSales: 1500, extrasSales: 500 },
  { label: "Feb 05", totalSales: 1400, extrasSales: 600 },
  { label: "Feb 06", totalSales: 1450, extrasSales: 400 },
];

const BOOKING_CHARGE = 0.25;

const BookingsChart = () => {
  const { darkMode } = useDarkMode();
  const colors = {
    totalPrice: { stroke: "#3b82f6", fill: "#1d4ed8" },
    profits: { stroke: "#22c55e", fill: "#22c55e" },
    text: darkMode ? "#e5e7eb" : "#374151",
    background: darkMode ? "#18212f" : "#fff",
  };

  const { bookings, isLoading } = useRecentBookings();

  if (isLoading) return <AreaChartSkeleton />;

  const transactions = bookings.map(booking => {
    return {
      month: format(booking.bookingDate.toDate(), "io 'of' MMM"), // (io) --> 2nd, 7th, etc || (MMM) --> Jan, Dec, etc
      totalPrice: booking.carPrice * (1 + BOOKING_CHARGE),
      profits: booking.carPrice * BOOKING_CHARGE,
    };
  });

  if (!transactions?.length) return <h1>NOTHING TO SHOW</h1>;

  return (
    <Box header={"Bookings Transactions"}>
      <ResponsiveContainer height={300} width={"100%"}>
        <AreaChart data={fakeData}>
          <XAxis
            dataKey={"label"}
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit={"RS"}
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray={"4"} />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              font: "message-box",
            }}
          />
          <Area
            dataKey={"totalSales"}
            type={"monotone"}
            stroke={colors.totalPrice.stroke}
            fill={colors.totalPrice.fill}
            strokeWidth={2}
            name="Total sales"
            unit={"RS"}
          />

          <Area
            dataKey={"extrasSales"}
            type={"monotone"}
            stroke={colors.profits.stroke}
            fill={colors.profits.fill}
            strokeWidth={2}
            name="Profits"
            unit={"Riyal SA"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BookingsChart;
