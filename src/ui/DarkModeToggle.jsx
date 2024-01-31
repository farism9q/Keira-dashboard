import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { Button } from "../components/ui/button";
import { useDarkMode } from "../contexts/DarkModeProvider";

const DarkModeToggle = () => {
  const { darkMode, handleModeClick } = useDarkMode();
  return (
    <Button
      variant={"link"}
      onClick={handleModeClick}
      className="hover:text-muted-foreground"
    >
      {darkMode ? (
        <HiOutlineSun
          size={32}
          className="text-blue-300  hover:text-blue-400"
        />
      ) : (
        <HiOutlineMoon
          className="text-blue-500 hover:text-blue-500/70"
          size={32}
        />
      )}
    </Button>
  );
};

export default DarkModeToggle;
