import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { DarkModeProvider } from "./contexts/DarkModeProvider";
import { CarProvider } from "./contexts/CarProvider";

import Reports from "./pages/Reports";
import AppLayout from "./ui/AppLayout";
import Cars from "./pages/Cars";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import ReportDetails from "./features/reports/ReportDetails";
import Bookings from "./pages/Bookings";
import BookingDetails from "./features/bookings/BookingDetails";
import Login from "./features/authentication/Login";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import CarDetails from "./features/cars/CarDetails";

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
      {
        path: "/cars/:carId",
        element: (
          <CarProvider>
            <CarDetails />
          </CarProvider>
        ),
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
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "20px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#333",
              color: "#fff",
            },
          }}
        />
        <DarkModeProvider>
          <RouterProvider router={router}></RouterProvider>
        </DarkModeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
