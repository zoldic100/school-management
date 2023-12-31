import React, { useState } from "react";
import { NavLink } from "../NavComponent/NavLink/NavLink";
const MobileMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {/* button div */}
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button */}
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {/* Icon when menu is closed */}
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {/* Icon when menu is open */}
          <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* end button div */}

      {/* Mobile menu, show/hide based on menu state */}

      <div
        className={`sm:hidden  ${isMobileMenuOpen ? "block" : "hidden"  }` }
        id="mobile-menu"
      >
        <div className="absolute w-full text-center ">
        <div className="space-y-1  pb-3 pt-2  relative top-5     bg-gray-800 ">
          <NavLink to='/' value={'Home'} className="block rounded-md px-3 py-2 text-base font-medium"/>
          <NavLink to='/' value={'Login'}  className="block rounded-md px-3 py-2 text-base font-medium"/>
          <NavLink to='/' value={'Sign Up'}  className="block rounded-md px-3 py-2 text-base font-medium"/>
          

        </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
    </>
  );
};

export default MobileMenu;
