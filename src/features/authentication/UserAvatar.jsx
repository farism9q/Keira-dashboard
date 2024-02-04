import { useDarkMode } from "../../contexts/DarkModeProvider";
import { useUserContext } from "../../contexts/UserProvider";

const UserAvatar = () => {
  const { darkMode } = useDarkMode();
  const { name } = useUserContext().user;

  const logoSrc = darkMode ? "/keira_logo_dark.png" : "/keira_logo.png";
  return (
    <div className="flex gap-[0.6rem] items-center">
      <img
        src={logoSrc}
        alt="avatar"
        className="rounded-full w-10 h-10 object-contain"
      />
      <span>{name}</span>
    </div>
  );
};

export default UserAvatar;
