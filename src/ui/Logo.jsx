import { useDarkMode } from "../contexts/DarkModeProvider";

export const Logo = () => {
  const { darkMode } = useDarkMode();
  const imageSrc = darkMode ? "/keira_logo_dark.png" : "/keira_logo.png";
  return (
    <div className="flex justify-center">
      <img src={imageSrc} alt="keira_logo" className="h-32 w-auto" />
    </div>
  );
};
