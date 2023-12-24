import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login.jsx";
import Register from "./components/authentication/Register.jsx";
import AppointmentPage from "./components/Modal/AppointmentPage.jsx";
import { ContextProvider } from "./context/auth-context.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import RiwayatPage from "./pages/RiwayatPage.jsx";
import { DataAppoinmentProvider } from "./context/data-appoinment.jsx";
import HomePage from "./pages/HomePage.jsx";
const app = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/appointment", element: <AppointmentPage /> },
  { path: "/all-reviews", element: <ReviewPage /> },
  { path: "/riwayat-appointment", element: <RiwayatPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <DataAppoinmentProvider>
        <RouterProvider router={app} />
      </DataAppoinmentProvider>
    </ContextProvider>
  </React.StrictMode>
);
