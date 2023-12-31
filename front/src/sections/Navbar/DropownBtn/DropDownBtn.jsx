import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const DropDownBtn = () => {
  // State for profile dropdown visibility
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // Toggle profile dropdown visibility
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <>
      {/* dropdown button */}
      <div>
        <button
          type="button"
          onClick={toggleProfileDropdown}
          className="relative flex rounded-full bg-transparet text-sm  focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <IoMdArrowDropdown />
        </button>
      </div>
      {/* end dropdown button */}

      {/* Profile dropdown menu */}
      <div className="relative">
        <div
          className={`absolute right-0 z-10 mt-2 w-48 origin-top-right  rounded-md bg-gray-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isProfileDropdownOpen ? "block" : "hidden"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          <a
            href="#top"
            className="block px-4 py-2  text-gray-700 font-meduim hover:bg-slate-300 text-md "
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-0"
          >
            Your Profile
          </a>
          <a
            href="#top"
            className="block px-4 py-2  text-gray-700 font-meduim hover:bg-slate-300 text-md"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-1"
          >
            Settings
          </a>
          <a
            href="#top"
            className="block px-4 py-2  text-gray-700 font-meduim hover:bg-slate-300 text-md"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-2"
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  );
};

export default DropDownBtn;
