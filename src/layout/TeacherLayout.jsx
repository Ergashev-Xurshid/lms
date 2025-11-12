import { useState } from "react";
import Navbar from "../components/Navbar";
import SidebarTeacher from "../components/SidebarTeacher";
import { Outlet } from "react-router-dom";

export default function TeacherLayout() {
  const [SidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Navbar setSidebarOpen={setSidebarOpen} />
      <SidebarTeacher
        role="teacher"
        SidebarOpen={SidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
}
