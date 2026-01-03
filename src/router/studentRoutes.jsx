import { Navigate } from "react-router-dom";
import { lazy } from "react";
import ProtectedRoute from "../components/common/ProtectedRoute";
import StudentLayout from "../layout/StudentLayout";

const StudentDashboard = lazy(() => import("../pages/student/StudentDashboard"));
const StudentSubject = lazy(() => import("../pages/student/StudentSubject"));
const ControlTasks = lazy(() => import("../pages/student/ControlTasks"));
const LessonSchedule = lazy(() => import("../pages/student/LessonSchedule"));
const LearningProcess = lazy(() => import("../pages/student/LearningProcess"));
const ControlTable = lazy(() => import("../pages/student/ControlTable"));
const StudentChange = lazy(() => import("../pages/student/StudentChange"));
const FinancialPayment = lazy(() => import("../pages/student/FinancialPayment"));
const StudentLibrary = lazy(() => import("../pages/student/StudentLibrary"));
const TechnicalSupport = lazy(() => import("../pages/student/TechnicalSupport"));


export const studentRoutes = {
  path: "/student",
  element: (
    <ProtectedRoute allowedRoles={["student"]}>
      <StudentLayout />
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <Navigate to="dashboard" replace /> },

    { path: "dashboard", element: <StudentDashboard /> },
    { path: "student-subject", element: <StudentSubject /> },
    { path: "control-tasks", element: <ControlTasks /> },
    { path: "lesson-schedule", element: <LessonSchedule /> },
    { path: "learning-process", element: <LearningProcess /> },
    { path: "control-table", element: <ControlTable /> },
    { path: "student-change", element: <StudentChange /> },
    { path: "financial-payment", element: <FinancialPayment /> },
    { path: "student-library", element: <StudentLibrary /> },
    { path: "technical-support", element: <TechnicalSupport /> },
  ],
};
