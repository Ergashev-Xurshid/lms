import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import TeacherLayout from "../layout/TeacherLayout";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import ErrorPage from "../pages/ErrorPage";
import ClassSchedule from "../pages/teacher/ClassSchedule";
import Library from "../pages/teacher/Library";
import TechnicalSupport from "../pages/teacher/TechnicalSupport";
import AffiliatedDisciplines from "../pages/teacher/trening/AffiliatedDisciplines";
import Subject from "../pages/teacher/trening/Subject";
import TeachLesson from "../pages/teacher/trening/TeachLesson";
import AttendanceJournal from "../pages/teacher/trening/AttendanceJournal";
import AssignmentDatabase from "../pages/teacher/assessmentTasks/AssignmentDatabase";
import Inputs from "../pages/teacher/system/Inputs";
import HistoryActions from "../pages/teacher/system/HistoryActions";
import Login from "../pages/Login";
import ProtectedRoute from "../components/common/ProtectedRoute";
//root loader
import { rootLoader } from "../root/root";
import StudentLayout from "../layout/StudentLayout";

// ✅ Auth check funksiyasi
const isAuthenticated = () => !!localStorage.getItem("token");
const getRole = () => localStorage.getItem("role");

export const router = createBrowserRouter([
  // 🔹 Login sahifasi
  {
    path: "/login",
    element: <Login />,
  },

  // 🔹 Root redirect
  {
    path: "/",
    loader: rootLoader,
    element: <Navigate to="/login" replace />,
  },

    // 👨‍🏫 Teacher routes
  {
    path: "/teacher",
    element: (
      <ProtectedRoute allowedRoles={["teacher"]}>
        <TeacherLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <TeacherDashboard /> },

      // 📚 Trening bo‘limi
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

      // 🧩 Topsiriqlar (tasks)
      {
        path: "tasks",
        element: <Outlet />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="database" replace /> },
          { path: "database", element: <AssignmentDatabase /> },
        ],
      },

      // ⚙️ Tizim sozlamalari (systems)
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

      // 🧭 Boshqa sahifalar
      { path: "class", element: <ClassSchedule /> },
      { path: "library", element: <Library /> },
      { path: "support", element: <TechnicalSupport /> },
    ],
  },
  // 👩‍🎓 Student routes
  {
    path: "/student",
    element: (
      <ProtectedRoute allowedRoles={["student"]}>
        <StudentLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <div>Courses bo‘limi</div>},
      { path: "courses", element:  <div>Courses bo‘limi</div>},
      { path: "profile", element: <div>Profile bo‘limi</div> },
    ],
  },

  // 👨‍💼 Admin routes
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        {/* <AdminLayout /> */}
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <div>Users bo‘limi</div> },
      { path: "users", element: <div>Users bo‘limi</div> },
      { path: "reports", element: <div>Reports bo‘limi</div> },
    ],
  },
  // 🔹 404
  {
    path: "*",
    element: (
      <div className="p-6 text-center text-xl">404 — Sahifa topilmadi</div>
    ),
  },
]);
