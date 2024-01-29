import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { Button } from "../components/ui/button";
import { useDarkMode } from "../contexts/DarkModeProvider";

const DarkModeToggle = () => {
  const { darkMode, handleModeClick } = useDarkMode();
  return (
    <Button variant={"link"} onClick={handleModeClick}>
      {darkMode ? (
        <HiOutlineSun
          size={32}
          className="dark:text-blue-300  dark:hover:text-blue-400"
        />
      ) : (
        <HiOutlineMoon size={32} />
      )}
    </Button>
  );
};

export default DarkModeToggle;
