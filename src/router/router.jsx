import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));


import { rootLoader } from "../root/root";

import { teacherRoutes } from "./teacherRoutes";
import { studentRoutes } from "./studentRoutes";
import { adminRoutes } from "./adminRoutes";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },

  { 
    path: "/", 
    loader: rootLoader, 
    element: <Navigate to="/login" 
    replace /> 
  },

  teacherRoutes,
  studentRoutes,
  adminRoutes,

  { path: "*", element: <ErrorPage /> },
]);
