import { useNavigate } from "react-router-dom";

import { useUserContext } from "../contexts/UserProvider";

import { Button } from "../components/ui/button";
import { HiArrowLeftOnRectangle, HiOutlineUserPlus } from "react-icons/hi2";
import CreateAdminModal from "./CreateAdminModal";
import DarkModeToggle from "./DarkModeToggle";

const HeaderMenu = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

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
          <HiArrowLeftOnRectangle
            className="text-blue-500 hover:text-blue-500/70 dark:text-blue-300 dark:hover:text-blue-400"
            size={32}
          />
        </Button>
      </li>
      <li>
        <DarkModeToggle />
      </li>

      {user.role === "admin" && (
        <li>
          <CreateAdminModal>
            <Button variant={"link"}>
              <HiOutlineUserPlus
                className="text-blue-500 hover:text-blue-500/70 dark:text-blue-300 dark:hover:text-blue-400"
                size={32}
              />
            </Button>
          </CreateAdminModal>
        </li>
      )}
    </ul>
  );
};

export default HeaderMenu;
