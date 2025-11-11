import { NavLink } from "react-router-dom";
import { sidebarMenus } from "../data/sidebarMenus";
import logo from "../assets/logo.png";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function SidebarTeacher({ role = "teacher" }) {
  const menus = sidebarMenus[role] || [];
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  return (
    <div>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-3  overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a  className="flex items-center ps-2.5 mb-3">
            <img src={logo} className="h-5 md:h-7 me-3" alt="mls Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap ml-2 ">
              LMS
            </span>
          </a>
          <hr />
          <ul className="space-y-2 font-medium pt-3">
            {menus.map((item) => (
              <li key={item.path}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full py-2 px-4 text-base transition duration-75 rounded-lg  hover:bg-gray-200  hover:text-gray-900  focus:outline-none"
                    >
                      <span className="inline-block text-[12px] font-normal">{item.name}</span>
                      <span className="inline-block text-gray-500">
                        {openDropdown === item.name ? (
                          <ChevronDown />
                        ) : (
                          <ChevronRight />
                        )}
                      </span>
                    </button>

                    {openDropdown === item.name && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.children.map((sub) => (
                          <li key={sub.path}>
                            <NavLink
                              to={sub.path}
                              className={({ isActive }) =>
                                `flex items-center py-2 px-4 text-gray-900 text-[12px] font-normal rounded-lg hover:bg-gray-200  hover:text-gray-900  ${
                                  isActive ? "bg-[#007bff] text-white font-semibold" : ""
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
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center py-2 px-4 text-gray-900 text-[12px] font-normal rounded-lg hover:bg-gray-200 hover:text-gray-900   ${
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
    </div>
  );
}
