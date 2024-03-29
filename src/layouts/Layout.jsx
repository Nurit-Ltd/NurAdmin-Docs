import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Sidebar from "../components/shared/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-full flex mt-[64px] md:mt-[80px]">
        <div className="border-r">
          <Sidebar />
        </div>

        <div className="w-full">
          <ScrollRestoration />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
