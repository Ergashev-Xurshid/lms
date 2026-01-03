import logo from "../../assets/logo.png";
import { Menu } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function Navbar({ setSidebarOpen }) {
  const [userOpen, setUserOpen] = useState(false);
  const menuRef = useRef(null); // dropdown va buttonni o'rash

  // Tashqariga bosilganda yopish
  useEffect(() => {
    function handleClickOutside(e) {
      // Agar bosilgan joy menuRef ichida bo'lmasa
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const SignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  }
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={() => setSidebarOpen((prev) => !prev)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <Menu />
            </button>
            <a href="#" className="flex ms-2 md:me-24">
              <img src={logo} className="h-8 me-3" alt="LMS Logo" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                LMS
              </span>
            </a>
          </div>
          <div className="flex items-center ms-3 relative" ref={menuRef}>
            {/* Avatar button */}
            <button
              type="button"
              onClick={() => setUserOpen(!userOpen)}
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 cursor-pointer"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>

            {/* Dropdown */}
            {userOpen && (
              <div className="absolute right-0 top-12 z-50 my-4 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm">
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-900">Neil Sims</p>
                  <p className="text-sm font-medium text-gray-500 truncate">
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Earnings
                    </a>
                  </li>
                  <li onClick={()=>SignOut()}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
