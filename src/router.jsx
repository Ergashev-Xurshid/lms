import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import TeacherLayout from "./layout/TeacherLayout";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import ErrorPage from "./pages/ErrorPage";
import ClassSchedule from "./pages/teacher/ClassSchedule";
import Library from "./pages/teacher/Library";
import TechnicalSupport from "./pages/teacher/TechnicalSupport";
import AffiliatedDisciplines from "./pages/teacher/trening/AffiliatedDisciplines";
import Subject from "./pages/teacher/trening/Subject";
import TeachLesson from "./pages/teacher/trening/TeachLesson";
import AttendanceJournal from "./pages/teacher/trening/AttendanceJournal";
import AssignmentDatabase from "./pages/teacher/assessmentTasks/AssignmentDatabase";
import Inputs from "./pages/teacher/system/Inputs";
import HistoryActions from "./pages/teacher/system/HistoryActions";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// 🔐 Auth check
const isAuthenticated = () => localStorage.getItem("token") !== null;

export const router = createBrowserRouter([
  // 🔸 Login sahifasi
  {
    path: "/login",
    element: <Login />,
  },

  // 🔸 Root redirect
  {
    path: "/",
    element: isAuthenticated() ? (
      <Navigate to="/teacher/dashboard" replace />
    ) : (
      <Navigate to="/login" replace />
    ),
  },

  // 🔒 Himoyalangan yo‘nalishlar
  {
    path: "/teacher",
    element: (
      <ProtectedRoute>
        <TeacherLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,

    children: [
      // 🔸 Asosiy redirect: /teacher → /teacher/dashboard
      { index: true, element: <Navigate to="dashboard" replace /> },

      // 🔸 Dashboard
      { path: "dashboard", element: <TeacherDashboard /> },

      // 🔸 Trening bo‘limi
      {
        path: "trening",
        element: <Outlet />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="disciplines" replace /> },
          { path: "disciplines", element: <AffiliatedDisciplines /> },
          { path: "subject", element: <Subject /> },
          { path: "lesson", element: <TeachLesson /> },
          { path: "jurnal", element: <AttendanceJournal /> },
        ],
      },

      // 🔸 Topsiriqlar (tasks)
      {
        path: "tasks",
        element: <Outlet />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="database" replace /> },
          { path: "database", element: <AssignmentDatabase /> },
        ],
      },

      // 🔸 Tizim sozlamalari (systems)
      {
        path: "systems",
        element: <Outlet />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="inputs" replace /> },
          { path: "inputs", element: <Inputs /> },
          { path: "history", element: <HistoryActions /> },
        ],
      },

      // 🔸 Boshqa bo‘limlar
      { path: "class", element: <ClassSchedule /> },
      { path: "library", element: <Library /> },
      { path: "support", element: <TechnicalSupport /> },
    ],
  },

  // 🔸 404 sahifa
  {
    path: "*",
    element: <div className="p-6 text-center text-xl">404 — Sahifa topilmadi</div>,
  },
]);
