import { NavLink } from "react-router-dom";
import { sidebarMenus } from "../data/sidebarMenus";
import { useState } from "react";
import { ChevronDown, ChevronRight, LayoutDashboard } from "lucide-react";

export default function SidebarTeacher({ role, SidebarOpen ,setSidebarOpen }) {
  const menus = sidebarMenus[role] || [];
  //sitebar dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200
      ${SidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
        <ul className="space-y-2 font-medium ">
          {menus.map((item) => (
            <li key={item.path}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full py-2 px-4 text-base transition duration-75 rounded-lg hover:bg-gray-200 hover:text-gray-900 focus:outline-none"
                  >
                    <span className="inline-block text-[12px] font-normal">
                      {item.name}
                    </span>
                    <span className="inline-block text-gray-500">
                      {openDropdown === item.name ? (
                        <ChevronDown />
                      ) : (
                        <ChevronRight />
                      )}
                    </span>
                  </button>
                  {openDropdown === item.name && (
                    <ul className="py-2 space-y-2">
                      {item.children.map((sub) => (
                        <li key={sub.path} onClick={()=>setSidebarOpen(false)}>
                          <NavLink
                            to={sub.path}
                            className={({ isActive }) =>
                              `flex items-center py-2 pl-11 text-gray-900 text-[12px] font-normal rounded-lg hover:bg-gray-200 hover:text-gray-900 ${
                                isActive
                                  ? "bg-[#007bff] text-white font-semibold"
                                  : ""
                              }`
                            }
                          >
                            {sub.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  onClick={()=>setSidebarOpen(false)}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center py-2 px-4 text-gray-900 text-[12px] font-normal rounded-lg hover:bg-gray-200 hover:text-gray-900 ${
                      isActive ? "bg-[#007bff] text-white font-semibold" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
