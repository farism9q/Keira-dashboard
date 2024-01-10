import DarkModeToggle from "./DarkModeToggle";
import { Button } from "../components/ui/button";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
const HeaderMenu = () => {
  return (
    <ul className="flex gap-1 items-center">
      <li>
        <Button size="icon">
          <HiArrowLeftOnRectangle color="white" />
        </Button>
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </ul>
  );
};

export default HeaderMenu;
