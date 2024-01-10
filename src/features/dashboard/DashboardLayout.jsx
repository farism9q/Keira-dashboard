import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  HiEllipsisVertical,
  HiEyeSlash,
  HiCurrencyDollar,
  HiOutlineGlobeAmericas,
} from "react-icons/hi2";

const DashboardLayout = () => {
  return (
    <div>
      <DropdownMenu>
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
      </DropdownMenu>
    </div>
  );
};

export default DashboardLayout;
