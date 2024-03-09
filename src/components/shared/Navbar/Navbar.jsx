import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import SmallSidebar from "../Sidebar/SmallSidebar";

const Navbar = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [showSidebar, setShowSide] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-[999]">
      <nav className="h-[64px] md:h-[80px] px-4 md:px-2 bg-white flex items-center border-b-[1px] max-w-[1920px] mx-auto">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <GiHamburgerMenu
              onClick={() => setShowSide(!showSidebar)}
              size={18}
              className="md:hidden"
            />

            <Link to={"/"} className="pl-4 pr-6 flex items-center gap-4">
              <div className="w-6 h-6 md:w-9 md:h-9 border bg-white rounded flex items-center justify-center">
                <span className="text-sm md:text-[25.2px]">T</span>
              </div>
              <h3 className="text-base md:text-xl text-grayHead font-bold leading-6">
                TailAdmin Docs
              </h3>
            </Link>
          </div>
           {/* small screen search */}
          <div
            className="pr-2 md:hidden"
            onClick={() => setOpenFilterModal(!openFilterModal)}
          >
            <BiSearch size={17} />
            {openFilterModal && <Modal />}
          </div>
          {/* large screen */}
          <div
            onClick={() => setOpenFilterModal(!openFilterModal)}
            className="hidden md:block w-[233px] h-9  pl-6 pr-2 cursor-pointer"
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
        <div
          className={
            showSidebar
              ? "fixed z-50 left-0 top-0 w-[294px] h-full border-r  ease-in-out duration-700 bg-white"
              : "fixed left-[-100%] duration-700"
          }
        >
          <div>
            <div className="w-full px-2 h-[64px] flex items-center border-b">
              <div
                onClick={() => setShowSide(!showSidebar)}
                className="flex items-center justify-between w-[87px] h-[40px] px-3 text-grayPrimary bg-gray-100 rounded"
              >
                <RxCross2 />
                <span className="text-sm">Close</span>
              </div>
            </div>
            <div>
              <SmallSidebar
                setShowSide={setShowSide}
                showSidebar={showSidebar}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
