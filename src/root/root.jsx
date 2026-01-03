import { redirect } from "react-router-dom";

export const rootLoader = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return redirect("/login");

  switch (role) {
    case "teacher":
      return redirect("/teacher/dashboard");
    case "student":
      return redirect("/student/dashboard");
    case "admin":
      return redirect("/admin/dashboard");
    default:
      return redirect("/login");
  }
};

