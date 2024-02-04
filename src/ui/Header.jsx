import { useUserContext } from "../contexts/UserProvider";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import Tag from "./Tag";

const Header = () => {
  const { role } = useUserContext().user;
  return (
    <header className="p-4 flex gap-8 items-center justify-end">
      <Tag
        bgColor={role === "admin" ? "bg-green-500" : "bg-amber-500"}
        text={role}
        textColor={"text-white"}
      />
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
};

export default Header;
