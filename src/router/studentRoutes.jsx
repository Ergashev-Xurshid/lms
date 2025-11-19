import { Navigate } from "react-router-dom";
import ProtectedRoute from "../components/common/ProtectedRoute";
import StudentLayout from "../layout/StudentLayout";

import StudentDashboard from "../pages/student/StudentDashboard";
import StudentSubject from "../pages/student/StudentSubject";
import ControlTasks from "../pages/student/ControlTasks";
import LessonSchedule from "../pages/student/LessonSchedule";
import LearningProcess from "../pages/student/LearningProcess";
import ControlTable from "../pages/student/ControlTable";
import Change from "../pages/student/Change";
import FinancialPayment from "../pages/student/FinancialPayment";
import StudentLibrary from "../pages/student/StudentLibrary";
import TechnicalSupport from "../pages/student/TechnicalSupport";

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
    { path: "change", element: <Change /> },
    { path: "financial-payment", element: <FinancialPayment /> },
    { path: "student-library", element: <StudentLibrary /> },
    { path: "technical-support", element: <TechnicalSupport /> },
  ],
};
