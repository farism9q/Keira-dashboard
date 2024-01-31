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
import { BOOKING_CHARGE } from "../../utils/constants";

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

  return (
    <Box header={"Bookings Transactions"}>
      <ResponsiveContainer height={300} width={"100%"}>
        <AreaChart data={transactions}>
          <XAxis
            dataKey={"month"}
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
            dataKey={"totalPrice"}
            type={"monotone"}
            stroke={colors.totalPrice.stroke}
            fill={colors.totalPrice.fill}
            strokeWidth={2}
            name="Total price"
            unit={"RS"}
          />

          <Area
            dataKey={"profits"}
            type={"monotone"}
            stroke={colors.profits.stroke}
            fill={colors.profits.fill}
            strokeWidth={2}
            name="Profits"
            unit={"RS"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BookingsChart;
