import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Reports from "./pages/Reports";
import AppLayout from "./ui/AppLayout";
import Cars from "./pages/Cars";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import { DarkModeProvider } from "./contexts/DarkModeProvider";
import ReportDetails from "./features/reports/ReportDetails";
import Bookings from "./pages/Bookings";
import BookingDetails from "./features/bookings/BookingDetails";
import Login from "./features/authentication/Login";
import ProtectedRoutes from "./ui/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/dashboard" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    element: (
      <ProtectedRoutes>
        <AppLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/bookings/:bookingId",
        element: <BookingDetails />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      { path: "/reports/:reportId", element: <ReportDetails /> },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <DarkModeProvider>
          <RouterProvider router={router}></RouterProvider>
        </DarkModeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
