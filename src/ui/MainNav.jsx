import {
  HiOutlineUsers,
  HiOutlineInformationCircle,
  HiOutlineChartBar,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import { LiaCarSideSolid } from "react-icons/lia";

import NaviLink from "./NaviLink";

const iconStyle = "w-8 h-8 ";

const MainNav = () => {
  return (
    <ul className="flex flex-col grow gap-4">
      <li>
        <NaviLink to="/dashboard">
          <HiOutlineChartBar className={iconStyle} />
          Dashboard
        </NaviLink>
      </li>
      <li>
        <NaviLink to="/bookings">
          <HiOutlineCalendarDays className={iconStyle} />
          Bookings
        </NaviLink>
      </li>
      <li>
        <NaviLink to="/reports">
          <HiOutlineInformationCircle className={iconStyle} />
          Reports
        </NaviLink>
      </li>

      <li>
        <NaviLink to="/cars">
          <LiaCarSideSolid className={iconStyle} />
          Cars
        </NaviLink>
      </li>
      <li>
        <NaviLink to="/users">
          <HiOutlineUsers className={iconStyle} />
          Users
        </NaviLink>
      </li>
    </ul>
  );
};

export default MainNav;
