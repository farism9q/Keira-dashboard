import { Logo } from "./Logo";
import MainNav from "./MainNav";

const Sidebar = () => {
  return (
    <aside className="px-12 py-16 space-y-10 flex flex-col border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-950">
      <Logo />
      <div>
        <MainNav />
      </div>
    </aside>
  );
};

export default Sidebar;
