import SidebarTeacher from "../components/SidebarTeacher";
import { Outlet } from "react-router-dom";

export default function TeacherLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Chap tomonda sidebar */}
      <SidebarTeacher />

      {/* O‘ng tomonda sahifa kontenti */}
      <main className="flex-1 p-6 ml-0 md:ml-64">
        <Outlet /> {/* Bu joyda child route sahifasi chiqadi */}
      </main>
    </div>
  );
}
