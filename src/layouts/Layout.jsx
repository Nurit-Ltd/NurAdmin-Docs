import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Sidebar from "../components/shared/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="flex mt-[80px]">
        <div>
          <Sidebar />
        </div>

        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
