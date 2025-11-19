import { Navigate } from "react-router-dom";
import ProtectedRoute from "../components/common/ProtectedRoute";

export const adminRoutes = {
  path: "/admin",
  element: (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div>Admin Layout (keyinchalik alohida qilinadi)</div>
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <Navigate to="dashboard" replace /> },
    { path: "dashboard", element: <div>Dashboard</div> },
    { path: "users", element: <div>Users</div> },
    { path: "reports", element: <div>Reports</div> },
  ],
};
