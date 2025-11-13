import { Navigate } from "react-router-dom";

export const rootLoader = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;

  switch (role) {
    case "teacher":
      return <Navigate to="/teacher/dashboard" replace />;
    case "student":
      return <Navigate to="/student/dashboard" replace />;
    case "admin":
      return <Navigate to="/admin/dashboard" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
};
