import BookingsChart from "./BookingsChart";
import UsersTypeChart from "./UsersTypeChart";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col gap-5">
      <BookingsChart />

      <div className="grid grid-cols-2 gap-4">
        <UsersTypeChart />
      </div>
      {/* <DropdownMenu>
        <DropdownMenuTrigger>
          {<HiEllipsisVertical size={28} />}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            {<HiEyeSlash />}
            <span>My Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {<HiCurrencyDollar />}
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {<HiOutlineGlobeAmericas />}
            <span>Team</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
};

export default DashboardLayout;
