import DarkModeToggle from "./DarkModeToggle";
import { Button } from "../components/ui/button";
import { HiArrowLeftOnRectangle, HiOutlineUserPlus } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <ul className="flex gap-1 items-center h-4">
      <li>
        <Button
          variant={"link"}
          className="dark:text-blue-300  dark:hover:text-blue-400 hover:text-muted-foreground"
          onClick={handleLogout}
        >
          <HiArrowLeftOnRectangle size={32} />
        </Button>
      </li>
      <li>
        <DarkModeToggle />
      </li>

      <li>
        <Button
          variant={"link"}
          className="dark:text-blue-300 dark:hover:text-blue-400 hover:text-muted-foreground"
        >
          <HiOutlineUserPlus size={32} />
        </Button>
      </li>
    </ul>
  );
};

export default HeaderMenu;
