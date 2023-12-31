import { Link } from "react-router-dom";

export const NavLink = ({to,value, className}) => {
  return (
    <>
      <Link
        to={to}
        className={`${className} text-gray-300 hover:bg-gray-700  hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
      >
        {value}
      </Link>
    </>
  );
};
