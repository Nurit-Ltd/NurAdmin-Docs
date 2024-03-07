import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const Navbar = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
 

  return (
    <nav className="navbarSide h-[80px] px-2 bg-white flex items-center border-b-[1px] fixed top-0 left-0 right-0 z-[999]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          {/* <GiHamburgerMenu onClick={()=>setShowSide(!showSidebar)} size={25} className="md:hidden" /> */}

          {/* logo */}

          <Link to={"/"} className="pl-4 pr-6 flex items-center gap-4">
            <div className="w-9 h-9 border bg-white rounded text-center">
              <span className="text-[25.2px]">T</span>
            </div>
            <h3 className=" text-xl text-grayHead font-bold leading-6">
              TailAdmin Docs
            </h3>
          </Link>
        </div>
        <div
          onClick={() => setOpenFilterModal(!openFilterModal)}
          className="w-[233px] h-9  pl-6 pr-2 cursor-pointer"
        >
          <div className="pl-4 pr-2 w-[201px] h-9 bg-gray-200 flex items-center justify-between rounded">
            <div className="flex items-center gap-2">
              <BiSearch />
              <h5 className="text-sm text-grayHead leading-[22px]">Search</h5>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-5 h-5 text-sm bg-white text-grayHead border-[1px] px-1">
                ^
              </span>
              <span className="w-5 h-5 text-xs  bg-white text-grayHead border-[1px] px-1">
                K
              </span>
            </div>
          </div>
          {openFilterModal && <Modal />}
         

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
