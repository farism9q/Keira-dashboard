import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="md:grid md:grid-cols-[26rem_1fr] h-screen grid-rows-1 bg-gray-50 dark:bg-gray-800">
      <Sidebar />

      <main className="overflow-scroll grid-rows-[1fr_auto] space-y-10 h-screen">
        <Header />
        <div className="max-w-[120rem] flex flex-col space-y-4 container mx-auto my-auto h-[40rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
