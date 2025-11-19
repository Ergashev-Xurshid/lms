import { Navigate, Outlet } from "react-router-dom";
import ProtectedRoute from "../components/common/ProtectedRoute";
import TeacherLayout from "../layout/TeacherLayout";

import TeacherDashboard from "../pages/teacher/TeacherDashboard";
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

export const teacherRoutes = {
  path: "/teacher",
  element: (
    <ProtectedRoute allowedRoles={["teacher"]}>
      <TeacherLayout />
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <Navigate to="dashboard" replace /> },
    { path: "dashboard", element: <TeacherDashboard /> },

    {
      path: "trening",
      element: <Outlet />,
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
      children: [{ path: "database", element: <AssignmentDatabase /> }],
    },

    {
      path: "systems",
      element: <Outlet />,
      children: [
        { path: "inputs", element: <Inputs /> },
        { path: "history", element: <HistoryActions /> },
      ],
    },

    { path: "class", element: <ClassSchedule /> },
    { path: "library", element: <Library /> },
    { path: "support", element: <TechnicalSupport /> },
  ],
};
