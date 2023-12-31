import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavLink } from "./NavComponent/NavLink/NavLink";
import DropDownBtn from "./DropownBtn/DropDownBtn";
import MobileMenu from "./MobileMenu/MobileMenu";
const NavBar = () => {
  return (
    <nav id="top" className="">
      {/* nav container */}
      <div className="mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8 shadow-md">
        {/* nav position */}
        <div className="relative flex h-16 items-center justify-between">
          <MobileMenu />

          {/* nav logo  */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to={"/"}>
                <img className="h-8 w-auto" src={logo} alt="gamefy" />
              </Link>
            </div>
          </div>
          {/* end nav logo  */}

          {/* right */}

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
           
            {/* notification button */}
            <button
              type="button"
              className="relative rounded-full bg-trensparent  p-1 text-gray-400 hover:text-white   "
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            {/* end notification button */}

            {/* Profile dropdown */}
            <div className="relative flex h-16 items-center justify-between ml-3">
              {/* nav link */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                  <NavLink to="/" value="Home" />
                  <NavLink to="/login" value="Login" />
                  <NavLink to="/singup" value="Sing Up" />

                </div>
              </div>
              {/*end nav link */}

              <DropDownBtn />
            </div>
            {/* end Profile dropdown */}
          </div>
          {/* end right */}
        </div>
        {/* end nav position */}
      </div>
      {/* end nav container */}
    </nav>
  );
};

export default NavBar;
