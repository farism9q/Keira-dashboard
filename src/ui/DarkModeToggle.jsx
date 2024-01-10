import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "../contexts/DarkModeProvider";

const DarkModeToggle = () => {
  const { darkMode, handleModeClick } = useDarkMode();
  return (
    <Button variants="outline" size="icon" onClick={handleModeClick}>
      {darkMode ? <HiOutlineSun color="white" /> : <HiOutlineMoon />}
    </Button>
  );
};

export default DarkModeToggle;
