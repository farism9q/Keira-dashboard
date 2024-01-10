import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className="p-4 flex gap-8 items-center justify-end">
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
};

export default Header;
