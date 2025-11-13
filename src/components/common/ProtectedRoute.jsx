import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const ProtectedRoute = ({ children ,allowedRoles  }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Login bo‘lmagan foydalanuvchini qaytarish
  if (!token) return <Navigate to="/login" replace />;

  // Rol mos bo‘lmasa (masalan student admin sahifasiga kirmoqchi bo‘lsa)
  if (!allowedRoles.includes(role))
    return <Navigate to={`/${role}/dashboard`} replace />;

  return children;
};

export default ProtectedRoute;
