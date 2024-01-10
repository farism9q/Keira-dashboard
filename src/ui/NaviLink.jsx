import { NavLink } from "react-router-dom";

const NaviLink = ({ to, logout = false, children }) => {
  let baseStyle =
    "flex gap-4 py-2 px-3 rounded-lg text-center text-lg transition-all duration-300";

  const activeClass = logout
    ? baseStyle + " bg-red-50 text-red-500"
    : baseStyle + " bg-blue-500 text-blue-50";

  if (logout) baseStyle = baseStyle + " hover:bg-red-700 hover:text-red-50";
  else {
    baseStyle = baseStyle + " hover:bg-blue-500 hover:text-blue-50";
  }
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeClass : baseStyle)}
    >
      {children}
    </NavLink>
  );
};

export default NaviLink;
