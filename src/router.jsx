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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/teacher/dashboard" replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/teacher",
    element: <TeacherLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> }, // /teacher -> /teacher/dashboard
      { path: "dashboard", element: <TeacherDashboard /> },
      // mashgulot  bo'limi uchun yo'nalishlar keyin qo'shiladi
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
      {
        path: "tasks",
        element: <Outlet />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="database" replace /> },
          { path: "database", element: <AssignmentDatabase /> },
        ],
      },
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
      { path: "class", element: <ClassSchedule /> },
      { path: "library", element: <Library /> },
      { path: "support", element: <TechnicalSupport /> },
    ],
  },
  // Optional: catch-all (no-match)
  {
    path: "*",
    element: <div className="p-6">404 — Sahifa topilmadi</div>,
  },
]);
