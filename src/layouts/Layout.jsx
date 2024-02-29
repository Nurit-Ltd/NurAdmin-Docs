import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Sidebar from "../components/shared/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="flex items-center">
        <div>
          <Sidebar />
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
